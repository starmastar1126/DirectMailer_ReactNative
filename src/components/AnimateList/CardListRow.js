/* @flow */

import React, { Component } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import styles from './CardList-styles';

const limit = 60;

export default class CardListRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animTrans: new Animated.Value(0),
      animOpacity: new Animated.Value(1.0),
      rowDown: false,
    };

    this.props.addRef && this.props.addRef(this, this.props.index);

    this.lastTick = 0;
    this.startPos = 0;
    this.needPos = 0;
    this.animDuration = 200;
  }

  _mounted = false;
  componentDidMount() {
    this._mounted = true;
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  _downPos = { x: 0, y: 0 };
  onTouchStart = (event) => {
    const pos = { x: event.nativeEvent.locationX, y: event.nativeEvent.locationY };
    if (pos.x >= this.layout.x && pos.x <= this.layout.x + this.layout.width &&
        pos.y >= this.layout.y && pos.y <= this.layout.y + this.layout.height) {
      this._downPos = pos;
      this.setRowDown(true);
    }
  }
  onTouchMove = () => {
  }
  onTouchEnd = () => {
    if (!this.state.rowDown) return;
    this.setRowDown(false);
    this._onPressRow();
  }
  setRowDown(down) {
    this.state.rowDown = down;
    if (down) {
      this.state.animOpacity.setValue(0.7);
    } else {
      Animated.timing(this.state.animOpacity, {
        toValue: 1.0,
        duration: 200,
      }).start();
    }
  }

  _animating = false;
  _needScroll = false;
  _scrollPos = 0;
  _scrollHeight = 0;
  onScroll(layout) {
    if (this.state.rowDown) {
      this.setRowDown(false);
    }

    if (!this.layout) return;
    if (this._scrollPos === layout.contentOffset.y) return;

    this._scrollPos = layout.contentOffset.y;
    this._scrollHeight = layout.layout.height;
    if (this._animating) {
      this._needScroll = true;
      return;
    }

    this._onScroll();
  }

  _onScroll() {
    this._animating = true;
    this._needScroll = false;
    return new Promise((resolve) => {
      const oldPos = -this.state.animTrans.__getValue();
      let curPos = oldPos;
      const curTick = (new Date()).getTime();
      const animProgress = this.animDuration > 0 ? Math.min(1.0, (curTick - this.lastTick) / this.animDuration) : 1;

      curPos = this.startPos + (this.needPos - this.startPos) * animProgress;

      const newPos = this._scrollPos;
      const y = this.layout.y - newPos;
      const up = curPos > newPos;

      let progress = 0;
      if (up === false && y > 0 && y < this._scrollHeight + this.layout.height) {
        progress = y / this._scrollHeight;
      } else if (up && y + this.layout.height < this._scrollHeight && y + this.layout.height > -this.layout.height) {
        progress = (this._scrollHeight - y - this.layout.height) / this._scrollHeight;
      }

      const preferredDuration = 500;
      const duration = preferredDuration * progress;
      const animLimit = limit * Math.min(1, progress);

      if (curPos > newPos + animLimit) {
        curPos = newPos + animLimit;
      } else if (curPos < newPos - animLimit) {
        curPos = newPos - animLimit;
      }
      if (curPos !== oldPos) {
        this.state.animTrans.setValue(-curPos);
      }

      this.animDuration = duration;
      this.startPos = curPos;
      this.needPos = newPos;
      this.lastTick = curTick;

      Animated.timing(this.state.animTrans, {
        duration,
        toValue: -newPos,
      }).start();

      this._animating = false;
      if (this._needScroll) {
        this._onScroll();
      }

      resolve();
    });
  }

  _onPressRow = () => {
    this.props.onPress && this.props.onPress(this.props.card, this.props.index, this.props.rowIndex);
  }
  _onLayout = (ev) => {
    this.layout = ev.nativeEvent.layout;
  }

  render() {
    return (
      <Animated.View
        ref={(node) => { this._view = node; }}
        style={[styles.row,
          { transform: [{ translateY: this.state.animTrans }] },
          { opacity: this.state.animOpacity },
        ]}
        onLayout={this._onLayout}
      >
        { this.props.renderRow(this.props.card) }
      </Animated.View>
    );
  }
}

CardListRow.propTypes = {
  addRef: React.PropTypes.func,
  index: React.PropTypes.number,
  rowIndex: React.PropTypes.any,
  card: React.PropTypes.any,
  // list: React.PropTypes.any,
  onPress: React.PropTypes.func,
  renderRow: React.PropTypes.func,
};

CardListRow.defaultProps = {
  addRef: () => {},
  index: 0,
  rowIndex: {},
  card: {},
  // list: null,
  onPress: () => {},
  renderRow: () => {},
};

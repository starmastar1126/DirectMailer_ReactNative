/* @flow */

import React, { Component } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { Button } from '@components';
import styles from './CardList-styles';

const limit = 60;

export default class CardListRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animTrans: new Animated.Value(0),
      animScroll: new Animated.Value(0),
    };

    this.props.addRef && this.props.addRef(this, this.props.index);

    this.timer = null;
    this.lastUp = false;
    this.lastOffset = 0;
    this.startOffset = 0;
    this.needOffset = 0;
    this.needTrans = 0;
    this.state.animTrans.addListener((event) => {
      if (this.needTrans === 0) {
        this.lastOffset = this.needOffset;
        return;
      }
      const progress = 1 - event.value / this.needTrans;
      this.lastOffset = this.startOffset + (this.needOffset - this.startOffset) * progress;
      // console.log(this.props.index, this.lastOffset, this.needOffset, this.needTrans, progress);
    });
    // this.state.animScroll.addListener((event) => {
    //   this._calcTrans(event.value);
    // });
  }

  _mounted = false;
  componentDidMount() {
    this._mounted = true;
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  _calcTrans(animPos) {
    this.props.index === 0 && console.log(this.props.index, animPos - this._scroll.pos);

    const y = this.layout.y - this._scroll.pos;
    const height = this._scroll.layout.layout.height;
    const offset1 = animPos - this._scroll.pos;
    const up = offset1 < 0;
    const offset2 = Math.min(limit, offset1 < 0 ? -offset1 : offset1);
    let trans = 0;

    if (up) {
      trans = offset2;
      if (y < 0) {
        trans = 0;
      } else if (y < height / 2) {
        trans = offset2 * (y / (height / 2));
      }
    } else {
      trans = -offset2;
      if (y + this.layout.height > height) {
        trans = 0;
      } if (y + this.layout.height > height / 2) {
        trans = -offset2 * ((height - y - this.layout.height) / (height / 2));
      }
      console.log(this.props.index, y, offset2, trans);
    }

    this.state.animTrans.setValue(trans);
  }

  _animating = false;
  _needScroll = false;
  _scroll = {
    pos: 0,
    offset: 0,
    layout: {},
  };
  onScroll(offset, layout) {
    if (!this.layout) return;
    if (this._scroll.offset === offset && this._scroll.layout.contentOffset.y === layout.contentOffset.y) return;

    this._scroll = { offset, layout, pos: layout.contentOffset.y };
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
      const up = this._scroll.offset < 0;
      const y = this.layout.y - this._scroll.layout.contentOffset.y;
      const height = this._scroll.layout.layout.height;
      const offset1 = this.lastOffset - this._scroll.layout.contentOffset.y;
      // const up = offset1 < 0;
      const offset2 = Math.min(limit, offset1 < 0 ? -offset1 : offset1);
      let trans = 0;

      if (up) {
        trans = offset2;
        if (y < 0) {
          trans = 0;
        } else if (y < height / 2) {
          trans = offset2 * (y / (height / 2));
        }
      } else {
        trans = -offset2;
        if (y + this.layout.height > height) {
          trans = 0;
        } if (y + this.layout.height > height / 2) {
          trans = -offset2 * ((height - y - this.layout.height) / (height / 2));
        }
        console.log(this.props.index, y, offset2, trans);
      }

      if (this.visible) {
        // console.log(this.props.index, trans);
        this.startOffset = this._scroll.layout.contentOffset.y - trans;
        this.needOffset = this._scroll.layout.contentOffset.y;
        this.needTrans = trans;
        this.state.animTrans.setValue(trans);

        Animated.timing(this.state.animTrans, {
          duration: 200,
          toValue: 0,
        }).start();
      } else {
        this.lastOffset = this._scroll.layout.contentOffset.y - trans;
      }

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
      <View
        ref={(node) => { this._view = node; }}
        style={styles.row}
        onLayout={this._onLayout}
      >
        <Animated.View
          style={{ transform: [{ translateY: this.state.animTrans }] }}
        >
          <Button style={styles.btn_row} onPress={this._onPressRow} >
            <View style={styles.row_card} >
              <Image source={{ uri: 'https://placeimg.com/640/480/any' }} style={styles.img_thumb} />
              <Text style={styles.txt_title} >{`Card ${this.props.index}`}</Text>
            </View>
          </Button>
        </Animated.View>
      </View>
    );
  }
}

CardListRow.propTypes = {
  addRef: React.PropTypes.func,
  index: React.PropTypes.number,
  rowIndex: React.PropTypes.any,
  card: React.PropTypes.any,
  onPress: React.PropTypes.func,
};

CardListRow.defaultProps = {
  addRef: () => {},
  index: 0,
  rowIndex: {},
  card: {},
  onPress: () => {},
};

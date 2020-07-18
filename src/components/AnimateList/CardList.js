/* @flow */

import React, { Component } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import CardListRow from './CardListRow';
import styles from './CardList-styles';

export default class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentSize: { width: 0, height: 0 },
      headerSize: { width: 0, height: 0 },
      visibleHeader: true,
      animHeaderY: new Animated.Value(0),
    };
    this.layout = {
      contentOffset: { x: 0, y: 0 },
      contentSize: { width: 0, height: 0 },
      layout: { width: 0, height: 0 },
    };
    this._rows = [];
    this._visible = [];
    this._visibleRows = [];
  }

  _onLayoutContent = (ev) => {
    const layout = ev.nativeEvent.layout;
    if (this.state.contentSize.width !== layout.width || this.state.contentSize.height !== layout.height) {
      this.setState({ contentSize: { width: layout.width, height: layout.height } });
    }
  }
  _onLayoutHeader = (ev) => {
    const layout = ev.nativeEvent.layout;
    if (this.state.headerSize.width !== layout.width || this.state.headerSize.height !== layout.height) {
      this.setState({ headerSize: { width: layout.width, height: layout.height } });
    }
  }

  _scrolling = false;
  _scrollingTimer = null;
  _onScroll = (ev) => {
    if (this._scrollingTimer) {
      clearTimeout(this._scrollingTimer);
    }
    this._scrolling = true;
    this._scrollingTimer = setTimeout(() => {
      this._scrolling = false;
    }, 500);

    const offset = this.layout.contentOffset.y - ev.nativeEvent.contentOffset.y;
    const limit = 8;
    console.log(offset);
    if (offset < -limit && this.state.visibleHeader) {
      this.state.visibleHeader = false;
      Animated.timing(this.state.animHeaderY, {
        toValue: -this.state.headerSize.height,
        duration: 500,
      }).start();
    } else if (offset > limit && !this.state.visibleHeader) {
      this.state.visibleHeader = true;
      Animated.timing(this.state.animHeaderY, {
        toValue: 0,
        duration: 500,
      }).start();
    }

    this.layout.contentOffset = ev.nativeEvent.contentOffset;
    this.layout.contentSize = ev.nativeEvent.contentSize;
    this.layout.layout = ev.nativeEvent.layoutMeasurement;
    this._rows.forEach((row) => { row.onScroll(this.layout); });
  }

  _onTouchStart = (event) => {
    if (this._scrolling) return;
    this._rows.forEach((row) => { row.onTouchStart(event); });
  }
  _onTouchMove = (event) => {
    this._rows.forEach((row) => { row.onTouchMove(event); });
  }
  _onTouchEnd = (event) => {
    this._rows.forEach((row) => { row.onTouchEnd(event); });
  }

  _renderRow = (info, sec, row) => (
    <CardListRow
      key={`card_${row}`}
      list={this}
      card={info.card}
      index={info.index}
      rowIndex={{ sec, row }}
      addRef={(node, index) => { this._rows[index] = node; }}
      onPress={this.props.onPressRow}
      renderRow={this.props.renderRow}
    />
  )

  _renderHeader = () => (
    <Animated.View
      style={[
        styles.header,
        { transform: [{ translateY: this.state.animHeaderY }] },
      ]}
      onLayout={this._onLayoutHeader}
    >
      {this.props.renderHeader()}
    </Animated.View>
  )

  _renderHeaderSpace = () => (
    <View style={{ height: this.state.headerSize.height }} />
  )

  render() {
    const { style, cards } = this.props;
    const renderRows = cards.map((card, index) => this._renderRow({ card, index }, 0, index));

    return (
      <View style={[style, { overflow: 'hidden' }]} >
        <View style={styles.list} onLayout={this._onLayoutContent}>
          {this._renderHeaderSpace()}
          {renderRows}
        </View>
        <ScrollView
          scrollEventThrottle={16}
          style={styles.scroll}
          onScroll={this._onScroll}
        >
          <View
            style={[styles.scroll_content, { height: this.state.contentSize.height }]}
            onTouchStart={this._onTouchStart}
            onTouchEnd={this._onTouchEnd}
            onTouchMove={this._onTouchMove}
          />
        </ScrollView>
        {this._renderHeader()}
      </View>
    );
  }
}

CardList.propTypes = {
  cards: React.PropTypes.array,
  style: React.PropTypes.any,
  onPressRow: React.PropTypes.func,
  renderRow: React.PropTypes.func,
  renderHeader: React.PropTypes.func,
};

CardList.defaultProps = {
  cards: [],
  style: null,
  onPressRow: () => {},
  renderRow: () => {},
  renderHeader: () => null,
};

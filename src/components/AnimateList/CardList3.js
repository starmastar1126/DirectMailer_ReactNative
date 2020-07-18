/* @flow */

import React, { Component } from 'react';
import { View, ListView, Animated } from 'react-native';
import _ from 'lodash';
import CardListRow from './CardListRow';
import styles from './CardList-styles';

export default class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ypos: new Animated.Value(0),
    };

    this.layout = {
      contentOffset: { x: 0, y: 0 },
      contentSize: { width: 0, height: 0 },
      layout: { width: 0, height: 0 },
    };

    this.yposCb = Animated.event(
      [{ nativeEvent: { contentOffset: { x: this.state.ypos } } }],
    );

    this._rows = [];
    this._visible = [];
    this._visibleRows = [];
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this._buildDataSource(this.props.cards, false);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cards !== nextProps.cards) {
      this._buildDataSource(this.props.cards);
    }
  }

  _buildDataSource(cards, update = true) {
    const newCards = cards.map((card, index) => ({ card, index }));
    const dscards = this.ds.cloneWithRows(newCards);
    if (update) {
      this.setState({ dataSource: dscards });
    } else {
      this.state.dataSource = dscards;
    }
  }

  _onScroll = (ev) => {
    // this.yposCb(ev);
    this.state.ypos.setValue(ev.nativeEvent.contentOffset.y);
    // this._rows.forEach((row) => { row.onScroll(offset, this.layout); });
  }

  _onUpdateCache = (visibleRows) => {
    const tempVisible = _.map(visibleRows, val => val);

    this._rows.forEach((row) => { row.visible = false; });
    const tempArr = [];
    _.forIn(tempVisible[0], (value, key) => {
      tempArr.push(this._rows[key]);
      this._rows[key].visible = true;
    });

    this._visibleRows = tempArr;
  }

  _renderRow = (info, sec, row) => (
    <CardListRow
      list={this}
      card={info.card}
      index={info.index}
      rowIndex={{ sec, row }}
      addRef={(node, index) => { this._rows[index] = node; }}
      onPress={this.props.onPressCard}
    />
  )

  _renderHeader = () => (
    <View style={{ height: 100 }} />
  )

  render() {
    const { style } = this.props;
    return (
      <View style={style} >
        <ListView
          enableEmptySections
          ref={(node) => { this._list = node; }}
          dataSource={this.state.dataSource}
          style={styles.list}
          renderRow={this._renderRow}
          renderHeader={this._renderHeader}
          onScroll={this._onScroll}
          onChangeVisibleRows={this._onUpdateCache}
        />
      </View>
    );
  }
}

CardList.propTypes = {
  cards: React.PropTypes.array,
  style: React.PropTypes.any,
  onPressCard: React.PropTypes.func,
};

CardList.defaultProps = {
  cards: [],
  style: null,
  onPressCard: () => {},
};

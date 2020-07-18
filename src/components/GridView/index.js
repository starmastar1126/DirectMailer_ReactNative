import React, { Component } from 'react';
import { View, ListView, Dimensions, StyleSheet } from 'react-native';
import { shallowEqual } from '@redux';

const { width } = Dimensions.get('window');

// http://stackoverflow.com/questions/8495687/split-array-into-chunks
// I don't see the reason to take lodash.chunk for this
const chunk = (arr, n) =>
  Array.from(Array(Math.ceil(arr.length / n)), (_, i) => arr.slice(i * n, (i * n) + n));

const mapValues = (obj, callback) => {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    newObj[key] = callback(obj[key]);
  });

  return newObj;
};

const styles = StyleSheet.create({
  list: {
    alignSelf: 'stretch',
    flex: 1,
  },
  row: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
});

export default class GridView extends Component {

  // static propTypes = {
  //   itemsPerRow: React.PropTypes.number,
  //   itemHasChanged: React.PropTypes.func,
  //   renderItem: React.PropTypes.func.isRequired,
  //   renderPlaceholder: React.PropTypes.func,
  //   data: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  //   sections: React.PropTypes.bool,
  //   listStyle: React.PropTypes.any,
  //   rowStyle: React.PropTypes.any,
  // }

  static defaultProps = {
    sections: false,
    itemsPerRow: 3,
    itemHasChanged: (r1, r2) => r1 !== r2,
    renderItem: () => null,
    renderPlaceholder: () => null,
    listStyle: styles.list,
    rowStyle: styles.row,
  }

  constructor(props) {
    super(props);

    this.state = {
    };

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.some((e, i) => props.itemHasChanged(e, r2[i])),
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this._buildDataSource([], props.sections);
  }

  componentWillReceiveProps(nextProps) {
    this._buildDataSource(nextProps.data, nextProps.sections);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { data: oldData, ...oldProps } = this.props;
    const { data: newData, ...newProps } = nextProps;

    if (oldData !== newData || ((oldData && oldData.length) || 0) !== ((newData && newData.length) || 0)) {
      return true;
    }
    if (!shallowEqual(oldProps, newProps, 0, 2)) {
      return true;
    }
    if (!shallowEqual(nextState, this.state, 0, 2)) {
      return true;
    }
    return false;
  }

  _buildDataSource(data, section) {
    if (section === true) {
      this.state.dataSource = this.ds.cloneWithRowsAndSections(this._prepareSectionedData(data));
    } else {
      this.state.dataSource = this.ds.cloneWithRows(this._prepareData(data));
    }
  }

  _prepareSectionedData = (data) => {
    const preparedData = mapValues(data, vals => this._prepareData(vals));
    return preparedData;
  }

  _prepareData = (data) => {
    const rows = chunk(data, this.props.itemsPerRow);
    if (rows.length) {
      const lastRow = rows[rows.length - 1];
      for (let i = 0; lastRow.length < this.props.itemsPerRow; i += 1) {
        lastRow.push(null);
      }
    }
    return rows;
  }

  _renderPlaceholder = i =>
    <View key={i} style={{ width: width / this.props.itemsPerRow }} />

  _renderRow = (rowData, section, row) =>
    <View style={this.props.rowStyle}>
      {rowData.map((item, col) => {
        if (item) {
          return this.props.renderItem(item, row, col, section);
        }
        // render a placeholder
        if (this.props.renderPlaceholder) {
          return this.props.renderPlaceholder(row, col, section);
        }
        return this._renderPlaceholder(col);
      })}
    </View>

  render() {
    const { data, sections, itemsPerRow, listStyle, rowStyle, ...otherProps } = this.props;
    return (
      <ListView
        {...otherProps}
        style={listStyle}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}

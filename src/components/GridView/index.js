/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { global as g } from '@common';
import { basestyles as bs, colors } from '@theme';
import { Button } from '../Button';

export default class GridView extends Component {
  static propTypes = {
    ...View.propTypes,
    rowCount: React.PropTypes.number,
    colCount: React.PropTypes.number,
  };

  static defaultProps = {
    rowCount: 2,
    colCount: 6,
  };

  state = {
    frame: { width: 1, height: 1 },
  }

  _calcGridSize = (frame) => {
    this.itemSize = Math.floor(frame.width / this.props.colCount, 10);
    this.padCount = Math.floor(frame.width - this.itemSize * this.props.colCount);
  }

  _onLayout = (event) => {
    const curFrame = this.state.frame;
    const newFrame = event.nativeEvent.layout;
    if (!g.isEqualFrame(curFrame, newFrame)) {
      this._calcGridSize(newFrame);
      if (newFrame.height <= 2) {
        newFrame.height = this.props.rowCount * this.itemSize;
      }
      if (newFrame.height <= 2) {
        newFrame.height = 1;
      }
      this.setState({ frame: newFrame });
    }
  }

  _renderCell(row, col) {
    const num = row * this.props.colCount + col + 1;
    return (
      <Button
        key={`cell_${row}_${col}`}
        style={[
          styles.cell,
          { height: this.itemSize },
          col !== 0 && { borderLeftWidth: 0 },
          row !== 0 && { borderTopWidth: 0 },
        ]}
        onPress={this.props.onPressGrid.bind(this, num)}
      >
        <Text style={styles.txt_grid_num}>{num}</Text>
        <View style={styles.cell_content} >
          { this.props.renderCell ? this.props.renderCell : null }
        </View>
      </Button>
    );
  }

  _renderCols(row) {
    const cols = [];
    for (let col = 0; col < this.props.colCount; col += 1) {
      cols.push(this._renderCell(row, col));
    }
    return cols;
  }

  _renderRows() {
    const rows = [];
    for (let row = 0; row < this.props.rowCount; row += 1) {
      rows.push(
        <View key={`row_${row}`} style={styles.row} >
          { this._renderCols(row) }
        </View>,
      );
    }
    return rows;
  }

  render() {
    const { style, ...otherProps } = this.props;
    const { frame } = this.state;
    const rows = this._renderRows();

    return (
      <View {...otherProps} style={style} onLayout={this._onLayout} >
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
          colors={colors.tune.bg_grid_gradient}
          style={{ width: frame.width, height: frame.height }}
        >
          { rows }
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    ...bs.layout.row,
    ...bs.align.self.stretch,
    backgroundColor: 'transparent',
  },
  cell: {
    ...bs.align.center,
    flex: 1,
    borderColor: colors.tune.grid_border,
    borderWidth: 1,
  },
  cell_content: {
    ...bs.layout.absolute_full,
    ...bs.align.center,
  },
  txt_grid_num: {
    ...bs.font.bold,
    fontSize: 30,
    color: colors.tune.grid_text,
  },
});

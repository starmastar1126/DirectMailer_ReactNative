import React, { Component } from 'react';
import { View, Image } from 'react-native';
import g from '@global';
import { shallowEqual } from '@redux';
import { basestyles as bs } from '@theme';

const styles = {
  container: {
    ...bs.align.center,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
};

export default class ImageEx extends Component {
  static defaultProps = {
    ...Image.defaultProps,
  }

  state = {
    frame: {},
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!shallowEqual(nextProps, this.props)) {
      return true;
    }
    if (!shallowEqual(nextState, this.state, 0, 3)) {
      return true;
    }
    return false;
  }

  _onLayout = (event) => {
    const curFrame = this.state.frame;
    const newFrame = event.nativeEvent.layout;
    if (!g.isEqualFrame(curFrame, newFrame)) {
      if (curFrame.width === newFrame.width && curFrame.height === newFrame.height) return;
      this.setState({ frame: newFrame });
    }
  }

  render() {
    const { frame } = this.state;
    const { source, resizeMode, square, style, ...otherProps } = this.props;
    const width = square ? Math.min(frame.width, frame.height) : frame.width;
    const height = square ? width : frame.height;
    return (
      <View {...otherProps} style={[styles.container, style]} onLayout={this._onLayout} >
        <Image
          source={source}
          resizeMode={resizeMode}
          style={{ width, height }}
        />
      </View>
    );
  }
}

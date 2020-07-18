import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { global as g } from '@common';

export default class ImageEx extends Component {
  static propTypes = {
    ...Image.propTypes,
    containerStyle: React.PropTypes.any,
  }
  static defaultProps = {
    ...Image.defaultProps,
  }

  state = {
    frame: {},
  }

  _onLayout = (event) => {
    const curFrame = this.state.frame;
    const newFrame = event.nativeEvent.layout;
    if (!g.isEqualFrame(curFrame, newFrame)) {
      this.setState({ frame: newFrame });
    }
  }

  render() {
    const { frame } = this.state;
    const { square, containerStyle, style, ...otherProps } = this.props;
    const width = square ? Math.min(frame.width, frame.height) : frame.width;
    const height = square ? width : frame.height;
    return (
      <View style={[{ overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }, containerStyle]} onLayout={this._onLayout} >
        <Image
          {...otherProps}
          style={[{ overflow: 'hidden' }, style, { width, height }]}
        />
      </View>
    );
  }
}

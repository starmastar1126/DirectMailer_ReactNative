import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { basestyles as bs, images } from '@theme';

import PropTypes from 'prop-types';

export default class AvatarView extends Component {
  static propTypes = {
    size: PropTypes.number,
    image: PropTypes.any,
    borderStyle: PropTypes.any,
    shadowStyle: PropTypes.any,
  };
  static defaultProps = {
    size: 40,
    image: {},
    style: {
      // backgroundColor: '#CDCDCD',
    },
    backStyle: {
      backgroundColor: '#CDCDCD',
    },
    borderStyle: {
    },
    shadowStyle: {
      shadowColor: 'rgba(0,0,0,1)',
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
      elevation: 3,
    },
  };

  render() {
    const { image, backStyle, shadowStyle, borderStyle, size, style, ...otherProps } = this.props; // eslint-disable-line
    const circleStyle = { width: size, height: size, borderRadius: size / 2 };
    const absoluteStyle = { position: 'absolute', left: 0, top: 0 };
    const imageStyle = [circleStyle, borderStyle];
    const backStyle1 = [circleStyle, borderStyle, backStyle, absoluteStyle];
    const wrapperStyle = { width: size, height: size };

    return (
      <View style={wrapperStyle}>
        <View style={backStyle1} />
        <Image
          source={image}
          style={imageStyle}
          placeholder={images.ic_user_empty}
        />
      </View>
    );
  }
}

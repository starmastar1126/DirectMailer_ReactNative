import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { FAIcon } from '../icons';

const Button = props => (
  <TouchableOpacity {...props} />
);

// Button.ViewPropTypes = {
//   ...TouchableOpacity.ViewPropTypes,
// };
Button.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.7,
};

const ImageButton = ({
  style,
  image,
  imageStyle,
  ...otherProps
}) => (
  <Button {...otherProps} style={style} >
    <Image source={image} style={imageStyle} />
  </Button>
);
// ImageButton.ViewPropTypes = {
//   ...Button.ViewPropTypes,
//   image: Object,
//   imageStyle: Object,
// };
ImageButton.defaultProps = {
  ...Button.defaultProps,
};

const TextButton = ({
  style,
  text,
  textStyle,
  ...otherProps
}) => (
  <Button {...otherProps} style={style} >
    <Text style={textStyle} >{text}</Text>
  </Button>
);
// TextButton.ViewPropTypes = {
//   ...Button.ViewPropTypes,
//   text: String,
//   textStyle: Object,
// };
TextButton.defaultProps = {
  ...Button.defaultProps,
};

const IconButton = ({
  style,
  IconComponent,
  iconName,
  iconColor,
  iconSize,
  iconStyle,
  ...otherProps
}) => (
  <Button {...otherProps} style={style} >
    <IconComponent name={iconName} size={iconSize} color={iconColor} style={iconStyle} />
  </Button>
);
// IconButton.ViewPropTypes = {
//   ...Button.ViewPropTypes,
//   IconComponent: Object,
//   iconName: React.PropTypes.any,
//   iconColor: React.PropTypes.any,
//   iconSize: React.PropTypes.any,
//   iconStyle: React.PropTypes.any,
// };
IconButton.defaultProps = {
  ...Button.defaultProps,
  IconComponent: FAIcon,
};

export {
  Button,
  ImageButton,
  TextButton,
  IconButton,
};

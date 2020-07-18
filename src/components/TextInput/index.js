import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { colors, gstyles } from '@theme';

const StyleSheetPropType = require('StyleSheetPropType');
const TextStylePropTypes = require('TextStylePropTypes');

const stylePropType = StyleSheetPropType(TextStylePropTypes);

export default class MLTextInput extends Component {

  static propTypes = {
    ...TextInput.props,
    underlineColorAndroid: React.PropTypes.string,
    textStyle: stylePropType,
    textExtraStyle: stylePropType,
    normalStyle: stylePropType,
    normalExtraStyle: stylePropType,
    activeStyle: stylePropType,
    activeExtraStyle: stylePropType,
    fillStyle: stylePropType,
    fillExtraStyle: stylePropType,
    emptyStyle: stylePropType,
    emptyExtraStyle: stylePropType,
    activePlaceholderColor: React.PropTypes.string,
    emptyPlaceholderColor: React.PropTypes.string,
  }
  static defaultProps = {
    ...TextInput.defaultProps,
    underlineColorAndroid: 'rgba(0,0,0,0)',
    textStyle: gstyles.edit.text,
    normalStyle: gstyles.edit.normal,
    activeStyle: gstyles.edit.active,
    fillStyle: gstyles.edit.fill,
    emptyStyle: gstyles.edit.empty,
    activePlaceholderColor: colors.edit_placeholder_active,
    emptyPlaceholderColor: colors.edit_placeholder_inactive,
  }

  constructor(props) {
    super(props);

    this.state = {
      style: this.props.emptyStyle,
      extraStyle: this.props.emptyExtraStyle,
      placeholderColor: this.props.emptyPlaceholderColor,
      value: this.props.defaultValue,
      focused: false,
    };

    if (this.state.value && this.state.value.length > 0) {
      this.state.style = this.props.fillStyle;
      this.state.extraStyle = this.props.fillExtraStyle;
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.value) {
      this.state.value = nextProps.value;
      if (this.state.value.length > 0) {
        this.state.style = this.props.fillStyle;
        this.state.extraStyle = this.props.fillExtraStyle;
      }
    }
  }

  _updateStyle() {
    if (this.state.focused === true) {
      this.setState({
        style: this.props.activeStyle,
        extraStyle: this.props.activeExtraStyle,
        placeholderColor: this.props.activePlaceholderColor,
      });
    } else if (this.state.value && this.state.value.length > 0) {
      this.setState({
        style: this.props.fillStyle,
        extraStyle: this.props.fillExtraStyle,
        placeholderColor: this.props.emtpyPlaceholderColor,
      });
    } else {
      this.setState({
        style: this.props.emptyStyle,
        extraStyle: this.props.emptyExtraStyle,
        placeholderColor: this.props.emtpyPlaceholderColor,
      });
    }
  }

  isFocused() {
    return this._edit.isFocused();
  }

  _onFocus = () => {
    this.state.focused = true;
    this._updateStyle();
    this.props.onFocus && this.props.onFocus(); // eslint-disable-line
  }

  _onBlur = () => {
    this.state.focused = false;
    this._updateStyle();
    this.props.onBlur && this.props.onBlur(); // eslint-disable-line
  }

  _onChangeText = (text) => {
    this.state.value = text;
    this.props.onChangeText && this.props.onChangeText(text); // eslint-disable-line
  }

  render() {
    const { style, textStyle, textExtraStyle,
      normalStyle, normalExtraStyle, onFocus, onBlur,
      value, onChangeText, ...otherProps } = this.props;

    return (
      <View
        style={[normalStyle, normalExtraStyle,
          this.state.style, this.state.extraStyle, style]}
      >
        <TextInput
          ref={(node) => { this._edit = node; }}
          {...otherProps}
          style={[textStyle, textExtraStyle]}
          placeholderColor={this.state.placeholderColor}
          defaultValue={this.state.value}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChangeText={this._onChangeText}
        />
      </View>
    );
  }
}

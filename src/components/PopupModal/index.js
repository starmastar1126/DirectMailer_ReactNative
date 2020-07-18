import React, { Component, PropTypes } from 'react';
import { Dimensions, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { View as AnimView } from '@lib/Animatable';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import DropdownAlert from 'react-native-dropdownalert';
import { gstyles, styles as styleBase } from '@theme';

const StyleSheetPropType = require('StyleSheetPropType');
const TextStylePropTypes = require('TextStylePropTypes');

const { popup: styles } = gstyles;
const stylePropType = StyleSheetPropType(TextStylePropTypes);

export default class PopupModal extends Component {

  static propTypes = {
    animationIn: PropTypes.string,
    animationInTiming: PropTypes.number,
    animationOut: PropTypes.string,
    animationOutTiming: PropTypes.number,
    backdropColor: PropTypes.string,
    backdropOpacity: PropTypes.number,
    backdropTransitionInTiming: PropTypes.number,
    backdropTransitionOutTiming: PropTypes.number,
    onModalShow: PropTypes.func,
    onModalHide: PropTypes.func,
    onPressOverlay: PropTypes.func,
    frameStyle: stylePropType,
    contentStyle: stylePropType,
    containerStyle: stylePropType,
    isVisible: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    animationIn: 'slideInUp',
    animationInTiming: 300,
    animationOut: 'slideOutDown',
    animationOutTiming: 300,
    backdropColor: 'black',
    backdropOpacity: 0.70,
    backdropTransitionInTiming: 300,
    backdropTransitionOutTiming: 300,
    onModalShow: () => null,
    onModalHide: () => null,
    onPressOverlay: undefined,
    frameStyle: styles.frame,
    contentStyle: styles.content,
    containerStyle: styles.container,
    isVisible: false,
  }

  state = {
    isVisible: false,
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isVisible && nextProps.isVisible) {
      this.setState({ isVisible: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // On modal open request slide the view up and fade in the backdrop
    if (this.state.isVisible && !prevState.isVisible) {
      this._open();
    // On modal close request slide the view down and fade out the backdrop
    } else if (!this.props.isVisible && prevProps.isVisible) {
      this._close();
    }
  }

  showDropAlert(type, title, message) {
    this.dropAlert.alertWithType(type, title, message);
  }

  _open = () => {
    this.backdropRef.transitionTo({ opacity: this.props.backdropOpacity },
      this.props.backdropTransitionInTiming);
    this.contentRef[this.props.animationIn](this.props.animationInTiming)
      .then(() => {
        this.props.onModalShow();
      });
  }

  _close = async () => {
    this.backdropRef.transitionTo({ opacity: 0 },
      this.props.backdropTransitionOutTiming);
    this.contentRef[this.props.animationOut](this.props.animationOutTiming)
      .then(() => {
        this.setState({ isVisible: false });
        setTimeout(() => {
          this.props.onModalHide();
        }, 1);
      });
  }

  _handleLayout = () => {
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
    if (deviceWidth !== this.state.deviceWidth || deviceHeight !== this.state.deviceHeight) {
      this.setState({ deviceWidth, deviceHeight });
    }
  }

  _handleOverlayPress = () => {
    TextInput.State.blurTextInput(TextInput.State.currentlyFocusedField());
    if (this.props.onPressOverlay) {
      this.props.onPressOverlay();
    }
  }

  render() {
    const { animationIn, animationInTiming, animationOut, animationOutTiming, backdropColor,
      backdropOpacity, backdropTransitionInTiming, backdropTransitionOutTiming, isVisible,
      containerStyle, frameStyle, contentStyle,
      onModalShow, onModalHide, children, style, ...otherProps } = this.props; // eslint-disable-line
    const { deviceWidth, deviceHeight } = this.state;

    return (
      <Modal
        transparent
        animationType={'none'}
        visible={this.state.isVisible}
        onRequestClose={() => null}
      >
        <AnimView
          onLayout={this._handleLayout}
          ref={(ref) => { this.backdropRef = ref; }}
          style={[
            styleBase.layout.absolute_full, {
              opacity: 0,
              backgroundColor: backdropColor,
              width: deviceWidth,
              height: deviceHeight,
            }]}
        />

        <KeyboardAwareView animated >
          <View style={[styleBase.layout.match_parent, styleBase.align.center]} >
            <TouchableOpacity
              onPress={this._handleOverlayPress}
              style={[styleBase.layout.absolute_full, { backgroundColor: 'transparent' }]}
            />
            <AnimView
              ref={(ref) => { this.contentRef = ref; }}
              style={[styleBase.align.center, containerStyle]}
            >
              <View style={[frameStyle, contentStyle]} >
                {children}
              </View>
            </AnimView>
          </View>
        </KeyboardAwareView>

        <DropdownAlert
          ref={(node) => { this.dropAlert = node; }}
          titleStyle={gstyles.dropAlert.title}
          messagesStyle={gstyles.dropAlert.messages}
          panResponderEnabled={false}
          onClose={this.closedAlert}
        />
      </Modal>
    );
  }
}

import React, { Component } from 'react';
import { View } from 'react-native';
import PopupModal from './modal';

export default class BasePopup extends Component {

  // static propTypes = {
  //   ...PopupModal.props,
  //   dismissBackdrop: React.PropTypes.bool,
  // }
  static defaultProps = {
    ...PopupModal.defaultProps,
    dismissBackdrop: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      isVisible: props.isVisible ? props.isVisible : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isVisible) {
      this.setState({ isVisible: nextProps.isVisible });
    }
  }

  showPopup() {
    return new Promise((resolve) => {
      if (this.state.isVisible) {
        resolve();
        return;
      }
      this._handlePopupShow = () => {
        resolve();
      };
      this.setState({ isVisible: true });
    });
  }

  hidePopup() {
    return new Promise((resolve) => {
      if (this.state.isVisible === false) {
        resolve();
        return;
      }
      this._handlePopupHide = () => {
        resolve();
      };
      this.setState({ isVisible: false });
    });
  }

  _handleOverlayPress = () => {
    if (this.props.dismissBackdrop) {
      this.hidePopup();
    }
    if (this.props.onPressOverlay) {
      this.props.onPressOverlay();
    }
  }

  _renderContent = () => (<View />);

  _onModalShow = () => {
    this._handlePopupShow && this._handlePopupShow(); // eslint-disable-line
    this.props.onModalShow && this.props.onModalShow(); // eslint-disable-line
  }

  _onModalHide = () => {
    this._handlePopupHide && this._handlePopupHide(); // eslint-disable-line
    this.props.onModalHide && this.props.onModalHide(); // eslint-disable-line
  }

  render() {
    const { visible, isVisible, ...otherProps } = this.props;
    return (
      <PopupModal
        {...otherProps}
        ref={(node) => { this.popup = node; }}
        isVisible={this.state.isVisible}
        onModalShow={this._onModalShow}
        onModalHide={this._onModalHide}
        onPressOverlay={this._handleOverlayPress}
      >
        { this._renderContent() }
      </PopupModal>
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@components/button';
import TextInput from '@components/TextInput';
import KeyboardScrollView from '@components/KeyboardScrollView';
import { connect } from 'react-redux';
import { handler } from '@redux';
import g from '@global';
import { gstates } from '@common';
// import { gUserInfo, gAppStates } from '@common';
import { consts } from '@theme';
import apis from '../../lib/apis';
import styles from './SmsVerify.styles';

import PropTypes from 'prop-types';

const { navigation: navHandler } = handler;

const { hud: hudHandler, drop: dropHandler } = handler.alert;

class SmsVerify extends Component {

  state = {
    code: [-1, -1, -1, -1, -1, -1],
  };
  editCode = [];

  _validateInput() {
    let message;
    for (let i = 0; i < 6; i += 1) {
      if (this.state.code[i] < 0) {
        message = 'Please enter code.';
        break;
      }
    }

    if (!g.isEmpty(message)) {
      dropHandler.showError(consts.appName, message);
      return false;
    }
    return true;
  }
  _requestVerifySms(code) {
    apis.verifySmsCode(gstates.userId, code).then((result) => {
      if (!result) {
        gstates.setUserId(gstates.userId);
        gstates.setPhoneNumber(gstates.phoneNumber);
        hudHandler.hide();
        dropHandler.showError(consts.appName, 'Failed to verify code.');
        return;
      }
      hudHandler.hide();
      dropHandler.showSuccess(consts.appName, 'Register successfully.');
      this._onPressClose();
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError(consts.appName, 'Failed to verify codefdsa');
    });
  }

  _onPressClose = () => {
    navHandler.popN(2);
  }

  _onPressVerifySms = () => {
    if (this._validateInput() === false) { return; }
    hudHandler.show('Sending SMS...');
    let code = '';
    for (let i = 0; i < 6; i += 1) {
      code += this.state.code[i];
    }
    this._requestVerifySms(code);
  }

  _onPressResendSms = () => {
    navHandler.navback();
  }

  _onChangeCode = (index, text) => {
    const edit = this.editCode[index];
    let value = parseInt(text || -1, 10);

    if (value >= 0) {
      value %= 10;
      this.state.code[index] = value;
      // edit.changeText(`${value}`);
      edit._edit.blur();
      if (index < 5) {
        this.editCode[index + 1]._edit.focus();
      }
    } else {
      this.state.code[index] = value;
      // edit.changeText('');
    }
  }

  _renderInput = (placeholder, onChangeText, onRef) => (
    <TextInput
      ref={onRef}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.edit_content}
      normalStyle={styles.edit_normal}
      textStyle={styles.edit_text}
    />
  )
  _renderButton = (text, styleButton, styleText, onPress) => (
    <Button onPress={onPress} style={styleButton} >
      <Text style={styleText}>{text}</Text>
    </Button>
  )

  _renderSmsVerify = () => {
    const msg1 = 'We just send you a text message.';
    const msg2 = 'Please enter the code above.';

    return (
      <View style={styles.view_content} >
        <KeyboardScrollView
          style={styles.scroll}
          contentStyle={styles.scroll_content}
        >
          <View style={styles.view_code}>
            {this._renderInput('0', (text) => { this._onChangeCode(0, text); }, (node) => { this.editCode[0] = node; })}
            {this._renderInput('0', (text) => { this._onChangeCode(1, text); }, (node) => { this.editCode[1] = node; })}
            {this._renderInput('0', (text) => { this._onChangeCode(2, text); }, (node) => { this.editCode[2] = node; })}
            <Text style={styles.txt_code_sep} >-</Text>
            {this._renderInput('0', (text) => { this._onChangeCode(3, text); }, (node) => { this.editCode[3] = node; })}
            {this._renderInput('0', (text) => { this._onChangeCode(4, text); }, (node) => { this.editCode[4] = node; })}
            {this._renderInput('0', (text) => { this._onChangeCode(5, text); }, (node) => { this.editCode[5] = node; })}
          </View>
          <Text style={[styles.txt_desc, styles.mt_15]} >{msg1}</Text>
          <Text style={[styles.txt_link, styles.mb_15]} >{msg2}</Text>

          {this._renderButton('Verify', [styles.btn_login_email, styles.mt_20], styles.txt_login_email, this._onPressVerifySms)}
          {this._renderButton('Resend SMS', [styles.btn_login_email, styles.mt_20], styles.txt_login_email, this._onPressResendSms)}
        </KeyboardScrollView>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container} >
        {this._renderSmsVerify()}
        <Button onPress={this._onPressClose} style={styles.btn_close} >
          <Text style={styles.txt_close}>X</Text>
        </Button>
      </View>
    );
  }
}

SmsVerify.propTypes = {
  navRoot: PropTypes.object.isRequired,
  navSign: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  navRoot: state.navRoot,
  navSign: state.navSign,
});

const mapDispatchToProps = dispatch => ({
  dispatcher: state => dispatch(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SmsVerify);

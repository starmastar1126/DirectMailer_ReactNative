import React from 'react';
import { gstates } from '@common';
import { View, Text, TextInput } from 'react-native';
import { Button } from '@components/button';
import KeyboardScrollView from '@components/KeyboardScrollView';
import { connect } from 'react-redux';
import { handler } from '@redux';
import { routeNames } from '@routes';
import g from '@global';
import { consts } from '../../theme';
import apis from '../../lib/apis';
import styles from './SmsMobile.styles';

const { hud: hudHandler, drop: dropHandler } = handler.alert;
const { navigation: navHandler } = handler;

class SmsMobile extends React.Component {

  state = {
    mobile: '',
  };

  _validateInput() {
    let message;
    if (g.isEmpty(this.state.mobile)) {
      message = 'Please enter mobile number.';
    }

    if (!g.isEmpty(message)) {
      dropHandler.showError(consts.appName, message);
      return false;
    }
    return true;
  }
  createChilllUser = (mobile) => {

    const params = {
      password: '123456789',
      mobileNumber: mobile,
      deviceId: gstates.deviceId,
    };
    apis.createChilllUser(params).then((res) => {
      console.warn(JSON.stringify(res))
      gstates.phoneNumber = mobile;
      gstates.setPhoneNumber(gstates.phoneNumber);
      gstates.setUserId(res)
      console.warn(gstates.phoneNumber)
      this._requestSendSms(mobile, res)
      dropHandler.showSuccess(consts.appName, 'Register successfully.');
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError(consts.appName, 'Failed to register chilll user.');
    });
  }
  _requestSendSms(mobile, UserId) {
    apis.sendSmsVerificationCode(UserId, mobile).then((res) => {
      if (res.response[0]) {
        gstates.verificationCode = res.response[0];
        gstates.phoneNumber = mobile;
        hudHandler.hide();
        dropHandler.showSuccess(consts.appName, gstates.verificationCode);
        navHandler.navigate({ routeName: routeNames.app.smsverify });
      }
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError(consts.appName, 'Failed to send sms.');
    });
  }

  _onPressClose = () => {
    navHandler.navback();
  }

  _onPressSendSms = () => {
    if (this._validateInput() === false) { return; }
    hudHandler.show('Sending SMS...');
    this.createChilllUser(this.state.mobile);
  }

  _renderInput = (placeholder, style, onChangeText, onRef, otherProps) => (
    <View style={style} >
      <TextInput
        ref={onRef}
        placeholder={placeholder}
        placeholderTextColor="#C9A004"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="#E7B700"
        style={styles.edit}
        onChangeText={onChangeText}
        {...otherProps}
      />
      <View style={styles.edit_underline} />
    </View>
  )
  _renderButton = (text, styleButton, styleText, onPress) => (
    <Button onPress={onPress} style={styleButton} >
      <Text style={styleText}>{text}</Text>
    </Button>
  )

  _renderSmsMobile = () => {
    const msg1 = 'Please enter your mobile number';
    const msg2 = 'It\'s just part of the verification process.';
    const msg3 = 'Just type the number, we\'ll format it for you :)';

    return (
      <View style={styles.view_content} >
        <KeyboardScrollView
          style={styles.scroll}
          contentStyle={styles.scroll_content}
        >
          <Text style={styles.txt_desc} >{msg1}</Text>
          <Text style={[styles.txt_link, styles.mb_15]} >{msg2}</Text>
          {this._renderInput('Mobile Number', [styles.view_edit, styles.mt_20],
            (text) => { this.state.mobile = text; }, (node) => { this.editMobile = node; })}
          <Text style={[styles.txt_desc2, styles.mb_15]} >{msg3}</Text>
            {this._renderButton('Save Mobile Number', [styles.btn_login_email, styles.mt_20, styles.mb_15], styles.txt_login_email, this._onPressSendSms)}
        </KeyboardScrollView>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container} >
        {this._renderSmsMobile()}
        <Button onPress={this._onPressClose} style={styles.btn_close} >
          <Text style={styles.txt_close}>X</Text>
        </Button>
      </View>
    );
  }
}

// SmsMobile.propTypes = {
//   navSign: React.PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({ // eslint-disable-line
  // navSign: state.navSign,
});

const mapDispatchToProps = dispatch => ({
  dispatcher: state => dispatch(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SmsMobile);

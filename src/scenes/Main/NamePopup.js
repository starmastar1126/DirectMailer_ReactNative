import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from '@components/button';
import PopupDialog from 'react-native-popup-dialog';
import { gstates } from '@common';
import apis from '@lib/apis';
import g from '@global';
import { handler } from '@redux';
import { consts, sizes } from '@theme';
import styles from './NamePopup.styles';

const { drop: dropHandler, hud: hudHandler } = handler.alert;

export default class NamePopup extends React.Component {

  state = {
    name: '',
  }

  _onDismissed = () => {
    gstates.panMovable = true;
  }

  _onPressDone = () => {
    if (g.isEmpty(this.state.name)) {
      dropHandler.showError('Chilll', 'Please enter a name of this device.');
      return;
    }

    hudHandler.show('Requesting...');
    apis.nameDevice(gstates.deviceId, this.state.name).then((res) => {
      console.log('namedevice: ', res);
      hudHandler.hide();

      if (res && res.error && res.error === 500) {
        dropHandler.showError('Chilll', 'That name is already in use. Please use another name.');
        return;
      }

      gstates.setDeviceName(this.state.name);
      this.dismiss();
    }).catch((err) => {
      console.log('namedevice: err - ', err);
      hudHandler.hide();
      if (err && err.error === 500) {
        dropHandler.showError('Chilll', 'That name is already in use. Please use another name.');
      } else {
        dropHandler.showError('Chilll', 'Failed to name device.');
      }
    });
  }

  show() {
    gstates.panMovable = false;
    this.popup.show();
  }
  dismiss() {
    this.popup.dismiss();
  }

  render() {
    const width = consts.phone ? sizes.screen.width - 40 : 450;

    return (
      <PopupDialog
        width={width}
        height={null}
        dismissOnHardwareBackPress={false}
        dismissOnTouchOutside={false}
        ref={(node) => { this.popup = node; }}
        dialogStyle={styles.container}
        onDismissed={this._onDismissed}
      >
        <View style={styles.container} >
          <Text style={styles.txt_title} numberOfLines={0}>Please enter a name of this device</Text>
          <View style={styles.view_name} >
            <TextInput
              style={styles.edit_name}
              placeholder="Enter name of this device..."
              placeholderTextColor="#CDCDCD"
              keyboardAppearance="dark"
              onChangeText={(text) => { this.state.name = text; }}
            />
          </View>
          <Button style={styles.btn_done} onPress={this._onPressDone} >
            <Text style={styles.txt_done} >DONE</Text>
          </Button>
        </View>
      </PopupDialog>
    );
  }
}

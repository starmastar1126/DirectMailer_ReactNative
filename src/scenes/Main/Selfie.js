import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@components/button';
import { ETIcon, IOIcon } from '@components/icons';
import BroadcastView from 'react-native-wowza-gocoder';
import appconfig from '@app/config';
import { shallowEqual, handler } from '@redux';
import { gstates } from '@common';
import { colors } from '@theme';
import { ViewType } from './types';
import styles from './Selfie.styles';

const { wowza: config } = appconfig;
const { main: mainHandler } = handler;

export default class Selfie extends Component {

  state = {
    cameraBack: false,
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (!shallowEqual(nextProps, this.props, 0, 2)) {
      return true;
    }
    if (!shallowEqual(nextState, this.state, 0, 2)) {
      return true;
    }
    return false;
  }

  _onPressCapture = () => {
  }
  _onPressGoLive = () => {
    this.props.actions.onPressLive();
  }
  _onPressSwitch = () => {
    gstates.frontCamera = !gstates.frontCamera;
    mainHandler.updateView();
  }
  _onPressRotate = () => {
  }

  onBroadcastStart = () => {
    console.log('Bcast start');
  }
  onBroadcastFail = () => {
    console.log('Bcast fail');
  }
  onBroadcastStatusChange = () => {
    console.log('Bcast status change');
  }
  onBroadcastEventReceive = () => {
    console.log('Bcast event receive');
  }
  onBroadcastErrorReceive = () => {
    console.log('Bcast error receive');
  }
  onBroadcastVideoEncoded = () => {
    console.log('Bcast encoded');
  }
  onBroadcastStop = () => {
    console.log('Bcast stop');
  }

  _renderButton = (style, onPress, render) => {
    const { actions } = this.props;

    return (
      <Button
        onPress={onPress}
        onPressIn={actions.onButtonPressIn}
        onPressOut={actions.onButtonPressOut}
        style={style}
      >
        { render() }
      </Button>
    );
  }

  _renderLiveButton = () => this._renderButton(styles.btn_golive, this._onPressGoLive, () => (
    <Text style={styles.txt_golive} >{gstates.player.streamLive ? 'STOP LIVE' : 'GO LIVE'}</Text>
  ))

  _renderCaptureButton = () => (
    <View style={styles.view_bottom} >
      { this._renderButton(styles.btn_bottom, this._onPressSwitch, () => (
        <ETIcon name="camera" size={28} color={colors.alternative} />
      ))}
      { this._renderButton(styles.btn_capture, this._onPressCapture, () => (
        <View style={styles.btn_capture_inner} />
      ))}
      { this._renderButton(styles.btn_bottom, this._onPressRotate, () => (
        <IOIcon name="md-reverse-camera" size={28} color={colors.alternative} />
      ))}
    </View>
  )

  _renderBroadcast = () => {
    if (gstates.viewState === ViewType.selfie || gstates.player.streamLive) {
      console.log('camera view - ', config.applicationName);
      const style = [styles.broadcast, { opacity: gstates.viewState === ViewType.selfie ? 1.0 : 0.0 }];
      return (
        <BroadcastView
          sdkLicenseKey={config.sdkLicenseKey}
          hostAddress={config.hostAddress}
          applicationName={config.applicationName || 'unknown'}
          broadcastName={config.streamName}
          username={config.username}
          password={config.password}
          port={config.port}
          sizePreset={3}
          muted={false}
          flashOn={false}
          frontCamera={gstates.frontCamera}
          broadcasting={gstates.player.streamLive}
          style={style}
          onBroadcastStart={this.onBroadcastStart}
          onBroadcastFail={this.onBroadcastFail}
          onBroadcastStatusChange={this.onBroadcastStatusChange}
          onBroadcastEventReceive={this.onBroadcastEventReceive}
          onBroadcastErrorReceive={this.onBroadcastErrorReceive}
          onBroadcastVideoEncoded={this.onBroadcastVideoEncoded}
          onBroadcastStop={this.onBroadcastStop}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container} >
        { this._renderBroadcast() }
        { this._renderLiveButton() }
        { this._renderCaptureButton() }
      </View>
    );
  }
}

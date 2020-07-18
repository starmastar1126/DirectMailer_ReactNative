import React, { Component } from 'react';
import { View } from 'react-native';
import SongListView from '@components/songlist';
import ImageEx from '@components/image';
import { shallowEqual, handler } from '@redux';
import apis from '@lib/apis';
import { gstates } from '@common';
import { images, consts } from '@theme';
import styles from './Search.styles';

const { main: mainHandler } = handler;
const { hud: hudHandler, drop: dropHandler } = handler.alert;

export default class RadioList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (!shallowEqual(nextProps, this.props, 0, 2)) {
      return true;
    }
    if (!shallowEqual(nextState, this.state, 0, 2)) {
      return true;
    }
    return false;
  }

  _onPressSong = (info) => {
    hudHandler.show('Requesting...');
    apis.saveSong(info.songInfo).then((res) => {
      hudHandler.hide();
      info._id = res;
      info.songInfo._id = res;

      if (info.isVideo) {
        apis.addVideoObject(gstates.deviceId, info.songInfo);
      } else {
        apis.addSongObject(gstates.deviceId, info.songInfo);
      }

      gstates.methods.loadSong(info);
      gstates.searchState = 0;
      mainHandler.updateView();
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError(consts.appName, 'Failed to save song');
    });
  }

  render() {
    const { searchData } = gstates;
    return (
      <View style={styles.container} >
        <SongListView
          songs={searchData.songs}
          onPressSong={this._onPressSong}
        />
        <ImageEx source={images.bg_list_bottom_overlay} style={styles.img_top_overlay} resizeMode="stretch" pointerEvents="none" />
        <ImageEx source={images.bg_list_bottom_overlay} style={styles.img_bottom_overlay} resizeMode="stretch" pointerEvents="none" />
      </View>
    );
  }
}

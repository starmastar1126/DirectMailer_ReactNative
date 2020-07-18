import React, { Component } from 'react';
import { View } from 'react-native';
import SongListView from '@components/songlist';
import ImageEx from '@components/image';
import { shallowEqual } from '@redux';
import { gstates } from '@common';
import { images } from '@theme';
import styles from './RadioList.styles';

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

  _onPressSong = (info, index) => {
    gstates.methods.loadSong(info, index);
  }

  _onLoadMore = () => {
    gstates.methods.loadMoreSongs();
  }

  render() {
    const { songData } = gstates;
    return (
      <View style={styles.container} >
        <SongListView
          songs={songData.songs}
          loading={songData.loading}
          onPressSong={this._onPressSong}
          loadMore={this._onLoadMore}
        />
        <ImageEx source={images.bg_list_bottom_overlay} style={styles.img_top_overlay} resizeMode="stretch" pointerEvents="none" />
        <ImageEx source={images.bg_list_bottom_overlay} style={styles.img_bottom_overlay} resizeMode="stretch" pointerEvents="none" />
      </View>
    );
  }
}

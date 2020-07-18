import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '@components/button';
import { IOIcon, ETIcon/* , FAIcon */ } from '@components/icons';
import { SortList } from '@components/sortlist';
import _ from 'lodash';
import Swipeable from '@components/swipeable';
import apis from '@lib/apis';
import { connect } from 'react-redux';
import { handler } from '@redux';
import { MDSong } from '@model';
import { gstates } from '@common';
import { routeKeys } from '@routes';
import { colors, sizes, images } from '@theme';
import styles from './Songlist.styles';

const { navigation: navHandler } = handler;
const { drop: dropHandler, hud: hudHandler } = handler.alert;

class Songlist extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSwiping: false,
    };
    this.rowRefs = [];

    this.buildDataSource([]);
  }

  _mounted = false;
  componentDidMount() {
    this._mounted = true;
    setTimeout(() => {
      this._requestSongs();
    }, 50);
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  buildDataSource(songlist) {
    const newList = songlist.sort((song1, song2) => {
      const order1 = song1.order ? song1.order : 0;
      const order2 = song2.order ? song2.order : 0;
      return order1 - order2;
    });

    const temp = _.map(songlist, info => info.songObject);
    const songs = MDSong.parseList(temp);

    this.lists = songlist;
    this.state.songList = songs;
    this.state.songOrder = newList.map((song, index) => index);
  }

  _requestSongs(hud) {
    const playlistName = gstates.playlistSelected;
    apis.getPlaylistByName(gstates.deviceId, playlistName).then((res) => {
      if (hud) hudHandler.hide();

      this.buildDataSource(res.results);
      this.forceUpdate();
    }).catch(() => {});
  }

  _onPressClose = () => {
    navHandler.navback();
  }

  _onPressRow = (song) => {
    hudHandler.show('Requesting...');
    gstates.methods.loadPlaylist(gstates.playlistSelected, song, () => {
      hudHandler.hide();
      navHandler.popTo(routeKeys.app.main);
    });
  }
  _onDeleteSong = (song, sec, row) => {
    const playlistName = gstates.playlistSelected;
    this.rowRefs[row].recenter();
    hudHandler.show('Requesting...');
    apis.removeSongFromPlaylist(song._id, playlistName, gstates.deviceId).then(() => {
      this._requestSongs(true);
    }).catch(() => {
      hudHandler.hide();
    });
  }

  _onRowMoved = (e) => {
    const playlistName = gstates.playlistSelected;
    const newOrder = this.state.songOrder.slice();
    const oldOrder = this.state.songOrder;

    newOrder.splice(e.to, 0, newOrder.splice(e.from, 1)[0]);

    const params = newOrder.map((index, order) => ({
      _id: this.lists[index]._id,
      order,
    }));

    hudHandler.show('Requesting...');
    apis.reorderPlaylist(params, playlistName, gstates.deviceId).then(() => {
      hudHandler.hide();
    }).catch(() => {
      // console.log('failed to reorder songs');
      dropHandler.showError('Playlist', 'Failed to order songs');
      hudHandler.hide();
      this.state.songOrder = oldOrder;
      this.forceUpdate();
    });

    this.state.songOrder = newOrder;
    this.forceUpdate();
  }

  _renderTitle = () => (
    <View style={styles.view_title} >
      <Text style={styles.txt_title} numberOfLines={1} >{gstates.playlistSelected}</Text>
      <Button onPress={this._onPressClose} style={styles.btn_close} >
        <IOIcon name="md-close" size={sizes.resize_value6(24)} color={colors.text} />
      </Button>
    </View>
  )

  _renderList = () => (
    <SortList
      scrollEnabled={!this.state.isSwiping}
      data={this.state.songList}
      style={styles.list}
      order={this.state.songOrder}
      onRowMoved={this._onRowMoved}
      renderRow={this._renderRow}
    />
  )

  _renderRow = (song, sec, row, temp, active, handlers1) => {
    const artist = song.artist;
    const title = song.title;
    const thumbImage = song.thumbImage ? { uri: song.thumbImage } : images.img_def_song_thumb;
    const rightButtons = [
      <Button style={styles.btn_delete} onPress={() => { this._onDeleteSong(song, sec, row); }} >
        <Text style={styles.txt_delete} >DELETE</Text>
      </Button>,
    ];

    return (
      <View style={styles.list_row} >
        <Swipeable
          ref={(node) => { this.rowRefs[row] = node; }}
          rightButtons={rightButtons}
          onSwipeStart={() => this.setState({ isSwiping: true })}
          onSwipeRelease={() => this.setState({ isSwiping: false })}
        >
          <Button style={styles.list_row} {...handlers1} >
            <View style={styles.view_song_thumb} >
              <Image source={thumbImage} style={styles.img_song_thumb} />
              <Button onPress={() => { this._onPressRow(song, sec, row); }} style={styles.btn_play} >
                <View style={styles.view_play_circle} >
                  <ETIcon name="controller-play" size={sizes.resize_value6(20)} color="white" />
                </View>
              </Button>
            </View>
            <View style={styles.view_song_info} >
              <Text style={styles.txt_song_title} numberOfLines={1} ellipsizeMode="tail" >{artist}</Text>
              <Text style={styles.txt_song_artist} numberOfLines={1} ellipsizeMode="tail" >{title}</Text>
            </View>
          </Button>
        </Swipeable>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container} >
        { this._renderTitle() }
        { this._renderList() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  playerFlag: state.main.playerFlag,
});

const mapDispatchToProps = dispatch => ({
  dispatcher: state => dispatch(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Songlist);

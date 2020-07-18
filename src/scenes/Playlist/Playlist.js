import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '@components/button';
import { IOIcon/* , FAIcon */ } from '@components/icons';
import { SortList } from '@components/sortlist';
import apis from '@lib/apis';
import { connect } from 'react-redux';
import { handler } from '@redux';
import { gstates } from '@common';
import { routeNames } from '@routes';
import { colors, images, sizes } from '@theme';
import styles from './Playlist.styles';

const { navigation: navHandler } = handler;
const { drop: dropHandler, hud: hudHandler } = handler.alert;

class Playlist extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
    this.lists = {};

    this.buildDataSource([]);
  }

  _mounted = false;
  componentDidMount() {
    this._mounted = true;
    setTimeout(() => {
      this._requestPlaylist();
    }, 50);
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  buildDataSource(playlist) {
    this.state.list = playlist;
    this.state.order = playlist.map((info, index) => index);
  }

  _requestPlaylist() {
    apis.getDevicePlaylistNames(gstates.deviceId).then((res) => {
      this.lists = res.lists;
      gstates.playlist = res.results;
      this.buildDataSource(res.results);
      this.forceUpdate();
    }).catch(() => {});
  }

  _onPressClose = () => {
    navHandler.navback();
  }

  _onPressLive = () => {
    // if (gstates.player.streamLive) {
    //   gstates.methods.stopLive();
    // } else {
    //   gstates.methods.startLive();
    // }
    navHandler.navigate({ routeName: routeNames.app.livePlaylist });
  }

  _onPressView = (listInfo) => {
    gstates.playlistSelected = listInfo;
    navHandler.navigate({ routeName: routeNames.app.songlist });
  }
  _onPressEdit = (listInfo) => {
    listInfo;
  }
  _onPressDelete = (listInfo) => {
    listInfo;
  }
  _onPressPlay = (listInfo) => {
    hudHandler.show('Requesting...');
    gstates.methods.loadPlaylist(listInfo, null, () => {
      hudHandler.hide();
      this._onPressClose();
    });
  }

  _onRowMoved = (e) => {
    const newOrder = this.state.order.slice();
    const oldOrder = this.state.order;
    const newList = gstates.playlist.slice();
    const oldList = gstates.playlist;

    newOrder.splice(e.to, 0, newOrder.splice(e.from, 1)[0]);
    newList.splice(e.to, 0, newList.splice(e.from, 1)[0]);

    const params = newOrder.map((index, order) => ({
      name: this.state.list[index],
      order,
    }));

    hudHandler.show('Requesting...');
    apis.reorderPlaylistList(params, gstates.deviceId).then(() => {
      hudHandler.hide();
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError('Playlist', 'Failed to order playlist');
      this.state.order = oldOrder;
      gstates.playlist = oldList;
      this.forceUpdate();
    });

    this.state.order = newOrder;
    gstates.playlist = newList;
    this.forceUpdate();
    console.log(newList);
  }

  _renderTitle = () => (
    <View style={styles.view_title} >
      <Button onPress={this._onPressLive} style={styles.button} >
        <Image source={images.ic_header_tv} style={styles.img_live} />
      </Button>
      <Text style={styles.txt_title}>CHILLTV</Text>
      <Button onPress={this._onPressClose} style={styles.btn_close} >
        <IOIcon name="md-close" size={sizes.resize_value6(24)} color={colors.text} />
      </Button>
    </View>
  )

  _renderList = () => (
    <SortList
      data={this.state.list}
      order={this.state.order}
      style={styles.list}
      onRowMoved={this._onRowMoved}
      renderRow={this._renderRow}
    />
  )

  _renderRow = (listInfo, sec, row, temp, active, handlers1) => {
    const songs = this.lists[listInfo];
    const songCount = songs.length;
    return (
      <Button style={styles.list_row} {...handlers1} >
        <Button style={styles.btn_row_play} onPress={() => { this._onPressPlay(listInfo); }} >
          <Image source={images.ic_player_play} style={styles.img_row_play} />
        </Button>
        <View style={styles.view_row_info} >
          <Text style={styles.txt_row_title} >{listInfo}</Text>
          <Text style={styles.txt_row_desc} >{`${songCount} Songs`}</Text>
          <View style={styles.view_row_btns} >
            <Button sytle={styles.btn_row_func} onPress={() => { this._onPressView(listInfo); }} >
              <Text style={styles.txt_row_btns} >VIEW</Text>
            </Button>
            <Text style={styles.txt_row_btns} > • </Text>
            <Button sytle={styles.btn_row_func} onPress={() => { this._onPressEdit(listInfo); }} >
              <Text style={styles.txt_row_btns} >SHARE</Text>
            </Button>
            <Text style={styles.txt_row_btns} > • </Text>
            <Button sytle={styles.btn_row_func} onPress={() => { this._onPressDelete(listInfo); }} >
              <Text style={styles.txt_row_btns} >DELETE</Text>
            </Button>
          </View>
        </View>
      </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

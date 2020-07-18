import React from 'react';
import { View, Text, ListView, Image } from 'react-native';
import { Button } from '@components/button';
import { IOIcon/* , FAIcon */ } from '@components/icons';
import apis from '@lib/apis';
import { connect } from 'react-redux';
import { handler } from '@redux';
import { gstates } from '@common';
import { MDLiveSong } from '@model';
import { routeKeys } from '@routes';
import { colors, images, sizes } from '@theme';
import styles from './LivePlaylist.styles';

const { navigation: navHandler } = handler;

class LivePlaylist extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.dslist = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

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
    this.state.dataSource = this.dslist.cloneWithRows(playlist);
  }

  _requestPlaylist() {
    // apis.getLivePlaylist().then((res) => {
    //   const list = MDLiveSong.parseList(res);
    //   this.buildDataSource(list);
    //   this.forceUpdate();
    // }).catch(() => {
    // });
    apis.getAllStreams().then((res) => {
      const list = MDLiveSong.parseList(res);
      this.buildDataSource(list);
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
  }

  _onPressPlay = (item) => {
    gstates.methods.loadSong(item);
    gstates.methods.gotoPlayView();
    navHandler.popTo(routeKeys.app.main);
  }

  _renderTitle = () => (
    <View style={styles.view_title} >
      <Button onPress={this._onPressLive} style={styles.button} >
        <Image source={images.ic_live_video_on} style={styles.img_live} />
      </Button>
      <Text style={styles.txt_title}>LIVESTREAMS</Text>
      <Button onPress={this._onPressClose} style={styles.btn_close} >
        <IOIcon name="md-close" size={sizes.resize_value6(24)} color={colors.text} />
      </Button>
    </View>
  )

  _renderList = () => (
    <ListView
      enableEmptySections
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
      style={styles.list}
    />
  )

  _renderRow = item => (
    <View style={styles.list_row} >
      <Button style={styles.btn_row_play} onPress={() => { this._onPressPlay(item); }} >
        <Image source={images.ic_player_play} style={styles.img_row_play} />
      </Button>
      <View style={styles.view_row_title} >
        <Text style={styles.txt_row_title}>{ item.artist }</Text>
        <Text style={styles.txt_row_desc}>{ item.isAudio ? 'Audio Stream' : 'Video Stream' }</Text>
      </View>
    </View>
  )

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

export default connect(mapStateToProps, mapDispatchToProps)(LivePlaylist);

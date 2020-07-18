import React from 'react';
import { View, Text, TextInput, Keyboard, ListView } from 'react-native';
import { Button } from '@components/button';
import { MTIcon } from '@components/icons';
import PopupDialog from 'react-native-popup-dialog';
import { gstates } from '@common';
import apis from '@lib/apis';
import g from '@global';
import { handler, shallowEqual } from '@redux';
import { consts, sizes } from '@theme';
import styles from './AddPopup.styles';

const { drop: dropHandler, hud: hudHandler } = handler.alert;

export default class AddPopup extends React.Component {

  song = null;

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      selected: [],
    };

    this.dslist = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.buildDataSource(gstates.playlist || []);
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

  buildDataSource(playlist) {
    this.state.selected = [];
    this.state.dataSource = this.dslist.cloneWithRows(playlist);
  }

  _requestPlaylist = () => {
    hudHandler.show('Requesting...');
    apis.getDevicePlaylistNames(gstates.deviceId).then((res) => {
      hudHandler.hide();
      gstates.playlist = res.results;
      this.buildDataSource(res.results);
      this.forceUpdate();
    }).catch(() => {
      hudHandler.hide();
    });
  }

  _addSong = (lists) => {
    hudHandler.show('Requesting...');
    apis.addSongToPlaylist(gstates.deviceId, lists, this.song._id, this.state.name).then(() => {
      gstates.playlist = null;
      hudHandler.hide();
      this.popup.dismiss();

      apis.registerAction(gstates.deviceId, 'Add', { type: this.song.isVideo ? 'video' : 'audio' });
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError('Add Playlist', 'Failed to add song to playlist.');
    });
  }

  _onDismissed = () => {
    Keyboard.dismiss();
    gstates.panMovable = true;
  }

  _onPressDone = () => {
    if (!this.state.selected.length) {
      this.popup.dismiss();
      return;
    }
    this._addSong(this.state.selected);
  }

  _onPressAdd = () => {
    if (g.isEmpty(this.state.name)) {
      dropHandler.showError('Add Playlist', 'Please enter playlist name to add.');
      return;
    }
    this._addSong([this.state.name]);
  }

  _onNameChanged = (value) => {
    if (value === this.state.name) return;
    this.state.name = value;
  }

  _onRowSelected = (index, info) => {
    const exist = this.state.selected.findIndex(name => name.toUpperCase() === info.toUpperCase());
    if (exist === -1) {
      this.state.selected.push(info);
    } else {
      this.state.selected.splice(exist, 1);
    }
    this.forceUpdate();
  }

  show(song) {
    gstates.panMovable = false;
    this.song = song;
    this.popup.show();
    if (!gstates.playlist) {
      this._requestPlaylist();
    } else {
      this.buildDataSource(gstates.playlist);
      this.forceUpdate();
    }
  }
  dismiss() {
    this.popup.dismiss();
  }

  _renderTitle = () => (
    <View style={styles.view_name} >
      <TextInput
        style={styles.edit_name}
        placeholder="ADD PLAYLIST"
        placeholderTextColor="#555"
        keyboardAppearance="dark"
        onChangeText={this._onNameChanged}
        ref={(node) => { this.editName = node; }}
      />
      <Button style={styles.btn_add} onPress={this._onPressAdd} >
        <MTIcon name="add" size={24} color="black" />
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

  _renderRow = (info, sec, row) => {
    const exist = this.state.selected.findIndex(name => name.toUpperCase() === info.toUpperCase());
    return (
      <Button
        activeOpacity={1.0}
        style={exist !== -1 ? styles.list_row_sel : styles.list_row}
        onPress={() => { this._onRowSelected(row, info); }}
      >
        <Text style={styles.txt_row_name} >{info}</Text>
      </Button>
    );
  }

  _renderDone = () => (
    <Button style={styles.btn_done} onPress={this._onPressDone} >
      <Text style={styles.txt_done} >DONE</Text>
    </Button>
  )

  render() {
    const width = consts.phone ? sizes.screen.width - 40 : 450;

    return (
      <PopupDialog
        width={width}
        height={null}
        ref={(node) => { this.popup = node; }}
        dialogStyle={styles.container}
        onDismissed={this._onDismissed}
      >
        <View style={styles.content} >
          { this._renderTitle() }
          { this._renderList() }
        </View>
        { this._renderDone() }
      </PopupDialog>
    );
  }
}


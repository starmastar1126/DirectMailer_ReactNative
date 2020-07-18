import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '@components/button';
import { IOIcon, MTIcon } from '@components/icons';
import TagInput from '@components/taginput';
import SongListView from '@components/songlist';
import { connect } from 'react-redux';
import apis from '@lib/apis';
import { MDSong } from '@model';
import { handler } from '@redux';
import { gstates } from '@common';
import { routeNames } from '@routes';
import { colors, sizes, consts, images } from '@theme';
import styles from './Search.styles';
import Contacts from 'react-native-contacts';
import Meteor from 'react-native-meteor';

const { navigation: navHandler } = handler;
const { hud: hudHandler, drop: dropHandler } = handler.alert;

class Search extends Component {

  constructor(props) {
    super(props);
    const { songData } = gstates;
    this.state = {
      userTags: [],
      suggestedTags: [],

      searchText: '',
      searchTags: [],

      reqSugText: '',
      reqSugRetry: 0,
      requestingSug: false,

      reqMediaText: '',
      reqMediaRetry: 0,
      requestingMedia: false,
      changedUserTag: false,
    };

    this.songs = songData.songs;
  }

  findTag(tags, tagFind) {
    if (tags === null || tags === undefined) {
      return -1;
    }
    for (let i = 0; i < tags.length; i += 1) {
      if (tags[i] === tagFind) {
        return i;
      }
    }
    return -1;
  }

  updateSuggestedTags(tags) {
    var isNewTagExist = false;
    tags.forEach((tag) => {
      if (this.state.suggestedTags.indexOf(tag) < 0) {
        isNewTagExist = true;
      }
    });
    this.setState({
      suggestedTags: tags,
    });
    if (isNewTagExist) {
      this.tagInput.setValue(this.state.searchText, this.state.searchTags, tags);
    }
  }

  componentDidMount() {
    this.requestUserTags();
    this.state.suggestedTags = [];
    this.state.text = '';
    this.state.tags = [];
    this.state.reqMediaText = '';
    this.state.reqSugText = '';
    this.updateSuggestedTags([]);
  }

  getSearchText() {
    return (`${this.state.searchText.trim()} ${this.state.searchTags.join(' ')}`).trim();
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
      navHandler.navback();
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError(consts.appName, 'Failed to save song');
    });

    // if (info.isVideo) {
    //   apis.addVideoObject(gstates.deviceId, info.songInfo);
    // } else {
    //   apis.addSongObject(gstates.deviceId, info.songInfo);
    // }
    // apis.saveSongFromSearch(info.songInfo);
    //
    // gstates.methods.loadSong(info);
    // navHandler.navback();
  }

  onPressClose = () => {
    // if (this.state.changedUserTag) {
    //   gstates.methods.initSongs();
    //   gstates.methods.loadSongs();
    // }
    navHandler.navback();
  }

  getAddList = () => {

    hudHandler.show('Requesting...');
    apis.getPlaylistByName(gstates.deviceId, '#disco').then((res) => {
      hudHandler.hide();
      var uniqueNames = [];
      var playListArray = [];

      for ( var i = 0; i < res.count; i++) {
        if(uniqueNames.indexOf(res.results[i].songId) === -1) {
          uniqueNames.push(res.results[i].songId);
          playListArray.push(res.results[i]);
        }
      }

      var result = [];
      for (var i = 0 ; i < playListArray.length ; i++) {
        for (var j = 0 ; j < this.songs.length ; j++) {
          if (playListArray[i].songId == this.songs[j]._id) {
            result.push(this.songs[j]);
          }
        }
      }

      this.songs = result;
      this.forceUpdate();
    }).catch(() => {
      hudHandler.hide();
    });
  }

  onSearchTextChanged = (text) => {
    this.state.searchText = text;
    this.requestSuggestedTags();
    this.requestSearchMedia();
  }

  onSearchKeyChanged = (text, tags) => {
    this.state.searchText = text && text.length ? text : '';
    this.state.searchTags = tags && tags.length ? tags : [];
    this.requestSearchMedia();
  }

  onPressSearchTag = (tag) => {
    this.requestAddUserTags([tag]);
  }
  onPressSuggestTag(tag) {
    this.requestAddUserTags([tag]);
  }

  onPressUserTag(/* tag */) {
  }
  onLongPressUserTag(tag) {
    this.requestRemoveUserTag(tag);
  }

  requestSearchMedia() {
    var searchText = this.getSearchText();
    if (this.state.requestingMedia === true || searchText === this.state.reqMediaText) {
      return;
    }

    console.log('requesting media with searchText: ', searchText, ', prevText: ', this.state.reqMediaText);
    this.state.requestingMedia = true;
    apis.searchMedia(searchText, gstates.deviceId).then((result) => {
      this.state.requestingMedia = false;
      this.state.reqMediaRetry = 0;
      this.state.reqMediaText = searchText;
      if (result) {
        const userTags = result.userTags && result.userTags.length ? result.userTags : [];
        const suggTags = result.suggestedTags && result.suggestedTags.length ? result.suggestedTags : [];
        const songList = result.searchResults && result.searchResults.length ? result.searchResults : [];

        this.state.userTags = userTags;
        this.songs = MDSong.parseList(songList);
        this.updateSuggestedTags(suggTags);
        this.forceUpdate();
      }

      setTimeout(() => {
        this.requestSearchMedia();
      }, 10);
    }).catch(() => {
      this.state.requestingMedia = false;
      this.state.reqMediaRetry += 1;
      if (this.state.reqMediaRetry < 5) {
        setTimeout(() => {
          this.requestSearchMedia();
        }, 10);
      }
    });
  }

  requestSuggestedTags() {
    const searchText = this.getSuggestedTags();
    if (this.state.requestingSug || searchText === this.state.reqSugText) {
      return;
    }

    console.log('requesting suggest tag with searchText: ', searchText, ', prevText: ', this.state.reqSugText);
    this.state.requestingSug = true;
    apis.getSuggestedTags(searchText).then((tags) => {
      this.state.requestingSug = false;
      this.state.reqSugRetry = 0;
      this.state.reqSugText = searchText;
      this.updateSuggestedTags(tags);

      setTimeout(() => {
        this.requestSuggestedTags();
      }, 10);
    }).catch((err) => {
      console.log(err);

      this.state.requestingSug = false;
      this.state.reqSugRetry += 1;
      if (this.state.reqSugRetry < 5) {
        setTimeout(() => {
          this.requestSuggestedTags();
        }, 10);
      }
    });
  }

  requestUserTags() {
    apis.getSearchTags(gstates.deviceId).then((result) => {
      this.setState({
        userTags: result && result.length ? result : [],
      });
    }).catch(() => {
    });
  }

  requestAddUserTags(tags) {
    apis.addSearchTags(gstates.deviceId, tags).then((result) => {
      this.setState({
        userTags: result && result.length ? result : [],
        changedUserTag: true,
      });
    }).catch(() => {
    });
  }

  requestRemoveUserTag(tag) {
    apis.removeSearchTag(gstates.deviceId, tag).then((result) => {
      this.setState({
        userTags: result && result.length ? result : [],
        changedUserTag: true,
      });
    }).catch(() => {
    });
  }

  _renderSearchBar = () => (
    <View style={styles.view_searchbar}>
      <Text style={styles.txt_search_mark} >{'C'}</Text>

      <View style={styles.view_search} >
        <TagInput
          ref={(node) => { this.tagInput = node; }}
          tagStyle={styles.input_tag}
          tagTextStyle={styles.input_tag_text}
          onChange={this.onSearchKeyChanged}
          onPressTag={this.onPressSearchTag}
        />
      </View>

      <Button onPress={this.onPressClose} style={styles.btn_close} >
        <IOIcon name="md-close" size={sizes.resize_value6(24)} color={colors.text} />
      </Button>
    </View>
  )

  _renderTags = () => {
    const keyTexts1 = this.state.userTags.map((searchKey, i) => (
      <Button
        key={`tag1_${i + 1}`}
        onPress={this.onPressUserTag.bind(this, searchKey, i)}
        onLongPress={this.onLongPressUserTag.bind(this, searchKey, i)}
        style={styles.search_tag1}
      >
        <Text style={styles.tag_text1}>{searchKey}</Text>
      </Button>
    ));
    const keyTexts2 = this.state.suggestedTags.map((searchKey, i) => (
      <Button
        onPress={this.onPressSuggestTag.bind(this, searchKey, i)}
        key={`tag2_${i + 1}`}
        style={styles.search_tag2}
      >
        <Text style={styles.tag_text2}>{searchKey}</Text>
      </Button>
    ));

    return (
      <View style={styles.tags_bar} >
        <View style={styles.tags_bar1} >
          {keyTexts1}
        </View>
        <View style={styles.tags_bar2} >
          {keyTexts2}
        </View>
      </View>
    );
  }

  _renderAddList = () => {
    const addedListImage = images.ic_live_audio_on
    return (
      <Button style={styles.addList} onPress={this.getAddList}>
        <Image source={addedListImage} style={[styles.img_ctrl_live_lg]} />
      </Button>
    );
  }

  gotoChat = () => {
    Contacts.getAll((err, contacts) => {
      console.log(contacts)
      gstates.chatUsers = [];
      contacts.map((users) => {
        var chatUser = {}
        if (contacts.length > 0 && users.phoneNumbers[0]) {
          chatUser.name = users.familyName + ' '+ users.givenName;
          chatUser.phoneNumber = users.phoneNumbers[0].number;
          if (users.emailAddresses[0]) {
            chatUser.email = users.emailAddresses[0].email
          }else {
            chatUser.email = ''
          }
          chatUser.avatar = users.thumbnailPath;
          gstates.chatUsers.push(chatUser)
        }
      })
      navHandler.navigate({ routeName: routeNames.app.chatUsers });
    })
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.search_bar} >
          { this._renderSearchBar() }
          {/* this._renderTags() */}
        </View>
        { this._renderAddList() }
        <View style={styles.search_list} >
          <SongListView
            songs={this.songs}
            onPressSong={this._onPressSong}
          />
        </View>
        <Button style={styles.chat_button} onPress={this.gotoChat} >
          <IOIcon name={'ios-arrow-up'} size={sizes.resize_value6(33)} color={colors.text} style={{ backgroundColor: '#00000000' }} />
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({ // eslint-disable-line
});

const mapDispatchToProps = dispatch => ({
  dispatcher: state => dispatch(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

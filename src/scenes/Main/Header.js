import React from 'react';
import { View, Text, Animated, Image, TextInput } from 'react-native';
import { Button } from '@components/button';
import { /* FAIcon, MTIcon */ } from '@components/icons';
import { gstates } from '@common';
import { shallowEqual, handler } from '@redux';
import apis from '@lib/apis';
import { MDSong } from '@model';
import { sizes, images } from '@theme';
import styles from './Header.styles';

const { main: mainHandler } = handler;

export default class Header extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (!shallowEqual(nextProps, this.props, 0, 2)) {
      return true;
    }
    if (!shallowEqual(nextState, this.state, 0, 2)) {
      return true;
    }
    return false;
  }

  _requestSearch = () => {
    var keyword = this.searchKeyword;
    if (gstates.searchState === 0 || (gstates.searchState === 2 && gstates.searchData.keyword === keyword)) {
      return;
    }
    gstates.searchData.loading = true;
    apis.searchMedia(keyword, gstates.deviceId).then((res) => {
      gstates.searchData.loading = false;
      gstates.searchData.keyword = keyword;

      if (gstates.searchState === 0) {
        return;
      }

      gstates.searchData.songs = MDSong.parseList(res.searchResults);
      if (gstates.searchState === 1 && gstates.searchData.songs.length > 0) {
        gstates.searchState = 2;
        mainHandler.updateView();
      }
      mainHandler.updateSearch();

      if (gstates.searchData.keyword !== this.searchKeyword) {
        this._requestSearch();
      }
    }).catch(() => {
      gstates.searchData.loading = false;
      if (gstates.searchData.keyword !== this.searchKeyword) {
        this._requestSearch();
      }
    });
  }

  _onSearchChanged = (text) => {
    this.searchKeyword = text;
    if (gstates.searchData.loading) {
      return;
    }
    this._requestSearch();
  }

  _renderLeft = () => {
    const { actions } = this.props;

    return (
      <Button
        onPress={actions.onPressHeaderLeft}
        onPressIn={actions.onButtonPressIn}
        onPressOut={actions.onButtonPressOut}
        style={styles.button}
      >
        <Animated.View style={[styles.content2, { opacity: this.animOpacity1 }]} >
          <Text style={styles.txt_left} >{'C'}</Text>
        </Animated.View>
        <Animated.Text style={[styles.txt_left, { color: 'black', opacity: this.animOpacity2 }]} >{'C'}</Animated.Text>
      </Button>
    );
  }

  _renderMid = () => {
    const { actions } = this.props;
    const imgLive = gstates.player.streamVOD ? images.ic_live_video_on : images.ic_live_video_off;
    let animOpacity3 = this.animOpacity2;
    let viewSearch = null;

    if (gstates.searchState > 0) {
      const onRefSearch = (node) => {
        if (!this.editSearch && node) {
          node.focus();
        }
        this.editSearch = node;
      };

      animOpacity3 = 0;
      viewSearch = (
        <View style={[styles.view_search, { opacity: gstates.searchState === 0 ? 0 : 1 }]} >
          <TextInput
            style={styles.edit_search}
            placeholder={'' /* 'Search [#, @, $, &]' */}
            placeholderTextColor="#ddd"
            keyboardAppearance="dark"
            ref={onRefSearch}
            onChangeText={this._onSearchChanged}
          />
          <View style={styles.view_search_underline} />
        </View>
      );
    } else {
      this.editSearch = null;
    }

    return (
      <View style={styles.view_mid} >
        <Animated.View style={{ opacity: animOpacity3 }}>
          <Button
            onPress={actions.onPressVOD}
            onPressIn={actions.onButtonPressIn}
            onPressOut={actions.onButtonPressOut}
            style={styles.button}
          >
            {/* <FAIcon name="bolt" size={32} color="white" /> */}
            <Image source={imgLive} style={styles.img_live} />
          </Button>
        </Animated.View>
        { viewSearch }
      </View>
    );
  }

  _renderRight = () => {
    const { actions } = this.props;
    return (
      <Button
        onPress={actions.onPressHeaderRight}
        onPressIn={actions.onButtonPressIn}
        onPressOut={actions.onButtonPressOut}
        style={styles.button}
      >
        {/* <MTIcon name="tv" size={24} color="white" /> */}
        <Image source={images.ic_header_tv} style={styles.img_right} />
      </Button>
    );
  }

  render() {
    const { animView } = this.props;
    this.animHeight = animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [sizes.header.height, sizes.header.height, sizes.header.height1, sizes.header.height1],
    });
    this.animOpacity = animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [1, 1, 0.75, 0.75],
    });
    this.animOpacity1 = animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 0, 1, 1],
    });
    this.animOpacity2 = animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [1, 1, 0, 0],
    });
    // const trans1 = sizes.resize_value6(15);
    // const animTransY = animView.interpolate({
    //   inputRange: [0, 1, 2, 3],
    //   outputRange: [trans1, trans1, 0, 0],
    // });

    return (
      <Animated.View style={[styles.container, { height: this.animHeight }]} >
        <Animated.View style={[styles.content1, { opacity: this.animOpacity2 }]} />
        <Animated.View style={[styles.buttons, { opacity: this.animOpacity/* , transform: [{ translateY: animTransY }] */ }]} >
          { this._renderLeft() }
          { this._renderMid() }
          { this._renderRight() }
        </Animated.View>
      </Animated.View>
    );
  }
}

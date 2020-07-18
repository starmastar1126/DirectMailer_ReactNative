import React from 'react';
import { View, Text, Animated, Image } from 'react-native';
import { Button } from '@components/button';
import { /* FAIcon, IOIcon, MCIcon */ MTIcon } from '@components/icons';
import TimeProgress from '@components/timeprogress';
import AudioStream from '@components/audiostream';
import Video from 'react-native-video';
import { AddPopup } from '@scenes/Playlist';
import { gstates } from '@common';
import apis from '@lib/apis';
import g from '@global';
import { handler, shallowEqual } from '@redux';
import { sizes, colors, images } from '@theme';
import { ViewType } from './types';
import styles from './Player.styles';

const { main: mainHandler } = handler;
// const { hud: hudHandler } = handler.alert;

export default class Player extends React.Component {

  timer = null;
  addSong = null;
  state = {
    showControl: false,
    initialLoad: true,
    currentUrl: '',
    animCtrlFullOpacity: new Animated.Value(0),
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (!shallowEqual(nextProps, this.props, 0, 2)) {
      return true;
    }
    if (!shallowEqual(nextState, this.state, 0, 2)) {
      return true;
    }
    return false;
  }

  _onStreamPlay = () => {
    gstates.methods.playSong();
  }
  _onStreamPause = () => {
    gstates.methods.pauseSong();
  }
  _onStreamEvent = (evt) => {
    if (evt.status === 'STOPPED' && gstates.player.loading) {
      if (gstates.player.streamPlayer) {
        gstates.player.streamPlayer.play();
      }
    } else if (evt.status === 'STREAMING') {
      const progress = parseInt(evt.progress || 0, 10);
      let needUpdate = false;

      if (gstates.player.loading) {
        gstates.player.loading = false;
        gstates.player.duration = 0;
        needUpdate = true;
      }
      if (progress !== gstates.player.currentTime) {
        gstates.player.currentTime = progress;
        needUpdate = true;
      }
      if (needUpdate) {
        mainHandler.updatePlayer();
      }
    }
  }

  _onMediaLoad = (params) => {
    console.log('onMediaLoad', params);
    gstates.player.duration = params.duration;
    gstates.player.loading = false;
    // gstates.methods.playSong();
  }
  _onMediaProgress = (params) => {
    if (!gstates.player.sliding && gstates.player.currentTime !== params.currentTime) {
      gstates.player.currentTime = params.currentTime;
      // mainHandler.updatePlayer();
      mainHandler.updateTime();
    }
  }
  _onMediaEnd = () => {
    console.log('onMediaEnd');
    gstates.methods.nextSong();
    apis.registerAction(gstates.deviceId, 'Next', { type: gstates.player.song.isVideo ? 'video' : 'audio' });
  }
  _onMediaShowControl = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (!gstates.player.fullscreen) {
      if (this.state.showControl) {
        this.state.animCtrlFullOpacity.setValue(0);
        this.setState({ showControl: false });
      }
      return;
    }

    if (!this.state.showControl) {
      this.timer = setTimeout(() => {
        if (this.state.showControl) {
          this._onMediaShowControl();
        }
      }, 5000);
    }

    Animated.timing(this.state.animCtrlFullOpacity, {
      duration: 300,
      toValue: this.state.showControl ? 0 : 1,
    }).start();
    this.setState({ showControl: !this.state.showControl });
  }

  updateFullscreen(fullscreen) {
    console.log('updateFullscreen - ', fullscreen);
    if (fullscreen) {
      this.props.actions.onPressFullscreen();
    } else {
      this.props.actions.onPressDismissFullscreen();
    }
  }
  _onPressFullscreen = () => {
    this.updateFullscreen(!gstates.player.fullscreen);
  }

  _onPressAdd = () => {
    const song = gstates.player.song;

    if (song && !song.isLive) {
      this.addSong = song;
      this.addPopup.show(song);
    }
  }
  _onAddPlaylist = (playlist) => {
    playlist;
    this.addPopup.hidePopup();
    // this.addPopup.hidePopup().then(() => {
    //   hudHandler.show('Requesting...');
    //   apis.addSongToPlaylist(gstates.deviceId, [playlist], this.addSong._id).then(() => {
    //     hudHandler.hide();
    //   }).catch(() => {
    //     hudHandler.hide();
    //   });
    // });
  }
  _onPlayPlaylist = (playlist) => {
    playlist;
    this.addPopup.hidePopup().then(() => {
      // this.props.home.state.initialLoad = true;
      // homeHandler.loadPlaylist(playlist);
    });
  }

  _renderSongInfo = (anim: Boolean) => {
    const { animView } = this.props;
    const height1 = sizes.expanded.titleHeight + sizes.expanded.controlHeight;
    const height2 = sizes.collapsed.height;
    const AnimView = anim ? Animated.View : View;
    const animHeight = !anim ? height1 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [height1, height1, height1, height2],
    });
    const animLeft = !anim ? 0 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 0, 0, height2],
    });
    const animFlex1to0 = !anim ? 1 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [1, 1, 1, 0],
    });
    const animFlex0to1 = !anim ? 0 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 0, 0, 1],
    });

    return (
      <AnimView style={[styles.view_info, { left: animLeft, height: animHeight }]} >
        { this._renderTitle(animFlex1to0, animFlex0to1, anim) }
        { this._renderControlLarge(anim) }
        { this._renderProgress(anim) }
      </AnimView>
    );
  }

  _renderTitle = (animFlex1to0, animFlex0to1, anim: Boolean) => {
    const { player } = gstates;
    const AnimView = anim ? Animated.View : View;
    const title = (player.song && player.song.title) || '';
    const artist = (player.song && player.song.artist) || '';
    // const album = (player.song && player.song.album) || '';
    // const station = 'Chilll Live';

    return (
      <View style={styles.view_title1} >
        <View style={styles.view_title2} >
          <AnimView style={{ flex: animFlex1to0 }} />
          <Text style={styles.txt_title} numberOfLines={1} >{artist}</Text>
          <View style={{ flex: 1 }} />
        </View>
        <View style={styles.view_title2} >
          <Text style={styles.txt_artist} numberOfLines={1} >{title}</Text>
          { this._renderControlSmall(anim) }
        </View>
        <AnimView style={{ flex: animFlex0to1 }} />
      </View>
    );
  }
  _renderControlSmall = (anim: Boolean) => {
    if (!anim) return null;

    const { animView, actions } = this.props;
    const { player } = gstates;
    const AnimView = anim ? Animated.View : View;
    const playImage = player.playing && !player.loading ? images.ic_player_pause_sm : images.ic_player_play_sm;
    const width = sizes.resize_value6(90);
    const height = sizes.resize_value6(32);
    const animWidth = !anim ? 0 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 0, 0, width],
    });
    const animHeight = !anim ? 0 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 0, 0, height],
    });
    const animOpacity = !anim ? 0 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 0, 0, 1],
    });
    return (
      <AnimView style={[styles.view_ctrl_sm, { width: animWidth, height: animHeight, opacity: animOpacity }]} >
        { this._renderImageButton(images.ic_player_backward_sm, styles.btn_ctrl_sm, styles.img_ctrl_sm, actions.onPressPrevSong) }
        { this._renderImageButton(playImage, styles.btn_ctrl_sm, styles.img_ctrl_play_sm, actions.onPressPlayToggle) }
        { this._renderImageButton(images.ic_player_forward_sm, styles.btn_ctrl_sm, styles.img_ctrl_sm, actions.onPressNextSong) }
      </AnimView>
    );
  }
  _renderControlLarge = (anim: Boolean) => {
    const { animView, actions } = this.props;
    const { player } = gstates;
    const AnimView = anim ? Animated.View : View;
    const playImage = player.playing && !player.loading ? images.ic_player_pause : images.ic_player_play;
    const liveVideoImage = player.streamLive ? images.ic_live_video_on : images.ic_live_video_off;
    const liveAudioImage = player.streamVOD ? images.ic_live_audio_on : images.ic_live_audio_off;
    const height = sizes.resize_value6(54);
    const animHeight = !anim ? height : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [height, height, height, 0],
    });
    const animOpacity = !anim ? 1 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [1, 1, 1, 0],
    });
    // const clrVod = gstates.player.streamVOD ? '#E8B800' : '#FFF';
    const clrLive = gstates.player.streamLive ? null : '#FFF';
    const clrFugo = gstates.player.streamFugo ? null : '#FFF';
    const addSize = sizes.resize_value6(28);

    return (
      <AnimView style={[styles.view_ctrl_lg, { height: animHeight, opacity: animOpacity }]} >
        <View />
        { this._renderImageButton(liveVideoImage, styles.btn_ctrl_lg, [styles.img_ctrl_live_lg, { tintColor: clrLive }], actions.onPressLive) }
        { this._renderImageButton(liveAudioImage, styles.btn_ctrl_lg, styles.img_ctrl_lg, actions.onPressVOD) }
        { this._renderImageButton(images.ic_player_backward, styles.btn_ctrl_lg, styles.img_ctrl_lg, actions.onPressPrevSong) }
        { this._renderImageButton(playImage, styles.btn_ctrl_lg, styles.img_ctrl_play_lg, actions.onPressPlayToggle) }
        { this._renderImageButton(images.ic_player_forward, styles.btn_ctrl_lg, styles.img_ctrl_lg, actions.onPressNextSong) }
        { this._renderImageButton(images.ic_fugo, styles.btn_ctrl_lg, [styles.img_ctrl_lg, { tintColor: clrFugo }], actions.onPressFugo) }
        { this._renderIconButton(MTIcon, 'add', addSize, colors.text, styles.btn_ctrl_lg, this._onPressAdd) }
        <View />
      </AnimView>
    );
  }
  _renderControlFull = () => (
    <Animated.View
      style={[styles.view_ctrl_full, { opacity: this.state.animCtrlFullOpacity }]}
      pointerEvents={this.state.showControl ? 'auto' : 'none'}
    >
      { this._renderTitle(1, 0, false) }
      { this._renderControlLarge(false) }
      { this._renderProgress(false) }
    </Animated.View>
  )

  _renderProgress = (anim: Boolean) => {
    const { animView, actions } = this.props;
    const { player } = gstates;
    const AnimView = anim ? Animated.View : View;
    const duration = player.duration;
    const currentTime = player.currentTime;
    const animBottom = !anim ? 8 : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [8, 8, 8, 0],
    });

    return (
      <AnimView style={[styles.view_progress, { marginBottom: animBottom }]} >
        <TimeProgress
          onSlidingStart={actions.onSlidingStart}
          onSlidingChange={actions.onSlidingChange}
          onSlidingComplete={actions.onSlidingComplete}
          maxTrackColor={colors.player.prog_track_max}
          minTrackColor={colors.player.prog_track_min}
          textColor={colors.text_light}
          duration={duration}
          playedTime={currentTime}
        />
      </AnimView>
    );
  }

  _renderImageButton = (image, btnStyle, imgStyle, press) => (
    <Button
      style={btnStyle}
      onPress={press}
      onPressIn={this.props.actions.onButtonPressIn}
      onPressOut={this.props.actions.onButtonPressOut}
    >
      <Image source={image} style={imgStyle} />
    </Button>
  )
  _renderIconButton = (Icon, name, size, color, btnStyle, press) => (
    <Button
      style={btnStyle}
      onPress={press}
      onPressIn={this.props.actions.onButtonPressIn}
      onPressOut={this.props.actions.onButtonPressOut}
    >
      <Icon name={name} size={size} color={color} />
    </Button>
  )

  _renderPlayer = () => {
    const { animView, animFull } = this.props;
    const { player } = gstates;

    if (!player.song) {
      return null;
    }

    const song = player.song;
    const isInvalid = g.isEmpty(song.url);
    const isLive = !isInvalid && song.isLive;
    const isFullscreen = song.isVideo && player.fullscreen;

    const top = sizes.expanded.titleHeight + sizes.expanded.controlHeight;
    const width = this.props.screen.width;
    const height = sizes.expanded.thumbHeight;
    const curTop = gstates.viewState === ViewType.collapsed ? 0 : top;
    const curWidth = gstates.viewState === ViewType.collapsed ? sizes.collapsed.height : width;
    const curHeight = gstates.viewState === ViewType.collapsed ? sizes.collapsed.height : height;
    const thumbImage = (player.song && player.song.thumbImage) ? { uri: player.song.thumbImage } : images.img_def_song_thumb;
    const animTop = (isFullscreen || player.fullani) ? animFull.interpolate({
      inputRange: [0, 1],
      outputRange: [curTop, 0],
    }) : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [top, top, top, 0],
    });
    const animWidth = (isFullscreen || player.fullani) ? animFull.interpolate({
      inputRange: [0, 1],
      outputRange: [curWidth, width],
    }) : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [width, width, width, sizes.collapsed.height],
    });
    const animHeight = (isFullscreen || player.fullani) ? animFull.interpolate({
      inputRange: [0, 1],
      outputRange: [curHeight, this.props.screen.height],
    }) : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [height, height, height, sizes.collapsed.height],
    });

    const playerStyle = song.isVideo ? styles.video_player : styles.audio_player;
    const styleWrapper = [styles.view_player, { width: animWidth, height: animHeight, top: animTop }];
    const stylePlayer = isFullscreen && !player.fullani ? styles.full_player : styleWrapper;
    let viewPlayer = null;
    let viewButton = null;

    // if (isFullscreen !== player.fullscreen) {
    //   if (this.timerFull) {
    //     clearTimeout(this.timerFull);
    //     this.timerFull = null;
    //   }
    //   this.timerFull = setTimeout(() => {
    //     this.timerFull = null;
    //     this.updateFullscreen(isFullscreen);
    //   }, 10);
    // }

    // if (gstates.player.videoPlayer && this.state.fullscreen && this.state.currentUrl !== song.url) {
    //   gstates.player.videoPlayer.setNativeProps({ fullscreen: false });
    // }
    // this.state.currentUrl = song.url;

    if (!isLive && gstates.streamPlayer) {
      gstates.streamPlayer.stop();
      gstates.streamPlayer = null;
    }

    if (!isInvalid) {
      if (isLive && song.isAudio) {
        viewPlayer = (<AudioStream
          ref={(node) => { player.streamPlayer = node; }}
          key={song.url}
          url={song.url}
          onStreamPlay={this._onStreamPlay}
          onStreamPause={this._onStreamPause}
          onStreamEvent={this._onStreamEvent}
        />);
      } else {
        viewPlayer = (<Video
          ref={(node) => { player.videoPlayer = node; }}
          key={song.url}
          playInBackground
          source={{ uri: song.url }}
          resizeMode="contain"
          muted={false}
          repeat={false}
          style={playerStyle}
          paused={!player.playing || player.loading}
          onLoad={this._onMediaLoad}
          onProgress={this._onMediaProgress}
          onEnd={this._onMediaEnd}
          onFullscreenPlayerWillDismiss={this.props.actions.onPressDismissFullscreen}
        />);
      }
      if (song.isVideo) {
        let viewControlFull = null;
        if (isFullscreen) {
          viewControlFull = this._renderControlFull();
        }

        viewButton = (<Button
          activeOpacity={1.0}
          onPress={this._onMediaShowControl}
          onLongPress={this._onPressFullscreen}
          style={styles.video_player}
        >
          { viewControlFull }
        </Button>);
      }
    }

    return (
      <Animated.View style={stylePlayer} >
        <Animated.Image
          key={player.song._id}
          source={thumbImage}
          style={[styles.img_thumb, { width: animWidth, height: animHeight }]}
        />
        { viewPlayer }
        { viewButton }
      </Animated.View>
    );
  }

  _renderAddPopup = () => (
    <AddPopup
      ref={(node) => { this.addPopup = node; }}
    />
  )

  render() {
    const { animView, animFull } = this.props;
    const { player } = gstates;
    const song = player.song;
    const isFullscreen = (song && song.isVideo && player.fullscreen) || player.fullani;
    const height1 = sizes.expanded.height;
    const height2 = sizes.collapsed.height;
    const curHeight = gstates.viewState === ViewType.collapsed ? height2 : height1;
    const animHeight = isFullscreen ? animFull.interpolate({
      inputRange: [0, 1],
      outputRange: [curHeight, this.props.screen.height],
    }) : animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [height1, height1, height1, height2],
    });

    return (
      <Animated.View style={[styles.container, { height: animHeight }]} >
        { this._renderSongInfo(true) }
        { this._renderPlayer() }
        { this._renderAddPopup() }
      </Animated.View>
    );
  }
}

import React, { Component } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import ImageEx from '@components/image';
import { Button } from '@components/button';
import { SLIcon } from '@components/icons';
import TimeProgress from '@components/timeprogress';
// import appconfig from '@app/config';
import { shallowEqual } from '@redux';
import { gstates } from '@common';
import { colors, sizes, images } from '@theme';
// import { ViewType } from './types';
import styles from './Profile.styles';

export default class Selfie extends Component {

  state = {
    thumbResizeMode: 'cover',
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

  _onChangeProfileZoom = () => {
    if (this.state.thumbResizeMode === 'cover') {
      this.setState({ thumbResizeMode: 'contain' });
    } else {
      this.setState({ thumbResizeMode: 'cover' });
    }
  }

  _renderTitle = () => {
    const { actions } = this.props;
    const { player, songData } = gstates;
    const canNext = songData.songs.length > 0 && player.index < songData.songs.length - 1;
    const canPrev = songData.songs.length > 0 && player.index > 0;
    const prevEnable = canPrev ? 'auto' : 'none';
    const nextEnable = canNext ? 'auto' : 'none';
    const prevStyle = { opacity: (canPrev ? 1 : 0) };
    const nextStyle = { opacity: (canNext ? 1 : 0) };
    const title = (player.song && player.song.title) || '';
    const artist = (player.song && player.song.artist) || '';
    const clrButton = '#222'; // colrs.text_white;

    return (
      <View style={styles.bar_title} >
        <View style={prevStyle} pointerEvents={prevEnable} >
          <Button
            onPress={actions.onPressPrevSong}
            onPressIn={actions.onButtonPressIn}
            onPressOut={actions.onButtonPressOut}
            style={styles.btn_change_song}
          >
            <SLIcon name="arrow-left" size={24} color={clrButton} />
          </Button>
        </View>
        <View style={styles.view_title} >
          <Text style={styles.txt_artist} numberOfLines={1} >{artist}</Text>
          <Text style={styles.txt_title} numberOfLines={1} >{title}</Text>
        </View>
        <View style={nextStyle} pointerEvents={nextEnable} >
          <Button
            onPress={actions.onPressNextSong}
            onPressIn={actions.onButtonPressIn}
            onPressOut={actions.onButtonPressOut}
            style={styles.btn_change_song}
          >
            <SLIcon name="arrow-right" size={24} color={clrButton} />
          </Button>
        </View>
      </View>
    );
  }

  _renderProfile = () => {
    const { actions } = this.props;
    const { player } = gstates;
    const thumbImage = player.song && player.song.thumbImage ? { uri: player.song.thumbImage } : images.img_def_song_thumb;

    if (!player.song /* !thumbUrl */) {
      return (<View style={styles.view_thumb} />);
    }

    const playImage = player.playing && !player.loading ? images.ic_profile_pause : images.ic_profile_play;
    const tintColor = player.playing && !player.loading ? '#FFF' : null;
    const opacity = player.playing && !player.loading ? 1 : 0.6;

    return (
      <Button
        activeOpacity={1.0}
        onDoublePress={this._onChangeProfileZoom}
        style={styles.view_thumb}
      >
        <ImageEx source={thumbImage} resizeMode={this.state.thumbResizeMode} style={styles.img_thumb} />
        <View style={styles.view_play} >
          <Button style={styles.btn_play} onPress={actions.onPressPlayToggle} >
            <Image source={playImage} style={[styles.img_play, { opacity, tintColor }]} />
          </Button>
        </View>
      </Button>
    );
  }

  _renderProgress = () => {
    const { actions } = this.props;
    const { player } = gstates;
    const duration = player.duration;
    const currentTime = player.currentTime;

    return (
      <View style={styles.view_progress} >
        <TimeProgress
          onSlidingStart={actions.onSlidingStart}
          onSlidingChange={actions.onSlidingChange}
          onSlidingComplete={actions.onSlidingComplete}
          maxTrackColor={colors.player.prog_track_max}
          minTrackColor={colors.player.prog_track_min}
          textColor={colors.text_alt}
          duration={duration}
          playedTime={currentTime}
        />
      </View>
    );
  }

  render() {
    const { animView } = this.props;
    const animOpacity = animView.interpolate({
      inputRange: [0, 1, 2, 10],
      outputRange: [1, 1, 0, 0],
    });
    const maxTrans = sizes.profile.titleHeight + sizes.profile.thumbHeight * 0.2;
    const height = sizes.profile.height;
    const animTrans = animView.interpolate({
      inputRange: [-1, 0, 1, 2, 10],
      outputRange: [height, height, 0, -maxTrans, -maxTrans],
    });

    return (
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: animTrans }] },
        ]}
      >
        <Animated.View
          style={[
            styles.content,
            { opacity: animOpacity },
          ]}
        >
          { this._renderTitle() }
          { this._renderProfile() }
          { this._renderProgress() }
        </Animated.View>
      </Animated.View>
    );
  }
}

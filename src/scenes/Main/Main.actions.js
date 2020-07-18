import { Animated } from 'react-native';
import { gstates } from '@common';
import { handler } from '@redux';
import { routeNames } from '@routes';
import { setAppFullscreen } from '@components/appbridge';
import { ViewType } from './types';

const { navigation: navHandler, main: mainHandler } = handler;

export default class MainActions {
  main = null;

  constructor(main) {
    this.main = main;
  }

  onButtonPressIn = () => {
    gstates.panMovable = false;
  }

  onButtonPressOut = () => {
    gstates.panMovable = true;
  }

  onPressHeaderLeft = () => {
    if (gstates.viewState === ViewType.profile) {
      if (gstates.searchState === 0) {
        gstates.searchState = 1;
      } else {
        gstates.searchState = 0;
      }
      mainHandler.updateView();
    } else {
      navHandler.navigate({ routeName: routeNames.app.search });
    }
  }

  onPressHeaderRight = () => {
    navHandler.navigate({ routeName: routeNames.app.playlist });
  }

  onPressHeaderLive = () => {
    this.onPressStartLive();
  }

  onPressLive = () => {
    if (gstates.player.streamLive) {
      gstates.methods.stopLive();
    } else {
      gstates.methods.startLive();
    }
  }
  onPressVOD = () => {
    // if (gstates.player.streamVOD) {
    //   gstates.methods.stopVOD();
    // } else {
    //   gstates.methods.startVOD();
    // }
    if (!gstates.userId) {
      navHandler.navigate({ routeName: routeNames.app.smsmobile });
    } else {
      const song = gstates.player.song;
      if (song && !song.isLive) {
        gstates.methods.addSongToPlaylist(song, '#disco');
      }
    }
  }
  onPressFugo = () => {
    // gstates.player.streamFugo = !gstates.player.streamFugo;
    // mainHandler.updatePlayer();
    const song = gstates.player.song;
    if (song && !song.isLive) {
      gstates.methods.addSongToPlaylist(song, '#fuego');
    }
  }

  onPressMenu = () => {
  }

  onPressPlayToggle = () => {
    gstates.methods.togglePlay();
  }

  onPressPrevSong = () => {
    gstates.methods.prevSong();
  }

  onPressNextSong = () => {
    gstates.methods.nextSong();
  }

  onPressProfile = () => {
  }

  onSlidingStart = () => {
    gstates.player.sliding = true;
  }

  onSlidingChange = (value) => {
    const time = value * gstates.player.duration;
    gstates.methods.seekPlayer(time);
  }

  onSlidingComplete = () => {
    gstates.player.sliding = false;
  }

  onPressFullscreen = () => {
    if (gstates.player.fullscreen) return;

    console.log('onPressFullscreen');
    gstates.player.fullscreen = true;
    gstates.player.fullani = true;
    setAppFullscreen(true);
    Animated.timing(this.main.state.animFull, {
      toValue: 1,
      duration: 500,
    }).start(() => {
      gstates.player.fullani = false;
      mainHandler.updatePlayer();
    });
    mainHandler.updatePlayer();
  }
  onPressDismissFullscreen = () => {
    if (!gstates.player.fullscreen) return;

    console.log('onPressDismissFullscreen');
    gstates.player.fullscreen = false;
    gstates.player.fullani = true;
    setAppFullscreen(false);
    Animated.timing(this.main.state.animFull, {
      toValue: 0,
      duration: 500,
    }).start(() => {
      gstates.player.fullani = false;
      mainHandler.updatePlayer();
    });
    mainHandler.updatePlayer();
  }
}

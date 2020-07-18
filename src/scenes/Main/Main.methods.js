import { gstates } from '@common';
import { MDSong } from '@model';
import { handler } from '@redux';
import apis from '@lib/apis';
import g from '@global';
import _ from 'lodash';
import { getYoutubeVideoUrl, isYoutubeUrl } from '@components/youtube';
import { setNowPlaying } from '@components/appbridge';
import { ViewType } from './types';

const { main: mainHandler } = handler;
const { hud: hudHandler, drop: dropHandler } = handler.alert;

export default class MainMethods {

  main = null;

  constructor(main) {
    this.main = main;
  }

  initSongs = () => {
    const { songData, player } = gstates;
    player.index = -1;
    player.playing = false;
    player.song = null;

    songData.songs = [];
  }

  loadSongs = () => {
    const { songData, player } = gstates;
    const count = songData.songs.length;

    // while loading, do not load again. if loaded all, do not load too
    if (songData.loading || (songData.total !== 0 && count >= songData.total)) return;

    // let's request tags first if not exist
    if (!songData.tags) {
      gstates.songData.loading = true;
      apis.getSearchTags(gstates.deviceId).then((tags) => {
        tags = tags || [];
        gstates.songData.tags = tags;
        gstates.songData.loading = false;
        this.loadSongs();
      }).catch(() => {
        gstates.songData.loading = false;
      });
      return;
    }

    // request songs
    gstates.songData.loading = true;
    mainHandler.updateList();

    apis.getPlaylist(gstates.deviceId, songData.tags, songData.limit, count).then((res) => {
      const recvSongs = MDSong.parseList(res.results);
      const songs = gstates.songData.songs.concat(recvSongs);
      gstates.songData.total = res.count;
      gstates.songData.songs = songs;
      gstates.songData.loading = false;

      // console.log(recvSongs, res.results);

      if (!player.song && songs.length > 0) {
        this.loadSong(songs[0], 0);
      }

      mainHandler.updateList();
    }).catch(() => {
      gstates.songData.loading = false;
      mainHandler.updateList();
    });
  }

  loadMoreSongs = () => {
    if (!gstates.songData.main) return;
    this.loadSongs();
  }

  loadPlaylistSongs = (songs, initSong) => {
    gstates.songData.total = songs.count;
    gstates.songData.songs = songs;
    gstates.songData.loading = false;
    gstates.songData.main = false;

    if (initSong) {
      this.loadSong(initSong);
    }
    mainHandler.updateList();
  }

  loadPlaylist = (name, initSong, completed) => {
    apis.getPlaylistByName(gstates.deviceId, name).then((res) => {
      let orderedList = res.results.sort((song1, song2) => {
        const order1 = song1.order ? song1.order : 0;
        const order2 = song2.order ? song2.order : 0;
        return order1 - order2;
      });
      orderedList = _.map(orderedList, info => info.songObject);
      const songs = MDSong.parseList(orderedList);

      if (!initSong && songs.length && songs.length > 0) initSong = songs[0];

      this.loadPlaylistSongs(songs, initSong);
      completed && completed();
    }).catch(() => {});
  }

  updateNowPlaying = () => {
    const { player } = gstates;
    setNowPlaying(player.playing && !player.loading, player.song.thumbImage, player.song.title, player.song.artist);
  }

  loadSong = (song, index) => {
    const { player } = gstates;

    if (g.isNull(index)) {
      index = _.find(gstates.songData.songs, s => s._id && s._id === song._id) > 0;
      if (index === -1) index = player.idnex;
    }

    player.song = song;
    player.index = index === 0 ? 0 : (index || player.index);
    player.loading = true;
    player.duration = 0;
    player.currentTime = 0;
    player.streamFugo = false;

    if (song.isVideo && g.isEmpty(song.url)) {
      if (isYoutubeUrl(song.videoUrl)) {
        getYoutubeVideoUrl(song.videoUrl).then((url) => {
          song.url = url;
          mainHandler.updatePlayer();
        });
      } else {
        song.url = song.videoUrl;
      }
    }

    this.updateNowPlaying();
    mainHandler.updatePlayer();
    apis.registerAction(gstates.deviceId, 'Play', { type: song.isVideo ? 'video' : 'audio' });
  }
  loadSongAt = (index) => {
    const { songData } = gstates;
    if (index === null || index === undefined || index < 0 || index >= songData.songs.length) {
      this.pauseSong();
      return;
    }
    this.loadSong(songData.songs[index], index);
  }

  prevSong = () => {
    if (gstates.player.shuffle) {
      this.shuffleSong();
    } else {
      this.loadSongAt(gstates.player.index - 1);
    }
  }

  nextSong = () => {
    if (gstates.player.shuffle) {
      this.shuffleSong();
    } else {
      this.loadSongAt(gstates.player.index + 1);
    }
  }

  shuffleSong = () => {
    const { songData, player } = gstates;
    var index = player.index;
    while (songData.songs.length > 1 && index === player.index) {
      index = Math.floor(Math.random() * songData.songs.length);
    }
    handler.loadSongAt(index);
  }

  togglePlay = () => {
    gstates.player.playing = !gstates.player.playing;
    this.updateNowPlaying();
    mainHandler.updatePlayer();
  }

  playSong = () => {
    if (gstates.player.playing) return;
    gstates.player.playing = true;
    this.updateNowPlaying();
    mainHandler.updatePlayer();
  }
  pauseSong = () => {
    if (!gstates.player.playing) return;
    gstates.player.playing = false;
    this.updateNowPlaying();
    mainHandler.updatePlayer();
  }

  seekPlayer = (time) => {
    if (gstates.player.loading === false && gstates.player.videoPlayer) {
      gstates.player.currentTime = time;
      gstates.player.videoPlayer.seek(time);
      // mainHandler.updatePlayer();
      mainHandler.updateTime();
    }
  }

  goLive = () => {
    apis.registerAction(gstates.deviceId, 'Go Live', { type: 'audio' });
  }

  startStream = (type, name) => {
    apis.startStream(type, name.toLowerCase(), gstates.deviceId).then(() => {
      hudHandler.hide();
      if (type === 'live') {
        gstates.player.streamLive = true;
      } else {
        gstates.player.streamVOD = true;
      }
      mainHandler.updatePlayer();
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError('Chilll', 'Failed to start stream');
    });
  }
  stopStream = (type, name) => {
    hudHandler.show('Ending...');
    apis.endStream(type, name).then(() => {
      hudHandler.hide();
      if (type === 'live') {
        gstates.player.streamLive = false;
      } else {
        gstates.player.streamVOD = false;
      }
      mainHandler.updatePlayer();
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError('Chilll', 'Failed to stop stream');
    });
  }
  startLive = () => {
    if (!gstates.liveName || gstates.liveName === '') {
      hudHandler.show('Starting...');
      apis.createLiveStation(gstates.deviceName).then(() => {
        gstates.setLiveName(gstates.deviceName);
        this.startStream('live', gstates.liveName);
      }).catch(() => {
        hudHandler.hide();
        dropHandler.showError('Chilll', 'Failed to create live stream');
      });
    } else {
      hudHandler.show('Starting...');
      this.startStream('live', gstates.liveName);
    }
  }
  stopLive = () => {
    this.stopStream('live', gstates.liveName);
  }
  startVOD = () => {
    if (!gstates.vodName || gstates.vodName === '') {
      hudHandler.show('Starting...');
      apis.createVODStation(gstates.deviceName).then(() => {
        gstates.setVODName(gstates.deviceName);
        this.startStream('vod', gstates.vodName);
      }).catch(() => {
        hudHandler.hide();
        dropHandler.showError('Chilll', 'Failed to create vod stream');
      });
    } else {
      hudHandler.show('Starting...');
      this.startStream('vod', gstates.vodName);
    }
  }
  stopVOD = () => {
    this.stopStream('vod', gstates.vodName);
  }

  gotoPlayView = () => {
    this.main.pan.changeView(ViewType.expanded, false, false);
  }

  addSongToPlaylist = (song, playlist) => {
    hudHandler.show('Requesting...');
    apis.addSongToPlaylist(gstates.deviceId, [playlist], song._id, '').then(() => {
      gstates.playlist = null;
      hudHandler.hide();

      apis.registerAction(gstates.deviceId, 'Add', { type: song.isVideo ? 'video' : 'audio' });
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError('Add Playlist', `Failed to add song to ${playlist}.`);
    });
  }
}

import { getYoutubeVideoUrl, isYoutubeUrl } from '@components';
import { global as g } from '@common';
import { getState, dispatch } from '../utils';
import playerActions from './actions';

const handler = {
  toggle: (...args) => {
    dispatch(playerActions.toggle(...args));
  },
  play: (...args) => {
    dispatch(playerActions.play(...args));
  },
  pause: (...args) => {
    dispatch(playerActions.pause(...args));
  },
  sliding: (...args) => {
    dispatch(playerActions.sliding(...args));
  },
  currentTime: (...args) => {
    dispatch(playerActions.currentTime(...args));
  },
  reset: (...args) => {
    dispatch(playerActions.reset(...args));
  },
  load: (...args) => {
    dispatch(playerActions.load(...args));
  },
  loadEnd: (...args) => {
    dispatch(playerActions.loadEnd(...args));
  },
  repeat: (...args) => {
    dispatch(playerActions.repeat(...args));
  },
  shuffle: (...args) => {
    dispatch(playerActions.shuffle(...args));
  },

  loadSong: (songInfo) => {
    if (!songInfo) return;

    console.log('loadSong: ', songInfo);
    const state = getState();
    const songs = state.main.songData.songList;
    const songIndex = songs.findIndex(info => songInfo.songId === info.songId);
    const song = songIndex >= 0 && songIndex < songs.length ? songs[songIndex] : songInfo;
    const youtube = song.isVideo && g.isEmpty(song.url) && isYoutubeUrl(song.videoUrl);

    if (youtube) {
      getYoutubeVideoUrl(song.videoUrl).then((url) => {
        song.url = url;
        handler.load(song, songIndex);
      });
    }
    handler.load(song, songIndex);
  },

  loadSongByIndex: (songIndex) => {
    const state = getState();
    const songs = state.main.songData.songList;
    if (songIndex < 0 || songIndex >= songs.length) {
      handler.pause();
      return;
    }

    const song = songs[songIndex];
    handler.loadSong(song);
  },
  loadSongById: (songId) => {
    const state = getState();
    const songs = state.main.songData.songList;
    const song = songs.find(info => info.songId === songId);
    handler.loadSong(song);
  },

  prevSong: () => {
    const state = getState();
    if (state.player.shuffle) {
      handler.shuffleSong();
    } else {
      handler.loadSongByIndex(state.player.songIndex - 1);
    }
  },

  nextSong: () => {
    const state = getState();
    if (state.player.shuffle) {
      handler.shuffleSong();
    } else {
      handler.loadSongByIndex(state.player.songIndex + 1);
    }
  },

  shuffleSong: () => {
    const state = getState();
    const songs = state.main.songData.songList;
    var songIndex = state.player.songIndex;
    if (songs.length > 1) {
      while (songIndex === state.player.songIndex) {
        songIndex = Math.floor(Math.random() * songs.length);
      }
      handler.loadSongByIndex(songIndex);
    }
  },
};

export default handler;

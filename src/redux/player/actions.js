import ActionTypes from './types';

const player = {
  toggle: () => ({
    type: ActionTypes.TOGGLE,
    payload: {},
  }),

  play: () => ({
    type: ActionTypes.PLAY,
    payload: {},
  }),

  pause: () => ({
    type: ActionTypes.STATE,
    payload: { playing: false },
  }),

  sliding: sliding => ({
    type: ActionTypes.STATE,
    payload: { sliding },
  }),

  currentTime: currentTime => ({
    type: ActionTypes.STATE,
    payload: { currentTime },
  }),

  reset: () => ({
    type: ActionTypes.RESET,
    payload: {},
  }),

  load: (song, songIndex) => ({
    type: ActionTypes.STATE,
    payload: {
      loading: true,
      currentTime: 0,
      duration: 0,
      song,
      songIndex,
    },
  }),

  loadEnd: duration => ({
    type: ActionTypes.STATE,
    payload: { loading: false, duration },
  }),

  repeat: repeat => ({
    type: ActionTypes.STATE,
    payload: { repeat },
  }),

  shuffle: shuffle => ({
    type: ActionTypes.STATE,
    payload: { shuffle },
  }),
};

export default player;

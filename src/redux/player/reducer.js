import ActionTypes from './types';

const initialState = {
  playing: false,
  loading: false,
  sliding: false,
  repeat: false,
  shuffle: false,
  currentTime: 0,
  duration: 0,
  song: null,
  songIndex: -1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE:
      if (state.loading) {
        return state;
      }
      return {
        ...state,
        playing: !state.playing,
        ...action.payload,
      };

    case ActionTypes.PLAY:
      if (state.playing) {
        return state;
      }
      return {
        ...state,
        playing: true,
        ...action.payload,
      };

    case ActionTypes.RESET:
      return {
        ...state,
        playing: true,
        loading: false,
        currentTime: 0,
        duration: 0,
        song: null,
        songIndex: -1,
      };

    case ActionTypes.STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

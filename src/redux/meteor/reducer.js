import ActionTypes from './types';

const initialState = {
  status: {
    connected: false,
  },
  songs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.DATA_CHANGED:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

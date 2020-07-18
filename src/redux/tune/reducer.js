import ActionTypes from './types';

const initialState = {
  index: -1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TUNE_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

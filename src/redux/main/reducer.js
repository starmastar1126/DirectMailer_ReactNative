import ActionTypes from './types';

const initialState = {
  user: {
    loggedIn: false,
  },

  selfieFlag: 0,
  playerFlag: 0,
  listFlag: 0,
  viewFlag: 0,
  timeFlag: 0,
  searchFlag: 0,
};

export default function (state = initialState, action) {
  const { user } = state;

  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return {
        ...state,
        user: {
          ...user,
          ...action.payload,
        },
      };

    case ActionTypes.PLAYER_FLAG:
      return {
        ...state,
        playerFlag: (state.playerFlag + 1) % 1000,
      };

    case ActionTypes.SELFIE_FLAG:
      return {
        ...state,
        selfieFlag: (state.selfieFlag + 1) % 1000,
      };

    case ActionTypes.LIST_FLAG:
      return {
        ...state,
        listFlag: (state.listFlag + 1) % 1000,
      };

    case ActionTypes.VIEW_FLAG:
      return {
        ...state,
        viewFlag: (state.viewFlag + 1) % 1000,
      };

    case ActionTypes.TIME_FLAG:
      return {
        ...state,
        timeFlag: (state.timeFlag + 1) % 1000,
      };

    case ActionTypes.SEARCH_FLAG:
      return {
        ...state,
        searchFlag: (state.searchFlag + 1) % 1000,
      };

    default:
      return state;
  }
}

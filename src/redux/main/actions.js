import ActionTypes from './types';

const actions = {
  user: {
    loggedIn: (loggedIn: Boolean) => ({
      type: ActionTypes.LOGGED_IN,
      payload: { loggedIn },
    }),
  },

  updatePlayer: () => ({
    type: ActionTypes.PLAYER_FLAG,
    payload: {},
  }),
  updateSelfie: () => ({
    type: ActionTypes.SELFIE_FLAG,
    payload: {},
  }),
  updateList: () => ({
    type: ActionTypes.LIST_FLAG,
    payload: {},
  }),
  updateView: () => ({
    type: ActionTypes.VIEW_FLAG,
    payload: {},
  }),
  updateTime: () => ({
    type: ActionTypes.TIME_FLAG,
    payload: {},
  }),
  updateSearch: () => ({
    type: ActionTypes.SEARCH_FLAG,
    payload: {},
  }),
};

export default actions;

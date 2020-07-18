import ActionTypes from './types';

const actions = {
  user: {
    loggedIn: (loggedIn: Boolean) => ({
      type: ActionTypes.LOGGED_IN,
      payload: { loggedIn },
    }),
  },

  updateJudge: () => ({
    type: ActionTypes.JUDGE_FLAG,
    payload: {},
  }),
};

export default actions;

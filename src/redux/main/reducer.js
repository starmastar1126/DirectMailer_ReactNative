import ActionTypes from './types';

const initialState = {
  user: {
    loggedIn: false,
  },

  judgeFlag: 0,
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

    case ActionTypes.JUDGE_FLAG:
      return {
        ...state,
        judgeFlag: (state.judgeFlag + 1),
      };

    default:
      return state;
  }
}

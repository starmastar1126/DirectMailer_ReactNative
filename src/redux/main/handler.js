import { dispatch } from '../utils';
import actions from './actions';

const handler = {
  user: {
    loggedIn: (...args) => {
      dispatch(actions.user.loggedIn(...args));
    },
  },

  updateJudge: (...args) => {
    dispatch(actions.updateJudge(...args));
  },
};

export default handler;

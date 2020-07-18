import { dispatch } from '../utils';
import actions from './actions';

const handler = {
  user: {
    loggedIn: (...args) => {
      dispatch(actions.user.loggedIn(...args));
    },
  },

  updatePlayer: (...args) => {
    dispatch(actions.updatePlayer(...args));
  },
  updateSelfie: (...args) => {
    dispatch(actions.updateSelfie(...args));
  },
  updateList: (...args) => {
    dispatch(actions.updateList(...args));
  },
  updateView: (...args) => {
    dispatch(actions.updateView(...args));
  },
  updateTime: (...args) => {
    dispatch(actions.updateTime(...args));
  },
  updateSearch: (...args) => {
    dispatch(actions.updateSearch(...args));
  },
};

export default handler;

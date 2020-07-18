import ActionTypes from './types';

export default {
  changeTune: index => ({
    type: ActionTypes.TUNE_STATE,
    payload: { index },
  }),
};

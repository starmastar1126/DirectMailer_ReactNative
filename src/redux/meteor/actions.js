import ActionTypes from './types';

function dataChanged(data) {
  return {
    type: ActionTypes.DATA_CHANGED,
    payload: data,
  };
}

export default {
  dataChanged,
};

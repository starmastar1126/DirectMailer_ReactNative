import ActionTypes from './types';
import { METEOR } from '../../actions/actionsTypes';

const initialState = {
  status: {
    connected: false,
  },
  connecting: false,
  connected: false,
  errorMessage: '',
  failure: false,
  songs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.DATA_CHANGED:
      return {
        ...state,
        ...action.payload,
      };
      case METEOR.REQUEST:
          return { ...state,
              connecting: true
          };
      case METEOR.SUCCESS:
          return { ...state,
              connecting: false,
              connected: true,
              failure: false
          };
      case METEOR.FAILURE:
          return { ...state,
              connecting: false,
              connected: false,
              failure: true,
              errorMessage: action.err
          };
      case METEOR.DISCONNECT:
          return initialState;
    default:
      return state;
  }
}

import types from './types';
import { rememberAccount } from './actions';

const initialState = {
  email: null,
  password: null,
  rememberMe: false,
};

function rememberAccount(state, action) {
  return {
    ...state,
    email: action.payload.email,
    password: action.payload.password,
    rememberMe: true,
  };
}

export function accountReducer(state = initialState, action) {
  switch(action.type) {
    case types.REMEMBER_ACCOUNT:
      return rememberAccount(state, action);
    case types.CLEAR_ACCOUNT:
      return {
        ...state,
        email: null,
        password: null,
        rememberMe: false,
      };
    default:
      return state;
  }
}

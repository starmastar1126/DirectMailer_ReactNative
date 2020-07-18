import ActionTypes from './ActionTypes';
import StateUtils from './StateUtils';

function checkInitialState(initialState) {
  if (!initialState) {
    throw Error('initialState arg is required');
  }

  if (typeof initialState.navkey !== 'string') {
    throw Error('initialState must have an attribute **key** which is a string');
  }

  if (typeof initialState.index !== 'number') {
    throw Error('initialState must have an attribute **index** which is a number');
  }

  if (!(initialState.routes instanceof Array)) {
    throw Error('initialState must have an attribute **route** which is an array');
  }
}

function isActionPotentiallyApplicable(action, state) {
  return action && action.navkey === state.navkey;
}

export function navigationReducer(initialState, defReducer) {
  checkInitialState(initialState);

  return function stackReducerFn(state = initialState, action) {
    if (!isActionPotentiallyApplicable(action, state)) {
      return state;
    }

    switch (action.type) {
      case ActionTypes.PUSH_ROUTE:
        if (state.routes[state.index].key === (action.payload && action.payload.route.key)) {
          return state;
        }
        return StateUtils.push(state, action.payload.route);
      case ActionTypes.POP_ROUTE:
        return StateUtils.pop(state);
      case ActionTypes.RESET_ROUTE:
        return StateUtils.reset(state, action.payload.routes, action.payload.index);
      case ActionTypes.REPLACE:
        return StateUtils.replaceAt(state, state.routes[state.index].key, action.payload.route);
      case ActionTypes.REPLACE_AT:
        return StateUtils.replaceAt(state, action.payload.routeKey, action.payload.route);
      case ActionTypes.REPLACE_AT_INDEX:
        return StateUtils.replaceAtIndex(state, action.payload.index, action.payload.route);
      case ActionTypes.JUMP_TO:
        return StateUtils.jumpTo(state, action.payload.routeKey);
      case ActionTypes.JUMP_TO_INDEX:
        return StateUtils.jumpToIndex(state, action.payload.routeIndex);
      case ActionTypes.BACK:
        return StateUtils.back(state);
      case ActionTypes.FORWARD:
        return StateUtils.forward(state);
      case ActionTypes.POP_TO_INDEX:
        return StateUtils.popToIndex(state, action.payload.routeIndex);
      case ActionTypes.POP_TO:
        return StateUtils.popTo(state, action.payload.routeKey);
      case ActionTypes.POP_N:
        return StateUtils.popN(state, action.payload.count);
      default:
        break;
    }

    if (defReducer) {
      return defReducer(action, state) || state;
    }
    return state;
  };
}

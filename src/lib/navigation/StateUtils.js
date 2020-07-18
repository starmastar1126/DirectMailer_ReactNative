import { StateUtils as NavigationStateUtils } from 'react-navigation';

const invariant = require('fbjs/lib/invariant');

const StateUtils = {
  ...NavigationStateUtils,

  popToIndex(state, index) {
    if (index === state.index) {
      return state;
    }

    invariant(!!state.routes[index], 'invalid index %s to popToIndex', index);

    const routes = state.routes.slice(0, index + 1);
    return {
      ...state,
      index: routes.length - 1,
      routes,
    };
  },

  popN(state, count) {
    invariant(count <= state.index, 'invalid count %s to popN', count);

    const routes = state.routes.slice(0, state.index - count + 1);
    return {
      ...state,
      index: routes.length - 1,
      routes,
    };
  },

  popTo(state, keyOrIndex) {
    let index = keyOrIndex;
    if (typeof keyOrIndex === 'string') {
      index = StateUtils.indexOf(state, keyOrIndex);
    }
    return StateUtils.popToIndex(state, index);
  },

  current(state) {
    return state.routes[state.index];
  },
};

export default StateUtils;

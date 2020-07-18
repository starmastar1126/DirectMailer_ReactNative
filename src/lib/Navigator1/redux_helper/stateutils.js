import { NavigationExperimental } from 'react-native';

const invariant = require('fbjs/lib/invariant');

const StateUtils = {
  ...NavigationExperimental.StateUtils,

  popToIndex(state, index) {
    if (index === state.index) {
      return state;
    }

    invariant(!!state.routes[index], 'invalid index %s to jump to', index);

    const routes = state.routes.slice(0, index + 1);
    return {
      ...state,
      index: routes.length - 1,
      routes,
    };
  },

  popTo(state, key) {
    const index = StateUtils.indexOf(state, key);
    return StateUtils.popToIndex(state, index);
  },

  current(state) {
    return state.routes[state.index];
  },
};

export default StateUtils;

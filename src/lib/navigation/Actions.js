import { NavigationActions } from 'react-navigation';
import ActionTypes from './ActionTypes';

const defnav = 'root';

export default {
  pushRoute: (route, navkey = defnav) => ({
    type: ActionTypes.PUSH_ROUTE,
    navkey,
    payload: {
      route,
    },
  }),

  popRoute: (navkey = defnav) => ({
    type: ActionTypes.POP_ROUTE,
    navkey,
    payload: {
    },
  }),

  popToIndex: (routeIndex, navkey = defnav) => ({
    type: ActionTypes.POP_TO_INDEX,
    navkey,
    payload: {
      routeIndex,
    },
  }),

  popTo: (routeKey, navkey = defnav) => ({
    type: ActionTypes.POP_TO,
    navkey,
    payload: {
      routeKey,
    },
  }),

  popN: (count, navkey = defnav) => ({
    type: ActionTypes.POP_N,
    navkey,
    payload: {
      count,
    },
  }),

  jumpToIndex: (routeIndex, navkey = defnav) => ({
    type: ActionTypes.JUMP_TO_INDEX,
    navkey,
    payload: {
      routeIndex,
    },
  }),

  jumpTo: (routeKey, navkey = defnav) => ({
    type: ActionTypes.JUMP_TO,
    navkey,
    payload: {
      routeKey,
    },
  }),

  reset: (routes, index, navkey = defnav) => ({
    type: ActionTypes.RESET_ROUTE,
    navkey,
    payload: {
      routes,
      index,
    },
  }),

  replace: (route, navkey = defnav) => ({
    type: ActionTypes.REPLACE,
    navkey,
    payload: {
      route,
    },
  }),

  replaceAt: (routeKey, route, navkey = defnav) => ({
    type: ActionTypes.REPLACE_AT,
    navkey,
    payload: {
      routeKey,
      route,
    },
  }),

  replaceAtIndex: (index, route, navkey = defnav) => ({
    type: ActionTypes.REPLACE_AT_INDEX,
    navkey,
    payload: {
      index,
      route,
    },
  }),

  back: (navkey = defnav) => ({
    type: ActionTypes.BACK,
    navkey,
    payload: {
    },
  }),

  forward: (navkey = defnav) => ({
    type: ActionTypes.FORWARD,
    navkey,
    payload: {
    },
  }),

  navigate: (payload, navkey = defnav) => ({
    ...NavigationActions.navigate(payload),
    navkey,
  }),
  navback: (payload, navkey = defnav) => ({
    ...NavigationActions.back(payload),
    navkey,
  }),
  navinit: (payload, navkey = defnav) => ({
    ...NavigationActions.init(payload),
    navkey,
  }),
  navreset: (payload, navkey = defnav) => ({
    ...NavigationActions.reset(payload),
    navkey,
  }),
  navuri: (payload, navkey = defnav) => ({
    ...NavigationActions.uri(payload),
    navkey,
  }),
  navSetParams: (payload, navkey = defnav) => ({
    ...NavigationActions.setParams(payload),
    navkey,
  }),
};

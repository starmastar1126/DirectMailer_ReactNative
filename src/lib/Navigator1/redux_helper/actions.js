import ActionTypes from './types';

const defnav = 'root';

export default {
  function pushRoute(route, navkey = defnav) {
    return {
      type: ActionTypes.PUSH_ROUTE,
      navkey,
      payload: {
        route,
      },
    };
  }

  function popRoute(navkey = defnav) {
    return {
      type: ActionTypes.POP_ROUTE,
      navkey,
      payload: {
      },
    };
  }

  function popToIndex(routeIndex, navkey = defnav) {
    return {
      type: ActionTypes.POP_TO_INDEX,
      navkey,
      payload: {
        routeIndex,
      },
    };
  }

  function popTo(keyOrIndex, navkey = defnav) {
    if (typeof keyOrIndex === 'string') {
      return {
        type: ActionTypes.POP_TO,
        navkey,
        payload: {
          routeKey: keyOrIndex,
        },
      };
    }
    return popToIndex(keyOrIndex, navkey);
  }

  function jumpToIndex(routeIndex, navkey = defnav) {
    return {
      type: ActionTypes.JUMP_TO_INDEX,
      navkey,
      payload: {
        routeIndex,
      },
    };
  }

  function jumpTo(keyOrIndex, navkey = defnav) {
    if (typeof keyOrIndex === 'string') {
      return {
        type: ActionTypes.JUMP_TO,
        navkey,
        payload: {
          routeKey: keyOrIndex,
        },
      };
    }

    return jumpToIndex(keyOrIndex, navkey);
  }

  function reset(routes, index, navkey = defnav) {
    return {
      type: ActionTypes.RESET_ROUTE,
      navkey,
      payload: {
        routes,
        index,
      },
    };
  }

  function replace(route, navkey = defnav) {
    return {
      type: ActionTypes.REPLACE,
      navkey,
      payload: {
        route,
      },
    };
  }

  function replaceAt(routeKey, route, navkey = defnav) {
    return {
      type: ActionTypes.REPLACE_AT,
      navkey,
      payload: {
        routeKey,
        route,
      },
    };
  }

  function replaceAtIndex(index, route, navkey = defnav) {
    return {
      type: ActionTypes.REPLACE_AT_INDEX,
      navkey,
      payload: {
        index,
        route,
      },
    };
  }

  function back(navkey = defnav) {
    return {
      type: ActionTypes.BACK,
      navkey,
      payload: {
      },
    };
  }

  function forward(navkey = defnav) {
    return {
      type: ActionTypes.FORWARD,
      navkey,
      payload: {
      },
    };
  }
}


export default {
  pushRoute,
  popRoute,
  popToIndex,
  popTo,
  jumpToIndex,
  jumpTo,
  reset,
  replace,
  replaceAt,
  replaceAtIndex,
  back,
  forward,
};

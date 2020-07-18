import { bindActionCreators } from 'redux';
import { getStore } from '@app/storevar';
// const shallowEqualAddon = require('fbjs/lib/shallowEqual');

function getState() {
  return getStore().getState();
}

function dispatch(state) {
  return getStore().dispatch(state);
}

function handleDispatch(state, params) {
  if (params && params.length && params.length > 0) {
    const lastParam = params[params.length - 1];
    if (lastParam && lastParam.props && lastParam.dispatcher) {
      console.log(123);
      lastParam.dispatcher(state);
      return;
    }
  }
  getStore().dispatch(state);
}

function shallowEqual(a, b, depth = 0, maxdepth = 20) {
  if (depth >= maxdepth) return false;

  const aIsNull = a === null || a === undefined;
  const bIsNull = b === null || b === undefined;

  if (aIsNull !== bIsNull) return false;
  if (aIsNull === true) return true;

  const aTypeof = typeof a;
  const bTypeof = typeof b;
  if (aTypeof !== bTypeof) return false;

  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);
  if (aIsArray !== bIsArray) return false;

  if (aIsArray) {
    const l = a.length;
    if (l !== b.length) return false;

    for (let i = 0; i < l; i += 1) {
      if (shallowEqual(a[i], b[i], depth + 1, maxdepth) === false) return false;
    }
    return true;
  } else if (aTypeof === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    const hasOwn = Object.prototype.hasOwnProperty;

    if (keysA.length !== keysB.length) return false;
    for (let i = 0; i < keysA.length; i += 1) {
      const keyA = keysA[i];

      if (!hasOwn.call(b, keyA)) return false;
      if (shallowEqual(a[keyA], b[keyA], depth + 1, maxdepth) === false) return false;
    }
    return true;
  } else if (aTypeof === 'function') {
    return true;
  }

  return a === b;
}

export {
  getStore,
  getState,
  dispatch,
  handleDispatch,
  shallowEqual,
  bindActionCreators,
};

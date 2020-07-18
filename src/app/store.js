import 'babel-polyfill';
import 'regenerator-runtime/runtime';

import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';
import reducers from '../redux/reducer';
import thunk from 'redux-thunk';

import { setStore } from './storevar';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
function warn(error) {
  throw error; // To let the caller handle the rejection
}

const promise = () => next => action => (
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next, warn)
    : next(action)
);
let enhancer;
export function configureStore(onCompletion:()=>void):any {
  if (__DEV__) {
    /* eslint-disable global-require */
      const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();

      enhancer = composeWithDevTools(
          applyMiddleware(thunk, promise),
          applyMiddleware(reduxImmutableStateInvariant),
          applyMiddleware(sagaMiddleware),
          applyMiddleware(logger)
      );
  }else{
      enhancer = composeWithDevTools(
          applyMiddleware(thunk, promise),
          applyMiddleware(sagaMiddleware)
      );
  }
  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(sagas);
  setStore(store);

  persistStore(store, { storage: AsyncStorage }, onCompletion);

  if (module.hot && typeof module.hot.accept === 'function') {
    module.hot.accept(() => {
      store.replaceReducer(require('../redux/chat/index').default);
      sagaMiddleware.run(require('../sagas').default);
    });
  }

  return store;
}

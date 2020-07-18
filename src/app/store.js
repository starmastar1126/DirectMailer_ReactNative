import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from '@redux/reducer';
import thunk from 'redux-thunk';
import { setStore } from './storevar';

function warn(error) {
  throw error; // To let the caller handle the rejection
}

const promise = () => next => action => (
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next, warn)
    : next(action)
);

export function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
  );

  const store = createStore(reducers, enhancer);
  setStore(store);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}

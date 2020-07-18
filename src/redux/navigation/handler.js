import { dispatch } from '../utils';
import actions from './actions';

export default {
  pushRoute: (...args) => {
    dispatch(actions.pushRoute(...args));
  },
  popRoute: (...args) => {
    dispatch(actions.popRoute(...args));
  },
  popToIndex: (...args) => {
    dispatch(actions.popToIndex(...args));
  },
  popTo: (...args) => {
    dispatch(actions.popTo(...args));
  },
  popN: (...args) => {
    dispatch(actions.popN(...args));
  },
  jumpToIndex: (...args) => {
    dispatch(actions.jumpToIndex(...args));
  },
  jumpTo: (...args) => {
    dispatch(actions.jumpTo(...args));
  },
  reset: (...args) => {
    dispatch(actions.reset(...args));
  },
  replace: (...args) => {
    dispatch(actions.replace(...args));
  },
  replaceAt: (...args) => {
    dispatch(actions.replaceAt(...args));
  },
  replaceAtIndex: (...args) => {
    dispatch(actions.replaceAtIndex(...args));
  },
  back: (...args) => {
    dispatch(actions.back(...args));
  },
  forward: (...args) => {
    dispatch(actions.forward(...args));
  },

  navigate: (...args) => {
    dispatch(actions.navigate(...args));
  },
  navback: (...args) => {
    dispatch(actions.navback(...args));
  },
  navinit: (...args) => {
    dispatch(actions.navinit(...args));
  },
  navreset: (...args) => {
    dispatch(actions.navreset(...args));
  },
  navuri: (...args) => {
    dispatch(actions.navuri(...args));
  },
  navSetParams: (...args) => {
    dispatch(actions.setParams(...args));
  },

  resetTo: (routeName, key, ...args) => {
    dispatch(actions.reset([{ key, routeName }], 0, ...args));
  },
};

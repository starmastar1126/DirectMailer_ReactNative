import { dispatch } from '../utils';
import { AlertType } from './types';
import actions from './actions';

const handler = {
  drop: {
    show: (...args) => {
      dispatch(actions.drop.show(...args));
    },
    hide: (...args) => {
      dispatch(actions.drop.hide(...args));
    },
    showSuccess: (...args) => {
      handler.drop.show(AlertType.success, ...args);
    },
    showError: (...args) => {
      handler.drop.show(AlertType.error, ...args);
    },
    showInfo: (...args) => {
      handler.drop.show(AlertType.info, ...args);
    },
    showWarn: (...args) => {
      handler.drop.show(AlertType.warn, ...args);
    },
  },

  hud: {
    show: (...args) => {
      dispatch(actions.hud.show(...args));
    },
    hide: (...args) => {
      dispatch(actions.hud.hide(...args));
    },
  },
};

export default handler;

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
      handler.show(AlertType.success, ...args);
    },
    showError: (...args) => {
      handler.show(AlertType.error, ...args);
    },
    showInfo: (...args) => {
      handler.show(AlertType.info, ...args);
    },
    showWarn: (...args) => {
      handler.show(AlertType.warn, ...args);
    },
  },

  loading: {
    show: (...args) => {
      dispatch(actions.loading.show(...args));
    },
    hide: (...args) => {
      dispatch(actions.loading.hide(...args));
    },
  },
};

export default handler;

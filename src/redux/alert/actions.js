import ActionTypes, { AlertType } from './types';

const actions = {
  drop: {
    show: (type, title, message) => ({
      type: ActionTypes.ALERT,
      payload: { type, title, message, visible: true },
    }),

    hide: () => ({
      type: ActionTypes.ALERT,
      payload: { visible: false },
    }),

    showSuccess: (...args) => actions.drop.show(AlertType.success, ...args),
    showError: (...args) => actions.drop.show(AlertType.error, ...args),
    showInfo: (...args) => actions.drop.show(AlertType.info, ...args),
    showWarn: (...args) => actions.drop.show(AlertType.warn, ...args),
  },

  hud: {
    show: message => ({
      type: ActionTypes.HUD,
      payload: { message, visible: true },
    }),

    hide: () => ({
      type: ActionTypes.HUD,
      payload: { visible: false },
    }),
  },
};

export default actions;

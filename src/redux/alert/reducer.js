import ActionTypes from './types';

const initialState = {
  drop: {
    title: '',
    message: '',
    type: '',
    visible: false,
  },
  hud: {
    message: '',
    visible: false,
  },
};

export default function (state = initialState, action) {
  const { drop, hud } = state;

  switch (action.type) {
    case ActionTypes.ALERT:
      return {
        ...state,
        drop: {
          ...drop,
          ...action.payload,
        },
      };
    case ActionTypes.HUD:
      return {
        ...state,
        hud: {
          ...hud,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}

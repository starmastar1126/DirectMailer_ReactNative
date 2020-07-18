import { navigationReducer } from '@lib/navigation';
import { Navigators } from '@routes';

import navkeys from './navkeys';

function generateReducer(Navigator, state, navkey) {
  const getState = Navigator.router.getStateForAction;
  const initState = state || getState(Navigator.router.getActionForPathAndParams());
  return navigationReducer({ ...initState, navkey }, getState);
}

// const appState = {
//   index: 0,
//   routes: [
//     { routeName: 'splash', key: 'app.splash' },
//   ],
// };
const navApp = generateReducer(Navigators.App, null, navkeys.app);

export default {
  navApp,
};

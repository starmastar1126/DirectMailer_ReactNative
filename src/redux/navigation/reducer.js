import { navigationReducer } from '@lib/navigation';
import { Navigators } from '@routes';

import navkeys from './navkeys';

function generateReducer(Navigator, navkey) {
  const getState = Navigator.router.getStateForAction;
  const initState = getState(Navigator.router.getActionForPathAndParams());
  return navigationReducer({ ...initState, navkey }, getState);
}

const navApp = generateReducer(Navigators.App, navkeys.app);
// const navClash = generateReducer(Navigators.Clash, navkeys.clash);

export default {
  navApp,
  // navClash,
};

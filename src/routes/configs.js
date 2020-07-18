import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { NavigationInterpolator } from '@lib/navigation';

import { Splash } from '@scenes/Splash';
import { Main } from '@scenes/Main';
import { Playlist, Songlist, LivePlaylist } from '@scenes/Playlist';
import { Search } from '@scenes/Search';
import { SmsMobile, SmsVerify } from '../scenes/Sms';
import { ChatUsers, Chat, Invite } from '../scenes/Chat';

import { routeConfigs, routeNames, routeKeys } from './routes';
import { Navigators } from './navigators';

function createRoute(Scene, path, options) {
  return {
    screen: Scene,
    path,
    navigationOptions: options,
  };
}

function mapRouteNames(config: Object, prefix: String = '') {
  const names = {};
  Object.keys(config).forEach((key) => {
    names[key] = `${prefix}${key}`;
  });
  return names;
}

const app = {
  splash: createRoute(Splash),
  main: createRoute(Main),
  playlist: createRoute(Playlist),
  songlist: createRoute(Songlist),
  livePlaylist: createRoute(LivePlaylist),
  search: createRoute(Search),
  smsmobile: createRoute(SmsMobile),
  smsverify: createRoute(SmsVerify),
  chat: createRoute(Chat),
  invte: createRoute(Invite),
  chatUsers: createRoute(ChatUsers),
};

const appTransition = () => ({
  screenInterpolator: (screenProps) => {
    const activeScene = screenProps.scenes[screenProps.index];
    const fromScene = screenProps.scenes[1];
    const chatUserScence = screenProps.scenes[2];

    if ((chatUserScence && chatUserScence.route.routeName) === 'chat') {
      return CardStackStyleInterpolator.forVertical(screenProps);
    }
    if (activeScene.route.routeName === 'search' || (fromScene && fromScene.route.routeName) === 'search') {
      return NavigationInterpolator.forHorizontalInverse(screenProps);
    }
    return CardStackStyleInterpolator.forHorizontal(screenProps);
  },
});

Navigators.App = StackNavigator(app, {
  headerMode: 'none',
  transitionConfig: appTransition,
});

routeConfigs.app = app;
routeNames.app = mapRouteNames(app);
routeKeys.app = mapRouteNames(app, 'app.');

export default {
  app,
};

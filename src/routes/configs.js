import { StackNavigator } from 'react-navigation';
import { Splash } from '@scenes/Splash';

import { routeConfigs } from './routes';
import { Navigators } from './navigators';

function createRoute(Scene, name, path, options) {
  const route = {
    screen: Scene,
    path,
    navigationOptions: options,
  };
  return route;
}

const app = {
  splash: createRoute(Splash, 'splash'),

};

routeConfigs.app = app;

Navigators.App = StackNavigator(routeConfigs.app, {
  headerMode: 'none',
});


export default {
  app,
};

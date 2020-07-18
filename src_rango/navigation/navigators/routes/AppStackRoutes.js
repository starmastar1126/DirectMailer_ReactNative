import screens from '../../../constants/screens';

import HomeDrawerNavigator from '../HomeDrawerNavigator';

import { WelcomeScreen, SigninScreen, SignupScreen } from '../../../screens';

const AppStackRoutes = {
  [screens.HomeDrawNav]: {
    screen: HomeDrawerNavigator,
    navigationOptions: {
      header: null,
    }
  },
  [screens.Welcome]: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.Signin]: {
    screen: SigninScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.Signup]: {
    screen: SignupScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default AppStackRoutes;

import screens from '../../../constants/screens';

import { SetupLeagueScreen } from '../../../screens';
import { SetupTeamsScreen } from '../../../screens';
import { SetupSettingsScreen } from '../../../screens';
import { SetupFixturesScreen } from '../../../screens';

const SetupStackRoutes = {
  [screens.SetupLeague]: {
    screen: SetupLeagueScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.SetupSettings]: {
    screen: SetupSettingsScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.SetupTeams]: {
    screen: SetupTeamsScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.SetupFixtures]: {
    screen: SetupFixturesScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default SetupStackRoutes;

import screens from '../../../constants/screens';

import {
  LeagueFixturesScreen,
  LeagueOverviewScreen,
  LeagueTeamsScreen,
  LeagueResultsScreen,
} from '../../../screens';

const LeagueStackRoutes = {
  [screens.LeagueOverview]: {
    screen: LeagueOverviewScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.LeagueResults]: {
    screen: LeagueResultsScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.LeagueFixtures]: {
    screen: LeagueFixturesScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.LeagueTeams]: {
    screen: LeagueTeamsScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default LeagueStackRoutes;

import screens from '../../../constants/screens';

import {
  TeamProfileOverviewScreen,
  TeamProfilePlayersScreen,
  TeamProfileNewsScreen,
  TeamProfileResultsScreen,
} from '../../../screens';

const TeamProfileStackRoutes = {
  [screens.TeamProfileOverview]: {
    screen: TeamProfileOverviewScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.TeamProfileNews]: {
    screen: TeamProfileNewsScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.TeamProfileResults]: {
    screen: TeamProfileResultsScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.TeamProfilePlayers]: {
    screen: TeamProfilePlayersScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default TeamProfileStackRoutes;

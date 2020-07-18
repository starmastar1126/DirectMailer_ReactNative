import screens from '../../../constants/screens';

import {
  FollowingPlayersScreen,
  FollowingTeamsScreen,
  FollowingLeaguesScreen,
} from '../../../screens';

const FollowingStackRoutes = {
  [screens.FollowingLeagues]: {
    screen: FollowingLeaguesScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.FollowingTeams]: {
    screen: FollowingTeamsScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.FollowingPlayers]: {
    screen: FollowingPlayersScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default FollowingStackRoutes;

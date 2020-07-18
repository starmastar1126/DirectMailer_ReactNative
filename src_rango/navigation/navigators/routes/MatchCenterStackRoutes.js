import screens from '../../../constants/screens';

import {
  MatchCenterScoreCardScreen,
  MatchCenterTeamsScreen,
} from '../../../screens';

const MatchCenterStackRoutes = {
  [screens.MatchCenterScoreCard]: {
    screen: MatchCenterScoreCardScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.MatchCenterTeams]: {
    screen: MatchCenterTeamsScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default MatchCenterStackRoutes;

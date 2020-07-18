import screens from '../../../constants/screens';

import { PlayerProfileScreen } from '../../../screens';

const PlayerProfileStackRoutes = {
  [screens.PlayerProfile]: {
    screen: PlayerProfileScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default PlayerProfileStackRoutes;

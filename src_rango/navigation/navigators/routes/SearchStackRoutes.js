import screens from '../../../constants/screens';

import { SearchPlayersScreen } from '../../../screens';
import { SearchTeamScreen } from '../../../screens';
import { SearchNewsScreen } from '../../../screens';
import { ScoreEntryScreen } from '../../../screens';

const SearchStackRoutes = {
  [screens.SearchPlayers]: {
    screen: SearchPlayersScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.SearchNews]: {
    screen: SearchNewsScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.SearchTeam]: {
    screen: SearchTeamScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.ScoreEntry]: {
    screen: ScoreEntryScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default SearchStackRoutes;

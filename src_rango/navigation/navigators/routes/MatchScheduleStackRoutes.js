import React from 'react';

import screens from '../../../constants/screens';

import { MatchScheduleResultsScreen } from '../../../screens';
import { MatchScheduleLiveScreen } from '../../../screens';
import { MatchScheduleUpcomingScreen } from '../../../screens';
import { MatchScheduleMapScreen } from '../../../screens';

const MatchScheduleStackRoutes = {
  [screens.MatchScheduleUpcoming]: {
    screen: MatchScheduleUpcomingScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.MatchScheduleMap]: {
    screen: MatchScheduleMapScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.MatchScheduleResults]: {
    screen: MatchScheduleResultsScreen,
    navigationOptions: {
      header: null,
    }
  },
  [screens.MatchScheduleLive]: {
    screen: MatchScheduleLiveScreen,
    navigationOptions: {
      header: null,
    }
  },
};

export default MatchScheduleStackRoutes;

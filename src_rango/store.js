import { createStore, combineReducers } from 'redux';

import accountReducer from './modules/account';
import playersReducer from './modules/players';
import leaguesReducer from './modules/leagues';
import leagueSettingsReducer from './modules/leagueSettings';
import leagueTeamsReducer from './modules/leagueTeams';
import leagueSponsorsReducer from './modules/leagueSponsors';
import teamsReducer from './modules/teams';
import leagueScheduleReducer from './modules/leagueSchedule';
import newsReducer from './modules/news';
import sponsorsReducer from './modules/sponsors';
import venuesReducer from './modules/venues';

const rootReducer = combineReducers({
    account: accountReducer,
    players: playersReducer,
    leagues: leaguesReducer,
    leagueSettings: leagueSettingsReducer,
    leagueTeams: leagueTeamsReducer,
    leagueSponsors: leagueSponsorsReducer,
    leagueSchedule: leagueScheduleReducer,
    teams: teamsReducer,
    news: newsReducer,
    sponsors: sponsorsReducer,
    venues: venuesReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;

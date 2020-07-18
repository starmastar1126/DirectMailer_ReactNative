import { combineReducers } from 'redux';
import navigation from './navigation/reducer';
import alert from './alert/reducer';
import meteor from './meteor/reducer';
import main from './main/reducer';
// import player from './player/reducer';
// import tune from './tune/reducer';

export default combineReducers({
  ...navigation,
  alert,
  meteor,
  main,
  // player,
  // tune,
});

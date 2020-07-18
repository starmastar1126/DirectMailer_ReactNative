import { combineReducers } from 'redux';
import navigation from './navigation/reducer';
import alert from './alert/reducer';
import meteor from './meteor/reducer';
import main from './main/reducer';
import chat from './chat';
import settings from './chat/reducers';
import login from './chat/login';
import messages from './chat/messages';
import server from './chat/server';
import navigator from './chat/navigator';
import createChannel from './chat/createChannel';
import app from './chat/app';

export default combineReducers({
  ...navigation,
  alert,
  meteor,
  main,
  chat,
  settings,
  login,
  messages,
  server,
  navigator,
  createChannel,
  app
});

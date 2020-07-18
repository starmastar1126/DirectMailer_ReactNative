import uniqueId from 'react-native-unique-id';
import appconfig from '@app/config';
import { handler } from '@redux';
import settings from './settings';

const { main: mainHandler } = handler;

class AppStates {

  inited: Boolean = false;
  runOnce: Boolean = false;
  deviceId: String = null;
  deviceName: String = null;
  liveName: String = null;
  vodName: String = null;
  phoneNumber: String = null;
  userId: string = null;
  panMovable: Boolean = true;
  viewState: Number = 1;
  listOffset: Number = 0;
  searchState: Number = 0;
  frontCamera: Boolean = true;
  methods: Object = null;
  playlist: Array = null;
  verificationCode: string = null;
  chatUsers: Array = null;
  inviteUSer: Object = null;
  chatServer: string = null;
  chatByUsername: string = null;
  chatByRid: string = null

  frame: Object = {
    width: 0,
    height: 0,
  };

  player: Object = {
    playing: false,
    loading: false,
    repeat: false,
    shuffle: false,
    sliding: false,
    fullscreen: false,
    fullani: false,
    currentTime: 0,
    duration: 0,
    index: -1,
    song: null,
    streamPlayer: null,
    videoPlayer: null,
    streamLive: false,
    streamVOD: false,
    streamFugo: false,
  };
  songData: Object = {
    songs: [],
    limit: 30,
    total: 0,
    loading: false,
    tags: null,
    main: true,
  };
  searchData: Object = {
    songs: [],
    keyword: '',
    loading: false,
  }
  chat: Object = {
    current: null,
  }

  constructor() {
    this.loadSetting();
  }

  async loadSetting() {
    this.setChatServer();
    this.runOnce = await settings.appRunOnce();
    this.deviceName = await settings.getDeviceName();
    this.liveName = await settings.getLiveName();
    this.vodName = await settings.getVODName();
    this.phoneNumber = await settings.getPhoneNumber();
    this.userId = await settings.getUserId();
    appconfig.wowza.applicationName = this.liveName;
    uniqueId((err, id) => {
      if (id) {
        console.log('unique-id: ', id);
        this.deviceId = id;
      }
      this.inited = true;
    });
  }

  setDeviceName(deviceName) {
    this.deviceName = deviceName;
    settings.setDeviceName(this.deviceName);
  }
  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
    settings.setPhoneNumber(phoneNumber);
  }
  setUserId(userId) {
    this.userId = userId;
    settings.setUSerId(userId);
  }
  setLiveName(name) {
    this.liveName = name;
    appconfig.wowza.applicationName = this.liveName;
    settings.setLiveName(name);
    mainHandler.updatePlayer();
  }
  setVODName(name) {
    this.vodName = name;
    settings.setVODName(name);
  }
  setChatServer() {
    this.chatServer = 'ws://api.chilll.in/websocket';
    settings.setChatServer(this.chatServer);
  }
}

export default new AppStates();

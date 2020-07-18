import uniqueId from 'react-native-unique-id';
import MDUser from '@model/user';
import MDJudge from '@model/judge';
import settings from './settings';

class AppStates {

  inited: Boolean = false;
  runOnce: Boolean = false;
  serverTimeSync: Number = 0;
  clashContext: Object = {};
  user: MDUser = new MDUser();
  judge: MDJudge = new MDJudge();
  jerks: Array = [];

  constructor() {
    this.loadSetting();
  }

  async loadSetting() {
    await this.user.loadInfo();
    this.runOnce = await settings.appRunOnce();

    uniqueId((err, id) => {
      if (id) {
        console.log('unique-id: ', id);
        this.deviceId = id;
      }
      this.inited = true;
    });
  }
}

export default new AppStates();

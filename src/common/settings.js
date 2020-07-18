import { AsyncStorage } from 'react-native';

export default class AppSettings {

  static async getValue(key: string) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  static async getBoolean(key: string) {
    const value = await this.getValue(key);
    if (value) {
      return Boolean(value);
    }
    return false;
  }

  static async setValue(key: string, value: *) {
    await AsyncStorage.setItem(key, `${value}`);
    return value;
  }

  static async getDeviceName() {
    return this.getValue('chilll.device.name');
  }
  static setDeviceName(deviceName) {
    return this.setValue('chilll.device.name', deviceName);
  }

  static getUserId() {
    return this.getValue('chill.user.id');
  }
  static setUSerId(UserId) {
    return this.setValue('chill.user.id', UserId);
  }

  static getPhoneNumber() {
    return this.getValue('chill.user.phonenumber');
  }
  static setPhoneNumber(phoneNumber) {
    return this.setValue('chill.user.phonenumber', phoneNumber);
  }

  static async getLiveName() {
    return this.getValue('chilll.live.name');
  }
  static setLiveName(name) {
    return this.setValue('chilll.live.name', name);
  }
  static async getVODName() {
    return this.getValue('chilll.vod.name');
  }
  static setVODName(name) {
    return this.setValue('chilll.vod.name', name);
  }

  static async appRunOnce() {
    return this.getBoolean('chilll.run.once');
  }
  static setAppRunOnce() {
    return this.setValue('chilll.run.once', true);
  }
  static setChatServer(server) {
    return this.setValue('currentServer', server)
  }
}

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

  static async getUserEmail() {
    return this.getValue('chune.user.email');
  }
  static setUserEmail(username) {
    return this.setValue('chune.user.email', username);
  }

  static async getUserPassword() {
    return this.getValue('chune.user.password');
  }
  static setUserPassword(password) {
    return this.setValue('chune.user.password', password);
  }

  static async appRunOnce() {
    return this.getBoolean('chune_run_once');
  }
  static setAppRunOnce() {
    return this.setValue('chune_run_once', true);
  }
}

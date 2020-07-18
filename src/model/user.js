import settings from '@common/settings';
import MDBase from './base';

export default class MDUser extends MDBase {
  loggedIn: Boolean = false;
  email: String = null;
  firstName: String = null;
  lastName: String = null;
  fullName: String = null;
  userId: String = null;
  password: String = null;

  static parseInfo(info: Object) {
    return new MDUser(info);
  }

  constructor(info: Object) {
    super();

    if (!info || !info.userId) {
      this.loggedIn = false;
      return;
    }

    this.parse(info);

    this.loggedIn = true;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  saveInfo() {
    settings.setUserEmail(this.email);
    settings.setUserPassword(this.password);
  }

  async loadInfo() {
    this.email = await settings.getUserEmail();
    this.password = await settings.getUserPassword();
  }
}

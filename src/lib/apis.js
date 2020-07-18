import Meteor from 'react-native-meteor';
import { gAppStates } from '@common';
import { MDUser, MDJudge } from '@model';
import { handler } from '@redux';
import FBLoginManager from 'react-native-fbsdk/js/FBLoginManager';
import FBGraphRequest from 'react-native-fbsdk/js/FBGraphRequest';
import FBGraphRequestManager from 'react-native-fbsdk/js/FBGraphRequestManager';

export default class ApiWrapper {

  static call(...args) {
    const arrArgs = [].slice.call(args);
    const method = args[0];
    return new Promise((resolve, reject) => {
      try {
        arrArgs.push((err, res) => {
          if (err) {
            console.log(`${method} failed. error: `, err);
            reject(err);
          } else {
            console.log(`${method} success. result: `, res);
            resolve(res);
          }
        });

        console.log(`request ${method}, args: `, args);
        Meteor.call.apply(null, arrArgs);
      } catch (err) {
        console.log(`${method} failed. error: `, err);
        reject(err);
      }
    });
  }

  static loggedInMeteor(resolve, reject, password) {
    const meteorUser = Meteor.user();
    this.getUserInfo(meteorUser._id).then((userInfo) => {
      if (!userInfo) {
        console.log('Invalid user info');
        reject('Invalid user info');
        return;
      }

      gAppStates.user = MDUser.parseInfo(userInfo);
      gAppStates.user.password = password;

      console.log('user logged in - ', gAppStates.user);

      resolve(gAppStates.user);
    }).catch((err) => {
      console.log('getUserInfo failed: ', err);
      reject(err);
    });
  }

  static login(email, password) {
    console.log('login - ', email, password);
    return new Promise((resolve, reject) => {
      try {
        Meteor.loginWithPassword(email, password, (err) => {
          if (err) {
            console.log('meteor login failed: ', err);
            reject(err);
          } else {
            console.log('meteor logged in - ', Meteor.user());
            this.loggedInMeteor(resolve, reject, password);
          }
        });
      } catch (err) {
        console.log('meteor login failed: ', err);
        reject(err);
      }
    });
  }

  static logout() {
    return new Promise((resolve, reject) => {
      try {
        Meteor.logout((err) => {
          if (err) {
            console.log('logout failed: ', err);
            reject(err);
            return;
          }

          gAppStates.user = new MDUser();
          gAppStates.user.saveInfo();
          handler.main.user.loggedIn(false);

          resolve();
        });
      } catch (err) {
        console.log('logout failed: ', err);
        reject(err);
      }
    });
  }

  static register(params) {
    return new Promise((resolve, reject) => {
      this.login(params.username, params.password).then((user) => {
        resolve(user);
      }).catch(() => {
        this.call('createAppUser', params).then((res) => {
          this.login(params.username, params.password).then((user) => {
            resolve(res, user);
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      });
    });
  }

  static loginFB() {
    return new Promise((resolve, reject) => {
      this.loginFacebook().then((fbinfo) => {
        this.login(fbinfo.email, '.').then((user) => {
          resolve(user);
        }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      });
    });
  }

  static registerFB() {
    // const fbinfo = {
    //   email: 'test1@test.com',
    //   firstName: 'test',
    //   lastName: 'user',
    // };

    return new Promise((resolve, reject) => {
      this.loginFacebook().then((fbinfo) => {
        const params = {
          username: fbinfo.email,
          email: fbinfo.email,
          password: '.',
          firstName: fbinfo.firstName,
          lastName: fbinfo.lastName,
        };

        this.register(params).then((user) => {
          resolve(user);
        }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      });
    });
  }

  static saveUserInfo(userId, params) {
    return this.call('saveAppUser', userId, params);
  }

  static getUserInfo(userId) {
    return this.call('getAppUser', userId);
  }

  static getPlaylist(deviceId, station, limit, skip, tags = []) {
    return this.call('getPlaylist', deviceId, tags, limit, skip, station);
  }

  static getClashes() {
    return this.call('getClashes');
  }

  static getServerTime() {
    return this.call('getServerTime');
  }

  static createComment(params) {
    return this.call('createComment', params);
  }
  static getComments(params) {
    return this.call('getComments', params);
  }

  static startRound(clashId, params = {}) {
    return this.call('startRound', clashId, params);
  }
  static endRound(clashId, params = {}) {
    return this.call('endRound', clashId, params);
  }
  static createForward(params) {
    return this.call('createForward', params);
  }

  static getCompetitors() {
    return this.call('getCompetitors');
  }
  static vote(competitorId, userId, rating, category) {
    return this.call('vote', competitorId, userId, rating, category);
  }
  static isJudge(userId) {
    return new Promise((resolve, reject) => {
      this.call('isUserAJudge', { userId }).then((res) => {
        gAppStates.judge = MDJudge.parseInfo(res);
        handler.main.updateJudge();
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }
  static doneVote(userId) {
    return this.call('doneVote', userId);
  }
  static inviteJudges(emails) {
    return this.call('inviteJudges', emails);
  }

  static syncServerTime() {
    return new Promise((resolve, reject) => {
      const stime = new Date().getTime();
      this.getServerTime().then((ts) => {
        const etime = new Date().getTime();
        const svrTime = new Date(ts * 1000).getTime();
        const sync = svrTime - stime - (etime - stime) / 2;
        gAppStates.serverTimeSync = parseInt(sync / 1000, 10);

        console.log('Calculated server sync - ', sync);
        resolve(sync);
      }).catch((err) => {
        console.log('failed to sync server time - ', err);
        reject(err);
      });
    });
  }

  static loginFacebook() {
    return new Promise((resolve, reject) => {
      FBLoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {
        if (result.isCancelled) {
          reject('Facebook login cancelled');
          return;
        }

        console.log('Facebook login success with permissions: ', result.grantedPermissions);
        const params = {
          parameters: {
            fields: { string: 'id, email, first_name, last_name, middle_name, name, picture' },
            edge: { string: 'picture' },
          },
        };
        const infoRequest = new FBGraphRequest('/me', params, (err, fbinfo) => {
          if (err) {
            reject(err);
            return;
          }

          console.log('Facebook fetched info: ', fbinfo);
          const picture = fbinfo.picture && fbinfo.picture.data && fbinfo.picture.data.url;
          const fbres = {
            fbid: fbinfo.id,
            email: fbinfo.email,
            name: fbinfo.name,
            firstName: fbinfo.first_name,
            lastName: fbinfo.last_name,
            picture,
          };

          // fbres.email = 'renter105@test.com';
          resolve(fbres);
        });
        new FBGraphRequestManager().addRequest(infoRequest).start();
      }, (error) => {
        reject(error);
      });
    });
  }
}

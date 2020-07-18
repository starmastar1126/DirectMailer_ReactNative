import Meteor from 'react-native-meteor';
// import { gAppStates } from '@common';
// import { MDUser } from '@model';
// import { handler } from '@redux';
// import FBLoginManager from 'react-native-fbsdk/js/FBLoginManager';
// import FBGraphRequest from 'react-native-fbsdk/js/FBGraphRequest';
// import FBGraphRequestManager from 'react-native-fbsdk/js/FBGraphRequestManager';

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
            if (method !== 'getPlaylist' && method !== 'getPlaylistByName') {
              console.log(`${method} success. result: `, res);
            }
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

  static getSearchTags(deviceId) {
    return this.call('getSearchTags', deviceId);
  }

  static getPlaylist(deviceId, tags, limit, skip) {
    return this.call('getPlaylist', deviceId, tags, limit, skip);
  }

  static getSuggestedTags(keyword) {
    return this.call('getSuggestedTags', keyword);
  }

  static searchMedia(keyword, deviceId) {
    return this.call('searchMedia', keyword, deviceId);
  }

  static addSearchTags(deviceId, tags) {
    return this.call('addSearchTags', deviceId, tags);
  }

  static addInitialSearchTags(deviceId) {
    return this.call('addSearchTags', deviceId, ['+2017'], true);
  }

  static removeSearchTag(deviceId, tag) {
    return this.call('removeSearchTag', deviceId, tag);
  }

  static addVideoObject(deviceId, info) {
    return this.call('addVideoObject', info, deviceId);
  }

  static addSongObject(deviceId, info) {
    return this.call('addSongObject', info, deviceId);
  }

  static saveSongFromSearch(info) {
    return this.call('saveSongFromSearch', info);
  }
  static saveSong(info) {
    return this.call('saveSong', {}, info);
  }

  static saveMetrics(deviceId, data) {
    return this.call('saveMetrics', deviceId, data);
  }

  static getDevicePlaylistNames(deviceId) {
    return this.call('getDevicePlaylistNames', deviceId);
  }

  static getPlaylistByName(deviceId, listName) {
    return this.call('getPlaylistByName', deviceId, listName);
  }

  static createPlaylist(deviceId, listName, track) {
    return this.call('createPlaylist', deviceId, listName, track);
  }

  static addSongToPlaylist(deviceId, listName, songId, tags) {
    return this.call('addSongToPlaylist', deviceId, listName, songId, tags);
  }

  static removeSongFromPlaylist(songId, listName, deviceId) {
    return this.call('removeSongFromPlaylist', songId, listName, deviceId);
  }

  static reorderPlaylist(orderList, listName, deviceId) {
    return this.call('reorderPlaylist', orderList, listName, deviceId);
  }

  static reorderPlaylistList(orderList, deviceId) {
    return this.call('reorderPlaylistList', orderList, deviceId);
  }

  static getLivePlaylist() {
    return this.call('getLivePlaylist');
  }

  static registerAction(deviceId, actionName, identifier) {
    return this.call('registerAction', deviceId, actionName, identifier);
  }

  static nameDevice(deviceId, name) {
    return this.call('nameDevice', deviceId, name);
  }

  static createLiveStation(name) {
    return this.call('createLiveStation', name);
  }
  static createVODStation(name) {
    return this.call('createVODStation', name);
  }

  static getAllStreams() {
    return this.call('getAllStreams');
  }

  static startStream(type, name, userId) {
    return this.call('startStream', type, name, userId);
  }
  static endStream(type, name) {
    return this.call('endStream', type, name);
  }
  static sendSmsVerificationCode(userId, mobile) {
    return this.call('sendSmsVerificationCode', { destinationNumber: mobile, userId });
  }
  static verifySmsCode(userId, code) {
    return this.call('verifySmsCode', code, userId);
  }
  static createChilllUser(params) {
    return this.call('createChilllUser', params);
  }

  static getUserChats(deviceId) {
    return this.call('getUserChats', deviceId);
  }

  static findUserByNumberOrEmail(number, email) {
    return this.call('findUserByNumberOrEmail', number, email)
  }

  static inviteContact(contactInfo) {
    return this.call('inviteContact', contactInfo)
  }
}

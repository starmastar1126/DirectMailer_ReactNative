import MDBase from './base';

export default class MDLiveSong extends MDBase {

  _id: String = null;
  yearReleased: String = null;
  youTubeId: String = null;
  deviceId: String = null;

  isAudio: Boolean = false;
  isVideo: Boolean = true;
  isLive: Boolean = false;
  album: String = null;
  artist: String = null;
  title: String = null;
  title1: String = null;
  image: String = null;
  thumbImage: String = null;
  videoUrl: String = null;
  url: String = null;

  static parseList(infos) {
    if (infos && infos.length > 0) {
      return infos.map(info => new MDLiveSong(info));
    }
    return [];
  }

  constructor(info) {
    super();

    if (!info) return;
    this.parse(info);

    this.deviceId = info.userId;
    this.url = info.streamUrl;
    this.isAudio = info.type === 'vod'; // info.streamType === 'audio';
    this.isVideo = info.type === 'live'; // info.streamType === 'video';
    this.isLive = true;
    this.title1 = 'Live Radio Stream';
    this.title = this.title1;
    this.artist = info.nameRaw || info.deviceName; // info.deviceId;
    this.album = '';
    // this.albumImage = 'https://placeimg.com/640/480/any';
    // this.thumbImage = 'https://placeimg.com/640/480/any';
  }
}

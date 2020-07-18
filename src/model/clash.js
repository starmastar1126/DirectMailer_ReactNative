import { gAppStates } from '@common';
// import g from '@global';
import MDBase from './base';

export class MDClashOpponent extends MDBase {
  avatar: String = null;
  balance: String = null;
  score: String = null;
  streamUrl: String = null;
  userId: String = null;
  username: String = null;

  static parseList(infos: Array<Object>) {
    return infos.map(info => new MDClashOpponent(info));
  }

  constructor(info: Object) {
    super();
    this.parse(info);

    // this.avatar = `https://placeimg.com/640/480/any?r=${g.random()}`;
  }

}

export class MDClashRound extends MDBase {
  balance: String = null;
  description: String = null;
  looser: String = null;
  title: String = null;
  winner: String = null;
  duration: Number|String = 0;

  static parseList(infos: Array<Object>) {
    return infos.map(info => new MDClashRound(info));
  }

  constructor(info: Object) {
    super();

    if (info) {
      this.parse(info);
      this._parseDuration(info.duration);
    }
  }

  _parseDuration(str: String): number {
    const time = str.match(/(\d+)(:(\d\d))?\s*(p?)/i);
    const minutes = parseInt(time[1], 10);
    const seconds = parseInt(time[3], 10);

    this.duration = minutes * 60 + seconds;
  }
}

export class MDClash extends MDBase {
  opponents: Array<MDClashOpponent> = [];
  rounds: Array<MDClashRound> = [];
  startDate: Date = null;
  title: String = '';
  _id: String = '';

  static parseList(infos: Array<Object>) {
    return infos.map(info => new MDClash(info));
  }

  constructor(info: Object) {
    super();
    this.parse(info);

    this.opponents = MDClashOpponent.parseList(info.opponents);
    this.rounds = MDClashRound.parseList(info.rounds);
    this.startDate = info.startDate;
    this.startDate.setSeconds(this.startDate.getSeconds() - gAppStates.serverTimeSync);

    // this.opponents[0].streamUrl = 'https://www.rmp-streaming.com/media/bbb-360p.mp4'; // 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8';
    // this.opponents[1].streamUrl = 'https://www.rmp-streaming.com/media/bbb-360p.mp4'; // 'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8';
  }
}

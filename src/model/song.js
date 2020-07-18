import g from '@global';
import MDBase from './base';

export default class MDSong extends MDBase {

  _id: String = null;
  yearReleased: String = null;
  youTubeId: String = null;

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
  order: Number = 0;

  static parseList(infos) {
    return infos.map(info => new MDSong(info));
  }

  constructor(info) {
    super();

    if (!info) return;
    this.parse(info);

    this.songInfo = info;

    this.isVideo = info.type === 'video' || (!!info.youTubeId);
    this.isAudio = !this.isVideo;

    const albums = info.albums || info.album;
    this.album = albums && albums.length > 0 ? albums[0].name : 'Single';
    if (info.images && info.images.length > 0) {
      this.image = g.findMDFileUrl(info.images[0].files);
    } else if (albums.images && albums.images.length > 0) {
      this.image = g.findMDFileUrl(albums.images);
    } else {
      this.image = null; // `https://placeimg.com/640/480/any?r=${g.random()}`;
    }

    if (this.image) {
      this.thumbImage = this.image.replace('-large.', '-t500x500.');
    }

    if (info.artists && info.artists.length > 0) {
      const artist = info.artists[0];
      if (artist.firstName || artist.lastName) {
        this.artist = `${artist.firstName || ''} ${artist.lastName || ''}`;
      } else {
        this.artist = artist.stageName;
      }
    }
    this.artist = null;

    const name = info.name || '';
    this.title1 = name;
    if (!this.artist) {
      const seps = name.split('-');
      if (seps.length >= 2) {
        this.artist = seps[0].trim();
        this.title1 = seps[1].trim();
      } else {
        this.artist = '';
        this.title1 = name;
      }
    }

    this.title = this.yearReleased ? (`${this.title1} (${this.yearReleased})`) : this.title1;
    if (this.isVideo) {
      this.videoUrl = g.findMDFileUrl(info.files);
      this.url = null;
    } else {
      this.url = g.findMDFileUrl(info.files);
    }
  }
}

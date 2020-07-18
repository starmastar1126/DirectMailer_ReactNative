import YoutubeParser from './YoutubeParser';

var common = require('./index-common');

function getVideoID(url) {
  var urlObj = common.URL.parseURL(url);
  if (urlObj) {
    return urlObj.hostname === 'youtu.be' ? urlObj.path.slice(1) : urlObj.query.v;
  }
  return url;
}

export function getYoutubeVideoUrl(url) {
  var videoId = getVideoID(url);
  console.log('getVideoID - ', videoId, ', url - ', url);
  return YoutubeParser.parseUrl(videoId);
}

export function isYoutubeUrl(url) {
  const isRelative = /^(ftp|file|gopher|https?|wss?)(:|$)/.test(url);
  if (isRelative) {
    const urlObj = common.URL.parseURL(url);
    if (urlObj && (urlObj.hostname === 'youtu.be' || urlObj.query.v)) {
      return true;
    }
    return false;
  }
  return true;
}

export default getYoutubeVideoUrl;

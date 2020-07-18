import { NativeModules } from 'react-native';

const NativeYTParser = NativeModules.YoutubeParser;

class YoutubeParser {
  static parseUrl(url) {
    return new Promise((resolve, reject) => {
      NativeYTParser.parseUrl(url, (urlParsed, error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(urlParsed);
      });
    });
  }
}
export default YoutubeParser;

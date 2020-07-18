import { NativeModules } from 'react-native';

const NativeYTParser = NativeModules.YoutubeParser;

const OVERRIDDEN_METHODS = [];

class YoutubeParser {
    // nop functions because I love my autocomplete
  static parseUrl(videoId): Promise<null> { videoId; }
}

// add all available functions from the native module (besides authenticate)
Object.keys(NativeYTParser).forEach((key) => {
  if (OVERRIDDEN_METHODS.indexOf(key) === -1) {
    YoutubeParser[key] = NativeYTParser[key];
  }
});

export default YoutubeParser;

import { Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');
const screenWidth = Math.min(window.width, window.height);
const isphone = screenWidth < 500;
const isIOS = Platform.OS === 'ios';

export default {
  phone: isphone,
  ios: isIOS,
  android: !isIOS,

  appName: 'Chilll',
  animViewDuration: 500,
};

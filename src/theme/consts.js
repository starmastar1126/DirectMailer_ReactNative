import { Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');
const screenWidth = Math.min(window.width, window.height);
const isphone = screenWidth < 500;
const isIOS = Platform.OS === 'ios';

const voteDate = new Date();
voteDate.setTime(Date.UTC(2017, 7, 6, 22));

export default {
  phone: isphone,
  ios: isIOS,
  android: !isIOS,

  appName: 'Chune',

  voteDate,
};

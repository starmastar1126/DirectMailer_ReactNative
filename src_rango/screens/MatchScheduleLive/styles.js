import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container: {
    paddingTop: hp('0%'),
    paddingBottom: hp('0%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  templatesView: {
    paddingBottom: hp('0%'),
    paddingLeft: wp('0%'),
    paddingRight: wp('0%'),
    width: wp('100%'),
    height: hp('92%'),
    alignItems: 'center',
  },

  recipientList: {
    height: hp('92%'),
  },

});

export default styles;

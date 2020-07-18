import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container: {
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  indicator: {
    paddingTop: hp('0.5%'),
    width: wp('94%'),
    fontSize: hp('1.8%'),
    height: hp('4%'),
    textAlign: 'left',
  },

  transactionDescriptionView: {
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    paddingLeft: wp('0%'),
    paddingRight: wp('0%'),
    width: wp('100%'),
    height: hp('30%'),
    alignItems: 'center',
  },

});

export default styles;

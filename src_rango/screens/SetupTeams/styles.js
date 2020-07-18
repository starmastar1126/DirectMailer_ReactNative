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

  transactionNameView: {
    paddingTop: hp('1%'),
    paddingBottom: hp('0%'),
    paddingLeft: wp('0%'),
    paddingRight: wp('0%'),
    width: wp('96%'),
    height: hp('10%'),
    alignItems: 'center',
  },

  templatesView: {
    paddingBottom: hp('0%'),
    paddingLeft: wp('0%'),
    paddingRight: wp('0%'),
    width: wp('100%'),
    height: hp('80%'),
    alignItems: 'center',
  },

  documentList: {
    height: hp('35%'),
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  recipientList: {
    height: hp('35%'),
  },

  item: {
    width: wp('100%'),
    height: hp('5%'),
    paddingTop: hp('1.5%'),
    paddingLeft: wp('3%'),
    borderBottomWidth: 1,
    borderColor: '#eee',
    textAlign: 'left',
  },

  buttonGroup: {
    height: hp('12%'),
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    borderTopWidth: 1,
    width: hp('100%'),
    borderColor: '#ccc',
    alignItems: 'center',
  },

  textButton: {
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },

});

export default styles;

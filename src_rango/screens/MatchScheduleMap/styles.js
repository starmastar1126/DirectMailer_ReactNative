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

  listItem: {
    width: wp('100%'),
    height: hp('8%'),
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  rightTopTitle: {
    paddingTop: hp('1.8%'),
    paddingLeft: wp('5.0%'),
    color: '#444',
    textAlign: 'left',
    height: hp('6%'),
    backgroundColor: 'white',
    fontSize: hp('2.8%'),
  },

  inputGroup: {
    paddingTop: hp('3%'),
    paddingBottom: hp('0%'),
    paddingLeft: wp('0%'),
    paddingRight: wp('0%'),
    width: wp('96%'),
    height: hp('48%'),
    alignItems: 'center',
  },

  transactionNameView: {
    marginBottom: hp('1.2%'),
    paddingLeft: wp('0%'),
    paddingRight: wp('0%'),
    width: wp('96%'),
    height: hp('6%'),
    alignItems: 'center',
  },

  requiredText: {
    marginBottom: hp('0%'),
    height: hp('5%'),
    width: wp('90%'),
    fontSize: hp('2%'),
    textAlign: 'right',
    color: '#e80000',
  },

  textInput: {
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    marginBottom: hp('1.2%'),
    height: hp('6%'),
    width: wp('94%'),
    backgroundColor: '#eee',
    fontSize: hp('2.5%'),
    color: '#222222',
    textAlign: 'left',
  },

  buttonGroup: {
    height: hp('46%'),
    paddingBottom: hp('3%'),
    borderTopWidth: 5,
    width: hp('100%'),
    borderColor: '#eee',
    alignItems: 'center',
  },

  textButton: {
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },

});

export default styles;

import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  centerAlign: {
    alignItems: 'center'
  },

  rightAlign: {
    alignItems: 'flex-end'
  },

  backIconView: {
    width: wp('94%'),
    paddingVertical: hp('1.0%'),
    alignItems: 'flex-start',
  },

  screenTitleText: {
    width: wp('80%'),
    paddingVertical: hp('3.0%'),
    fontSize: hp('3.5%'),
    fontWeight: '500',
    color: '#444',
    textAlign: 'left'
  },

  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp('94%'),
    height: hp('40%'),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },

  forgotPasswordView: {
    width: wp('40%'),
  },

  forgotPasswordText: {
    paddingVertical: hp('0.25%'),
    paddingHorizontal: wp('1.0%'),
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    fontSize: hp('2.0%'),
    color: '#888',
    textAlign: 'right',
  },

  signButtonView: {
    marginVertical: hp('2.0%'),
  },

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('2.0%'),
    paddingVertical: hp('0.5%'),
    borderTopColor: '#888',
    borderTopWidth: 1,
  },

  bottomBarText: {
    paddingHorizontal: wp('1.0%'),
    fontSize: hp('2.0%'),
    fontWeight: '400',
    textAlign: 'center',
  },

  primaryColor: {
    color: '#2196f3',
  },

  textColor: {
    color: '#444',
  },

});

export default styles;

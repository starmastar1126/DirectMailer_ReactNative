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
  
  iconButtonView: {
    paddingTop: hp('3%'),
    paddingBottom: hp('3%'),
    paddingLeft: wp('0%'),
    paddingRight: wp('0%'),
    height: hp('21%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconButton: {
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    height: hp('15%'),
    width: hp('50%'),
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
  },

  iconText: {
    paddingTop: hp('1%'),
    height: hp('5.0%'),
    width: wp('80%'),
    fontSize: hp('2.5%'),
    textAlign: 'center',
    color: '#444',
  },
  
  list: {
    paddingTop: hp('3%'),
    paddingBottom: hp('3%'),
    paddingLeft: wp('0%'),
    paddingRight: wp('0%'),
    width: wp('100%'),
    height: hp('75%'),
    backgroundColor: '#eee',
    alignItems: 'center',
  },

  listTitle: {
    width: wp('94%'),
    height: hp('5%'),
    flexDirection: 'row',
  },

  listTitleLeft: {
    width: wp('62%'),
    color: '#444',
    height: hp('5%'),
    textAlign: 'left',
    fontSize: hp('2.0%'),
  },

  listTitleRight: {
    width: wp('32%'),
    color: '#444',
    height: hp('5%'),
    textAlign: 'right',
    fontSize: hp('2.0%'),
  },

});

export default styles;

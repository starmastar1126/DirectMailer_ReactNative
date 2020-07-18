import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('90%'),
    paddingVertical: hp('1.0%'),
    borderRadius: 10,
    backgroundColor: '#27ae60',
  },

  leftEmptyView: {
    width: wp('20%'),
  },

  rightIconView: {
    alignItems: 'center',
  },

  textButton: {
    width: wp('50%'),
    fontSize: hp('3.0%'),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  
});

export default styles;

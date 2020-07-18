import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    container: {
        width: wp('90%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textInput: {
      paddingVertical: hp('0.5%'),
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      width: wp('88%') - hp('3.0%'),
      fontSize: hp('2.25%'),
      color: '#444',
    },
  
});

export default styles;

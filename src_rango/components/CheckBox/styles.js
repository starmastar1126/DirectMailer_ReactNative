import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    container: {
        width: wp('50%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    text: {
        width: wp('48%') - hp('2.5%'),
        paddingRight: wp('2.0%'),
        color: '#444',
        textAlign: 'left'
    },
  
});

export default styles;

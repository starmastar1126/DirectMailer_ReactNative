import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    container: {
        marginVertical: hp('0.5%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    socialIconView: {
        paddingHorizontal: wp('1.0%'),
        alignItems: 'center',
    },
  
});

export default styles;

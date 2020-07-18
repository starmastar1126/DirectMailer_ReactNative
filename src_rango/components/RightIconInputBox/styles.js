import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    textInput: {
        paddingVertical: hp('0.5%'),
        fontSize: hp('2.25%'),
        color: '#444',
        textAlign: 'left',
    },

    iconView: {
        width: wp('10%'),
        alignItems: 'center'
    },
  
});

export default styles;

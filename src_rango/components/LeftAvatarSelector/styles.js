import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: hp('18%'),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingVertical: hp('1.0%'),
    },

    avatarImageView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: hp('5%'),
    },

    avatarImage: {
        top: -hp('3.2%'),
        left: -hp('1.0%'),
        borderRadius: 100,
        width: hp('6%'),
        height: hp('6%'),
        resizeMode: 'cover',
        position: 'absolute',
        backgroundColor: '#22d498',
    },

    unselectedImage: {
        tintColor: 'gray',
        backgroundColor: '#ccc',
    },

    textView: {
        width: hp('13%'),
        paddingHorizontal: hp('1.0%'),
    },

    text: {
        width: hp('11%'),
        textAlign: 'center',
        fontSize: hp('1.75%'),
        fontWeight: '400',
        color: '#22d498',
    },

    unselectedText: {
        color: '#888',
    },
  
});

export default styles;

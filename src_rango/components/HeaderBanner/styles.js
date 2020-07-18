import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    flagView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    centerSloganText: {
        marginHorizontal: wp('0.5%'),
        marginTop: hp('1.0%'),
        paddingHorizontal: hp('4.0%'),
        paddingVertical: hp('0.5%'),
        textAlign: 'center',
        fontWeight: '500',
        color: 'white',
        backgroundColor: '#a1275a',
        fontSize: hp('1.5%'),
    },

    square: {
        width: hp('2.0%'),
        height: hp('3.0%'),
        backgroundColor: '#a1275a',
    },

    triangle: {
        borderTopWidth: hp('1.5%'),
        borderBottomWidth: hp('1.5%'),
        backgroundColor: 'transparent',
        borderTopColor: '#a1275a',
        borderBottomColor: '#a1275a',
    },

    leftTriangle: {
        borderLeftWidth: hp('1.5%'),
        borderLeftColor: 'transparent',
    },

    rightTriangle: {
        borderRightWidth: hp('1.5%'),
        borderRightColor: 'transparent',
    },
  
});

export default styles;

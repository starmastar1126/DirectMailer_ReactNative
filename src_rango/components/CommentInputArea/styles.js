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
        marginHorizontal: hp('0.25%'),
        marginVertical: hp('0.5%'),
        paddingHorizontal: hp('1.5%'),
        paddingVertical: hp('0.0%'),
        textAlign: 'center',
        fontWeight: '500',
        color: 'white',
        backgroundColor: '#a1275a',
        fontSize: hp('1.75%'),
    },

    square: {
        width: hp('1.2%'),
        height: hp('2.0%') + 1,
        backgroundColor: '#a1275a',
    },

    triangle: {
        borderTopWidth: hp('1.0%'),
        borderBottomWidth: hp('1.0%'),
        backgroundColor: 'transparent',
        borderTopColor: '#a1275a',
        borderBottomColor: '#a1275a',
    },

    leftTriangle: {
        borderLeftWidth: hp('0.8%'),
        borderLeftColor: 'transparent',
    },

    rightTriangle: {
        borderRightWidth: hp('0.8%'),
        borderRightColor: 'transparent',
    },
  
});

export default styles;

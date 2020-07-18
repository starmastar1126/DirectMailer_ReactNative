import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const SponsorsGroup = props => {
    const {
    } = props;

    return (
        <View style={{marginVertical: hp('2.0%'), alignItems: 'center'}}>
            <Text style={{fontWeight: '500', color: '#444', fontSize: hp('2.5%'), paddingVertical: hp('1.0%')}}>
                Sponsors
            </Text>
            <View style={{width: wp('80%'), flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start', paddingVertical: hp('0.5%')}}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/sponsor-1.png')} style={{width: wp('20%'), resizeMode: 'contain'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/sponsor-2.png')} style={{width: wp('20%'), resizeMode: 'contain'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/sponsor-3.png')} style={{width: wp('20%'), resizeMode: 'contain'}} />
                </TouchableOpacity>
            </View>
            <View style={{width: wp('80%'), flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start', paddingVertical: hp('0.5%')}}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/sponsor-4.png')} style={{width: wp('20%'), resizeMode: 'contain'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/sponsor-5.png')} style={{width: wp('20%'), resizeMode: 'contain'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/sponsor-6.png')} style={{width: wp('20%'), resizeMode: 'contain'}} />
                </TouchableOpacity>
            </View>
            <View style={{width: wp('80%'), flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start', paddingVertical: hp('0.5%')}}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/sponsor-7.png')} style={{width: wp('20%'), resizeMode: 'contain'}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/sponsor-8.png')} style={{width: wp('20%'), resizeMode: 'contain'}} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SponsorsGroup;

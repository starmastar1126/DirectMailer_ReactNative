import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../TopMenu';
import SocialShareIconsGroup from '../SocialShareIconsGroup';
import HeaderTabsMenu from '../HeaderTabsMenu';

import images from '../../constants/images';
import styles from './styles';

const tabs = [
    {key: '1', route: 'TeamProfileOverview', text: 'OVERVIEW'},
    {key: '2', route: 'TeamProfilePlayers', text: 'PLAYERS'},
    {key: '3', route: 'TeamProfileResults', text: 'RESULTS'},
    {key: '4', route: 'TeamProfileNews', text: 'NEWS'},
]

const TeamProfileHeader = props => {

    const {
        navigation,
        selectedTab,
    } = props;

    return (
        <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('45%')}} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}>
            <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: hp('45%')}}>
                <Image source={require('../../assets/images/SRH.png')} style={{top: hp('4.0%'), alignSelf: 'center', width: wp('80.0%'), height: hp('8.0%'), resizeMode: 'contain', position: 'absolute', opacity: 0.6}} />
                <View style={{height: hp('13.0%')}}></View>
                <TopMenu navigation={navigation} />
                <Text style={{marginBottom: hp('0.5%'), textAlign: 'center', fontWeight: '600', color: 'white', fontSize: hp('2.75%'), letterSpacing: 1}}>KOLKATA KNIGHT RIDERS</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Text style={{width: wp('25.0%'), textAlign: 'right', fontWeight: '400', color: '#fff', fontSize: hp('1.75%')}}>Coach   :</Text>
                    <Text style={{width: wp('40.0%'), textAlign: 'left', fontWeight: '400', color: '#fff', fontSize: hp('1.75%')}}>&nbsp;&nbsp;&nbsp;&nbsp;Jacques Kallis</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Text style={{width: wp('25.0%'), textAlign: 'right', fontWeight: '400', color: '#fff', fontSize: hp('1.75%')}}>Captain :</Text>
                    <Text style={{width: wp('40.0%'), textAlign: 'left', fontWeight: '400', color: '#fff', fontSize: hp('1.75%')}}>&nbsp;&nbsp;&nbsp;&nbsp;Dinesh Karthik</Text>
                </View>
                <View style={{marginTop: hp('1.0%'), flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <View style={{borderRightWidth: 1, borderRightColor: '#fff'}}>
                        <Text style={{width: wp('45.0%'), textAlign: 'center', fontWeight: '500', color: '#fff', fontSize: hp('5.0%')}}>137</Text>
                        <Text style={{width: wp('45.0%'), textAlign: 'center', fontWeight: '500', color: '#fff', fontSize: hp('1.75%')}}>PLAYED</Text>
                    </View>
                    <View>
                        <Text style={{width: wp('45.0%'), textAlign: 'center', fontWeight: '500', color: '#fff', fontSize: hp('5.0%')}}>87</Text>
                        <Text style={{width: wp('45.0%'), textAlign: 'center', fontWeight: '500', color: '#fff', fontSize: hp('1.75%')}}>WON</Text>
                    </View>
                </View>
                <View style={{paddingVertical: hp('1.0%'), width: wp('90%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Icon name='heart' type='simple-line-icon' color='#f14135' size={hp('2.0%')} />
                        <Text style={{paddingRight: wp('6.0%'), paddingLeft: wp('2.0%'), fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>2109</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Icon name='like' type='simple-line-icon' color='#2d9af9' size={hp('2.0%')} />
                        <Text style={{paddingRight: wp('6.0%'), paddingLeft: wp('2.0%'), fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>390</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Icon name='paper-plane' type='simple-line-icon' color='#77b56c' size={hp('2.0%')} />
                        <Text style={{paddingRight: wp('6.0%'), paddingLeft: wp('2.0%'), fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>899</Text>
                    </View>
                </View>
                <HeaderTabsMenu width={wp('94%')} navigation={navigation} tabs={tabs} selectedTab={selectedTab} />
            </View>
        </LinearGradient>
    );

};

export default TeamProfileHeader;

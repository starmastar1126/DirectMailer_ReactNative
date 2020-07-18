import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../TopMenu';
import SocialShareIconsGroup from '../SocialShareIconsGroup';
import HeaderTabsMenu from '../HeaderTabsMenu';

import images from '../../constants/images';
import styles from './styles';

const tabs = [
    {key: '1', route: 'MatchCenterScoreCard', text: 'SCORE CARD'},
    {key: '2', route: 'MatchCenterTeams', text: 'TEAMS'},
]

const MatchCenterHeader = props => {

  const {
    navigation,
    selectedTab,
  } = props;

  return (
    <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('45%')}} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}>
        <View style={{height: hp('8.0%')}}></View>
        <TopMenu navigation={navigation} />
        <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: '600', color: 'white', fontSize: hp('2.25%'), letterSpacing: 1}}>IPL 2019</Text>
            <Text style={{fontWeight: '400', color: '#ddd', fontSize: hp('1.25%')}}>Final, 19:00 IST(13:30 GMT), Wankhede Stadium, Mumbai</Text>
            <Text style={{fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>CHENNAI SUPER KINGS WON BY 2 WICKETS</Text>
            <View style={{paddingVertical: hp('1.0%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
                <View style={{width: hp('10%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <Image source={require('../../assets/images/CSK.png')} style={{alignSelf: 'center', width: hp('6.0%'), height: hp('6.0%'), resizeMode: 'contain'}} />
                    <View style={{height: hp('2.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{width: hp('10%'), textAlign: 'center', fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>CHENNAI SUPER KINGS</Text>
                    </View>
                    <Text style={{alignSelf: 'center', fontWeight: '500', color: 'white', fontSize: hp('2.5%')}}>139/7</Text>
                    <Text style={{alignSelf: 'center', fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>RUN RATE: 6.95</Text>
                    <Text style={{alignSelf: 'center', fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>OVERS: 20/20</Text>
                </View>
                <Image source={images.leftCapPng} style={{alignItems: 'center', width: hp('13%'), height: hp('15%'), resizeMode: 'contain'}} />
                <View style={{backgroundColor: '#fff', width: 1, height: hp('15%'), borderLeftWidth: 1, borderLeftColor: '#fff'}}>
                </View>
                <Image source={images.rightCapPng} style={{alignItems: 'center', width: hp('13%'), height: hp('15%'), resizeMode: 'contain'}} />
                <View style={{width: hp('10%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', opacity: 0.8}}>
                    <Image source={require('../../assets/images/SRH.png')} style={{alignSelf: 'center', width: hp('6.0%'), height: hp('6.0%'), resizeMode: 'contain'}} />
                    <View style={{height: hp('2.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{width: hp('10%'), textAlign: 'center', fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>SUN RISERS HYDERABAD</Text>
                    </View>
                    <Text style={{alignSelf: 'center', fontWeight: '500', color: 'white', fontSize: hp('2.5%')}}>140/8</Text>
                    <Text style={{alignSelf: 'center', fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>RUN RATE: 7.50</Text>
                    <Text style={{alignSelf: 'center', fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>OVERS: 20/20</Text>
                </View>
                <View style={{alignSelf: 'center', top: hp('15.0%'), width: hp('46%'), height: hp('6%'), position: 'absolute', alignItems: 'center', paddingHorizontal: 'auto'}}>
                    <Image source={images.matchCenterHeaderWingPng} style={{marginTop: hp('1.0%'), width: hp('46%'), height: hp('3.75%'), resizeMode: 'stretch'}} />
                    <Image source={images.shieldPng} style={{top: hp('0.0%'), width: hp('5%'), height: hp('6%'), resizeMode: 'stretch', position: 'absolute'}} />
                    <View style={{top: hp('-0.2%'), width: hp('46%'), height: hp('5.0%'), position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <View style={{paddingTop: hp('0.0%'), paddingBottom: hp('0.7%'), width: hp('21%'), alignItems: 'center', paddingLeft: hp('12.0%'), flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{width: hp('9.0%'), textAlign: 'center', fontWeight: '600', color: 'white', fontSize: hp('2.0%')}}>CSK</Text>
                        </View>
                        <View style={{width: hp('4%'), alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingTop: hp('0.5%')}}>
                            <Text style={{width: hp('4%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.0%')}}>LIVE</Text>
                            <Text style={{width: hp('4%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>VS</Text>
                        </View>
                        <View style={{paddingTop: hp('0.0%'), paddingBottom: hp('0.7%'), width: hp('21%'), alignItems: 'center', paddingRight: hp('12.0%'), flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{width: hp('9.0%'), textAlign: 'center', fontWeight: '600', color: 'white', fontSize: hp('2.0%')}}>SRH</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginTop: hp('4.5%')}}>
                <SocialShareIconsGroup />
            </View>
        </View>
        <HeaderTabsMenu width={wp('94%')} navigation={navigation} tabs={tabs} selectedTab={selectedTab} />
    </LinearGradient>
  );

};

export default MatchCenterHeader;

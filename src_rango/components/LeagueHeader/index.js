import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../TopMenu';
import HeaderBanner from '../HeaderBanner';
import SocialShareIconsGroup from '../SocialShareIconsGroup';
import HeaderTabsMenu from '../HeaderTabsMenu';

import images from '../../constants/images';
import styles from './styles';

const leagueStackTabs = [
    {key: '1', route: 'LeagueOverview', text: 'OVERVIEW'},
    {key: '2', route: 'LeagueTeams', text: 'TEAMS'},
    {key: '3', route: 'LeagueFixtures', text: 'FIXTURES'},
    {key: '4', route: 'LeagueResults', text: 'RESULTS'},
]

const LeagueHeader = props => {

  const {
    navigation,
    stadium,
    slogan,
    selectedTab,
  } = props;

  return (
    <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('30%')}} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}>
      <View style={{height: hp('8.0%')}}></View>
      <TopMenu navigation={navigation} />
      <Text style={{fontWeight: '600', color: 'white', fontSize: hp('3.5%'), letterSpacing: 1}}>CRICKET PRO</Text>
      <Text style={{fontWeight: '500', color: 'white', fontSize: hp('2.0%')}}>{stadium}</Text>
      <HeaderBanner slogan={slogan} />
      <SocialShareIconsGroup />
      <HeaderTabsMenu width={wp('94%')} navigation={navigation} tabs={leagueStackTabs} selectedTab={selectedTab} />
    </LinearGradient>
  );

};

export default LeagueHeader;

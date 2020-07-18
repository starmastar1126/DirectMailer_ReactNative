import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../TopMenu';
import HeaderTabsMenu from '../HeaderTabsMenu';

const statusStackTabs = [
    {key: '1', route: 'StatusMyMatches', text: 'MY MATCHES'},
    {key: '2', route: 'StatusMyLeagues', text: 'MY LEAGUES'},
    {key: '3', route: 'StatusAllLeagues', text: 'ALL LEAGUES'},
]

const StatusHeader = props => {

    const {
        navigation,
        selectedTab,
    } = props;

    return (
        <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('15%')}} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}>
            <View style={{height: hp('8.0%')}}></View>
            <TopMenu navigation={navigation} title='LEAGUES' />
            <HeaderTabsMenu width={wp('94%')} navigation={navigation} tabs={statusStackTabs} selectedTab={selectedTab} />
        </LinearGradient>
    );

};

export default StatusHeader;

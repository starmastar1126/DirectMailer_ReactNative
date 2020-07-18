import React from 'react';
import { ImageBackground, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../TopMenu';
import HeaderTabsMenu from '../HeaderTabsMenu';

import images from '../../constants/images';
import styles from './styles';

const tabs = [
    {key: '1', route: 'MatchScheduleUpcoming', text: 'UPCOMING'},
    {key: '2', route: 'MatchScheduleLive', text: 'LIVE'},
    {key: '3', route: 'MatchScheduleResults', text: 'RESULTS'},
    {key: '4', route: 'MatchScheduleMap', text: 'MAP'},
]

const MatchScheduleHeader = props => {

  const {
    navigation,
    selectedTab,
  } = props;

  return (
    <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('15%')}} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}>
      <View style={{height: hp('8.0%')}}></View>
      <TopMenu navigation={navigation} title='SCHEDULE' />
      <View style={{width: wp('94%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
        <HeaderTabsMenu width={wp('84%')} navigation={navigation} tabs={tabs} selectedTab={selectedTab} />
        <TouchableOpacity style={{width: wp('10.0%'), paddingVertical: hp('0.5%')}}
            onPress = { () =>
                navigation.navigate('Settings')
        }>
          <Icon name='settings' type='octicon' color={selectedTab == 'Settings' ? '#fdd003' : '#fff'} size={hp('2.8%')} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

};

export default MatchScheduleHeader;

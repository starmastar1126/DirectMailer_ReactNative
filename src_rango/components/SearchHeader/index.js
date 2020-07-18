import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../TopMenu';
import HeaderTabsMenu from '../HeaderTabsMenu';

import images from '../../constants/images';
import layout from '../../themes/layout';
import colors from '../../themes/colors';

const searchStackTabs = [
    {key: '1', route: 'SearchPlayers', text: 'PLAYERS'},
    {key: '2', route: 'SearchTeam', text: 'CLUB/TEAM'},
    {key: '3', route: 'SearchNews', text: 'NEWS'},
]

const SearchHeader = props => {

    const {
        navigation,
        selectedTab,
    } = props;

    return (
        <View>
            <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('15%')}} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}>
                <View style={{height: hp('8.0%')}}></View>
                <TopMenu navigation={navigation} title='SEARCH' />
                <HeaderTabsMenu width={wp('94%')} navigation={navigation} tabs={searchStackTabs} selectedTab={selectedTab} />
            </LinearGradient>
            <View style={{paddingTop: hp('1.0%'), backgroundColor: '#f6f8fa', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: wp('100%'), height: hp('10.0%'), alignItems: 'center'}}>
                <View style={{backgroundColor: '#fff', width: wp('94%'), height: hp('6.0%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                    <View style={{width: wp('7%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon name='search1' type='antdesign' color='#444' size={hp('2.5%')} />
                    </View>
                    <View style={{width: wp('77%'), height: hp('4.5%'), paddingHorizontal: wp('1.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput style={{paddingVertical: hp('0.25%'), width: wp('75%'), color: '#444', fontSize: hp('1.75%')}}
                            placeholder = 'Try searching for Players, teams, news, locations ...'
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={{backgroundColor: '#3dc9ec', height: hp('6.0%'), width: wp('10%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5}}>
                            <Icon name='filter' type='antdesign' color='#fff' size={hp('2.5%')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

};

export default SearchHeader;

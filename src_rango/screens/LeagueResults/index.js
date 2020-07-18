import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import LeagueHeader from '../../components/LeagueHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const matchResultData = [
    {key: '1', matchDate: 'MONDAY 28 APRIL 2019', matchTime: '15:00', matchResult: 'First stage - Group B, Eden Garden, Kolkata', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '2', matchDate: 'MONDAY 28 APRIL 2019', matchTime: '09:00', matchResult: 'First stage - Group B, Eden Garden, Kolkata', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'KXIP', homeTeamImage: require('../../assets/images/KXIP.png'), awayTeam: 'KKR', awayTeamImage: require('../../assets/images/KKR.png')},
    {key: '3', matchDate: 'MONDAY 27 APRIL 2019', matchTime: '15:00', matchResult: 'First stage - M. A. Chidambaram Stadium', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'MI', homeTeamImage: require('../../assets/images/MI.png'), awayTeam: 'CSK', awayTeamImage: require('../../assets/images/CSK.png')},
    {key: '4', matchDate: 'MONDAY 25 APRIL 2019', matchTime: '09:00', matchResult: 'First stage - Wankhede Stadium', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'KXIP', homeTeamImage: require('../../assets/images/KXIP.png'), awayTeam: 'MI', awayTeamImage: require('../../assets/images/MI.png')},
    {key: '5', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchResult: 'First stage - M. A. Chidambaram Stadium', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
]

const borderBottomColors = [
    '#cc3637', '#ea9d1b', '#4d88c0', '#673e8a', '#cc3637'
]

let compareDate = "";
let flag = false;

class LeagueResultsScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'League',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#f5f5f5', alignItems: 'center'}}>
                <LeagueHeader
                    navigation={this.props.navigation}
                    stadium='JN STADIUM, Washington DC'
                    slogan='START ON AUGUST 30, 2018'
                    selectedTab='LeagueResults'
                />
                <ScrollView style={{paddingHorizontal: wp('2%'), height: hp('60%')}}>
                    <View style={{paddingTop: hp('1.0%'), paddingBottom: hp('2.0%')}}>
                    {
                        matchResultData.map((item, key) => {
                            if (compareDate == "")
                                compareDate = item.matchDate;
                            else
                                if (compareDate == item.matchDate) {
                                    flag = true;
                                } else {
                                    compareDate = item.matchDate;
                                    flag = false;
                                }
                            return (
                                <View key={key}>
                                    {
                                        flag === false ? (
                                            <Text style={{textAlign: 'center', fontWeight: '500', color: '#444', fontSize: hp('2.0%'), paddingTop: hp('1.0%'), paddingBottom: hp('0.0%')}}>
                                                {item.matchDate}
                                            </Text>
                                        ) : null
                                    }
                                    <View style={{marginVertical: hp('0.5%'), width: wp('94%'), backgroundColor: '#fff', borderBottomColor: borderBottomColors[key], borderBottomWidth: hp('0.5%'), borderRadius: 5}}>
                                        <Text style={{width: wp('94%'), textAlign: 'center', fontWeight: '500', color: '#888', backgroundColor: '#dedede', fontSize: hp('1.2%'), paddingTop: hp('0.5%'), borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                            Match1 19:00 IST(13:30 GMT), Wankhede Stadium, Mumbai
                                        </Text>
                                        <Text style={{width: wp('94%'), textAlign: 'center', fontWeight: '500', color: '#444', backgroundColor: '#dedede', fontSize: hp('1.5%'), paddingBottom: hp('0.5%')}}>
                                            {item.matchResult}
                                        </Text>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: hp('0.5%')}}>
                                            <View style={{width: wp('8%')}}>
                                            </View>
                                            <TouchableOpacity style={{width: wp('17%'), alignItems: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                <Image source={item.homeTeamImage} style={{width: hp('7%'), height: hp('7%'), resizeMode: 'contain'}} />
                                            </TouchableOpacity>
                                            <View style={{width: wp('12%'), alignItems: 'flex-start'}}>
                                                <Text style={{textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.8%'), paddingVertical: hp('0.0%')}}>
                                                    {item.homeTeam}
                                                </Text>
                                                <Text style={{textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('2.0%'), paddingVertical: hp('0.0%')}}>
                                                    {item.homeTeamScore1}
                                                </Text>
                                                <Text style={{textAlign: 'left', fontWeight: '400', color: '#666', fontSize: hp('1.5%'), paddingVertical: hp('0.0%')}}>
                                                    {item.homeTeamScore2}
                                                </Text>
                                            </View>
                                            <View style={{width: wp('10%')}}>
                                            </View>
                                            <View style={{width: wp('12%'), alignItems: 'flex-end'}}>
                                                <Text style={{textAlign: 'right', fontWeight: '500', color: '#888', fontSize: hp('1.8%'), paddingVertical: hp('0.0%')}}>
                                                    {item.awayTeam}
                                                </Text>
                                                <Text style={{textAlign: 'right', fontWeight: '500', color: '#888', fontSize: hp('2.0%'), paddingVertical: hp('0.0%')}}>
                                                    {item.awayTeamScore1}
                                                </Text>
                                                <Text style={{textAlign: 'right', fontWeight: '400', color: '#888', fontSize: hp('1.5%'), paddingVertical: hp('0.0%')}}>
                                                    {item.awayTeamScore2}
                                                </Text>
                                            </View>
                                            <TouchableOpacity style={{width: wp('17%'), alignItems: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                <Image source={item.awayTeamImage} style={{width: hp('7%'), height: hp('7%'), resizeMode: 'contain'}} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{width: wp('8%')}} onPress={() => this.props.navigation.navigate('MatchCenterScoreCard')}>
                                                <Icon name='right' type='antdesign' color='#ccc' size={hp('2%')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    </View>
                </ScrollView>
                <BottomTabsMenu navigation={this.props.navigation} selectedTab={this.state.selectedBottomTab}
                    onSelectTab={ (value) =>
                        this.onSelectBottomTab(value)}
                />
            </View>
        );
    }

}

export default LeagueResultsScreen

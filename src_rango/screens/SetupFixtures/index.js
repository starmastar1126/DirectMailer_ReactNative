import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SetupHeader from '../../components/SetupHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const matchResultData = [
    {key: '1', matchStadium: 'FEROZ SHAH KOTLA GROUND', matchDate: 'MONDAY 28 APRIL 2019', matchTime: '15:00', matchResult: 'First stage - Group B, Eden Garden, Kolkata', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '2', matchStadium: 'EDEN GARDEN', matchDate: 'MONDAY 28 APRIL 2019', matchTime: '09:00', matchResult: 'First stage - Group B, Eden Garden, Kolkata', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'KXIP', homeTeamImage: require('../../assets/images/KXIP.png'), awayTeam: 'KKR', awayTeamImage: require('../../assets/images/KKR.png')},
    {key: '3', matchStadium: 'PUNE STADIUM', matchDate: 'MONDAY 27 APRIL 2019', matchTime: '15:00', matchResult: 'First stage - M. A. Chidambaram Stadium', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'MI', homeTeamImage: require('../../assets/images/MI.png'), awayTeam: 'CSK', awayTeamImage: require('../../assets/images/CSK.png')},
    {key: '4', matchStadium: 'FEROZ SHAH KOTLA GROUND', matchDate: 'MONDAY 25 APRIL 2019', matchTime: '09:00', matchResult: 'First stage - Wankhede Stadium', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'KXIP', homeTeamImage: require('../../assets/images/KXIP.png'), awayTeam: 'MI', awayTeamImage: require('../../assets/images/MI.png')},
    {key: '5', matchStadium: 'EDEN GARDEN', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchResult: 'First stage - M. A. Chidambaram Stadium', awayTeamScore1: '178/6', awayTeamScore2: '20/20', homeTeamScore1: '181/2', homeTeamScore2: '18.3/20', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
]

const borderBottomColors = [
    '#cc3637', '#ea9d1b', '#4d88c0', '#673e8a', '#cc3637'
]

class SetupFixturesScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Settings',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#e0e0e0', alignItems: 'center'}}>
                <SetupHeader
                    navigation={this.props.navigation}
                    stadium='JN STADIUM, Washington DC'
                    slogan='START ON AUGUST 30, 2018'
                    selectedTab='SetupFixtures'
                    leagueStack={false}
                />
                <ScrollView style={{paddingHorizontal: wp('2%'), height: hp('60%')}}>
                    <View style={{paddingVertical: hp('1.0%')}}>
                    {
                        matchResultData.map((item, key) => {
                            return (
                                <View key={key}>
                                    {
                                        key !== 0 ? (
                                            matchResultData[key - 1].matchDate !== item.matchDate ? (
                                                <View style={{marginTop: hp('1.0%')}}>
                                                    <Text style={{textAlign: 'center', fontWeight: '500', color: '#444', fontSize: hp('2.0%'), paddingTop: hp('1.0%'), paddingBottom: hp('0.5%')}}>
                                                        {item.matchDate}
                                                    </Text>
                                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: hp('1.0%'), width: wp('94%'), backgroundColor: '#e6e9fc', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                                        <Icon name='stadium' type='material-community' color='#666' size={hp('2.5%')} />
                                                        <Text style={{paddingHorizontal: wp('2.0%'), width: wp('50%'), textAlign: 'center', fontWeight: '500', color: '#444', fontSize: hp('1.5%')}}>
                                                            {item.matchStadium}
                                                        </Text>
                                                        <Icon name='stadium' type='material-community' color='#666' size={hp('2.5%')} />
                                                    </View>
                                                </View>
                                            ) : (
                                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: hp('1.0%'), width: wp('94%'), backgroundColor: '#e6e9fc'}}>
                                                    <Icon name='stadium' type='material-community' color='#666' size={hp('2.5%')} />
                                                    <Text style={{paddingHorizontal: wp('2.0%'), width: wp('50%'), textAlign: 'center', fontWeight: '500', color: '#444', fontSize: hp('1.5%')}}>
                                                        {item.matchStadium}
                                                    </Text>
                                                    <Icon name='stadium' type='material-community' color='#666' size={hp('2.5%')} />
                                                </View>
                                            )) : (
                                                <View style={{marginTop: hp('1.0%')}}>
                                                    <Text style={{textAlign: 'center', fontWeight: '500', color: '#444', fontSize: hp('2.0%'), paddingTop: hp('1.0%'), paddingBottom: hp('0.5%')}}>
                                                        {item.matchDate}
                                                    </Text>
                                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: hp('1.0%'), width: wp('94%'), backgroundColor: '#e6e9fc', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                                        <Icon name='stadium' type='material-community' color='#666' size={hp('2.5%')} />
                                                        <Text style={{paddingHorizontal: wp('2.0%'), width: wp('50%'), textAlign: 'center', fontWeight: '500', color: '#444', fontSize: hp('1.5%')}}>
                                                            {item.matchStadium}
                                                        </Text>
                                                        <Icon name='stadium' type='material-community' color='#666' size={hp('2.5%')} />
                                                    </View>
                                                </View>
                                            )
                                    }
                                    <View style={{marginVertical: hp('0.0%'), width: wp('94%'), backgroundColor: '#fff', borderBottomColor: borderBottomColors[key]}}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: hp('0.5%')}}>
                                            <View style={{width: wp('8%')}}>
                                            </View>
                                            <TouchableOpacity style={{width: wp('16%'), alignItems: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                <Image source={item.homeTeamImage} style={{width: hp('7%'), height: hp('7%'), resizeMode: 'contain'}} />
                                            </TouchableOpacity>
                                            <View style={{width: wp('12%'), alignItems: 'flex-start'}}>
                                                <Text style={{textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.8%'), paddingVertical: hp('0.0%')}}>
                                                    {item.homeTeam}
                                                </Text>
                                            </View>
                                            <View style={{width: wp('12%')}}>
                                                <Text style={{textAlign: 'center', backgroundColor: '#727272', fontWeight: '500', color: '#eee', fontSize: hp('1.25%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%'), borderRadius: 5}}>
                                                    {item.matchTime}
                                                </Text>
                                            </View>
                                            <View style={{width: wp('12%'), alignItems: 'flex-end'}}>
                                                <Text style={{textAlign: 'right', fontWeight: '500', color: '#888', fontSize: hp('1.8%'), paddingVertical: hp('0.0%')}}>
                                                    {item.awayTeam}
                                                </Text>
                                            </View>
                                            <TouchableOpacity style={{width: wp('16%'), alignItems: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                <Image source={item.awayTeamImage} style={{width: hp('7%'), height: hp('7%'), resizeMode: 'contain'}} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{width: wp('8%')}} onPress={() => this.props.navigation.navigate('MatchCenterScoreCard')}>
                                                <Icon name='right' type='antdesign' color='#ccc' size={hp('2%')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    {
                                        (key === (matchResultData.length - 1)) ? (
                                            <View style={{marginBottom: hp('1.0%'), width: wp('94%'), height: hp('0.5%'), backgroundColor: '#f6bf0c', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                                            </View>
                                        ) : (
                                            item.matchDate !== matchResultData[key + 1].matchDate ? (
                                                <View style={{marginBottom: hp('0.5%'), width: wp('94%'), height: hp('0.5%'), backgroundColor: '#f6bf0c', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                                                </View>
                                            ) : null
                                        )
                                    }
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

export default SetupFixturesScreen

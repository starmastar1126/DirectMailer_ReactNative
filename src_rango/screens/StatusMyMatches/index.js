import React from 'react';
import { ScrollView, TouchableOpacity, View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import StatusHeader from '../../components/StatusHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const matchList = [
    {key: '1', leagueName: 'India Premier League 2018-2019', leagueStage: 'Frist Stage, Group B', matchPlace: 'Eden Gardens, Kolkata', matchDate: 'Monday Jun 13, 2019', matchTime: '15:00', leftTeamName: 'CSK', leftTeamImage: require('../../assets/images/CSK.png'), leftTeamScore1: null, leftTeamScore2: null, rightTeamName: 'SRH', rightTeamImage: require('../../assets/images/SRH.png'), rightTeamScore1: null, rightTeamScore2: null, matchResult: null, matchWinner: null, expanded: false},
    {key: '2', leagueName: 'India Second League 2018-2019', leagueStage: 'Frist Stage, Group B', matchPlace: 'Eden Gardens, Kolkata', matchDate: 'Monday Jun 13, 2019', matchTime: '15:00', leftTeamName: 'CSK', leftTeamImage: require('../../assets/images/CSK.png'), leftTeamScore1: null, leftTeamScore2: null, rightTeamName: 'SRH', rightTeamImage: require('../../assets/images/SRH.png'), rightTeamScore1: null, rightTeamScore2: null, matchResult: null, matchWinner: null, expanded: false},
    {key: '3', leagueName: 'India Champion League 2018-2019', leagueStage: 'Frist Stage, Group B', matchPlace: 'Eden Gardens, Kolkata', matchDate: 'Monday Jun 13, 2019', matchTime: '15:00', leftTeamName: 'CSK', leftTeamImage: require('../../assets/images/CSK.png'), leftTeamScore1: '181/2', leftTeamScore2: '18.3/20', rightTeamName: 'SRH', rightTeamImage: require('../../assets/images/SRH.png'), rightTeamScore1: '178/6', rightTeamScore2: '20/20', matchResult: 'won', matchWinner: 'CSK', expanded: false},
    {key: '4', leagueName: 'India Super Cup 2019', leagueStage: 'Frist Stage, Group B', matchPlace: 'Eden Gardens, Kolkata', matchDate: 'Monday Jun 13, 2019', matchTime: '15:00', leftTeamName: 'CSK', leftTeamImage: require('../../assets/images/CSK.png'), leftTeamScore1: '181/2', leftTeamScore2: '18.3/20', rightTeamName: 'SRH', rightTeamImage: require('../../assets/images/SRH.png'), rightTeamScore1: '178/6', rightTeamScore2: '20/20', matchResult: 'lost', matchWinner: 'CSK', expanded: false},
    {key: '5', leagueName: 'Barbaca Cup 2019', leagueStage: 'Frist Stage, Group B', matchPlace: 'Eden Gardens, Kolkata', matchDate: 'Monday Jun 13, 2019', matchTime: '15:00', leftTeamName: 'CSK', leftTeamImage: require('../../assets/images/CSK.png'), leftTeamScore1: '181/2', leftTeamScore2: '18.3/20', rightTeamName: 'SRH', rightTeamImage: require('../../assets/images/SRH.png'), rightTeamScore1: '178/6', rightTeamScore2: '20/20', matchResult: 'won', matchWinner: 'CSK', expanded: false},
    {key: '6', leagueName: 'Romio Cup 2019', leagueStage: 'Frist Stage, Group B', matchPlace: 'Eden Gardens, Kolkata', matchDate: 'Monday Jun 13, 2019', matchTime: '15:00', leftTeamName: 'CSK', leftTeamImage: require('../../assets/images/CSK.png'), leftTeamScore1: '181/2', leftTeamScore2: '18.3/20', rightTeamName: 'SRH', rightTeamImage: require('../../assets/images/SRH.png'), rightTeamScore1: '178/6', rightTeamScore2: '20/20', matchResult: 'lost', matchWinner: 'CSK', expanded: false},
    {key: '7', leagueName: 'Sanemala Cup 2019', leagueStage: 'Frist Stage, Group B', matchPlace: 'Eden Gardens, Kolkata', matchDate: 'Monday Jun 13, 2019', matchTime: '15:00', leftTeamName: 'CSK', leftTeamImage: require('../../assets/images/CSK.png'), leftTeamScore1: '181/2', leftTeamScore2: '18.3/20', rightTeamName: 'SRH', rightTeamImage: require('../../assets/images/SRH.png'), rightTeamScore1: '178/6', rightTeamScore2: '20/20', matchResult: 'won', matchWinner: 'CSK', expanded: false},
]

class StatusMyMatchedScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Status',
            matchList: matchList,
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    onExpanded = (key) => {
        if (matchList[key].matchResult !== null)
            return;
        matchList[key].expanded = !matchList[key].expanded
        this.forceUpdate();
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <StatusHeader
                    navigation={this.props.navigation}
                    selectedTab='StatusMyMatches'
                />
                <ScrollView style={{height: hp('75%')}}>
                    <View style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('1.0%'), width: wp('100%'), backgroundColor: '#f6f8fa'}}>
                        {
                            this.state.matchList.map((item, key) => {
                                return (
                                    <View key={key} style={{marginVertical: hp('0.5%%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('1.0%'), width: wp('96%'), backgroundColor: '#fff', borderRadius: 10}}>
                                        <View style={{marginVertical: hp('0.5%'), width: wp('92%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <TouchableOpacity>
                                                <Icon name='left' type='antdesign' color='#fff' size={hp('2.0%')} />
                                            </TouchableOpacity>
                                            <Text style={{fontSize: hp('2.0%'), fontWeight: '500', color: '#444'}}>{item.leagueName}</Text>
                                            <TouchableOpacity onPress={() => this.onExpanded(key)}>
                                                <Icon name={item.expanded ? 'down' : 'right'} type='antdesign' color='#ccc' size={hp('2.0%')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{width: wp('92%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <View style={{width: wp('12%'), height: wp('15%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                <Text style={{fontSize: hp('2.0%'), fontWeight: '500', color: '#444'}}>{item.leftTeamScore1}</Text>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>{item.leftTeamScore2}</Text>
                                            </View>
                                            <TouchableOpacity style={{width: wp('15%'), height: wp('15%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfile')}>
                                                <Image source={item.leftTeamImage} style={{width: wp('12%'), height: wp('12%'), resizeMode: 'contain'}} />
                                                <Text style={{fontSize: hp('2.5%'), fontWeight: '500', color: '#444'}}>{item.leftTeamName}</Text>
                                            </TouchableOpacity>
                                            <View style={{paddingHorizontal: wp('2.0%'), width: wp('38%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#666'}}>
                                                    {item.leagueStage}
                                                </Text>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#666'}}>
                                                    {item.matchPlace}
                                                </Text>
                                                <Text style={{marginVertical: hp('0.25%'), fontSize: hp('1.5%'), fontWeight: '400', color: '#666'}}>
                                                    {item.matchDate}
                                                </Text>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '500', color: '#444'}}>
                                                    VS
                                                </Text>
                                                <Text style={{marginVertical: hp('0.5%'), paddingVertical: hp('0.25%'), width: wp('20%'), textAlign: 'center', fontSize: hp('1.5%'), fontWeight: '400', color: '#fff', backgroundColor: item.matchResult == 'lost' ? '#de1775' : item.matchResult == 'won' ? '#57a42a' : '#00a2e8', borderRadius: 20}}>
                                                    {
                                                        item.matchResult == 'won'
                                                        ?
                                                            'Won'
                                                        :
                                                            item.matchResult == 'lost'
                                                            ?
                                                                'Lost'
                                                            :
                                                                item.matchTime
                                                    }
                                                </Text>
                                            </View>
                                            <TouchableOpacity style={{width: wp('15%'), height: wp('15%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfile')}>
                                                <Image source={item.rightTeamImage} style={{width: wp('12%'), height: wp('12%'), resizeMode: 'contain'}} />
                                                <Text style={{fontSize: hp('2.5%'), fontWeight: '500', color: '#444'}}>{item.rightTeamName}</Text>
                                            </TouchableOpacity>
                                            <View style={{width: wp('12%'), height: wp('15%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                <Text style={{fontSize: hp('2.0%'), fontWeight: '500', color: '#444'}}>{item.rightTeamScore1}</Text>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>{item.rightTeamScore2}</Text>
                                            </View>
                                        </View>
                                        {
                                            item.expanded
                                            ?
                                                <View style={{width: wp('92%'), paddingVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                                    <Text style={{marginHorizontal: wp('2.0%'), paddingVertical: hp('0.25%'), width: wp('20%'), textAlign: 'center', color: '#fff', backgroundColor: '#de1775', borderRadius: 20}}>Cancel</Text>
                                                    <Text style={{marginHorizontal: wp('2.0%'), paddingVertical: hp('0.25%'), width: wp('20%'), textAlign: 'center', color: '#fff', backgroundColor: '#57a42a', borderRadius: 20}}>Score</Text>
                                                </View>
                                            :
                                                null
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

export default StatusMyMatchedScreen

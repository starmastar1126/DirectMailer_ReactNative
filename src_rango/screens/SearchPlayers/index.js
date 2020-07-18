import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SearchHeader from '../../components/SearchHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const playerList = [
    {key: '1', matchDate: 'MONDAY 28 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - Rajiv Gandhi Intl. Cricket Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '2', matchDate: 'MONDAY 27 APRIL 2019', matchTime: '09:00', matchPhase: 'First stage - Group B, Eden Garden, Kolkata', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'KXIP', homeTeamImage: require('../../assets/images/KXIP.png'), awayTeam: 'KKR', awayTeamImage: require('../../assets/images/KKR.png')},
    {key: '3', matchDate: 'MONDAY 27 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'MI', homeTeamImage: require('../../assets/images/MI.png'), awayTeam: 'CSK', awayTeamImage: require('../../assets/images/CSK.png')},
    {key: '4', matchDate: 'MONDAY 25 APRIL 2019', matchTime: '09:00', matchPhase: 'First stage - Wankhede Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'KXIP', homeTeamImage: require('../../assets/images/KXIP.png'), awayTeam: 'MI', awayTeamImage: require('../../assets/images/MI.png')},
    {key: '5', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '6', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '7', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '8', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
]

class SearchPlayersScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Search',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <SearchHeader
                    navigation={this.props.navigation}
                    selectedTab='SearchPlayers'
                />
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), paddingVertical: hp('0.0%'), height: hp('65%')}}>
                    <View style={{paddingTop: hp('0.5%'), paddingBottom: hp('2.0%'), paddingHorizontal: wp('1%')}}>
                        {
                            playerList.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('94%'), marginVertical: hp('0.5%'), backgroundColor: '#fff', borderRadius: 5}} onPress={() => this.props.navigation.navigate('PlayerProfile')}>
                                        <Image source={require('../../assets/images/search-players-player.jpg')} style={{width: wp('24%'), height: wp('18%'), resizeMode: 'cover'}} />
                                        <View style={{width: wp('64%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                            <Text style={{fontSize: hp('1.5%'), fontWeight: '500', color: '#444'}}>
                                                Chennai Super Kings
                                            </Text>
                                            <Text style={{fontSize: hp('1.75%'), fontWeight: '500', color: '#444'}}>
                                                MS DHONI
                                            </Text>
                                            <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                                Batsman
                                            </Text>
                                            <Text style={{fontSize: hp('1.25%'), fontWeight: '400', color: '#444'}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
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

export default SearchPlayersScreen

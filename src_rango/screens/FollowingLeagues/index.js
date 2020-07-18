import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FollowingHeader from '../../components/FollowingHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import images from '../../constants/images';

// import layout from '../../themes/layout';
// import styles from './styles';

const leagueList = [
    {key: '1', name: 'India Premier League 2018-2019', image: images.searchPlayersPlayerJpg, type: 'crystal-ball', startDate: 'September 1 2018', endDate: 'March 31 2019', like: true, teamImage: require('../../assets/images/CSK.png')},
    {key: '2', name: 'India Second League 2018-2019', image: images.searchPlayersPlayerJpg, type: 'crystal-ball', startDate: 'September 1 2018', endDate: 'March 31 2019', like: true, teamImage: require('../../assets/images/KXIP.png')},
    {key: '3', name: 'India Champion League 2018-2019', image: images.searchPlayersPlayerJpg, type: 'crystal-ball', startDate: 'September 1 2018', endDate: 'March 31 2019', like: true, teamImage: require('../../assets/images/KKR.png')},
    {key: '4', name: 'India Super Cup 2019', image: images.searchPlayersPlayerJpg, type: 'crystal-ball', startDate: 'April 1 2019', endDate: 'September 30 2019', like: true, teamImage: require('../../assets/images/SRH.png')},
    {key: '5', name: 'Barbaca Cup 2019', image: images.searchPlayersPlayerJpg, type: 'crystal-ball', startDate: 'April 1 2019', endDate: 'September 30 2019', like: true, teamImage: require('../../assets/images/DD.png')},
    {key: '6', name: 'Romio Cup 2019', image: images.searchPlayersPlayerJpg, type: 'crystal-ball', startDate: 'April 1 2019', endDate: 'September 30 2019', like: true, teamImage: require('../../assets/images/MI.png')},
    {key: '7', name: 'Sanemala Cup 2019', image: images.searchPlayersPlayerJpg, type: 'crystal-ball', startDate: 'April 1 2019', endDate: 'September 30 2019', like: true, teamImage: require('../../assets/images/RCB.png')},
]

class FollowingLeaguesScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Following',
            leagueList: leagueList,
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    deletePlayer = (item) => {
        this.state.leagueList.pop(item);
        // this.state.leagueList[key].like = false;
        this.forceUpdate();
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <FollowingHeader
                    navigation={this.props.navigation}
                    selectedTab='FollowingLeagues'
                />
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), paddingVertical: hp('0.0%'), height: hp('75%')}}>
                    <View style={{paddingVertical: hp('2.0%'), paddingHorizontal: wp('1%')}}>
                        <View style={{marginBottom: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingVertical: hp('1.0%'), paddingHorizontal: wp('2.0%'), width: wp('94%'), backgroundColor: '#fff'}}>
                            <Text style={{fontSize: hp('2.0%'), fontWeight: '500', color: '#444'}}>
                                You are following {this.state.leagueList.length} Leagues
                            </Text>
                            <Text style={{marginTop: hp('0.5%'), fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                6 New Leagues recently added.
                            </Text>
                        </View>
                        {
                            this.state.leagueList.map((item, key) => {
                                return (
                                    item.like ? (
                                        <View key={key} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('94%'), marginVertical: hp('0.5%'), backgroundColor: '#fff', borderRadius: 5}}>
                                            <TouchableOpacity style={{alignSelf: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() => this.props.navigation.navigate('PlayerProfile')}>
                                                <Icon name={item.type} type='material-community' color='#aaa' size={hp('7.5%')} />
                                            </TouchableOpacity>
                                            <View style={{paddingHorizontal: wp('2.0%'), width: wp('64%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PlayerProfile')}>
                                                    <Text style={{fontSize: hp('1.75%'), fontWeight: '500', color: '#444'}}>
                                                        {item.name}
                                                    </Text>
                                                </TouchableOpacity>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#666'}}>
                                                    Eden Garden
                                                </Text>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                                    Start Date : {item.startDate}
                                                </Text>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                                    End Date : {item.endDate}
                                                </Text>
                                            </View>
                                            <TouchableOpacity style={{alignSelf: 'center', width: wp('10%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onPress={() => this.deletePlayer(item)}>
                                                <Icon name='delete-circle' type='material-community' color='#fc8d6f' size={hp('5.0%')} />
                                            </TouchableOpacity>
                                        </View>
                                    ) : null
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

export default FollowingLeaguesScreen

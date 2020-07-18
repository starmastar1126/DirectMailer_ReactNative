import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FollowingHeader from '../../components/FollowingHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import images from '../../constants/images';

// import layout from '../../themes/layout';
// import styles from './styles';

const playerList = [
    {key: '1', name: 'Joseph Angelic', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Batsman', like: true, teamImage: require('../../assets/images/CSK.png')},
    {key: '2', name: 'James Rodriges', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Batsman', like: true, teamImage: require('../../assets/images/KXIP.png')},
    {key: '3', name: 'Tom Huanfran', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Caption', like: true, teamImage: require('../../assets/images/KKR.png')},
    {key: '4', name: 'Yang Rodriges', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Batsman', like: true, teamImage: require('../../assets/images/SRH.png')},
    {key: '5', name: 'Bonny Angelic', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Caption', like: true, teamImage: require('../../assets/images/DD.png')},
    {key: '6', name: 'Rango Kenedy', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Batsman', like: true, teamImage: require('../../assets/images/MI.png')},
    {key: '7', name: 'Carman Huanfran', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Caption', like: true, teamImage: require('../../assets/images/RCB.png')},
]

class FollowingPlayersScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Following',
            playerList: playerList,
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    deletePlayer = (item) => {
        this.state.playerList.pop(item);
        // this.state.playerList[key].like = false;
        this.forceUpdate();
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <FollowingHeader
                    navigation={this.props.navigation}
                    selectedTab='FollowingPlayers'
                />
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), paddingVertical: hp('0.0%'), height: hp('75%')}}>
                    <View style={{paddingVertical: hp('2.0%'), paddingHorizontal: wp('1%')}}>
                        <View style={{marginBottom: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingVertical: hp('1.0%'), paddingHorizontal: wp('2.0%'), width: wp('94%'), backgroundColor: '#fff'}}>
                            <Text style={{fontSize: hp('2.0%'), fontWeight: '500', color: '#444'}}>
                                You are following {this.state.playerList.length} Players
                            </Text>
                            <Text style={{marginTop: hp('0.5%'), fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                6 New Players recently added.
                            </Text>
                        </View>
                        {
                            this.state.playerList.map((item, key) => {
                                return (
                                    item.like ? (
                                        <View key={key} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('94%'), marginVertical: hp('0.5%'), backgroundColor: '#fff', borderRadius: 5}}>
                                            <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.props.navigation.navigate('PlayerProfile')}>
                                                <Image source={item.image} style={{width: wp('16%'), height: wp('16%'), borderRadius: 100, resizeMode: 'cover'}} />
                                            </TouchableOpacity>
                                            <View style={{paddingHorizontal: wp('2.0%'), width: wp('64%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PlayerProfile')}>
                                                    <Text style={{fontSize: hp('1.75%'), fontWeight: '500', color: '#444'}}>
                                                        {item.name}
                                                    </Text>
                                                </TouchableOpacity>
                                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                                    <Text style={{fontSize: hp('1.5%'), fontWeight: '500', color: '#666'}}>
                                                        {item.team}
                                                    </Text>
                                                    <Image source={item.teamImage} style={{marginHorizontal: wp('1.0%'), width: hp('2.5%'), height: hp('2.5%'), resizeMode: 'contain'}} />
                                                </View>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                                    {item.role}
                                                </Text>
                                                <Text style={{fontSize: hp('1.25%'), fontWeight: '400', color: '#444'}}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

export default FollowingPlayersScreen

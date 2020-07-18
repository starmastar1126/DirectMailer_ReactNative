import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FollowingHeader from '../../components/FollowingHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import images from '../../constants/images';

// import layout from '../../themes/layout';
// import styles from './styles';

const teamList = [
    {key: '1', name: 'Allasca Middland', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Eden Garden', like: true, teamImage: require('../../assets/images/CSK.png')},
    {key: '2', name: 'Allasca Middland', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Eden Garden', like: true, teamImage: require('../../assets/images/KXIP.png')},
    {key: '3', name: 'Allasca Middland', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Eden Garden', like: true, teamImage: require('../../assets/images/KKR.png')},
    {key: '4', name: 'Rajogen Huponcle', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Eden Garden', like: true, teamImage: require('../../assets/images/SRH.png')},
    {key: '5', name: 'Allasca Middland', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Eden Garden', like: true, teamImage: require('../../assets/images/DD.png')},
    {key: '6', name: 'Allasca Middland', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Eden Garden', like: true, teamImage: require('../../assets/images/MI.png')},
    {key: '7', name: 'Allasca Middland', image: images.searchPlayersPlayerJpg, team: 'Chennai Super Kings', role: 'Eden Garden', like: true, teamImage: require('../../assets/images/RCB.png')},
]

class FollowingTeamsScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Following',
            teamList: teamList,
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    deletePlayer = (item) => {
        this.state.teamList.pop(item);
        // this.state.teamList[key].like = false;
        this.forceUpdate();
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <FollowingHeader
                    navigation={this.props.navigation}
                    selectedTab='FollowingTeams'
                />
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), paddingVertical: hp('0.0%'), height: hp('75%')}}>
                    <View style={{paddingVertical: hp('2.0%'), paddingHorizontal: wp('1%')}}>
                        <View style={{marginBottom: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingVertical: hp('1.0%'), paddingHorizontal: wp('2.0%'), width: wp('94%'), backgroundColor: '#fff'}}>
                            <Text style={{fontSize: hp('2.0%'), fontWeight: '500', color: '#444'}}>
                                You are following {this.state.teamList.length} Teams
                            </Text>
                            <Text style={{marginTop: hp('0.5%'), fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                6 New Teams recently added.
                            </Text>
                        </View>
                        {
                            this.state.teamList.map((item, key) => {
                                return (
                                    item.like ? (
                                        <View key={key} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingVertical: hp('1.0%'), paddingHorizontal: wp('2.0%'), width: wp('94%'), marginVertical: hp('0.5%'), backgroundColor: '#fff', borderRadius: 5}}>
                                            <TouchableOpacity style={{width: wp('20%'), height: wp('15%'), backgroundColor: '#46347e', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfile')}>
                                                <Image source={item.teamImage} style={{width: wp('12%'), height: wp('12%'), resizeMode: 'contain'}} />
                                            </TouchableOpacity>
                                            <View style={{paddingHorizontal: wp('2.0%'), width: wp('60%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('TeamProfile')}>
                                                    <Text style={{fontSize: hp('2.0%'), fontWeight: '500', color: '#444'}}>
                                                        {item.team}
                                                    </Text>
                                                </TouchableOpacity>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                                    State : {item.name}
                                                </Text>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                                    Stadium : {item.role}
                                                </Text>
                                                <Text style={{fontSize: hp('1.25%'), fontWeight: '400', color: '#444'}}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing.
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

export default FollowingTeamsScreen

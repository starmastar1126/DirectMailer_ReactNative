import React from 'react';
import { StatusBar, View, TouchableOpacity, Text, Image, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import images from '../../constants/images';
import styles from './styles';

const tabs = [
    {key: '1', route: 'League', iconName: 'home'},
    {key: '2', route: 'MatchSchedule', iconName: 'organization'},
    {key: '3', route: 'PlayerProfile', iconName: 'user'},
    {key: '4', route: 'TeamProfile', iconName: 'shield'},
    {key: '5', route: 'NotificationCenter', iconName: 'bubble'},
]

const subTabs = [
    {key: '1', route: 'MyFavourites', title: 'My Favourites', iconName: 'heart', type: 'primary'},
    {key: '2', route: 'MyFavouritesTeams', title: 'Teams', iconName: 'shield-check-outline', type: 'secondary'},
    {key: '3', route: 'MyFavouritesPlayers', title: 'Players', iconName: 'football-helmet', type: 'secondary'},
    {key: '4', route: 'MyFavouritesLeagues', title: 'Leagues', iconName: 'crystal-ball', type: 'secondary'},
    {key: '5', route: 'Requests', title: 'Requests', iconName: 'alert-decagram-outline', type: 'primary'},
    {key: '6', route: 'JoinRequests', title: 'Join Requests', iconName: 'shield-link-variant-outline', type: 'secondary'},
    {key: '7', route: 'SponsorRequests', title: 'Sponsor Requests', iconName: 'account-tie', type: 'secondary'},
    {key: '8', route: 'LeagueRequests', title: 'League Requests', iconName: 'crystal-ball', type: 'secondary'},
    {key: '9', route: 'ScoreEntry', title: 'Score Entry', iconName: 'plus-circle-outline', type: 'primary'},
    {key: '10', route: 'Settings', title: 'New League', iconName: 'crystal-ball', type: 'primary'},
]


class BottomTabsMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSelectMoreBottomTabsModalVisible: false,
        };
    }

    setSelectMoreBottomTabsModalVisible(visible) {
        this.setState({isSelectMoreBottomTabsModalVisible: visible});
        if (visible == true)
            StatusBar.setBackgroundColor('#c2c2c2', true);
        else
            StatusBar.setBackgroundColor('#f4f4f4', true);
    }

    selectMoreBottomTabs(item) {
        this.setSelectMoreBottomTabsModalVisible(false);
        this.props.navigation.navigate(item.route);
    }

    selectMainBottomTabs(item) {
        this.props.navigation.navigate(item.route);
    }

    render() {
        return (
            <View style={{borderTopWidth: 1, borderTopColor: '#f6f8fa'}}>
                <LinearGradient colors={['#fff', '#fff']} locations={[0, 1.0]} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{width: wp('100%'), height: hp('10.0%'), backgroundColor: '#f6f8fa', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {
                    tabs.map((item, key) => {
                        return (
                            this.props.selectedTab == item.route ? (
                                <View key={key} style={{width: wp('18%'), alignItems: 'center'}}>
                                    {/* <View style={{top: -hp('6.0%'), position: 'absolute', zIndex: 0}}>
                                        <Image source={images.pentagonPng} style={{width: hp('10%'), height: hp('10%'), resizeMode: 'stretch'}} />
                                    </View> */}
                                    <View style={{top: -hp('4.0%'), position: 'absolute', zIndex: 1}}>
                                        <Icon name={item.iconName} type='simple-line-icon' color='#eb9edf' size={hp('6.0%')} style={{top: hp('5.0%')}} />
                                    </View>
                                </View>
                            ) : (
                                <TouchableOpacity key={key} style={{width: wp('18%'), alignItems: 'center'}}
                                    onPress={ () => {
                                        this.selectMainBottomTabs(item);
                                    }
                                }>
                                    <Icon name={item.iconName} type='simple-line-icon' color='#888' size={hp('3.5%')} />
                                </TouchableOpacity>
                            )
                        )
                    })
                }
                </LinearGradient>
            </View>
        );
    }
}

export default BottomTabsMenu;

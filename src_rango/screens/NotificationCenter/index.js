import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../../components/TopMenu';
import BottomTabsMenu from '../../components/BottomTabsMenu';

import images from '../../constants/images';
// import layout from '../../themes/layout';
// import styles from './styles';

const notificationList = [
    {key: '1', borderColor: '#0cc156', borderRadius: 100, imageType: 'cover', title: 'Join Request from John Done', pastTime: '15 mins ago.', type: 'joinTeam', status: 'waiting', collapsed: false, image: images.commentsPersonJpg},
    {key: '2', borderColor: '#8f1552', borderRadius: 0, imageType: 'contain', title: 'Would like to Sponsor of Knight Riders Team?', pastTime: '30 mins ago.', type: 'sponsorRequest', status: 'maybeLater', collapsed: false, image: images.sponsor1Png},
    {key: '3', borderColor: '#3f3689', borderRadius: 0, imageType: 'contain', title: 'League Invitatoin from Knight Night Riders pvt ltd', pastTime: '1 hour ago.', type: 'joinLeague', status: 'approved', collapsed: false, image: require('../../assets/images/KXIP.png')},
    {key: '4', borderColor: '#0cc156', borderRadius: 100, imageType: 'cover', title: 'Join request from Gabrial Acostar', pastTime: '2 hours ago.', type: 'joinTeam', status: 'approved', collapsed: false, image: images.commentsPersonJpg},
    {key: '5', borderColor: '#0cc156', borderRadius: 100, imageType: 'cover', title: 'Join request from Tom Debolski', pastTime: '5 hours ago.', type: 'joinTeam', status: 'waiting', collapsed: false, image: images.commentsPersonJpg},
    {key: '6', borderColor: '#3f3689', borderRadius: 0, imageType: 'contain', title: 'League Invitatoin from Knight Night Riders pvt ltd', pastTime: '12 hours ago.', type: 'joinLeague', status: 'waiting', collapsed: false, image: require('../../assets/images/CSK.png')},
    {key: '7', borderColor: '#0cc156', borderRadius: 100, imageType: 'cover', title: 'Join request from Gary Cornell', pastTime: '20 hours ago.', type: 'joinTeam', status: 'rejected', collapsed: false, image: images.commentsPersonJpg},
    {key: '8', borderColor: '#0cc156', borderRadius: 100, imageType: 'cover', title: 'Join request from Kathey Ruiz', pastTime: '2 days ago.', type: 'joinTeam', status: 'approved', collapsed: false, image: images.commentsPersonJpg},
]

class NotificationCenterScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'NotificationCenter',
            notificationList: notificationList,
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    changeRequestStatus = (key, status) => {
        this.state.notificationList[key].status = status;
        this.forceUpdate();
    }

    changeCollapsed = (key, collapsed) => {
        this.state.notificationList[key].collapsed = collapsed;
        this.forceUpdate();
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('10%')}}>
                    <TopMenu
                        navigation={this.props.navigation}
                        title='NOTIFICATIONS'
                    />
                </LinearGradient>
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), paddingVertical: hp('0.0%'), height: hp('80%')}}>
                    <View style={{paddingBottom: hp('2.0%'), paddingTop: hp('1.0%'), paddingHorizontal: wp('1%')}}>
                        {
                            this.state.notificationList.map((item, key) => {
                                return (
                                    <View key={key} style={{elevation: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingVertical: hp('0.5%'), paddingHorizontal: wp('1.0%'), width: wp('94%'), marginVertical: hp('0.75%'), backgroundColor: '#fff', borderLeftColor: item.borderColor, borderLeftWidth: wp('1.0%')}}>
                                        <TouchableOpacity style={{paddingHorizontal: wp('0.5%')}}>
                                            <Image source={item.image} style={{marginTop: hp('0.5%'), width: wp('10%'), height: wp('10%'), resizeMode: item.imageType, borderRadius: item.borderRadius}} />
                                        </TouchableOpacity>
                                        <View style={{width: wp('78%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                            <Text style={{fontSize: hp('1.5%'), fontWeight: '500', color: '#444'}}>
                                                {item.title}
                                            </Text>
                                            <TouchableOpacity onPress={() => this.changeCollapsed(key, !item.collapsed)}>
                                                {
                                                    item.collapsed ? (
                                                        <Text style={{fontSize: hp('1.25%'), fontWeight: '400', color: '#444'}}>
                                                            Hi, I am very interested to join your team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.
                                                        </Text>

                                                    ) : (
                                                        <Text numberOfLines={1} style={{fontSize: hp('1.25%'), fontWeight: '400', color: '#444'}}>
                                                            Hi, I am very interested to join your team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.
                                                        </Text>
                                                    )
                                                }
                                            </TouchableOpacity>
                                            <View style={{paddingTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: wp('78%')}}>
                                                <Text style={{alignSelf: 'flex-start', fontSize: hp('1.25%'), fontWeight: '400', color: '#666'}}>
                                                    {item.pastTime}
                                                </Text>
                                                {
                                                    item.status == 'waiting' ? (
                                                        <View style={{paddingTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                                            <TouchableOpacity onPress={() => this.changeRequestStatus(key, 'maybeLater')}>
                                                                <Text style={{marginHorizontal: wp('0.5%'), fontSize: hp('1.0%'), color: '#fff', backgroundColor: '#febc34', borderRadius: 20, paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%')}}>MAY BE LATER</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity onPress={() => this.changeRequestStatus(key, 'rejected')}>
                                                                <Text style={{marginHorizontal: wp('0.5%'), fontSize: hp('1.0%'), color: '#fff', backgroundColor: '#ff3247', borderRadius: 20, paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%')}}>REJECT</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity onPress={() => this.changeRequestStatus(key, 'approved')}>
                                                                <Text style={{marginHorizontal: wp('0.5%'), fontSize: hp('1.0%'), color: '#fff', backgroundColor: '#00c954', borderRadius: 20, paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%')}}>APPROVE</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    ) : null
                                                }
                                                {
                                                    item.status == 'maybeLater' ? 
                                                    (
                                                        <View style={{paddingTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                                            <Text style={{marginHorizontal: wp('0.5%'), fontSize: hp('1.0%'), color: '#febc34', paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%')}}>MAY BE LATER</Text>
                                                        </View>
                                                    ) : null
                                                }
                                                {
                                                    item.status == 'rejected' ? 
                                                    (
                                                        <View style={{paddingTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                                            <Text style={{marginHorizontal: wp('0.5%'), fontSize: hp('1.0%'), color: '#ff3247', paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%')}}>REJECTED</Text>
                                                        </View>
                                                    ) : null
                                                }
                                                {
                                                    item.status == 'approved' ? 
                                                    (
                                                        <View style={{paddingTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                                            <Text style={{marginHorizontal: wp('0.5%'), fontSize: hp('1.0%'), color: '#00c954', paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%')}}>APPROVED</Text>
                                                        </View>
                                                    ) : null
                                                }
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

export default NotificationCenterScreen

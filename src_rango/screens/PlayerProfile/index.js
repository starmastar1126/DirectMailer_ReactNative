import React from 'react';
import { StatusBar, View, ImageBackground, TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../../components/TopMenu';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import LeftIconButton from '../../components/LeftIconButton';

// import layout from '../../themes/layout';
// import styles from './styles';

class PlayerProfileScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'PlayerProfile',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#f5f5f5', alignItems: 'center'}} onPress={() => {navigation.toggleDrawer()}}>
                <StatusBar barStyle="light-content" />
                <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('25%')}} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}>
                    <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: hp('15%')}}>
                        <TopMenu navigation={this.props.navigation} />
                    </View>
                    <View style={{width: wp('100.0%'), height: hp('0.0%'), borderLeftWidth: wp('50%'), borderRightWidth: wp('50%'), borderTopWidth: hp('10.0%'), backgroundColor: 'transparent', borderTopColor: 'transparent', borderLeftColor: '#f5f5f5', borderRightColor: '#f5f5f5'}}>
                    </View>
                    <Image source={require('../../assets/images/profile-person.jpg')} style={{top: hp('8.0%'), width: hp('20%'), height: hp('20%'), resizeMode: 'cover', position: 'absolute', borderRadius: 100}} />
                </LinearGradient>
                <View style={{paddingTop: hp('4.0%'), paddingBottom: hp('2.0%'), paddingHorizontal: wp('3%'), height: hp('65%'), alignItems: 'center'}}>
                    <Text style={{fontWeight: '600', color: '#666', fontSize: hp('2.75%'), paddingVertical: hp('0.5%'), letterSpacing: 1}}>John Doe Logan</Text>
                    <Text style={{fontWeight: '400', color: '#aaa', fontSize: hp('2.0%'), paddingVertical: hp('0.0%'), letterSpacing: 1}}>All Rounder, Kolkata Knight Riders</Text>
                    <View style={{paddingVertical: hp('1.0%'), width: wp('90%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Icon name='heart' type='simple-line-icon' color='#f14135' size={hp('2.0%')} />
                            <Text style={{paddingRight: wp('6.0%'), paddingLeft: wp('2.0%'), fontWeight: '400', color: '#aaa', fontSize: hp('2.0%')}}>2109</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Icon name='like' type='simple-line-icon' color='#2d9af9' size={hp('2.0%')} />
                            <Text style={{paddingRight: wp('6.0%'), paddingLeft: wp('2.0%'), fontWeight: '400', color: '#aaa', fontSize: hp('2.0%')}}>390</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Icon name='paper-plane' type='simple-line-icon' color='#77b56c' size={hp('2.0%')} />
                            <Text style={{paddingRight: wp('6.0%'), paddingLeft: wp('2.0%'), fontWeight: '400', color: '#aaa', fontSize: hp('2.0%')}}>899</Text>
                        </View>
                    </View>
                    <View style={{marginVertical: hp('2.0%'), backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                        <View style={{paddingTop: hp('3.0%'), paddingBottom: hp('1.0%'), width: wp('94%'), flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                            <View style={{paddingRight: wp('4.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='circle-o' type='font-awesome' color='#f14135' size={hp('2.0%')} />
                                    <Text style={{paddingLeft: wp('2.0%'), fontWeight: '600', color: '#444', fontSize: hp('3.5%')}}>100</Text>
                                </View>
                                <Text style={{paddingLeft: wp('2.0%'), fontWeight: '400', color: '#888', fontSize: hp('1.75%'), letterSpacing: 1}}>Matches</Text>
                            </View>
                            <View style={{paddingHorizontal: wp('4.0%'), borderLeftWidth: 1, borderLeftColor: '#ccc', borderRightWidth: 1, borderRightColor: '#ccc', paddingVertical: wp('2.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='circle-o' type='font-awesome' color='#2d9af9' size={hp('2.0%')} />
                                    <Text style={{paddingLeft: wp('2.0%'), fontWeight: '600', color: '#444', fontSize: hp('3.5%')}}>2500</Text>
                                </View>
                                <Text style={{paddingLeft: wp('2.0%'), fontWeight: '400', color: '#888', fontSize: hp('1.75%'), letterSpacing: 1}}>Runs</Text>
                            </View>
                            <View style={{paddingLeft: wp('4.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='circle-o' type='font-awesome' color='#77b56c' size={hp('2.0%')} />
                                    <Text style={{paddingLeft: wp('2.0%'), fontWeight: '600', color: '#444', fontSize: hp('3.5%')}}>25</Text>
                                </View>
                                <Text style={{paddingLeft: wp('2.0%'), fontWeight: '400', color: '#888', fontSize: hp('1.75%'), letterSpacing: 1}}>Wickets</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Icon name='arrow-down-bold-hexagon-outline' type='material-community' color='#22d498' size={hp('5.0%')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginVertical: hp('1.0%'), width: wp('94%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <LeftIconButton title='STATISTICS' backgroundColor='#27cfe9' iconName='chart-line' iconType='material-community' onPress={() => this.props.navigation.navigate('PlayerStatistics')} />
                        <LeftIconButton title='LEAGUES' backgroundColor='#27cfe9' iconName='cricket' iconType='material-community' onPress={() => this.props.navigation.navigate('League')} />
                    </View>
                    <View style={{marginVertical: hp('1.0%'), width: wp('94%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <LeftIconButton title='MY TEAM' backgroundColor='#27cfe9' iconName='shield-check-outline' iconType='material-community' onPress={() => this.props.navigation.navigate('TeamProfile')} />
                        <LeftIconButton title='SETTINGS' backgroundColor='#27cfe9' iconName='settings-outline' iconType='material-community' onPress={() => this.props.navigation.navigate('PlayerSettings')} />
                    </View>
                </View>
                <BottomTabsMenu navigation={this.props.navigation} selectedTab={this.state.selectedBottomTab}
                    onSelectTab={ (value) =>
                        this.onSelectBottomTab(value)}
                />
            </View>
        );
    }

}

export default PlayerProfileScreen

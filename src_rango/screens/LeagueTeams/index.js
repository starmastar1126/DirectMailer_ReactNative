import React from 'react';
import { StyleSheet, ScrollView, View, ImageBackground, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import LeagueHeader from '../../components/LeagueHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const teamData = [
    {key: '1', num: 0, teamName: 'Sunrisers Hyderabad', teamImage: require('../../assets/images/SRH.png')},
    {key: '2', num: 1, teamName: 'Kolkata Knight Riders', teamImage: require('../../assets/images/KKR.png')},
    {key: '3', num: 2, teamName: 'Chennai Super Kings', teamImage: require('../../assets/images/CSK.png')},
    {key: '4', num: 3, teamName: 'Rajasthan Royals', teamImage: require('../../assets/images/RR.png')},
    {key: '5', num: 4, teamName: 'Kings XI Punjab', teamImage: require('../../assets/images/KXIP.png')},
    {key: '6', num: 5, teamName: 'Delhi Daredevils', teamImage: require('../../assets/images/DD.png')},
    {key: '7', num: 6, teamName: 'Mumbai Indians', teamImage: require('../../assets/images/MI.png')},
    {key: '8', num: 7, teamName: 'Royal Challengers Bangalore', teamImage: require('../../assets/images/RCB.png')},
]

class LeagueTeamsScreen extends React.Component {

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
                    selectedTab='LeagueTeams'
                />
                <ScrollView style={{paddingHorizontal: wp('2%'), paddingVertical: hp('0.5%'), height: hp('60%')}}>
                    <View style={{paddingTop: hp('0.0%'), paddingBottom: hp('2.0%')}}>
                    {
                        teamData.map((item, key) => {
                            if (key % 2 == 1) {
                                if ((key + 1) <= teamData.length)
                                    return (
                                        <View key={key} style={{marginVertical: hp('0.5%'), width: wp('94%')}}>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: hp('1.5%')}}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: hp('19%'), width: hp('21%'), alignItems: 'center', borderRadius: 20, paddingHorizontal: hp('1.0%'), paddingVertical: hp('1.0%')}}>
                                                        <Image source={teamData[key - 1].teamImage} style={{width: hp('10%'), height: hp('9%'), resizeMode: 'contain'}} />
                                                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#888', fontSize: hp('1.75%'), paddingVertical: hp('0.5%')}}>
                                                            {teamData[key - 1].teamName}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: hp('19%'), width: hp('21%'), alignItems: 'center', borderRadius: 20, paddingHorizontal: hp('1.0%'), paddingVertical: hp('1.0%')}}>
                                                        <Image source={teamData[key].teamImage} style={{width: hp('10%'), height: hp('9%'), resizeMode: 'contain'}} />
                                                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#888', fontSize: hp('1.75%'), paddingVertical: hp('0.5%')}}>
                                                            {teamData[key].teamName}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                else
                                    return (
                                        <View key={key} style={{marginVertical: hp('0.5%'), width: wp('94%')}}>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: hp('1.5%')}}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: hp('19%'), width: hp('20%'), alignItems: 'center', borderRadius: 20, paddingHorizontal: hp('1.0%'), paddingVertical: hp('1.0%')}}>
                                                        <Image source={teamData[key - 1].teamImage} style={{width: hp('10%'), height: hp('9%'), resizeMode: 'cover'}} />
                                                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#888', fontSize: hp('1.75%'), paddingVertical: hp('0.5%')}}>
                                                            {teamData[key - 1].teamName}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                            }
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

export default LeagueTeamsScreen

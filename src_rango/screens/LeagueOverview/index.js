import React from 'react';
import { StatusBar, ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import LeagueHeader from '../../components/LeagueHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import SponsorsGroup from '../../components/SponsorsGroup';

// import layout from '../../themes/layout';
// import styles from './styles';

const additionalDetailsData = [
    {key: '1', leftText: 'Title', rightText: 'Cougars T20'},
    {key: '2', leftText: 'Tournament Type', rightText: 'T20'},
    {key: '3', leftText: 'Location', rightText: 'Washing, DC - NewGen Grounds'},
    {key: '4', leftText: 'No.of Teams', rightText: '15'},
    {key: '5', leftText: 'Start Date', rightText: 'Aug 25, 2018 10:00 AM'},
    {key: '6', leftText: 'End Date', rightText: 'Sep 31, 2018 05:00 PM'},
    {key: '7', leftText: 'Schedule Type', rightText: 'Round Robin'},
    {key: '8', leftText: 'Overs per innings', rightText: '20 Overs'},
    {key: '9', leftText: 'Max Overs Per Bowler', rightText: '06 Overs'},
    {key: '10', leftText: 'Balls Per Over', rightText: '06 Balls'},
    {key: '11', leftText: 'Wide Value', rightText: '1 Run, Re-Bowl'},
    {key: '12', leftText: 'No Ball Value', rightText: '1 Run, Re-Bowl'},
]

const standingData = [
    {key: '1', num: '1', backgroudColor: '#3e2f84', color: '#fff', teamName: 'Sunrisers Hyderabad', mp: '14', win: '13', lost: '1', nr: '0', nrr: '+0.284', pts: '18', teamImage: require('../../assets/images/CSK.png'), form: ['#3aa757', '#ea4335', '#3aa757', '#3aa757', '#3aa757']},
    {key: '2', num: '2', backgroudColor: '#3e2f84', color: '#fff', teamName: 'Kolkata Knight Riders', mp: '14', win: '11', lost: '3', nr: '0', nrr: '+0.284', pts: '18', teamImage: require('../../assets/images/KKR.png'), form: ['#ea4335', '#3aa757', '#3aa757', '#3aa757', '#3aa757']},
    {key: '3', num: '3', backgroudColor: '#3e2f84', color: '#fff', teamName: 'Chennai Super Kings', mp: '13', win: '9', lost: '4', nr: '0', nrr: '+0.284', pts: '18', teamImage: require('../../assets/images/SRH.png'), form: ['#ea4335', '#3aa757', '#ea4335', '#ea4335', '#3aa757']},
    {key: '4', num: '4', backgroudColor: '#3e2f84', color: '#fff', teamName: 'Rajasthan Royals', mp: '13', win: '9', lost: '4', nr: '0', nrr: '+0.284', pts: '18', teamImage: require('../../assets/images/CSK.png'), form: ['#3aa757', '#ea4335', '#3aa757', '#3aa757', '#ea4335']},
    {key: '5', num: '5', backgroudColor: '#dad9d5', color: '#666', teamName: 'Kings XI Punjab', mp: '14', win: '8', lost: '6', nr: '0', nrr: '+0.284', pts: '18', teamImage: require('../../assets/images/KXIP.png'), form: ['#ea4335', '#3aa757', '#ea4335', '#3aa757', '#ea4335']},
    {key: '6', num: '6', backgroudColor: '#dad9d5', color: '#666', teamName: 'Delhi Daredevils', mp: '14', win: '7', lost: '7', nr: '0', nrr: '+0.284', pts: '18', teamImage: require('../../assets/images/CSK.png'), form: ['#3aa757', '#ea4335', '#3aa757', '#ea4335', '#ea4335']},
    {key: '7', num: '7', backgroudColor: '#dad9d5', color: '#666', teamName: 'Mumbai Indians', mp: '13', win: '2', lost: '11', nr: '0', nrr: '+0.284', pts: '18', teamImage: require('../../assets/images/MI.png'), form: ['#ea4335', '#ea4335', '#3aa757', '#ea4335', '#ea4335']},
    {key: '8', num: '8', backgroudColor: '#dad9d5', color: '#666', teamName: 'Royal challengers Bangalore', mp: '13', win: '1', lost: '12', nr: '0', nrr: '+0.284', pts: '18', teamImage: require('../../assets/images/SRH.png'), form: ['#3aa757', '#ea4335', '#ea4335', '#ea4335', '#ea4335']},
]

class LeagueOverviewScreen extends React.Component {

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
            <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
                <StatusBar barStyle="light-content" />
                <LeagueHeader
                    navigation={this.props.navigation}
                    stadium='JN STADIUM, Washington DC'
                    slogan='START ON AUGUST 30, 2018'
                    selectedTab='LeagueOverview'
                />
                <ScrollView style={{paddingHorizontal: wp('2%'), height: hp('60%')}}>
                    <View style={{paddingTop: hp('0.0%'), paddingBottom: hp('2.0%')}}>
                        <Text style={{width: wp('90%'), color: '#666', fontSize: hp('1.5%'), marginVertical: hp('2.0%')}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu vehicula tellus.
                            In suscipit nunc non risus convallis, ut consequat libero faucibus.
                        </Text>
                        <View style={{marginVertical: hp('0.5%'), width: wp('94%'), borderWidth: 1, borderColor: '#eee', backgroundColor: '#fff', borderRadius: 5}}>
                            <View style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingVertical: hp('0.5%'), borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    #
                                </Text>
                                <TouchableOpacity style={{width: wp('6.0%'), alignItems: 'center'}}>
                                    <Icon name='downcircleo' type='antdesign' color='#666' size={wp('2.5%')} />
                                </TouchableOpacity>
                                <Text style={{width: wp('28.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    Team
                                </Text>
                                <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    MP
                                </Text>
                                <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    W
                                </Text>
                                <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    L
                                </Text>
                                <Text style={{width: wp('6.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    N/R
                                </Text>
                                <Text style={{width: wp('15.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    NRR
                                </Text>
                                <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    Pts
                                </Text>
                                <Text style={{width: wp('14.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                    Form
                                </Text>
                            </View>
                            {
                                standingData.map((item, key) => {
                                    return (
                                        <View key={item.key} style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                            <Text style={{height: '100%', paddingVertical: hp('0.25%'), backgroundColor: item.backgroudColor, color: item.color, width: wp('5.0%'), alignItems: 'stretch', textAlign: 'center', fontWeight: '500', fontSize: hp('1.4%')}}>
                                                {item.num + '.'}
                                            </Text>
                                            <TouchableOpacity style={{width: wp('34.0%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                <View style={{width: wp('6.0%'), alignItems: 'center'}} onPress={() => this.props.navigation.navigate('TeamProfileOverview')}>
                                                    <Image source={item.teamImage} style={{width: hp('1.75%'), height: hp('1.75%'), resizeMode: 'contain'}} />
                                                </View>
                                                <Text style={{width: wp('28.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.4%')}}>
                                                    {item.teamName}
                                                </Text>
                                            </TouchableOpacity>
                                            <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.4%')}}>
                                                {item.mp}
                                            </Text>
                                            <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.4%')}}>
                                                {item.win}
                                            </Text>
                                            <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.4%')}}>
                                                {item.lost}
                                            </Text>
                                            <Text style={{width: wp('6.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.4%')}}>
                                                {item.nr}
                                            </Text>
                                            <Text style={{width: wp('15.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.4%')}}>
                                                {item.nrr}
                                            </Text>
                                            <Text style={{width: wp('5.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.4%')}}>
                                                {item.pts}
                                            </Text>
                                            <View style={{width: wp('14.0%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                                                <Icon name='circle' type='font-awesome' color={item.form[0]} size={wp('1.5%')} iconStyle={{paddingHorizontal: wp('0.25%')}} />
                                                <Icon name='circle' type='font-awesome' color={item.form[1]} size={wp('1.5%')} iconStyle={{paddingHorizontal: wp('0.25%')}} />
                                                <Icon name='circle' type='font-awesome' color={item.form[2]} size={wp('1.5%')} iconStyle={{paddingHorizontal: wp('0.25%')}} />
                                                <Icon name='circle' type='font-awesome' color={item.form[3]} size={wp('1.5%')} iconStyle={{paddingHorizontal: wp('0.25%')}} />
                                                <Icon name='circle' type='font-awesome' color={item.form[4]} size={wp('1.5%')} iconStyle={{paddingHorizontal: wp('0.25%')}} />
                                            </View>
                                        </View>
                                    )
                                })
                            }
                            <View style={{width: wp('94%'), height: hp('2.0%'), borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                            </View>
                        </View>
                        <View style={{marginVertical: hp('0.5%'), width: wp('94%'), backgroundColor: '#fff', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                            <Text style={{width: wp('94%'), textAlign: 'left', fontWeight: '600', color: '#888', borderWidth: 1, borderColor: '#eee', backgroundColor: '#eee', fontSize: hp('1.75%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                Additional Details
                            </Text>
                            {
                                additionalDetailsData.map((item, key) => {
                                    return (
                                        <View key={item.key} style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1, borderLeftColor: '#eee', borderLeftWidth: 1, borderRightColor: '#eee', borderRightWidth: 1}}>
                                            <Text style={{width: wp('40%'), textAlign: 'left', fontWeight: '400', color: '#888', fontSize: hp('1.5%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), borderRightWidth: 1, borderRightColor: '#eee'}}>
                                                {item.leftText}
                                            </Text>
                                            <Text style={{width: wp('54%'), textAlign: 'left', fontWeight: '400', color: '#888', fontSize: hp('1.5%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%')}}>
                                                {item.rightText}
                                            </Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <SponsorsGroup />
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

export default LeagueOverviewScreen

import React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import StatusHeader from '../../components/StatusHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const leagueList = [
    {key: '1', name: 'India Premier League 2018-2019', status: 'reserved', winner: null, place: 'Eden Gardens, Kolkata', teamNumber: 12, type: 'crystal-ball', startDate: 'Sep 28 2018', endDate: 'Mar 31 2019'},
    {key: '2', name: 'India Second League 2018-2019', status: 'reserved', winner: null, place: 'Eden Gardens, Kolkata', teamNumber: 12, type: 'crystal-ball', startDate: 'Sep 1 2018', endDate: 'Mar 31 2019'},
    {key: '3', name: 'India Champion League 2018-2019', status: 'ongoing', winner: null, place: 'Eden Gardens, Kolkata', teamNumber: 12, type: 'crystal-ball', startDate: 'Sep 1 2018', endDate: 'Mar 31 2019'},
    {key: '4', name: 'India Super Cup 2019', status: 'ongoing', winner: null, place: 'Eden Gardens, Kolkata', teamNumber: 12, type: 'crystal-ball', startDate: 'Apr 1 2019', endDate: 'Sep 30 2019'},
    {key: '5', name: 'Barbaca Cup 2019', status: 'ongoing', winner: null, place: 'Eden Gardens, Kolkata', teamNumber: 12, type: 'crystal-ball', startDate: 'Apr 1 2019', endDate: 'Sep 30 2019'},
    {key: '6', name: 'Romio Cup 2019', status: 'completed', winner: 'Kolkata Knight Riders', place: 'Eden Gardens, Kolkata', teamNumber: 12, type: 'crystal-ball', startDate: 'Apr 21 2019', endDate: 'Sep 30 2019'},
    {key: '7', name: 'Sanemala Cup 2019', status: 'completed', winner: 'Kolkata Knight Riders', place: 'Eden Gardens, Kolkata', teamNumber: 12, type: 'crystal-ball', startDate: 'Apr 21 2019', endDate: 'Sep 30 2019'},
]

class StatusAllLeaguesScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Status',
            leagueList: leagueList,
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <StatusHeader
                    navigation={this.props.navigation}
                    selectedTab='StatusAllLeagues'
                />
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), paddingVertical: hp('0.0%'), height: hp('75%')}}>
                    <View style={{paddingVertical: hp('2.0%'), paddingHorizontal: wp('1%')}}>
                        {
                            this.state.leagueList.map((item, key) => {
                                return (
                                    <View key={key} style={{marginBottom: hp('2.0%'), width: wp('94%'), alignItems: 'center', backgroundColor: '#fff', borderRadius: 10}}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('94%')}}>
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
                                                    {
                                                        item.status == 'completed'
                                                        ?
                                                            'Winner: ' + item.winner
                                                        :
                                                            item.place
                                                    }
                                                </Text>
                                                <Text style={{fontSize: hp('1.5%'), fontWeight: '400', color: '#888'}}>
                                                    {
                                                        item.status == 'completed'
                                                        ?
                                                            'From ' + item.startDate + ' to ' + item.endDate
                                                        :
                                                            item.teamNumber + ' Teams participating'
                                                    }
                                                </Text>
                                            </View>
                                            <TouchableOpacity style={{alignSelf: 'center', width: wp('10%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                <Icon name='right' type='antdesign' color='#ccc' size={hp('2.0%')} />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity>
                                            <Text style={{width: wp('40%'), marginBottom: hp('1.0%'), textAlign: 'center', color: '#fff', backgroundColor: item.status == 'completed' ? '#de1775' : item.status == 'ongoing' ? '#57a42a' : '#00a2e8', borderRadius: 20, paddingVertical: hp('0.25%')}}>
                                                {
                                                    item.status == 'ongoing'
                                                    ?
                                                        'Ongoing'
                                                    :
                                                        item.status == 'completed'
                                                        ?
                                                            'Completed'
                                                        :
                                                            'Starts on ' + item.startDate
                                                }
                                            </Text>
                                        </TouchableOpacity>
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

export default StatusAllLeaguesScreen

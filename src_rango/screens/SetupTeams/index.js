import React from 'react';
import { StatusBar, ScrollView, View, TouchableOpacity, Text, Image, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SetupHeader from '../../components/SetupHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const teamList = [
    {key: '1', name: 'KKR', image: require('../../assets/images/KKR.png')},
    {key: '2', name: 'SRH', image: require('../../assets/images/SRH.png')},
    {key: '3', name: 'CSK', image: require('../../assets/images/CSK.png')},
    {key: '4', name: 'RR', image: require('../../assets/images/RR.png')},
    {key: '5', name: 'KXIP', image: require('../../assets/images/KXIP.png')},
]

const leagueList = [
    {key: '1', name: 'UECA Champion Ship', icon: 'crystal-ball'},
    {key: '2', name: 'PIP 2019', icon: 'cricket'},
    {key: '3', name: 'India Super Cup 2019', icon: 'crown'},
    {key: '4', name: 'World Cup 2019', icon: 'earth'},
]

const scheduleTypeList = [
    {key: '1', name: 'Schedule Type 1', value: '1'},
    {key: '2', name: 'Schedule Type 2', value: '2'},
    {key: '3', name: 'Schedule Type 3', value: '3'},
    {key: '4', name: 'Schedule Type 4', value: '4'},
    {key: '5', name: 'Schedule Type 5', value: '5'},
]

const roundOfPlayList = [
    {key: '1', name: 'Round of Play 1', value: '1'},
    {key: '2', name: 'Round of Play 2', value: '2'},
    {key: '3', name: 'Round of Play 3', value: '3'},
    {key: '4', name: 'Round of Play 4', value: '4'},
    {key: '5', name: 'Round of Play 5', value: '5'},
]

const additionalDetailsData = [
    {key: '1', num: '1', leftText: 'Team4', rightText: 'Team4'},
    {key: '2', num: '1', leftText: 'Team4', rightText: 'Team4'},
    {key: '3', num: '1', leftText: 'Team4', rightText: 'Team4'},
    {key: '4', num: '1', leftText: 'Team4', rightText: 'Team4'},
    {key: '5', num: '1', leftText: 'Team4', rightText: 'Team4'},
    {key: '6', num: '2', leftText: 'Team4', rightText: 'Team4'},
    {key: '7', num: '2', leftText: 'Team4', rightText: 'Team4'},
    {key: '8', num: '2', leftText: 'Team4', rightText: 'Team4'},
    {key: '9', num: '2', leftText: 'Team4', rightText: 'Team4'},
    {key: '10', num: '2', leftText: 'Team4', rightText: 'Team4'},
    {key: '11', num: '2', leftText: 'Team4', rightText: 'Team4'},
    {key: '12', num: '2', leftText: 'Team4', rightText: 'Team4'},
]

let teamData = [
    {key: 1, teamName: 'SRH', teamImage: require('../../assets/images/SRH.png'), status: 'Accepted', iconName: 'check-circle', iconColor: '#12caae', iconGroup: 'material-community'},
    {key: 2, teamName: 'KKR', teamImage: require('../../assets/images/KKR.png'), status: 'Denied', iconName: 'close-circle', iconColor: '#a0a0a0', iconGroup: 'material-community'},
    {key: 3, teamName: 'CSK', teamImage: require('../../assets/images/CSK.png'), status: 'Not Responded', iconName: 'md-refresh-circle', iconColor: '#a0a0a0', iconGroup: 'ionicon'},
    {key: 4, teamName: 'RR', teamImage: require('../../assets/images/RR.png'), status: 'Accepted', iconName: 'check-circle', iconColor: '#a0a0a0', iconGroup: 'material-community'},
]

let exist = false;

class SetupTeamsScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Settings',
            isSelectLeagueModalVisible: false,
            isSelectTeamModalVisible: false,
            isSelectScheduleTypeModalVisible: false,
            isSelectRoundOfPlayModalVisible: false,
            isStartDatePickerVisible: false,
            isStartTimePickerVisible: false,
            league: null,
            scheduleType: null,
            roundOfPlay: null,
            startDate: null,
            startTime: null,
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    setSelectLeagueModalVisible(visible) {
        this.setState({isSelectLeagueModalVisible: visible});
    }

    setSelectTeamModalVisible(visible) {
        this.setState({isSelectTeamModalVisible: visible});
    }

    setSelectScheduleTypeModalVisible(visible) {
        this.setState({isSelectScheduleTypeModalVisible: visible});
    }

    setSelectRoundOfPlayModalVisible(visible) {
        this.setState({isSelectRoundOfPlayModalVisible: visible});
    }

    selectLeague(name) {
        this.setState({league: name});
        this.setSelectLeagueModalVisible(false);
    }

    selectTeam(team) {
        exist = false;
        teamData.map((item, key) => {
            if (item.teamName == team.name)
                exist = true;
        })
        if (exist)
            return;
        teamData.push({key: (teamData.length - 1), teamName: team.name, teamImage: team.image, status: 'Not Responded', iconName: 'eye-circle', iconColor: '#a0a0a0', iconGroup: 'material-community'})
        this.setSelectTeamModalVisible(false);
    }

    selectScheduleType(name) {
        this.setState({scheduleType: name});
        this.setSelectScheduleTypeModalVisible(false);
    }

    selectRoundOfPlay(name) {
        this.setState({roundOfPlay: name});
        this.setSelectRoundOfPlayModalVisible(false);
    }
    
    _showDatePicker = () => this.setState({ isDatePickerVisible: true });

    _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.state.startDate = date.toString().substring(0, 15);
        this._hideDatePicker();
    };

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }
    
    _showTimePicker = () => this.setState({ isTimePickerVisible: true });

    _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

    _handleTimePicked = (time) => {
        console.log('A time has been picked: ', time);
        this.state.startTime = time.toString().substring(16, 24);
        this._hideTimePicker();
    };

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <SetupHeader
                    navigation={this.props.navigation}
                    stadium='JN STADIUM, Washington DC'
                    slogan='START ON AUGUST 30, 2018'
                    selectedTab='SetupTeams'
                    leagueStack={false}
                />
                <ScrollView style={{paddingHorizontal: wp('2%'), height: hp('60%')}}>
                    <View style={{marginVertical: hp('2.0%'), alignItems: 'center'}}>
                        <View style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.0%'), backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: wp('94%')}}>
                            <Text style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%'), fontWeight: '500', width: wp('94%'), backgroundColor: '#13c0fa', color: '#fff', fontSize: hp('2.0%'), borderTopLeftRadius: 5, borderTopRightRadius: 5}}>Manage Teams</Text>
                            <Text style={{marginTop: hp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%'), fontWeight: '500'}}>SEARCH TEAMS</Text>
                            <View style={{marginVertical: hp('0.75%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableOpacity style={{backgroundColor: '#e5e6ea', borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                    onPressIn={() => {
                                        this.setSelectLeagueModalVisible(true);
                                    }}>
                                    <TextInput value={this.state.league} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('58%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                        placeholder = 'Tournament/League Name'
                                    />
                                    <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <Icon name='search1' type='antdesign' color='#444' size={hp('2.0%')} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPressIn={() => {
                                        this.setSelectTeamModalVisible(true);
                                    }}>
                                    <View style={{width: wp('24.0%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                        <View style={{paddingHorizontal: wp('1.0%'), width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                                            <Icon name='circle-with-plus' type='entypo' color='#32dffd' size={hp('3.0%')} />
                                        </View>
                                        <Text style={{width: wp('16.0%'), textAlign: 'left', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                            Add Team
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginVertical: hp('1.0%'), width: wp('94%'), backgroundColor: '#fff', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                    <Text style={{width: wp('40%'), textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.5%'), paddingVertical: hp('1.0%'), paddingHorizontal: wp('2.0%')}}>
                                        TEAMS
                                    </Text>
                                    <Text style={{width: wp('20%'), textAlign: 'center', fontWeight: '500', color: '#444', fontSize: hp('1.5%'), paddingVertical: hp('1.0%'), paddingHorizontal: wp('2.0%')}}>
                                        Request
                                    </Text>
                                    <Text style={{width: wp('30%'), textAlign: 'center', fontWeight: '500', color: '#444', fontSize: hp('1.5%'), paddingVertical: hp('1.0%'), paddingHorizontal: wp('2.0%')}}>
                                        Status
                                    </Text>
                                </View>
                                {
                                    teamData.map((item, key) => {
                                        return (
                                            <View key={item.key} style={{paddingVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                                <View style={{flexDirection: 'row', width: wp('40%'), justifyContent: 'center', alignItems: 'center'}}>
                                                    <View style={{width: wp('12%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                        <Image source={item.teamImage} style={{width: hp('4%'), height: hp('4%'), resizeMode: 'contain'}} />
                                                    </View>
                                                    <Text style={{width: wp('28%'), textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.75%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%')}}>
                                                        {item.teamName}
                                                    </Text>
                                                </View>
                                                <View style={{width: wp('20%'), justifyContent: 'center', alignItems: 'center'}}>
                                                    <Icon name={item.iconName} type={item.iconGroup} color={item.iconColor} size={hp('3.0%')} />
                                                </View>
                                                <Text style={{width: wp('30%'), textAlign: 'center', fontWeight: '400', color: '#888', fontSize: hp('1.5%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%')}}>
                                                    {item.status}
                                                </Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <TouchableOpacity style={{alignSelf: 'flex-start', marginVertical: hp('1.0%')}}>
                                <Text style={{borderRadius: 5, backgroundColor: '#22d498', paddingVertical: hp('1.0%'), marginTop: hp('1.0%'), width: wp('40.0%'), textAlign: 'center', fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>
                                    SEND REQUEST
                                </Text>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('0.5%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%'), fontWeight: '500'}}>SCHEDULE THE TOURNAMENT/LEAGUE</Text>
                            <Text style={{marginTop: hp('0.0%'), width: wp('90%'), color: '#888', fontSize: hp('1.5%'), fontWeight: '400'}}>Schedule Type</Text>
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPressIn={() => {
                                    this.setSelectScheduleTypeModalVisible(true);
                                }}>
                                <TextInput value={this.state.scheduleType} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = ''
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='ios-arrow-down' type='ionicon' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('1.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%'), fontWeight: '500'}}>ROUND, DATES AND TIMES</Text>
                            <Text style={{marginTop: hp('0.0%'), width: wp('90%'), color: '#888', fontSize: hp('1.5%'), fontWeight: '400'}}>Set round(1), Dates and Times</Text>
                            <Text style={{marginTop: hp('1.0%'), width: wp('90%'), color: '#888', fontSize: hp('1.5%'), fontWeight: '400'}}>Round of Play</Text>
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPressIn={() => {
                                    this.setSelectRoundOfPlayModalVisible(true);
                                }}>
                                <TextInput value={this.state.roundOfPlay} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = '1 round = 8 matchs per team'
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='ios-arrow-down' type='ionicon' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('1.0%'), width: wp('90%'), color: '#888', fontSize: hp('1.5%'), fontWeight: '400'}}>Start Date</Text>
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPress = { () =>
                                    this._showDatePicker()
                                }>
                                <TextInput value={this.state.startDate} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = ''
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='calendar' type='antdesign' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('1.0%'), width: wp('90%'), color: '#888', fontSize: hp('1.5%'), fontWeight: '400'}}>Start Time</Text>
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPress = { () =>
                                    this._showTimePicker()
                                }>
                                <TextInput value={this.state.startTime} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = ''
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='clockcircleo' type='antdesign' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('1.0%'), width: wp('90%'), color: '#125ebe', fontSize: hp('1.5%'), fontWeight: '400'}}>
                                A group = each team plays every other team in their group. Or select custom matched per team
                            </Text>
                            <TouchableOpacity style={{alignSelf: 'flex-start', marginVertical: hp('1.0%')}}>
                                <Text style={{borderRadius: 5, backgroundColor: '#22d498', paddingVertical: hp('1.0%'), marginTop: hp('1.0%'), width: wp('40.0%'), textAlign: 'center', fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>
                                    SEND REQUEST
                                </Text>
                            </TouchableOpacity>
                            <View style={{marginVertical: hp('1.0%'), width: wp('94%'), backgroundColor: '#fff', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                <Text style={{width: wp('94%'), textAlign: 'left', fontWeight: '500', color: '#fff', backgroundColor: '#3dc9ec', fontSize: hp('2%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                    Round Matchup
                                </Text>
                                {
                                    additionalDetailsData.map((item, key) => {
                                        return (
                                            <View key={item.key} style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                                <Text style={{width: wp('30%'), textAlign: 'center', fontWeight: '400', color: '#888', fontSize: hp('1.5%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), borderRightWidth: 1, borderRightColor: '#eee'}}>
                                                    {item.num}
                                                </Text>
                                                <Text style={{width: wp('32%'), textAlign: 'center', fontWeight: '400', color: '#888', fontSize: hp('1.5%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), borderRightWidth: 1, borderRightColor: '#eee'}}>
                                                    {item.leftText}
                                                </Text>
                                                <Text style={{width: wp('32%'), textAlign: 'center', fontWeight: '400', color: '#888', fontSize: hp('1.5%'), paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%')}}>
                                                    {item.rightText}
                                                </Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isSelectLeagueModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectLeagueModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            leagueList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectLeague(item.name)} style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, key !== (leagueList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>                                                    
                                                        <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                            <Icon name={item.icon} type='material-community' color='#666' size={hp('3.0%')} />
                                                        </View>
                                                        <Text style={{width: wp('72%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}}>
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </Modal>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isSelectTeamModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectTeamModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('60%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            teamList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectTeam(item)} style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, key !== (teamList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>                                                    
                                                        <View style={{width: wp('12.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                            <Image source={item.image} style={{width: hp('3%'), height: hp('3%'), resizeMode: 'contain'}} />
                                                        </View>
                                                        <Text style={{width: wp('48%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}}>
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </Modal>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isSelectScheduleTypeModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectScheduleTypeModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            scheduleTypeList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectScheduleType(item.name)}>
                                                        <Text style={[{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}, key !== (scheduleTypeList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </Modal>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isSelectRoundOfPlayModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectRoundOfPlayModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            roundOfPlayList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectRoundOfPlay(item.name)}>
                                                        <Text style={[{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}, key !== (roundOfPlayList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </Modal>
                            <DateTimePicker
                                isVisible={this.state.isDatePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDatePicker}
                            />
                            <DateTimePicker
                                mode='time'
                                isVisible={this.state.isTimePickerVisible}
                                onConfirm={this._handleTimePicked}
                                onCancel={this._hideTimePicker}
                            />
                        </View>
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

export default SetupTeamsScreen

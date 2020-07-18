import React from 'react';
import { StatusBar, ScrollView, View, TouchableOpacity, Text, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SetupHeader from '../../components/SetupHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import CheckBox from '../../components/CheckBox';

// import layout from '../../themes/layout';
// import styles from './styles';

const overPerInningsList = [
    {key: '1', name: 'Over Per Innings 1', value: '1'},
    {key: '2', name: 'Over Per Innings 2', value: '2'},
    {key: '3', name: 'Over Per Innings 3', value: '3'},
    {key: '4', name: 'Over Per Innings 4', value: '4'},
    {key: '5', name: 'Over Per Innings 5', value: '5'},
]

const maxOverPerBowlerList = [
    {key: '1', name: 'MAX Over Per Bowler 1', value: '1'},
    {key: '2', name: 'MAX Over Per Bowler 2', value: '2'},
    {key: '3', name: 'MAX Over Per Bowler 3', value: '3'},
    {key: '4', name: 'MAX Over Per Bowler 4', value: '4'},
    {key: '5', name: 'MAX Over Per Bowler 5', value: '5'},
]

const syncFrequencyList = [
    {key: '1', name: 'Sync Frequency 1', value: '1'},
    {key: '2', name: 'Sync Frequency 2', value: '2'},
    {key: '3', name: 'Sync Frequency 3', value: '3'},
    {key: '4', name: 'Sync Frequency 4', value: '4'},
    {key: '5', name: 'Sync Frequency 5', value: '5'},
]

const scoreFormatList = [
    {key: '1', name: 'Score Format 1', value: '1'},
    {key: '2', name: 'Score Format 2', value: '2'},
    {key: '3', name: 'Score Format 3', value: '3'},
    {key: '4', name: 'Score Format 4', value: '4'},
    {key: '5', name: 'Score Format 5', value: '5'},
]

class SetupSettingsScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
            modal: null,
            selectedBottomTab: 'Settings',
            confirmBalls: false,
            rebowlNoBallsAndWideBalls: false,
            applyToAllMatches: false,
            ballPerOver: 6,
            wideValue: 6,
            noBallValue: 6,
            overPerInnings: null,
            maxOverPerBowler: null,
            syncFrequency: null,
            scoreFormat: null,
            confirmSettingsPhase: 'first',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    setModalVisible(modal, visible) {
        this.setState({isModalVisible: visible});
        this.setState({modal: modal});
    }

    selectValue(selectedVariable, value) {
        this.setState({[selectedVariable]: value});
        this.setModalVisible(null, false);
    }

    setConfirmSettingsPhase(value) {
        if (this.state.confirmSettingsPhase == 'first') {
            if(this.state.overPerInnings == null || this.state.maxOverPerBowler == null)
                return;
        } else {
            if(this.state.syncFrequency == null || this.state.scoreFormat == null)
                return;
        }
        this.setState({confirmSettingsPhase: value});
    }

    setConfirmBalls = () => {
        if (this.state.confirmBalls == false)
            this.setState({confirmBalls: true});
        else
            this.setState({confirmBalls: false});
    }

    setRebowlNoBallsAndWideBalls = () => {
        if (this.state.rebowlNoBallsAndWideBalls == false)
            this.setState({rebowlNoBallsAndWideBalls: true});
        else
            this.setState({rebowlNoBallsAndWideBalls: false});
    }

    setApplyToAllMatches = () => {
        if (this.state.applyToAllMatches == false)
            this.setState({applyToAllMatches: true});
        else
            this.setState({applyToAllMatches: false});
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <SetupHeader
                    navigation={this.props.navigation}
                    stadium='JN STADIUM, Washington DC'
                    slogan='START ON AUGUST 30, 2018'
                    selectedTab='SetupSettings'
                    leagueStack={false}
                />
                <ScrollView style={{paddingHorizontal: wp('2%'), height: hp('60%')}}>
                    <View style={{marginVertical: hp('2.0%'), alignItems: 'center'}}>
                        <View style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.0%'), backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: wp('94%')}}>
                            <Text style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%'), fontWeight: '500', width: wp('94%'), backgroundColor: '#13c0fa', color: '#fff', fontSize: hp('2.0%'), borderTopLeftRadius: 5, borderTopRightRadius: 5}}>Manage Team</Text>
                            <Text style={{marginTop: hp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%'), fontWeight: '500'}}>OVER PER INNINGS</Text>
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPressIn={() => {
                                    this.setModalVisible('overPerInnings', true);
                                }}
                            >
                                <TextInput value={this.state.overPerInnings} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = ''
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='ios-arrow-down' type='ionicon' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%'), fontWeight: '500'}}>MAX OVER PER BOWLER</Text>
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPressIn={() => {
                                    this.setModalVisible('maxOverPerBowler', true);
                                }}
                            >
                                <TextInput value={this.state.maxOverPerBowler} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = ''
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='ios-arrow-down' type='ionicon' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <View style={{width: wp('90%'), marginVertical: hp('1.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('1.0%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}}>
                                <Text style={{width: wp('40%'), fontSize: hp('1.75%'), color: '#888'}}>BALL PER OVER</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (this.state.ballPerOver > 0)
                                            this.setState({ballPerOver: (this.state.ballPerOver - 1)});
                                        }
                                    }
                                >
                                    <Icon name='minuscircleo' type='antdesign' color='#13c0fa' size={hp('2.5%')} />
                                </TouchableOpacity>
                                <Text style={{width: wp('10.0%'), textAlign: 'center', fontSize: hp('1.75%'), color: '#666'}}>{this.state.ballPerOver}</Text>
                                <TouchableOpacity onPress={() => {this.setState({ballPerOver: (this.state.ballPerOver + 1)})}}>
                                    <Icon name='pluscircleo' type='antdesign' color='#13c0fa' size={hp('2.5%')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width: wp('90%'), marginVertical: hp('1.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('1.0%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}}>
                                <Text style={{width: wp('40%'), fontSize: hp('1.75%'), color: '#888'}}>WIDE VALUE</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (this.state.wideValue > 0)
                                            this.setState({wideValue: (this.state.wideValue - 1)});
                                        }
                                    }
                                >
                                    <Icon name='minuscircleo' type='antdesign' color='#13c0fa' size={hp('2.5%')} />
                                </TouchableOpacity>
                                <Text style={{width: wp('10.0%'), textAlign: 'center', fontSize: hp('1.75%'), color: '#666'}}>{this.state.wideValue}</Text>
                                <TouchableOpacity onPress={() => {this.setState({wideValue: (this.state.wideValue + 1)})}}>
                                    <Icon name='pluscircleo' type='antdesign' color='#13c0fa' size={hp('2.5%')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width: wp('90%'), marginVertical: hp('1.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('1.0%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}}>
                                <Text style={{width: wp('40%'), fontSize: hp('1.75%'), color: '#888'}}>NO BALL VALUE</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (this.state.noBallValue > 0)
                                            this.setState({noBallValue: (this.state.noBallValue - 1)});
                                        }
                                    }
                                >
                                    <Icon name='minuscircleo' type='antdesign' color='#13c0fa' size={hp('2.5%')} />
                                </TouchableOpacity>
                                <Text style={{width: wp('10.0%'), textAlign: 'center', fontSize: hp('1.75%'), color: '#666'}}>{this.state.noBallValue}</Text>
                                <TouchableOpacity onPress={() => {this.setState({noBallValue: (this.state.noBallValue + 1)})}}>
                                    <Icon name='pluscircleo' type='antdesign' color='#13c0fa' size={hp('2.5%')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width: wp('90%'), alignSelf: 'flex-start', marginVertical: hp('0.75%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <CheckBox fontSize={hp('1.5%')} width={wp('30%')} checked={this.state.confirmBalls} iconColor='#13c0fa' text='CONFIRM BALLS' onPress={() => this.setConfirmBalls()} />
                                <CheckBox fontSize={hp('1.5%')} width={wp('60%')} checked={this.state.rebowlNoBallsAndWideBalls} iconColor='#13c0fa' text='RE-BOWL NO BALLS AND WIDE BALLS' onPress={() => this.setRebowlNoBallsAndWideBalls()} />
                            </View>
                            {
                                this.state.confirmSettingsPhase == 'first' ? 
                                    (
                                        <TouchableOpacity style={{alignSelf: 'flex-start', marginVertical: hp('1.0%')}}
                                            onPress={() => {
                                                    this.setConfirmSettingsPhase('second');
                                                }
                                            }>
                                            <Text style={{borderRadius: 5, backgroundColor: '#22d498', paddingVertical: hp('1.0%'), marginTop: hp('1.0%'), width: wp('50.0%'), textAlign: 'center', fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>
                                                CONFIRM SETTINGS
                                            </Text>
                                        </TouchableOpacity>
                                    ) : null
                            }
                            <Text style={{marginTop: hp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%'), fontWeight: '500'}}>SYNC FREQUENCY</Text>
                            <Text style={{marginTop: hp('0.0%'), width: wp('90%'), color: '#888', fontSize: hp('1.5%'), fontWeight: '400'}}>End of over</Text>
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('1.0%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPressIn={() => {
                                    this.setModalVisible('syncFrequency', true);
                                }}
                            >
                                <TextInput value={this.state.syncFrequency} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = ''
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='ios-arrow-down' type='ionicon' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('0.5%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%'), fontWeight: '500'}}>SCORE FORMAT</Text>
                            <Text style={{marginTop: hp('0.0%'), width: wp('90%'), color: '#888', fontSize: hp('1.5%'), fontWeight: '400'}}>378/4</Text>
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('1.0%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPressIn={() => {
                                    this.setModalVisible('scoreFormat', true);
                                }}
                            >
                                <TextInput value={this.state.scoreFormat} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = '1 round = 8 matchs per team'
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='ios-arrow-down' type='ionicon' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('0.5%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%'), fontWeight: '500'}}>LEAGUE SET UP</Text>
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = ''
                            />
                            <View style={{width: wp('90%')}}>
                                <CheckBox fontSize={hp('1.5%')} width={wp('60%')} checked={this.state.applyToAllMatches} iconColor='#13c0fa' text='Apply to all matches' onPress={() => this.setApplyToAllMatches()} />
                            </View>
                            <Text style={{marginTop: hp('1.0%'), marginBottom: hp('2.0%'), width: wp('90%'), color: '#125ebe', fontSize: hp('1.5%'), fontWeight: '400'}}>
                                A group = each team plays every other team in their group. Or select custom matched per team
                            </Text>
                            {
                                this.state.confirmSettingsPhase == 'second' ? 
                                    (
                                        <TouchableOpacity style={{alignSelf: 'flex-start', marginVertical: hp('1.0%')}}
                                            onPress={() => {
                                                    this.setConfirmSettingsPhase('first');
                                                }
                                            }>
                                            <Text style={{borderRadius: 5, backgroundColor: '#22d498', paddingVertical: hp('1.0%'), marginTop: hp('1.0%'), width: wp('50.0%'), textAlign: 'center', fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>
                                                CONFIRM SETTINGS
                                            </Text>
                                        </TouchableOpacity>
                                    ) : null
                            }
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setModalVisible(null, false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            this.state.modal == 'overPerInnings' ? (
                                                overPerInningsList.map((item, key) => {
                                                    return (
                                                        <TouchableOpacity key={key} onPress={() => this.selectValue('overPerInnings', item.name)}>
                                                            <Text style={[{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}, key !== (overPerInningsList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>
                                                                {item.name}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    )
                                                })) : null
                                        }
                                        {
                                            this.state.modal == 'maxOverPerBowler' ? (
                                            maxOverPerBowlerList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectValue('maxOverPerBowler', item.name)}>
                                                        <Text style={[{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}, key !== (maxOverPerBowlerList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })) : null
                                        }
                                        {
                                            this.state.modal == 'syncFrequency' ? (
                                            syncFrequencyList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectValue('syncFrequency', item.name)}>
                                                        <Text style={[{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}, key !== (syncFrequencyList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })) : null
                                        }
                                        {
                                            this.state.modal == 'scoreFormat' ? (
                                            scoreFormatList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectValue('scoreFormat', item.name)}>
                                                        <Text style={[{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}, key !== (scoreFormatList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })) : null
                                        }
                                    </ScrollView>
                                </View>
                            </Modal>
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

export default SetupSettingsScreen

import React from 'react';
import { StatusBar, ScrollView, View, TouchableOpacity, Text, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SetupHeader from '../../components/SetupHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const cityList = [
    {key: '1', name: 'London', value: '1'},
    {key: '2', name: 'Beijing', value: '2'},
    {key: '3', name: 'Tokyo', value: '3'},
    {key: '4', name: 'Mumbai', value: '4'},
    {key: '5', name: 'Shanghai', value: '5'},
]

const sponsorList = [
    {key: '1', name: 'Kingoer Meist', facebook: 'ericsam1090', twitter: 'ericsam1090'},
    {key: '2', name: 'Speidtor Egivaldo', facebook: 'ericsam1090', twitter: 'ericsam1090'},
    {key: '3', name: 'Tokyo Normangi', facebook: 'ericsam1090', twitter: 'ericsam1090'},
    {key: '4', name: 'Mumbai Balaladay', facebook: 'ericsam1090', twitter: 'ericsam1090'},
    {key: '5', name: 'Mupassa Shanghai', facebook: 'ericsam1090', twitter: 'ericsam1090'},
]

class SetupLeagueScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Settings',
            isSelectCityModalVisible: false,
            isSelectSponsorModalVisible: false,
            city: null,
            isDateTimePickerVisible: false,
            planedStartDate: null,
            sponsor: {
                name: '',
                facebook: '',
                twitter: '',
            }
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    setSelectCityModalVisible(visible) {
        this.setState({isSelectCityModalVisible: visible});
    }

    setSelectSponsorModalVisible(visible) {
        this.setState({isSelectSponsorModalVisible: visible});
    }

    selectCity(name) {
        this.setState({city: name});
        this.setSelectCityModalVisible(false);
    }

    selectSponsor(sponsor) {
        this.state.sponsor.name = sponsor.name;
        this.state.sponsor.facebook = sponsor.facebook;
        this.state.sponsor.twitter = sponsor.twitter;
        this.setSelectSponsorModalVisible(false);
    }
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.state.planedStartDate = date.toString().substring(0, 15);
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <SetupHeader
                    navigation={this.props.navigation}
                    stadium='JN STADIUM, Washington DC'
                    slogan='START ON AUGUST 30, 2018'
                    selectedTab='SetupLeague'
                    leagueStack={false}
                />
                <ScrollView style={{paddingHorizontal: wp('2%'), height: hp('60%')}}>
                    <View style={{marginVertical: hp('2.0%'), alignItems: 'center'}}>
                        <View style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('3.0%'), backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: wp('94%')}}>
                            <Text style={{width: wp('90%'), color: '#666', fontSize: hp('1.75%')}}>LEAGUE SET UP</Text>
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Tournament/League Name'
                            />
                            <View style={{marginVertical: hp('0.75%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TextInput value={this.state.city} style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('80%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Select a City'
                                />
                                <TouchableOpacity
                                    onPressIn={() => {
                                        this.setSelectCityModalVisible(true);
                                    }}>
                                    <View style={{width: wp('10.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <Icon name='circle-with-plus' type='entypo' color='#22d498' size={hp('3.0%')} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Umpire1'
                            />
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'TV Umpire'
                            />
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Match Referee'
                            />
                            <TouchableOpacity style={{backgroundColor: '#e5e6ea', marginVertical: hp('0.75%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                onPress = { () =>
                                    this._showDateTimePicker()
                                }>
                                <TextInput value={this.state.planedStartDate} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('82%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                    placeholder = 'Planned Start Date'
                                />
                                <View style={{width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name='calendar' type='antdesign' color='#888' size={hp('2.0%')} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: hp('1.0%'), width: wp('90%'), color: '#666', fontSize: hp('1.75%')}}>SPONSOR1</Text>
                            <View style={{marginVertical: hp('0.75%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TextInput value={this.state.sponsor.name} style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('62%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Sponsor1*'
                                />
                                <TouchableOpacity
                                    onPressIn={() => {
                                        this.setSelectSponsorModalVisible(true);
                                    }}
                                >
                                    <View style={{width: wp('28.0%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                        <View style={{paddingHorizontal: wp('1.0%'), width: wp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                                            <Icon name='circle-with-plus' type='entypo' color='#22d498' size={hp('3.0%')} />
                                        </View>
                                        <Text style={{width: wp('20.0%'), textAlign: 'left', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                            Add Another Sponsor
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TextInput value={this.state.sponsor.facebook} style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Facebook*'
                            />
                            <TextInput value={this.state.sponsor.twitter} style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Twitter*'
                            />
                            <Text style={{marginTop: hp('1.0%'), width: wp('90%'), color: '#666', fontSize: hp('1.75%')}}>MANAGER1</Text>
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Name*'
                            />
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Email*'
                            />
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Phone*'
                            />
                            <Text style={{marginTop: hp('1.0%'), width: wp('90%'), color: '#666', fontSize: hp('1.75%')}}>MANAGER2</Text>
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Name*'
                            />
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Email*'
                            />
                            <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                placeholder = 'Phone*'
                            />
                            <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                                <Text style={{borderRadius: 5, backgroundColor: '#22d498', paddingVertical: hp('1.0%'), marginTop: hp('1.0%'), width: wp('50.0%'), textAlign: 'center', fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>
                                    Create a League
                                </Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isSelectCityModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectCityModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            cityList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectCity(item.name)}>
                                                        <Text style={[{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.25%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}, key !== (cityList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>
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
                                visible={this.state.isSelectSponsorModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectSponsorModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            sponsorList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectSponsor(item)}>
                                                        <Text style={[{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.25%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%')}, key !== (sponsorList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>
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
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
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

export default SetupLeagueScreen

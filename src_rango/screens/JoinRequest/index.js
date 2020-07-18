import React from 'react';
import { StatusBar, ScrollView, TouchableOpacity, View, Text, Image, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../../components/TopMenu';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import CheckBox from '../../components/CheckBox';

import images from '../../constants/images';
// import layout from '../../themes/layout';
// import styles from './styles';

const teamList = [
    {key: '1', name: 'KKR', image: require('../../assets/images/KKR.png'), captain: 'Juan Franie', title: 'KOLKATA KNIGHT RIDERS', owner: 'Knight Rider Sports Pvt Ltd.', coach: 'Ramesh Jadav', homeground: 'Eden Garden, Kolkata', manager: 'Manish Gupta', email: 'Manish.gupta@cricketpro.com', phone: '+91 000-000-0000'},
    {key: '2', name: 'SRH', image: require('../../assets/images/SRH.png'), captain: 'Juan Franie', title: 'SUNRISERS HYDERABAD', owner: 'Knight Rider Sports Pvt Ltd.', coach: 'Ramesh Jadav', homeground: 'Sweeden Garden, Sweeden', manager: 'Joseph Samgi', email: 'Joseph.samgi@cricketpro.com', phone: '+91 111-111-1111'},
    {key: '3', name: 'CSK', image: require('../../assets/images/CSK.png'), captain: 'Juan Franie', title: 'CHENNAI SUPER KINGS', owner: 'Knight Rider Sports Pvt Ltd.', coach: 'Ramesh Jadav', homeground: 'Polish Garden, Polish', manager: 'Geudoti Mana', email: 'Geudoti.mana@cricketpro.com', phone: '+91 222-222-2222'},
    {key: '4', name: 'RR', image: require('../../assets/images/RR.png'), captain: 'Juan Franie', title: 'RAJASTHAN ROYALS', owner: 'Knight Rider Sports Pvt Ltd.', coach: 'Ramesh Jadav', homeground: 'Marconi Garden, Marconi', manager: 'Baidue Seldiman', email: 'Baidue.seldiman@cricketpro.com', phone: '+91 333-333-3333'},
    {key: '5', name: 'KXIP', image: require('../../assets/images/KXIP.png'), captain: 'Juan Franie', title: 'KINGS XI PUNJAB', owner: 'Knight Rider Sports Pvt Ltd.', coach: 'Ramesh Jadav', homeground: 'Pounchar Garden, Pounchar', manager: 'Kerena Simon', email: 'Kerena.simon@cricketpro.com', phone: '+91 444-444-4444'},
]

class JoinRequestScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSelectTeamModalVisible: false,
            selectedBottomTab: 'Search',
            seletedTeam: null,
            includeLinkToMyProfile: true,
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    setSelectTeamModalVisible(visible) {
        this.setState({isSelectTeamModalVisible: visible});
        if (visible == true)
            StatusBar.setBackgroundColor('#626262', true);
        else
            StatusBar.setBackgroundColor('#f4f4f4', true);
    }

    selectTeam = (item) => {
        this.setState({selectedTeam: item});
        this.state.seletedTeam = item;
        this.setSelectTeamModalVisible(false);
        this.forceUpdate();
    }

    setIncludeLinkToMyProfile = () => {
        if (this.state.includeLinkToMyProfile == false)
            this.setState({includeLinkToMyProfile: true});
        else
            this.setState({includeLinkToMyProfile: false});
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('10%')}}>
                    <TopMenu
                        navigation={this.props.navigation}
                        title='JOIN REQUEST'
                    />
                </LinearGradient>
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), height: hp('80%')}}>
                    <View style={{marginVertical: hp('2.0%'), alignItems: 'center'}}>
                        <View style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('2.0%'), backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: wp('94%')}}>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>Select a Club</Text>
                                <TouchableOpacity style={{backgroundColor: '#fff', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                    onPressIn={() => {
                                        this.setSelectTeamModalVisible(true);
                                    }}>
                                    <TextInput value={this.state.seletedTeam == null ? '' : this.state.seletedTeam.name} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('85%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                        placeholder = 'Choose...'
                                    />
                                    <Icon name='triangle-down' type='entypo' color='#888' size={hp('1.5%')} containerStyle={{paddingRight: wp('2.0%')}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width: wp('86%'), marginTop: hp('1.0%'), marginBottom: hp('2.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#444', fontSize: hp('2.5%'), fontWeight: '500'}}>{this.state.seletedTeam == null ? 'Club Name' : this.state.selectedTeam.title}</Text>
                                <Text style={{marginTop: hp('0.5%'), color: '#444', fontSize: hp('1.5%')}}>{'Owner : '} {this.state.seletedTeam == null ? '' : this.state.selectedTeam.owner}</Text>
                                <Text style={{color: '#444', fontSize: hp('1.5%')}}>{'Coach : '} {this.state.seletedTeam == null ? '' : this.state.selectedTeam.coach}</Text>
                                <Text style={{color: '#444', fontSize: hp('1.5%')}}>{'Captain : '} {this.state.seletedTeam == null ? '' : this.state.selectedTeam.captain}</Text>
                                <Text style={{color: '#444', fontSize: hp('1.5%')}}>{'Home Ground : '} {this.state.seletedTeam == null ? '' : this.state.selectedTeam.homeground}</Text>
                                <Text style={{marginTop: hp('0.5%'), color: '#444', fontSize: hp('1.5%')}}>{'Manager : '} {this.state.seletedTeam == null ? '' : this.state.selectedTeam.manager}</Text>
                                <Text style={{color: '#444', fontSize: hp('1.5%')}}>{'Email : '} {this.state.seletedTeam == null ? '' : this.state.selectedTeam.email}</Text>
                                <Text style={{color: '#444', fontSize: hp('1.5%')}}>{'Phone : '} {this.state.seletedTeam == null ? '' : this.state.selectedTeam.phone}</Text>
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>My Strengths</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Enter Strengths'
                                />
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>My Weakness</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Enter Weakness'
                                />
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>Why do you want to join?</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Notes'
                                />
                            </View>
                            <View style={{marginVertical: hp('0.5%'), alignSelf: 'flex-start'}}>
                                <CheckBox fontSize={hp('1.5%')} width={wp('60%')} checked={this.state.includeLinkToMyProfile} iconColor='#22d498' text='Include Link to My Profile' onPress={() => this.setIncludeLinkToMyProfile()} />
                            </View>
                            <TouchableOpacity style={{marginVertical: hp('2.0%')}}>
                                <Text style={{borderRadius: 5, backgroundColor: '#22d498', paddingVertical: hp('1.0%'), marginTop: hp('1.0%'), width: wp('50.0%'), textAlign: 'center', fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>
                                    SEND REQUEST
                                </Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isSelectTeamModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectTeamModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            teamList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectTeam(item)} style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, key !== (teamList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>                                                    
                                                        <View style={{width: wp('12.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                            <Image source={item.image} style={{width: hp('4%'), height: hp('4%'), resizeMode: 'contain'}} />
                                                        </View>
                                                        <Text style={{width: wp('68%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('0.0%'), paddingVertical: hp('1.0%')}}>
                                                            {item.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })
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

export default JoinRequestScreen

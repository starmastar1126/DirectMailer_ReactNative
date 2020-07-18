import React from 'react';
import { StatusBar, ScrollView, TouchableOpacity, View, Text, Image, Switch, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../../components/TopMenu';
import BottomTabsMenu from '../../components/BottomTabsMenu';

import images from '../../constants/images';
// import layout from '../../themes/layout';
// import styles from './styles';

const countryList = [
    {key: '1', name: 'India', image: require('../../assets/images/icons8-india-48.png')},
    {key: '2', name: 'United Kingdom', image: require('../../assets/images/icons8-uk-48.png')},
    {key: '3', name: 'China', image: require('../../assets/images/icons8-china-48.png')},
    {key: '4', name: 'Germany', image: require('../../assets/images/icons8-germany-48.png')},
    {key: '5', name: 'Italy', image: require('../../assets/images/icons8-italy-48.png')},
    {key: '6', name: 'Spain', image: require('../../assets/images/icons8-spain-48.png')},
    {key: '7', name: 'France', image: require('../../assets/images/icons8-france-48.png')},
]

const stateList = [
    {key: '1', name: 'Andhra Pradesh', icon: 'city-variant-outline'},
    {key: '2', name: 'Arunachal Pradesh', icon: 'city-variant-outline'},
    {key: '3', name: 'Assam', icon: 'city-variant-outline'},
    {key: '4', name: 'Bihar', icon: 'city-variant-outline'},
    {key: '5', name: 'Chhattisgarh', icon: 'city-variant-outline'},
    {key: '6', name: 'Goa', icon: 'city-variant-outline'},
    {key: '7', name: 'Gujarat', icon: 'city-variant-outline'},
    {key: '8', name: 'Haryana', icon: 'city-variant-outline'},
]

class CreateSponsorScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSelectCountryModalVisible: false,
            isSelectStateModalVisible: false,
            selectedBottomTab: 'Search',
            country: null,
            state: null,
            status: true,
            photo: null,
        };
    }

    handleChoosePhoto = () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                this.setState({
                    photo: source,
                });
            }
        });
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    setSelectCountryModalVisible(visible) {
        this.setState({isSelectCountryModalVisible: visible});
    }

    setSelectStateModalVisible(visible) {
        this.setState({isSelectStateModalVisible: visible});
    }

    selectCountry(value) {
        this.setState({country: value});
        this.setSelectCountryModalVisible(false);
    }

    selectState(value) {
        this.setState({state: value});
        this.setSelectStateModalVisible(false);
    }

    changeStatus() {
        if (this.state.status == true)
            this.setState({status: false});
        else
            this.setState({status: true});
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('10%')}}>
                    <TopMenu
                        navigation={this.props.navigation}
                        title='SPONSOR'
                    />
                </LinearGradient>
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), height: hp('80%')}}>
                    <View style={{marginVertical: hp('2.0%'), alignItems: 'center'}}>
                        <View style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('1.0%'), backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: wp('94%')}}>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('65%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Sponsor Name'
                                />
                                <View style={{width: wp('25%'), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <Text style={{paddingHorizontal: wp('0.5%'), color: '#666', fontSize: hp('1.5%')}}>Status</Text>
                                    <Switch
                                        onValueChange={() => this.changeStatus()}
                                        value={this.state.status}
                                    />
                                </View>
                            </View>
                            <View style={{marginVertical: hp('0.5%'), width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Text style={{color: '#666', fontSize: hp('1.5%')}}>First Name</Text>
                                    <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('44%'), color: '#444', fontSize: hp('1.75%')}}
                                        placeholder = 'Your First Name'
                                    />
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Text style={{color: '#666', fontSize: hp('1.5%')}}>Last Name</Text>
                                    <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('44%'), color: '#444', fontSize: hp('1.75%')}}
                                        placeholder = 'Your Last Name'
                                    />
                                </View>
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>Phone</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = '+91 999-999-9999'
                                />
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>Email</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'example: joseph0512@outlook.com'
                                />
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>Address</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'example: 1234 Main St'
                                />
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>Address 2(Optional)</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Apartment or Suite'
                                />
                            </View>                            
                            <View style={{marginVertical: hp('0.5%'), width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Text style={{color: '#666', fontSize: hp('1.5%')}}>Country</Text>
                                    <TouchableOpacity style={{backgroundColor: '#fff', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                        onPressIn={() => {
                                            this.setSelectCountryModalVisible(true);
                                        }}>
                                        <TextInput value={this.state.country} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('29%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                            placeholder = 'Choose...'
                                        />
                                        <Icon name='triangle-down' type='entypo' color='#888' size={hp('1.5%')} containerStyle={{paddingRight: wp('2.0%')}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Text style={{color: '#666', fontSize: hp('1.5%')}}>State</Text>
                                    <TouchableOpacity style={{backgroundColor: '#fff', marginVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                        onPressIn={() => {
                                            this.setSelectStateModalVisible(true);
                                        }}>
                                        <TextInput value={this.state.state} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('29%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                            placeholder = 'Choose...'
                                        />
                                        <Icon name='triangle-down' type='entypo' color='#888' size={hp('1.5%')} containerStyle={{paddingRight: wp('2.0%')}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <Text style={{color: '#666', fontSize: hp('1.5%')}}>Zip</Text>
                                    <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('18%'), color: '#444', fontSize: hp('1.75%')}}
                                        placeholder = ''
                                    />
                                </View>
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>Sponsor Type</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'What can i Sponsor - (Utilities/Money)'
                                />
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{color: '#666', fontSize: hp('1.5%')}}>Sponsor Notes</Text>
                                <TextInput style={{paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Notes'
                                />
                            </View>
                            <View style={{marginVertical: hp('1.5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{paddingHorizontal: wp('2.0%'), color: '#888', fontSize: hp('2.0%'), fontWeight: '500'}}>Sponsor Display Image</Text>
                                <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
                                    <Icon name='image-plus' type='material-community' color='#23d79a' size={hp('4.0%')} />
                                </TouchableOpacity>
                            </View>
                            {
                                this.state.photo == null ? (
                                    <Image source={images.sponsor8Png} style={{width: wp('80%'), height: hp('15%'), resizeMode: 'contain'}} />
                                ) : (
                                    <Image source={{uri: this.state.photo.uri}} style={{width: wp('80%'), height: hp('15%'), resizeMode: 'contain'}} />
                                )
                            }
                            <TouchableOpacity style={{marginVertical: hp('1.0%')}}>
                                <Text style={{borderRadius: 5, backgroundColor: '#22d498', paddingVertical: hp('1.0%'), marginTop: hp('1.0%'), width: wp('50.0%'), textAlign: 'center', fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>
                                    CREATE SPONSOR
                                </Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isSelectCountryModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectCountryModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            countryList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectCountry(item.name)} style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, key !== (countryList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>                                                    
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
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.isSelectStateModalVisible}
                                >
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                    <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                        onPressIn={() => {
                                            this.setSelectStateModalVisible(false);
                                        }}
                                        >
                                    </TouchableOpacity>
                                    <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                        {
                                            stateList.map((item, key) => {
                                                return (
                                                    <TouchableOpacity key={key} onPress={() => this.selectState(item.name)} style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, key !== (stateList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>                                                    
                                                        {/* <View style={{width: wp('12.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                            <Icon name={item.icon} type='material-community' color='#666' size={hp('3.0%')} />
                                                        </View> */}
                                                        <Text style={{width: wp('80%'), textAlign: 'left', color: '#666', fontWeight: '400', fontSize: hp('2.0%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('1.0%')}}>
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

export default CreateSponsorScreen

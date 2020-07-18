import React from 'react';
import { StatusBar, ScrollView, TouchableOpacity, View, Text, Image, TextInput, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
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
    {key: '5', name: 'Spain', image: require('../../assets/images/icons8-spain-48.png')},
    {key: '5', name: 'France', image: require('../../assets/images/icons8-france-48.png')},
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

const venueTypeList = [
    {key: '1', name: 'Stadium', icon: 'city-variant-outline'},
    {key: '2', name: 'Arena', icon: 'city-variant-outline'},
    {key: '3', name: 'Ground', icon: 'city-variant-outline'},
    {key: '4', name: 'Street', icon: 'city-variant-outline'},
]

const costTypeList = [
    {key: '1', name: 'Day', icon: 'city-variant-outline'},
    {key: '2', name: 'Hour', icon: 'city-variant-outline'},
    {key: '3', name: 'Week', icon: 'city-variant-outline'},
]

class CreateVenueScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSelectCountryModalVisible: false,
            isSelectStateModalVisible: false,
            isSelectVenueTypeModalVisible: false,
            isSelectCostTypeModalVisible: false,
            selectedBottomTab: 'CreateVenue',
            country: null,
            state: null,
            venueType: null,
            costType: null,
            photo: null,
            status: false,
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
                    photo: source.uri,
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

    setSelectVenueTypeModalVisible(visible) {
        this.setState({isSelectVenueTypeModalVisible: visible});
    }

    setSelectCostTypeModalVisible(visible) {
        this.setState({isSelectCostTypeModalVisible: visible});
    }

    selectCountry(value) {
        this.setState({country: value});
        this.setSelectCountryModalVisible(false);
    }

    selectState(value) {
        this.setState({state: value});
        this.setSelectStateModalVisible(false);
    }

    selectVenueType(value) {
        this.setState({venueType: value});
        this.setSelectVenueTypeModalVisible(false);
    }

    selectCostType(value) {
        this.setState({costType: value});
        this.setSelectCostTypeModalVisible(false);
    }

    changeStatus(value) {
        this.setState({photo: '../../assets/images/teamprofile-news.jpg'});
        this.setState({status: value});
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('10%')}}>
                    <TopMenu
                        navigation={this.props.navigation}
                        title='ADD/EDIT VENUE'
                    />
                </LinearGradient>
                <ScrollView style={{width: wp('100%'), height: hp('80%')}}>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                        {
                            this.state.photo == null ? (
                                <View style={{marginTop: hp('1.0%'), borderColor: '#ccc', borderWidth: 1, width: wp('96%'), height: wp('54%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{marginBottom: hp('1.0%'), color: '#666', fontSize: hp('2.5%')}}>----    Upload Venue Image    ----</Text>
                                    <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
                                        <Icon name='image-plus' type='material-community' color='#444' size={hp('12.0%')} />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
                                    {/* <Image source={{uri: this.state.photo}} style={{width: wp('100%'), height: wp('60%'), resizeMode: 'cover'}} /> */}
                                    <Image source={images.teamProfileNewsJpg} style={{marginVertical: hp('1.0%'), width: wp('96%'), height: wp('54%'), resizeMode: 'cover'}} />
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.status ? (
                                <View style={{marginTop: hp('1.0%'), width: wp('90%'), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <Icon name='heart' type='material-community' color='#eb4654' size={hp('2.5%')} />
                                    <Text style={{marginHorizontal: wp('2.0%'), color: '#666', fontSize: hp('2.0%')}}>152</Text>
                                    <Icon name='share-variant' type='material-community' color='#444' size={hp('2.5%')} />
                                    <TouchableOpacity style={{marginLeft: wp('10.0%')}} onPress={() => this.changeStatus(false)}>
                                        <Icon name='square-edit-outline' type='material-community' color='#444' size={hp('2.5%')} />
                                    </TouchableOpacity>
                                </View>
                            ) : null
                        }
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), backgroundColor: '#fff', textAlign: 'center', marginTop: hp('1.5%'), color: '#444', fontSize: hp('3.0%'), fontWeight: '600'}}>Eden Garden</Text>
                            ) : (
                                <TextInput style={{marginTop: hp('2.0%'), backgroundColor: '#fff', marginBottom: hp('0.75%'), paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Enter Venue/Stadium/Ground Name'
                                />
                            )
                        }
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), backgroundColor: '#fff', textAlign: 'center', marginVertical: hp('0.75%'), color: '#888', fontSize: hp('2.0%'), fontWeight: '400'}}>Eden Garden</Text>
                            ) : (
                                <TextInput style={{marginVertical: hp('0.75%'), backgroundColor: '#fff', paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', marginVertical: hp('0.75%'), paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Alias Name'
                                />
                            )
                        }
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), backgroundColor: '#fff', textAlign: 'left', marginVertical: hp('0.75%'), color: '#888', fontSize: hp('2.0%'), fontWeight: '400'}}>Arena</Text>
                            ) : (
                                <TouchableOpacity style={{marginVertical: hp('0.75%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                    onPressIn={() => {
                                        this.setSelectVenueTypeModalVisible(true);
                                    }}>
                                    <TextInput value={this.state.venueType} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('85%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                        placeholder = 'Venue Type (Stadium/Arena/Ground/Street)'
                                    />
                                    <Icon name='triangle-down' type='entypo' color='#888' size={hp('1.5%')} containerStyle={{paddingRight: wp('2.0%')}} />
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), backgroundColor: '#fff', textAlign: 'left', marginVertical: hp('0.75%'), color: '#444', fontSize: hp('2.0%'), fontWeight: '400'}}>Vinoo Mankad Rd,</Text>
                            ) : (
                                <TextInput style={{marginVertical: hp('0.75%'), backgroundColor: '#fff', paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Address'
                                />
                            )
                        }
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), backgroundColor: '#fff', textAlign: 'left', marginVertical: hp('0.75%'), color: '#888', fontSize: hp('2.0%'), fontWeight: '400'}}>Churchgate, Mumbai</Text>
                            ) : (
                                <TextInput style={{marginVertical: hp('0.75%'), backgroundColor: '#fff', paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Address 2'
                                />
                            )
                        }
                        <View style={[{marginVertical: hp('0.75%'), width: wp('90%'), flexDirection: 'row', alignItems: 'center'}, this.state.status ? {justifyContent: 'flex-start'} : {justifyContent: 'space-between'}]}>
                            {
                                this.state.status ? (
                                    <Text style={{marginVertical: hp('0.75%'), backgroundColor: '#fff', color: '#444', fontSize: hp('2.0%'), fontWeight: '400'}}>India</Text>
                                ) : (
                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                        <TouchableOpacity style={{backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                            onPressIn={() => {
                                                this.setSelectCountryModalVisible(true);
                                            }}>
                                            <TextInput value={this.state.country} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('29%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                                placeholder = 'Country'
                                            />
                                            <Icon name='triangle-down' type='entypo' color='#888' size={hp('1.5%')} containerStyle={{paddingRight: wp('2.0%')}} />
                                        </TouchableOpacity>
                                    </View>
                                    )
                                }
                            {
                                this.state.status ? (
                                    <Text style={{marginLeft: wp('4.0%'), marginVertical: hp('0.75%'), backgroundColor: '#fff', color: '#444', fontSize: hp('2.0%'), fontWeight: '400'}}>Maharastra</Text>
                                ) : (
                                    <TouchableOpacity style={{backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                        onPressIn={() => {
                                            this.setSelectStateModalVisible(true);
                                        }}>
                                        <TextInput value={this.state.state} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('29%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                            placeholder = 'State'
                                        />
                                        <Icon name='triangle-down' type='entypo' color='#888' size={hp('1.5%')} containerStyle={{paddingRight: wp('2.0%')}} />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                this.state.status ? (
                                    <Text style={{marginLeft: wp('4.0%'), marginVertical: hp('0.75%'), backgroundColor: '#fff', color: '#444', fontSize: hp('2.0%'), fontWeight: '400'}}>400020</Text>
                                ) : (
                                    <TextInput style={{paddingVertical: hp('0.5%'), backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('18%'), color: '#444', fontSize: hp('1.75%')}}
                                        placeholder = 'ZIP/PIN'
                                    />
                                )
                            }
                        </View>
                        <View style={{marginVertical: hp('0.75%'), width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            {
                                this.state.status ? (
                                    <Text style={{marginVertical: hp('0.75%'), color: '#444', fontSize: hp('2.0%'), fontWeight: '400'}}>Cost :</Text>
                                ) : (
                                    <Text style={{marginLeft: wp('2.0%'), color: '#666', fontSize: hp('1.75%')}}>Cost :</Text>
                                )
                            }
                            {
                                this.state.status ? (
                                    <Text style={{marginLeft: wp('4.0%'), marginVertical: hp('0.75%'), backgroundColor: '#fff', color: '#444', fontSize: hp('2.0%'), fontWeight: '400'}}>Rs.200</Text>
                                ) : (
                                    <TextInput style={{marginLeft: wp('2.0%'), backgroundColor: '#fff', paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('30%'), color: '#444', fontSize: hp('1.75%')}}
                                        placeholder = ''
                                    />
                                )
                            }
                            {
                                this.state.status ? (
                                    <Text style={{marginLeft: wp('4.0%'), marginVertical: hp('0.75%'), backgroundColor: '#fff', color: '#444', fontSize: hp('2.0%'), fontWeight: '400'}}>Hour</Text>
                                ) : (
                                    <TouchableOpacity style={{marginLeft: wp('2.0%'), backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                                        onPressIn={() => {
                                            this.setSelectCostTypeModalVisible(true);
                                        }}>
                                        <TextInput value={this.state.costType} editable={false} style={{backgroundColor: '#fff', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('35%'), color: '#444', fontSize: hp('1.75%'), borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
                                            placeholder = 'Day/Hour/Week'
                                        />
                                        <Icon name='triangle-down' type='entypo' color='#888' size={hp('1.5%')} containerStyle={{paddingRight: wp('2.0%')}} />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), textAlign: 'left', backgroundColor: '#fff', marginVertical: hp('0.75%'), color: '#666', fontSize: hp('2.5%'), fontWeight: '400'}}>John Doe</Text>
                            ) : (
                                <TextInput style={{marginVertical: hp('0.75%'), backgroundColor: '#fff', paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Contact Name'
                                />
                            )
                        }
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), textAlign: 'left', backgroundColor: '#fff', marginVertical: hp('0.75%'), color: '#666', fontSize: hp('1.75%'), fontWeight: '400'}}>Contact the following contact person by phone or email 48 hrs ahead of booking.</Text>
                            ) : (
                                <TextInput style={{marginVertical: hp('0.75%'), backgroundColor: '#fff', paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Booking Instructions'
                                />
                            )
                        }
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), textAlign: 'left', backgroundColor: '#fff', marginVertical: hp('0.75%'), color: '#666', fontSize: hp('2.0%'), fontWeight: '400'}}>+91 000-000-0000</Text>
                            ) : (
                                <TextInput style={{marginVertical: hp('0.75%'), backgroundColor: '#fff', paddingVertical: hp('0.5%'), borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Phone Number'
                                />
                            )
                        }
                        {
                            this.state.status ? (
                                <Text style={{width: wp('90%'), textAlign: 'left', backgroundColor: '#fff', marginVertical: hp('0.75%'), color: '#666', fontSize: hp('2.0%'), fontWeight: '400'}}>JohnDoe@cricketpro.com</Text>
                            ) : (
                                <TextInput style={{marginVertical: hp('0.75%'), paddingVertical: hp('0.5%'), backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, borderColor: '#ccc', paddingHorizontal: wp('2.0%'), width: wp('90%'), color: '#444', fontSize: hp('1.75%')}}
                                    placeholder = 'Email Address'
                                />
                            )
                        }
                        {
                            !(this.state.status) ? (
                                <TouchableOpacity style={{marginVertical: hp('2.0%')}} onPress={() => this.changeStatus(true)}>
                                    <Text style={{borderRadius: 5, backgroundColor: '#22d498', paddingVertical: hp('1.0%'), marginTop: hp('1.0%'), width: wp('50.0%'), textAlign: 'center', fontWeight: '400', color: '#fff', fontSize: hp('2.0%')}}>
                                        SAVE
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={{height: hp('2.0%')}}></View>
                            )
                        }
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
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.isSelectVenueTypeModalVisible}
                        >
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                    onPressIn={() => {
                                        this.setSelectVenueTypeModalVisible(false);
                                    }}
                                    >
                                </TouchableOpacity>
                                <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                    {
                                        venueTypeList.map((item, key) => {
                                            return (
                                                <TouchableOpacity key={key} onPress={() => this.selectVenueType(item.name)} style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, key !== (venueTypeList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>                                                    
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
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.isSelectCostTypeModalVisible}
                        >
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                                <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                    onPressIn={() => {
                                        this.setSelectCostTypeModalVisible(false);
                                    }}
                                    >
                                </TouchableOpacity>
                                <ScrollView contentContainerStyle={{paddingVertical: hp('0.0%'), width: wp('80%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, elevation: 10}} style={{position: 'absolute', height: hp('40%')}}>
                                    {
                                        costTypeList.map((item, key) => {
                                            return (
                                                <TouchableOpacity key={key} onPress={() => this.selectCostType(item.name)} style={[{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, key !== (costTypeList.length - 1) ? {borderBottomWidth: 1, borderBottomColor: '#e4e4e4'} : null]}>                                                    
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
                </ScrollView>
                <BottomTabsMenu navigation={this.props.navigation} selectedTab={this.state.selectedBottomTab}
                    onSelectTab={ (value) =>
                        this.onSelectBottomTab(value)}
                />
            </View>
        );
    }

}

export default CreateVenueScreen

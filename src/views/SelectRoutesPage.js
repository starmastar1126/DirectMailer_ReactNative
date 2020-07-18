import React from 'react';
import {StyleSheet, View, WebView, Image, TouchableOpacity, Text, CheckBox } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Divider } from 'react-native-elements';

// const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
// const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

import Global from '../assets/global/Styles';
import AthenaHeader from '../components/AthenaHeader';
import AthenaDialog from '../components/AthenaDialog';
import AthenaDialogHeader from '../components/AthenaDialogHeader';
import AthenaDialogContent from '../components/AthenaDialogContent';
import AthenaDialogFooter from '../components/AthenaDialogFooter';

import searchIcon from '../assets/images/search_icon1.png';
import filterIcon from '../assets/images/filter_icon1.png';
import closeIcon from '../assets/images/close_icon.png';

var routesData = { zipCode: '', radius: 1, householdIncome: [], age: [], homeOwnership: [], gender: [], presenceOfChildren: [] }
var radiusData = [
    {label: '1 mile', value: 1, color: Global.DIALOG_COLOR, size: 22, selected: false},
    {label: '2 miles', value: 2, color: Global.DIALOG_COLOR, size: 22, selected: false},
    {label: '3 miles', value: 3, color: Global.DIALOG_COLOR, size: 22, selected: false},
]
class SelectRoutesPage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {
            mapData: null,
            
            radiusVisible: false, householdIncomeVisible: false, ageVisible: false, homeOwnershipVisible: false, genderVisible: false, presenceOfChildrenVisible: false,
            D0000k: false, D0015k: false, D1525k: false, D2535k: false, D3550k: false, D5075k: false, D75100k: false, D100125k: false, D125150k: false, D150175k: false, D175200k: false, D200250k: false, D250pluk: false,
            A1824E: false, A2534E: false, A3544E: false, A4554E: false, A5564E: false, A65plu: false,
            renter: false, homeOwner: false,
            adultMales: false, adultFemales: false,
            childrenInHousehold: false, noChildrenInHousehold: false
        };
    }    
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Select Routes" navigation={navigation} navigate="GetStartPage" backBtn={false} accountBtn={true} />)}
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.autocompleteView}>
                <GooglePlacesAutocomplete
                    placeholder='Zip, City, State, Address' minLength={2} autoFocus={false} returnKeyType={'search'} keyboardAppearance={'light'} listViewDisplayed='auto' fetchDetails={true} renderDescription={row => row.description} getDefaultValue={() => ''}
                    query={{ key: 'AIzaSyBBRSD5kHsHnoS3wOV7y-zNzXSjsuDuz1o', language: 'en', types: '(cities)' }}
                    styles={{textInputContainer: {width: '100%', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#AAAAAA', borderRadius: 10}, description: {fontWeight: 'bold'}, predefinedPlacesDescription: {color: '#1faadb'}, listView: {backgroundColor: '#FFFFFF'}}}
                    currentLocation={false} currentLocationLabel="Current location" nearbyPlacesAPI='GooglePlacesSearch' GoogleReverseGeocodingQuery={{}} GooglePlacesSearchQuery={{rankby: 'distance', type: 'cafe'}} GooglePlacesDetailsQuery={{fields: 'formatted_address'}}
                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} debounce={200}
                    renderLeftButton={() => <Image source={searchIcon} style={{marginTop: 10, marginLeft: 10, width: 25, height: 25}}/>}
                    onPress={(data, details = null) => { 
                        // this.setState({ mapData : details })
                        // alert(details.geometry.location.lat);
                        this.webViewRef.postMessage(JSON.stringify({"lat": details.geometry.location.lat, "lng": details.geometry.location.lng }));
                    }} 
                    />
                    <Menu>
                        <MenuTrigger><Image source={filterIcon} style={{marginTop: 10, marginLeft: 10, width: 25, height: 25}}/></MenuTrigger>
                        <MenuOptions>
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowRadius} text='Radius' /><Divider style={{ backgroundColor: '#AAA' }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowHouseholdIncome} text='Household Income' /><Divider style={{ backgroundColor: '#AAA' }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowAge} text='Age'/><Divider style={{ backgroundColor: '#AAA' }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowHomeOwnership} text='Home Ownership'/><Divider style={{ backgroundColor: '#AAA' }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowGender} text='Gender'/><Divider style={{ backgroundColor: '#AAA' }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowPresenceOfChildren} text='Presence of Children'/>
                        </MenuOptions>
                    </Menu>                    
                </View>
                <WebView source={{uri:'file:///android_asset/usps.html'}} javaScriptEnabled={true} domStorageEnabled={true} ref = {(ref) => { this.webViewRef = ref }} onMessage = {this.onSelectRegion}/>
                
                <AthenaDialog visible={this.state.radiusVisible} width={Global.VW*80} top={150}>
                    <AthenaDialogHeader title="Radius"/>
                    <AthenaDialogContent flexDirection='row' justifyContent='flex-start'>
                        <RadioGroup radioButtons={radiusData} onPress={this.onChangeRadius} />
                    </AthenaDialogContent>
                    <AthenaDialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveRadius}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>|</Text>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ radiusVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </AthenaDialogFooter>
                </AthenaDialog>
                <AthenaDialog visible={this.state.householdIncomeVisible} width={Global.VW*80} top={150}>
                    <AthenaDialogHeader title="Household Income"/>
                    <AthenaDialogContent>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.householdIncomeVisible ? <CheckBox textID="0" style={styles.tdCheck} value={this.state.D0000k} onValueChange={() => this.onChangeHouseholdIncome('D0000k')} /> : <View />}<Text style={styles.tdTitle}>Select All</Text>
                            <View />
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.householdIncomeVisible ? <CheckBox textID="1" style={styles.tdCheck} value={this.state.D0015k} onValueChange={() => this.onChangeHouseholdIncome('D0015k')} /> : <View />}<Text style={styles.tdTitle}>{'<'}$ 15K</Text>
                            {this.state.householdIncomeVisible ? <CheckBox textID="2" style={styles.tdCheck} value={this.state.D1525k} onValueChange={() => this.onChangeHouseholdIncome('D1525k')} /> : <View />}<Text style={styles.tdTitle}>$ 15-25K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.householdIncomeVisible ? <CheckBox textID="3" style={styles.tdCheck} value={this.state.D2535k} onValueChange={() => this.onChangeHouseholdIncome('D2535k')} /> : <View />}<Text style={styles.tdTitle}>$ 25-35K</Text>
                            {this.state.householdIncomeVisible ? <CheckBox textID="4" style={styles.tdCheck} value={this.state.D3550k} onValueChange={() => this.onChangeHouseholdIncome('D3550k')} /> : <View />}<Text style={styles.tdTitle}>$ 35-50K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.householdIncomeVisible ? <CheckBox textID="5" style={styles.tdCheck} value={this.state.D5075k} onValueChange={() => this.onChangeHouseholdIncome('D5075k')} /> : <View />}<Text style={styles.tdTitle}>$ 50-75K</Text>
                            {this.state.householdIncomeVisible ? <CheckBox textID="6" style={styles.tdCheck} value={this.state.D75100k} onValueChange={() => this.onChangeHouseholdIncome('D75100k')} /> : <View />}<Text style={styles.tdTitle}>$ 75-100K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.householdIncomeVisible ? <CheckBox textID="7" style={styles.tdCheck} value={this.state.D100125k} onValueChange={() => this.onChangeHouseholdIncome('D100125k')} /> : <View />}<Text style={styles.tdTitle}>$ 100-125K</Text>
                            {this.state.householdIncomeVisible ? <CheckBox textID="8" style={styles.tdCheck} value={this.state.D125150k} onValueChange={() => this.onChangeHouseholdIncome('D125150k')} /> : <View />}<Text style={styles.tdTitle}>$ 125-150K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.householdIncomeVisible ? <CheckBox textID="9" style={styles.tdCheck} value={this.state.D150175k} onValueChange={() => this.onChangeHouseholdIncome('D150175k')} /> : <View />}<Text style={styles.tdTitle}>$ 150-175K</Text>
                            {this.state.householdIncomeVisible ? <CheckBox textID="10" style={styles.tdCheck} value={this.state.D175200k} onValueChange={() => this.onChangeHouseholdIncome('D175200k')} /> : <View />}<Text style={styles.tdTitle}>$ 175-200K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.householdIncomeVisible ? <CheckBox textID="11" style={styles.tdCheck} value={this.state.D200250k} onValueChange={() => this.onChangeHouseholdIncome('D200250k')} /> : <View />}<Text style={styles.tdTitle}>$ 200-250K</Text>
                            {this.state.householdIncomeVisible ? <CheckBox textID="12" style={styles.tdCheck} value={this.state.D250pluk} onValueChange={() => this.onChangeHouseholdIncome('D250pluk')} /> : <View />}<Text style={styles.tdTitle}>$ 250K+</Text>
                        </View>
                    </AthenaDialogContent>
                    <AthenaDialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveHouseholdIncome}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>|</Text>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ householdIncomeVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </AthenaDialogFooter>
                </AthenaDialog>
                <AthenaDialog visible={this.state.ageVisible} width={Global.VW*80} top={150}>
                    <AthenaDialogHeader title="Age"/>
                    <AthenaDialogContent>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.ageVisible ? <CheckBox textID="1" style={styles.tdCheck} value={this.state.A1824E} onValueChange={() => this.onChangeAge('A1824E')} /> : <View />}<Text style={styles.tdTitle}>18 - 24</Text>
                            {this.state.ageVisible ? <CheckBox textID="2" style={styles.tdCheck} value={this.state.A2534E} onValueChange={() => this.onChangeAge('A2534E')} /> : <View />}<Text style={styles.tdTitle}>25 - 34</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.ageVisible ? <CheckBox textID="3" style={styles.tdCheck} value={this.state.A3544E} onValueChange={() => this.onChangeAge('A3544E')} /> : <View />}<Text style={styles.tdTitle}>35 - 44</Text>
                            {this.state.ageVisible ? <CheckBox textID="4" style={styles.tdCheck} value={this.state.A4554E} onValueChange={() => this.onChangeAge('A4554E')} /> : <View />}<Text style={styles.tdTitle}>45 - 54</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.ageVisible ? <CheckBox textID="5" style={styles.tdCheck} value={this.state.A5564E} onValueChange={() => this.onChangeAge('A5564E')} /> : <View />}<Text style={styles.tdTitle}>55 - 64</Text>
                            {this.state.ageVisible ? <CheckBox textID="6" style={styles.tdCheck} value={this.state.A65plu} onValueChange={() => this.onChangeAge('A65plu')} /> : <View />}<Text style={styles.tdTitle}>65+</Text>
                        </View>
                    </AthenaDialogContent>
                    <AthenaDialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveAge}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>|</Text>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ ageVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </AthenaDialogFooter>
                </AthenaDialog>
                <AthenaDialog visible={this.state.homeOwnershipVisible} width={Global.VW*80} top={150}>
                    <AthenaDialogHeader title="Home Ownership"/>
                    <AthenaDialogContent>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.homeOwnershipVisible ? <CheckBox textID="1" style={styles.tdCheck} value={this.state.renter} onValueChange={() => this.onChangeHomeOwnership('renter')} /> : <View />}<Text style={styles.tdTitle}>Render</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.homeOwnershipVisible ? <CheckBox textID="2" style={styles.tdCheck} value={this.state.homeOwner} onValueChange={() => this.onChangeHomeOwnership('homeOwner')} /> : <View />}<Text style={styles.tdTitle}>Homeowner</Text>
                        </View>
                    </AthenaDialogContent>
                    <AthenaDialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveHomeOwnership}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>|</Text>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ homeOwnershipVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </AthenaDialogFooter>
                </AthenaDialog>
                <AthenaDialog visible={this.state.genderVisible} width={Global.VW*80} top={150}>
                    <AthenaDialogHeader title="Gender"/>
                    <AthenaDialogContent>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.genderVisible ? <CheckBox textID="1" style={styles.tdCheck} value={this.state.adultMales} onValueChange={() => this.onChangeGender('adultMales')} /> : <View />}<Text style={styles.tdTitle}>Adult Males</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.genderVisible ? <CheckBox textID="2" style={styles.tdCheck} value={this.state.adultFemales} onValueChange={() => this.onChangeGender('adultFemales')} /> : <View />}<Text style={styles.tdTitle}>Adult Females</Text>
                        </View>
                    </AthenaDialogContent>
                    <AthenaDialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveGender}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>|</Text>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ genderVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </AthenaDialogFooter>
                </AthenaDialog>
                <AthenaDialog visible={this.state.presenceOfChildrenVisible} width={Global.VW*80} top={150}>
                    <AthenaDialogHeader title="Presence Of Children"/>
                    <AthenaDialogContent>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.presenceOfChildrenVisible ? <CheckBox textID="1" style={styles.tdCheck} value={this.state.childrenInHousehold} onValueChange={() => this.onChangeGender('childrenInHousehold')} /> : <View />}<Text style={styles.tdTitle}>Adult Males</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.presenceOfChildrenVisible ? <CheckBox textID="2" style={styles.tdCheck} value={this.state.noChildrenInHousehold} onValueChange={() => this.onChangeGender('noChildrenInHousehold')} /> : <View />}<Text style={styles.tdTitle}>Adult Females</Text>
                        </View>
                    </AthenaDialogContent>
                    <AthenaDialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSavePresenceOfChildren}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>|</Text>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ presenceOfChildrenVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </AthenaDialogFooter>
                </AthenaDialog>
            </View>
        );
    }
    onSelectRegion(data) {
        let result = JSON.parse(data.nativeEvent.data);
        var businessCount = result.businessCount;
        var residentialCount = result.residentialCount;
        
    }
    onShowRadius = () => {
        this.setState({ radiusVisible: true })
    };
    onShowHouseholdIncome = () => {
        this.setState({ D0000k: false, D0015k: false, D1525k: false, D2535k: false, D3550k: false, D5075k: false, D75100k: false, D100125k: false, D125150k: false, D150175k: false, D175200k: false, D200250k: false, D250pluk: false })
        for(var i = 0; i < routesData.householdIncome.length; i++){
            if(routesData.householdIncome[i] == 'D0000k') {this.setState({ D0000k: true })}
            else if(routesData.householdIncome[i] == 'D0015k') {this.setState({ D0015k: true })}
            else if(routesData.householdIncome[i] == 'D1525k') {this.setState({ D1525k: true })}
            else if(routesData.householdIncome[i] == 'D2535k') {this.setState({ D2535k: true })}
            else if(routesData.householdIncome[i] == 'D3550k') {this.setState({ D3550k: true })}
            else if(routesData.householdIncome[i] == 'D5075k') {this.setState({ D5075k: true })}
            else if(routesData.householdIncome[i] == 'D75100k') {this.setState({ D75100k: true })}
            else if(routesData.householdIncome[i] == 'D100125k') {this.setState({ D100125k: true })}
            else if(routesData.householdIncome[i] == 'D125150k') {this.setState({ D125150k: true })}
            else if(routesData.householdIncome[i] == 'D150175k') {this.setState({ D150175k: true })}
            else if(routesData.householdIncome[i] == 'D175200k') {this.setState({ D175200k: true })}
            else if(routesData.householdIncome[i] == 'D200250k') {this.setState({ D200250k: true })}
            else if(routesData.householdIncome[i] == 'D250pluk') {this.setState({ D250pluk: true })}
        }
        this.setState({ householdIncomeVisible: true })
    };
    onShowAge = () => {
        this.setState({ A1824E: false, A2534E: false, A3544E: false, A4554E: false, A5564E: false, A65plu: false })
        for(var i = 0; i < routesData.age.length; i++){
            if(routesData.age[i] == 'A1824E') {this.setState({ A1824E: true })}
            else if(routesData.age[i] == 'A2534E') {this.setState({ A2534E: true })}
            else if(routesData.age[i] == 'A3544E') {this.setState({ A3544E: true })}
            else if(routesData.age[i] == 'A4554E') {this.setState({ A4554E: true })}
            else if(routesData.age[i] == 'A5564E') {this.setState({ A5564E: true })}
            else if(routesData.age[i] == 'A65plu') {this.setState({ A65plu: true })}
        }
        this.setState({ ageVisible: true })
    };
    onShowHomeOwnership = () => {
        this.setState({ renter: false, homeOwner: false })
        for(var i = 0; i < routesData.homeOwnership.length; i++){
            if(routesData.homeOwnership[i] == 'renter') {this.setState({ renter: true })}
            else if(routesData.homeOwnership[i] == 'homeOwner') {this.setState({ homeOwner: true })}
        }
        this.setState({ homeOwnershipVisible: true })
    };
    onShowGender = () => {
        this.setState({ adultMales: false, adultFemales: false })
        for(var i = 0; i < routesData.gender.length; i++){
            if(routesData.gender[i] == 'adultMales') {this.setState({ adultMales: true })}
            else if(routesData.gender[i] == 'adultFemales') {this.setState({ adultFemales: true })}
        }
        this.setState({ genderVisible: true })
    };
    onShowPresenceOfChildren = () => {
        this.setState({ childrenInHousehold: false, noChildrenInHousehold: false })
        for(var i = 0; i < routesData.presenceOfChildren.length; i++){
            if(routesData.presenceOfChildren[i] == 'childrenInHousehold') {this.setState({ childrenInHousehold: true })}
            else if(routesData.presenceOfChildren[i] == 'noChildrenInHousehold') {this.setState({ noChildrenInHousehold: true })}
        }
        this.setState({ presenceOfChildrenVisible: true })
    };


    onChangeRadius = (radius) => {
        let selectedButton = radius.find(e => e.selected == true);
        this.setState({ radiusValue: selectedButton.value });
    };
    onChangeHouseholdIncome = (key) => {
        const {D0000k, D0015k, D1525k, D2535k, D3550k, D5075k, D75100k, D100125k, D125150k, D150175k, D175200k, D200250k, D250pluk} = this.state;
        if(key == 'D0015k') {D0015k == true ? this.setState({ D0015k: false }) : this.setState({ D0015k: true});}
        else if(key == 'D1525k') {D1525k == true ? this.setState({ D1525k: false }) : this.setState({ D1525k: true});}
        else if(key == 'D2535k') {D2535k == true ? this.setState({ D2535k: false }) : this.setState({ D2535k: true});}
        else if(key == 'D3550k') {D3550k == true ? this.setState({ D3550k: false }) : this.setState({ D3550k: true});}
        else if(key == 'D5075k') {D5075k == true ? this.setState({ D5075k: false }) : this.setState({ D5075k: true});}
        else if(key == 'D75100k') {D75100k == true ? this.setState({ D75100k: false }) : this.setState({ D75100k: true});}
        else if(key == 'D100125k') {D100125k == true ? this.setState({ D100125k: false }) : this.setState({ D100125k: true});}
        else if(key == 'D125150k') {D125150k == true ? this.setState({ D125150k: false }) : this.setState({ D125150k: true});}
        else if(key == 'D150175k') {D150175k == true ? this.setState({ D150175k: false }) : this.setState({ D150175k: true});}
        else if(key == 'D175200k') {D175200k == true ? this.setState({ D175200k: false }) : this.setState({ D175200k: true});}
        else if(key == 'D200250k') {D200250k == true ? this.setState({ D200250k: false }) : this.setState({ D200250k: true});}
        else if(key == 'D250pluk') {D250pluk == true ? this.setState({ D250pluk: false }) : this.setState({ D250pluk: true});}
        else if(key == 'D0000k') {
            if(D0000k == true) {
                this.setState({ D0000k: false, D0015k: false, D1525k: false, D2535k: false, D3550k: false, D5075k: false, D75100k: false, D100125k: false, D125150k: false, D150175k: false, D175200k: false, D200250k: false, D250pluk: false })
            } else {
                this.setState({ D0000k: true, D0015k: true, D1525k: true, D2535k: true, D3550k: true, D5075k: true, D75100k: true, D100125k: true, D125150k: true, D150175k: true, D175200k: true, D200250k: true, D250pluk: true })
            }
        }
    };
    onChangeAge = (key) => {
        const {A1824E, A2534E, A3544E, A4554E, A5564E, A65plu} = this.state;
        if(key == 'A1824E') {A1824E == true ? this.setState({ A1824E: false }) : this.setState({ A1824E: true});}
        else if(key == 'A2534E') {A2534E == true ? this.setState({ A2534E: false }) : this.setState({ A2534E: true});}
        else if(key == 'A3544E') {A3544E == true ? this.setState({ A3544E: false }) : this.setState({ A3544E: true});}
        else if(key == 'A4554E') {A4554E == true ? this.setState({ A4554E: false }) : this.setState({ A4554E: true});}
        else if(key == 'A5564E') {A5564E == true ? this.setState({ A5564E: false }) : this.setState({ A5564E: true});}
        else if(key == 'A65plu') {A65plu == true ? this.setState({ A65plu: false }) : this.setState({ A65plu: true});}
    };
    onChangeHomeOwnership = (key) => {
        const {renter, homeOwner} = this.state;
        if(key == 'renter') {renter == true ? this.setState({ renter: false }) : this.setState({ renter: true});}
        else if(key == 'homeOwner') {homeOwner == true ? this.setState({ homeOwner: false }) : this.setState({ homeOwner: true});}
    };
    onChangeGender = (key) => {
        const {adultMales, adultFemales} = this.state;
        if(key == 'adultMales') {adultMales == true ? this.setState({ adultMales: false }) : this.setState({ adultMales: true});}
        else if(key == 'adultFemales') {adultFemales == true ? this.setState({ adultFemales: false }) : this.setState({ adultFemales: true});}
    };
    onChangePresenceOfChildren = (key) => {
        const {childrenInHousehold, noChildrenInHousehold} = this.state;
        if(key == 'childrenInHousehold') {childrenInHousehold == true ? this.setState({ childrenInHousehold: false }) : this.setState({ childrenInHousehold: true});}
        else if(key == 'noChildrenInHousehold') {noChildrenInHousehold == true ? this.setState({ noChildrenInHousehold: false }) : this.setState({ noChildrenInHousehold: true});}
    };


    onSaveRadius = () => {
        routesData.radius = this.state.radiusValue;
        alert(routesData.radius);
        this.setState({ radiusVisible: false });
    };
    onSaveHouseholdIncome = () => {
        routesData.householdIncome = [];
        if(this.state.D0000k == true) {routesData.householdIncome.push('D0000k')}
        if(this.state.D0015k == true) {routesData.householdIncome.push('D0015k')}
        if(this.state.D1525k == true) {routesData.householdIncome.push('D1525k')}
        if(this.state.D2535k == true) {routesData.householdIncome.push('D2535k')}
        if(this.state.D3550k == true) {routesData.householdIncome.push('D3550k')}
        if(this.state.D5075k == true) {routesData.householdIncome.push('D5075k')}
        if(this.state.D75100k == true) {routesData.householdIncome.push('D75100k')}
        if(this.state.D100125k == true) {routesData.householdIncome.push('D100125k')}
        if(this.state.D125150k == true) {routesData.householdIncome.push('D125150k')}
        if(this.state.D150175k == true) {routesData.householdIncome.push('D150175k')}
        if(this.state.D175200k == true) {routesData.householdIncome.push('D175200k')}
        if(this.state.D200250k == true) {routesData.householdIncome.push('D200250k')}
        if(this.state.D250pluk == true) {routesData.householdIncome.push('D250pluk')}
        this.setState({ householdIncomeVisible: false });
    };
    onSaveAge = () => {
        routesData.age = [];
        if(this.state.A1824E == true) {routesData.age.push('A1824E')}
        if(this.state.A2534E == true) {routesData.age.push('A2534E')}
        if(this.state.A3544E == true) {routesData.age.push('A3544E')}
        if(this.state.A4554E == true) {routesData.age.push('A4554E')}
        if(this.state.A5564E == true) {routesData.age.push('A5564E')}
        if(this.state.A65plu == true) {routesData.age.push('A65plu')}
        this.setState({ ageVisible: false });
    };
    onSaveHomeOwnership = () => {
        routesData.homeOwnership = [];
        if(this.state.renter == true) {routesData.homeOwnership.push('renter')}
        if(this.state.homeOwner == true) {routesData.homeOwnership.push('homeOwner')}
        this.setState({ homeOwnershipVisible: false });
    };
    onSaveGender = () => {
        routesData.gender = [];
        if(this.state.adultMales == true) {routesData.gender.push('adultMales')}
        if(this.state.adultFemales == true) {routesData.gender.push('adultFemales')}
        this.setState({ genderVisible: false });
    };
    onSavePresenceOfChildren = () => {
        routesData.presenceOfChildren = [];
        if(this.state.childrenInHousehold == true) {routesData.presenceOfChildren.push('childrenInHousehold')}
        if(this.state.noChildrenInHousehold == true) {routesData.presenceOfChildren.push('noChildrenInHousehold')}
        this.setState({ presenceOfChildrenVisible: false });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Global.VW * 100,
        height: Global.VW * 100,
        backgroundColor: Global.WHITE_COLOR
    },
    autocompleteView: {
        // position: 'absolute',
        flexDirection:'row',
        justifyContent: 'space-between',
        top: 0, left: 0,
        paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10,
        width: Global.VW*100,
        zIndex: 99
    },
    trDiv:{
        flexDirection: 'row', 
        height: 25, 
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderColor: Global.DARK_BLUE_COLOR,
    },
    tdCheck: {
        width: '15%',
        
    },
    tdTitle: {
        flex: 1, 
        fontSize: 15, 
        color: Global.BLACK_COLOR
    },
});

export default SelectRoutesPage;
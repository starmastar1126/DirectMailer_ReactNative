import React from 'react';
import {StyleSheet, View, WebView, Image, TouchableOpacity, Text, CheckBox } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Divider } from 'react-native-elements';

import Global from '../assets/global/Styles';
import Header from '../components/Header';
import Dialog from '../components/Dialog';
import DialogHeader from '../components/DialogHeader';
import DialogContent from '../components/DialogContent';
import DialogFooter from '../components/DialogFooter';
import AthenaTextInput from '../components/AthenaTextInput';
import Button from '../components/Button';

import searchIcon from '../assets/images/search_icon.png';
import filterIcon from '../assets/images/filter_icon.png';
import routesIcon from '../assets/images/routes_icon.png';
import businessIcon from '../assets/images/business_icon.png';
import residentialIcon from '../assets/images/residential_icon.png';
import minimizeIcon from '../assets/images/minimize_icon.png'
import maximizeIcon from '../assets/images/maximize_icon.png'
import loginIcon from '../assets/images/login_icon.png'
import registerIcon from '../assets/images/register_icon.png'

var routesData = { zipCode: '', radius: 1, householdIncome: [], age: [], homeOwnership: [], gender: [], presenceOfChildren: [] }
var radiusData = [
    {label: '1 mile', value: 1, color: Global.TITLE_COLOR, size: 22, selected: false},
    {label: '2 miles', value: 2, color: Global.TITLE_COLOR, size: 22, selected: false},
    {label: '3 miles', value: 3, color: Global.TITLE_COLOR, size: 22, selected: false},
]
class SelectRoutesPage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {
            mapData: null, cardVisible: true,
            routesValue: 0, businessValue: 0, residentialValue: 0, residentialChecked: false, 
            radiusVisible: false, householdIncomeVisible: false, ageVisible: false, homeOwnershipVisible: false, genderVisible: false, presenceOfChildrenVisible: false,
            D0000k: false, D0015k: false, D1525k: false, D2535k: false, D3550k: false, D5075k: false, D75100k: false, D100125k: false, D125150k: false, D150175k: false, D175200k: false, D200250k: false, D250pluk: false,
            A1824E: false, A2534E: false, A3544E: false, A4554E: false, A5564E: false, A65plu: false,
            renter: false, homeOwner: false,
            adultMales: false, adultFemales: false,
            childrenInHousehold: false, noChildrenInHousehold: false,
            registerVisible: false, loginVisible: false, signupVisible: false, verificationVisible: false,
        };
    }    
    static navigationOptions = ({navigation}) => {
        return {header:(<Header headerTitle="Select Routes" navigation={navigation} navigate="GetStartPage" backBtn={false} accountBtn={true} />)}
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.autocompleteView}>
                    <GooglePlacesAutocomplete
                        placeholder='Zip, City, State, Address' minLength={2} autoFocus={false} returnKeyType={'search'} keyboardAppearance={'light'} listViewDisplayed='auto' fetchDetails={true} renderDescription={row => row.description} getDefaultValue={() => ''}
                        query={{ key: 'AIzaSyBBRSD5kHsHnoS3wOV7y-zNzXSjsuDuz1o', language: 'en', types: 'geocode' }}
                        styles={{textInputContainer: {width: '100%', backgroundColor: Global.WHITE_COLOR}, textInput: {width: '100%', height: 35, marginTop: 5, borderWidth: 1, borderColor: Global.RIGHT_GRAY_COLOR, borderRadius: 10}, description: {fontWeight: 'bold'}, predefinedPlacesDescription: {color: '#1faadb'}, listView: {backgroundColor: Global.WHITE_COLOR}}}
                        currentLocation={false} currentLocationLabel="Current location" nearbyPlacesAPI='GooglePlacesSearch' GoogleReverseGeocodingQuery={{}} GooglePlacesSearchQuery={{rankby: 'distance', type: 'cafe'}} GooglePlacesDetailsQuery={{fields: 'formatted_address'}}
                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} debounce={200}
                        renderLeftButton={() => <Image source={searchIcon} style={{marginTop: 10, marginLeft: 10, width: 30, height: 30}}/>}
                        onPress={(data, details = null) => { 
                            this.webViewRef.postMessage(JSON.stringify({"lat": details.geometry.location.lat, "lng": details.geometry.location.lng, zoomOffset: 15 }));
                        }} 
                    />
                    <Menu>
                        <MenuTrigger><Image source={filterIcon} style={{marginTop: 10, marginLeft: 10, width: 30, height: 30}}/></MenuTrigger>
                        <MenuOptions>
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowRadius} text='Radius' /><Divider style={{ backgroundColor: Global.BORDER_COLOR }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowHouseholdIncome} text='Household Income' /><Divider style={{ backgroundColor: Global.BORDER_COLOR }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowAge} text='Age'/><Divider style={{ backgroundColor: Global.BORDER_COLOR }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowHomeOwnership} text='Home Ownership'/><Divider style={{ backgroundColor: Global.BORDER_COLOR }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowGender} text='Gender'/><Divider style={{ backgroundColor: Global.BORDER_COLOR }} />
                            <MenuOption style={{height: 35, marginTop: 7}} onSelect={this.onShowPresenceOfChildren} text='Presence of Children'/>
                        </MenuOptions>
                    </Menu>                    
                </View>
                <Dialog visible={this.state.radiusVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Radius"/>
                    <DialogContent flexDirection='row' justifyContent='flex-start'>
                        <RadioGroup radioButtons={radiusData} onPress={this.onChangeRadius} />
                    </DialogContent>
                    <DialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveRadius}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <View style={{width: 1, height: 35, borderRightWidth: 1, borderColor: Global.WHITE_COLOR}}></View>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ radiusVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </DialogFooter>
                </Dialog>
                <Dialog visible={this.state.householdIncomeVisible} width={Global.VW*80} top={100}>
                    <DialogHeader title="Household Income"/>
                    <DialogContent>
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
                    </DialogContent>
                    <DialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveHouseholdIncome}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <View style={{width: 1, height: 35, borderRightWidth: 1, borderColor: Global.WHITE_COLOR}}></View>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ householdIncomeVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </DialogFooter>
                </Dialog>
                <Dialog visible={this.state.ageVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Age"/>
                    <DialogContent>
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
                    </DialogContent>
                    <DialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveAge}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <View style={{width: 1, height: 35, borderRightWidth: 1, borderColor: Global.WHITE_COLOR}}></View>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ ageVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </DialogFooter>
                </Dialog>
                <Dialog visible={this.state.homeOwnershipVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Home Ownership"/>
                    <DialogContent>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.homeOwnershipVisible ? <CheckBox textID="1" style={styles.tdCheck} value={this.state.renter} onValueChange={() => this.onChangeHomeOwnership('renter')} /> : <View />}<Text style={styles.tdTitle}>Render</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.homeOwnershipVisible ? <CheckBox textID="2" style={styles.tdCheck} value={this.state.homeOwner} onValueChange={() => this.onChangeHomeOwnership('homeOwner')} /> : <View />}<Text style={styles.tdTitle}>Homeowner</Text>
                        </View>
                    </DialogContent>
                    <DialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveHomeOwnership}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <View style={{width: 1, height: 35, borderRightWidth: 1, borderColor: Global.WHITE_COLOR}}></View>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ homeOwnershipVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </DialogFooter>
                </Dialog>
                <Dialog visible={this.state.genderVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Gender"/>
                    <DialogContent>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.genderVisible ? <CheckBox textID="1" style={styles.tdCheck} value={this.state.adultMales} onValueChange={() => this.onChangeGender('adultMales')} /> : <View />}<Text style={styles.tdTitle}>Adult Males</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.genderVisible ? <CheckBox textID="2" style={styles.tdCheck} value={this.state.adultFemales} onValueChange={() => this.onChangeGender('adultFemales')} /> : <View />}<Text style={styles.tdTitle}>Adult Females</Text>
                        </View>
                    </DialogContent>
                    <DialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSaveGender}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <View style={{width: 1, height: 35, borderRightWidth: 1, borderColor: Global.WHITE_COLOR}}></View>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ genderVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </DialogFooter>
                </Dialog>
                <Dialog visible={this.state.presenceOfChildrenVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Presence Of Children"/>
                    <DialogContent>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.presenceOfChildrenVisible ? <CheckBox textID="1" style={styles.tdCheck} value={this.state.childrenInHousehold} onValueChange={() => this.onChangePresenceOfChildren('childrenInHousehold')} /> : <View />}<Text style={styles.tdTitle}>Children In Household</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            {this.state.presenceOfChildrenVisible ? <CheckBox textID="2" style={styles.tdCheck} value={this.state.noChildrenInHousehold} onValueChange={() => this.onChangePresenceOfChildren('noChildrenInHousehold')} /> : <View />}<Text style={styles.tdTitle}>No Children In Household</Text>
                        </View>
                    </DialogContent>
                    <DialogFooter>   
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={this.onSavePresenceOfChildren}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>OK</Text>
                        </TouchableOpacity>
                        <View style={{width: 1, height: 35, borderRightWidth: 1, borderColor: Global.WHITE_COLOR}}></View>
                        <TouchableOpacity style={{width:Global.VW*39}} onPress={() => this.setState({ presenceOfChildrenVisible: false })}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>CANCEL</Text>
                        </TouchableOpacity>
                    </DialogFooter>
                </Dialog>                
                <Dialog visible={this.state.registerVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Sign In or Register" closeVisible={true} onClose={() => this.setState({ registerVisible: false})}/>
                    <DialogContent justifyContent='center' alignItems='center'>
                        <View style={{width: '100%', marginTop: 10}}>
                            <Text style={styles.tdContent}>To save your work for current and future reference, please take a moment and sign in or register a FREE account.</Text>
                        </View>
                        <View style={{width: '100%', marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Sign In" width='60%' icon={loginIcon} onClick={() => this.setState({ loginVisible: true, registerVisible: false})}/>
                        </View>
                        <View style={{width: '100%', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Register" width='60%' icon={registerIcon} onClick={() => this.setState({ signupVisible: true, registerVisible: false})}/>
                        </View>
                    </DialogContent>
                </Dialog>              
                <Dialog visible={this.state.loginVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Sign In" closeVisible={true} onClose={() => this.setState({ loginVisible: false})}/>
                    <DialogContent justifyContent='center' alignItems='center'>
                        <View style={{width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder="Email Address" width="90%" keyboardType="email-address"/>
                        </View>
                        <View style={{width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder="Password" width="90%" secureTextEntry={true}/>
                        </View>
                        <View style={{width: '100%', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Sign In" width="60%" icon={loginIcon} onClick={this.onLogin}/>
                        </View>
                    </DialogContent>
                </Dialog>             
                <Dialog visible={this.state.signupVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Register" closeVisible={true} onClose={() => this.setState({signupVisible: false})}/>
                    <DialogContent justifyContent='center' alignItems='center'>
                        <View style={{width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder="Email Address" width="90%" keyboardType="email-address"/>
                        </View>
                        <View style={{width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder="Choose a Password" width="90%" secureTextEntry={true}/>
                        </View>              
                        <View style={{width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder="Confirm your Password" width="90%" secureTextEntry={true}/>
                        </View>
                        <View style={{width: '100%', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Register" width="60%" icon={registerIcon} onClick={() => this.setState({signupVisible: false, verificationVisible: true})}/>
                        </View>
                    </DialogContent>
                </Dialog>             
                <Dialog visible={this.state.verificationVisible} width={Global.VW*80} top={150}>
                    <DialogHeader title="Email Verification" closeVisible={true} onClose={() => this.setState({ verificationVisible: false})}/>
                    <DialogContent justifyContent='center' alignItems='center'>
                        <View style={{width: '100%', marginTop: 10}}>
                            <Text style={[styles.tdContent,{textAlign: 'center'}]}>Please check your inbox for a confirmation email.{'\n'}Click the link in the email to confirm{'\n'}your email address.</Text>
                        </View>
                        <View style={{width: '100%', marginTop: 10}}>
                            <Text style={[styles.tdTitle,{textAlign: 'center'}]}>star.master.1126@outlook.com</Text>
                        </View>
                        <View style={{width: '100%', marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Resend" width='60%' onClick={() => alert('Email Resend')}/>
                        </View>
                        <View style={{width: '100%', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Continue" width='60%'  onClick={this.onRegisterSuccess}/>
                        </View>
                    </DialogContent>
                </Dialog>
                {this.state.cardVisible ?
                    <View style={styles.cardContainer}>
                        <View style={styles.cardHeader}>
                            <View style={{width: 20}}/>
                            <Text style={styles.cardTitle}>Select Summary</Text>
                            <TouchableOpacity onPress={this.onMinimize}>
                                <Image source={minimizeIcon} style={{width: 20, height: 20, margin: 10}}/>
                            </TouchableOpacity>
                        </View>  
                        <View style={styles.cardContent}>
                            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30%'}}>
                                    <Image source={routesIcon} style={{marginTop: 10, marginLeft: 10, width: 35, height: 35}}/>
                                    <Text style={[styles.tdContent,{textAlign: 'center'}]}>Routes</Text>
                                    <Text style={[styles.tdContent,{textAlign: 'center'}]}>{this.state.routesValue}</Text>
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30%'}}>
                                    <Image source={businessIcon} style={{marginTop: 10, marginLeft: 10, width: 35, height: 35}}/>
                                    <Text style={[styles.tdContent,{textAlign: 'center'}]}>Business</Text>
                                    <Text style={[styles.tdContent,{textAlign: 'center'}]}>{this.state.businessValue}</Text>
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30%'}}>
                                    <Image source={residentialIcon} style={{marginTop: 10, marginLeft: 10, width: 35, height: 35}}/>
                                    <Text style={[styles.tdContent,{textAlign: 'center'}]}>Residential</Text>
                                    <Text style={[styles.tdContent,{textAlign: 'center'}]}>{this.state.residentialValue}</Text>
                                </View>
                            </View>
                            <View style={[styles.trDiv, {marginTop: 10}]}>
                                <Text style={styles.tdContent}>Residential Only:</Text>
                                <CheckBox value={this.state.residentialChecked} onValueChange={this.onChangeResidential} />
                            </View>
                            <View style={styles.trDiv}>
                                <Text style={styles.tdContent}>Total Address:</Text>
                                <Text style={[styles.tdContent,{marginRight: 10}]}>{this.state.residentialChecked ? this.state.residentialValue : (this.state.routesValue + this.state.businessValue + this.state.residentialValue)}</Text>
                            </View>
                            <View style={[{width: '100%', height: 5, borderBottomWidth: 1, borderColor: Global.BORDER_COLOR}]}></View>
                            <View style={[styles.trDiv, {marginTop: 10}]}>
                                <Text style={{color: Global.FONT_COLOR}}>Total:</Text>
                                <Text style={{marginRight: 10, color: Global.FONT_COLOR}}>$ {this.state.residentialChecked ? this.state.residentialValue*0.75 : (this.state.routesValue + this.state.businessValue + this.state.residentialValue)*0.75}</Text>
                            </View>
                            <View style={[{width: '100%', height: 5}]}></View>
                            <View style={{marginTop: 10, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Button buttonTitle="Continue" width="90%" onClick={() => this.setState({ registerVisible: true})}/>
                            </View>
                        </View>
                    </View> :
                    <View style={styles.maximizeBtn}>
                        <TouchableOpacity onPress={this.onMaximize}>
                            <Image source={maximizeIcon} style={{width: 20, height: 20, margin: 10}}/>
                        </TouchableOpacity>
                    </View>
                }
                <WebView source={{uri:'http://mymap.byethost15.com/usps.html'}} javaScriptEnabled={true} domStorageEnabled={true} ref = {(ref) => { this.webViewRef = ref }} onMessage = {this.onSelectRegion}/>
            </View>
        );
    }
    onSelectRegion = (data) => {
        let result = JSON.parse(data.nativeEvent.data);
        var businessCount = result.businessCount;
        var residentialCount = result.residentialCount;
        this.setState({businessValue: businessCount});
        this.setState({residentialValue: residentialCount});
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
    onChangeResidential = (key) => {
        const {residentialChecked} = this.state;
        residentialChecked == true ? this.setState({ residentialChecked: false }) : this.setState({ residentialChecked: true});
    };


    onSaveRadius = () => {
        routesData.radius = this.state.radiusValue;
        // alert(routesData.radius);
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

    onMinimize = () => {
        this.setState({ cardVisible: false });
    };
    onMaximize = () => {
        this.setState({ cardVisible: true });
    };

    onLogin = () => {
        this.setState({loginVisible: false});
        this.props.navigation.navigate("DesignPrintPage");
    }
    onRegisterSuccess = () => {
        this.setState({verificationVisible: false});
        this.props.navigation.navigate("DesignPrintPage");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Global.VW * 100,
        height: Global.VW * 100,
        backgroundColor: Global.WHITE_COLOR
    },
    autocompleteView: {
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
    },
    tdCheck: {
        width: '15%',        
    },
    tdTitle: {
        flex: 1, 
        fontSize: 15, 
        color: Global.FONT_COLOR
    },
    tdContent: {
        // width: '50%',  
        fontSize: 10, 
        color: Global.FONT_COLOR
    },
    cardContainer: {
        position: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: Global.VW*65, 
        right: 5, bottom: 5,
        zIndex: 88
    },
    cardHeader: {
        width: '100%',
        height: 35,
        backgroundColor: Global.TITLE_COLOR,
        borderWidth: 1,
        borderColor: Global.BORDER_COLOR,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: Global.BLACK_COLOR,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 10,
    },
    cardTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Global.WHITE_COLOR,
        fontSize: 15
    },
    cardContent: {
      width: '100%',
      backgroundColor: Global.WHITE_COLOR,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: Global.BORDER_COLOR,
      padding: 10,
      shadowColor: Global.BLACK_COLOR,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
      elevation: 10,

    },
    cardFooter: {
        width: '100%',
        height: 35,
        backgroundColor: Global.TITLE_COLOR,
        borderWidth: 1,
        borderColor: Global.BORDER_COLOR,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    maximizeBtn: {
        position: 'absolute',
        right: 5, bottom: 5,
        width: 35,
        height: 35,
        backgroundColor: Global.TITLE_COLOR,
        borderWidth: 1,
        borderColor: Global.BORDER_COLOR,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 88
    }
});

export default SelectRoutesPage;
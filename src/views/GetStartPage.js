import React from 'react';
import {StyleSheet, View, Text, CheckBox} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SnapSlider from 'react-native-snap-slider';
import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton, SlideAnimation, ScaleAnimation } from 'react-native-popup-dialog';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

const startData = {
    distance: {width: '66%', options: [{label: 'Measure Distance', value: 'MeasureDistance'},{label: 'Drivetime(Minutes)', value: 'Drivetime'},{label: 'Radius(Miles)', value: 'Radius'}]},
    filter1:  {width: '100%', options: [{label: 'Add Filter', value: 'AddFilter'},{label: 'Household Income', value: 'HouseholdIncome'},{label: 'Age', value: 'Age'},{label: 'Home Ownership', value: 'HomeOwnership'},{label: 'Gender', value: 'Gender'},{label: 'Presence Of Children', value: 'PresenceOfChildren'}]},
    filter2:  {width: '100%', options: [{label: 'Add Filter', value: 'AddFilter'},{label: 'Household Income', value: 'HouseholdIncome'},{label: 'Age', value: 'Age'},{label: 'Home Ownership', value: 'HomeOwnership'},{label: 'Gender', value: 'Gender'},{label: 'Presence Of Children', value: 'PresenceOfChildren'}]},
    filter3:  {width: '100%', options: [{label: 'Add Filter', value: 'AddFilter'},{label: 'Household Income', value: 'HouseholdIncome'},{label: 'Age', value: 'Age'},{label: 'Home Ownership', value: 'HomeOwnership'},{label: 'Gender', value: 'Gender'},{label: 'Presence Of Children', value: 'PresenceOfChildren'}]}
}
const driveOptions = [
    { value: 0, label: '5' },
    { value: 1, label: '10' },
    { value: 2, label: '15' }
];
const radiusOptions = [
    { value: 0, label: '1' },
    { value: 1, label: '2' },
    { value: 2, label: '3' },
    { value: 3, label: '4' },
    { value: 4, label: '5' },
    { value: 10, label: '10' },
    { value: 15, label: '15' },
];
class GetStartPage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {streetAddress: "", zipCode: "", distance: "MeasureDistance", filter1: "", filter2: "", filter3: "", defaultItem: 0, 
            household: false, age: false, homeOwnership: false, gender: false, presenceOfChildren: false ,
            D0015k: false, D1525k: false, D2535k: false, D3550k: false, D5075k: false, D75100k: false, D100125k: false, D125150k: false, D150175k: false, D175200k: false, D200250k: false, D250pluk: false,
            A1824E: false, A2534E: false, A3544E: false, A4554E: false, A5564E: false, A65plu: false,
            renter: false, homeOwner: false,
            adultMales: false, adultFemales: false,
            childrenInHousehold: false, noChildrenInHousehold: false
        };
    }    
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Get Started" navigation={navigation} navigate="SplashPage" menu={true} />)}
    }
    onButtonClick = () => {
        this.props.navigation.navigate("SelectRoutesPage")
    }      
    onDistanceChange = (value) => {
        this.setState({ distance: value });
    };
    onFilter1Change = (value) => {
        this.setState({ filter1: value });
        if(value == 'HouseholdIncome') { this.setState({ household: true }); } 
        else if(value == 'Age') { this.setState({ age: true }); }
        else if(value == 'HomeOwnership') { this.setState({ homeOwnership: true }); }
        else if(value == 'Gender') { this.setState({ gender: true }); }
        else if(value == 'PresenceOfChildren') { this.setState({ presenceOfChildren: true }); }
    };
    onFilter2Change = (value) => {
        this.setState({ filter2: value });
        if(value == 'HouseholdIncome') { this.setState({ household: true }); } 
        else if(value == 'Age') { this.setState({ age: true }); }
        else if(value == 'HomeOwnership') { this.setState({ homeOwnership: true }); }
        else if(value == 'Gender') { this.setState({ gender: true }); }
        else if(value == 'PresenceOfChildren') { this.setState({ presenceOfChildren: true }); }
    };
    onFilter3Change = (value) => {
        this.setState({ filter3: value });
        if(value == 'HouseholdIncome') { this.setState({ household: true }); } 
        else if(value == 'Age') { this.setState({ age: true }); }
        else if(value == 'HomeOwnership') { this.setState({ homeOwnership: true }); }
        else if(value == 'Gender') { this.setState({ gender: true }); }
        else if(value == 'PresenceOfChildren') { this.setState({ presenceOfChildren: true }); }
    };
    slidingComplete(itemSelected) {
        // console.log("slidingComplete");
        // console.log("item selected " + this.refs.slider.state.item);
        // console.log("item selected(from callback)" + itemSelected);
        // console.log("value " + this.sliderOptions[this.refs.slider.state.item].value);
    }
    onHouseholdChecked(key){
        const {D0015k, D1525k, D2535k, D3550k, D5075k, D75100k, D100125k, D125150k, D150175k, D175200k, D200250k, D250pluk} = this.state;
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
    }
    onAgeChecked(key){
        const {A1824E, A2534E, A4554E, A5564E, A65plu, A3544E} = this.state;
        if(key == 'A1824E') {A1824E == true ? this.setState({ A1824E: false }) : this.setState({ A1824E: true});}
        else if(key == 'A2534E') {A2534E == true ? this.setState({ A2534E: false }) : this.setState({ A2534E: true});}
        else if(key == 'A3544E') {A3544E == true ? this.setState({ A3544E: false }) : this.setState({ A3544E: true});}
        else if(key == 'A4554E') {A4554E == true ? this.setState({ A4554E: false }) : this.setState({ A4554E: true});}
        else if(key == 'A5564E') {A5564E == true ? this.setState({ A5564E: false }) : this.setState({ A5564E: true});}
        else if(key == 'A65plu') {A65plu == true ? this.setState({ A65plu: false }) : this.setState({ A65plu: true});}
    }
    onHomeOwnershipChecked(key){
        const {renter, homeOwner} = this.state;
        if(key == 'renter') {renter == true ? this.setState({ renter: false }) : this.setState({ renter: true});}
        else if(key == 'homeOwner') {homeOwner == true ? this.setState({ homeOwner: false }) : this.setState({ homeOwner: true});}
    }
    onGenderChecked(key){
        const {adultMales, adultFemales} = this.state;
        if(key == 'adultMales') {adultMales == true ? this.setState({ adultMales: false }) : this.setState({ adultMales: true});}
        else if(key == 'adultFemales') {adultFemales == true ? this.setState({ adultFemales: false }) : this.setState({ adultFemales: true});}
    }
    onPresenceOfChildrenChecked(key){
        const {childrenInHousehold, noChildrenInHousehold} = this.state;
        if(key == 'childrenInHousehold') {childrenInHousehold == true ? this.setState({ childrenInHousehold: false }) : this.setState({ childrenInHousehold: true});}
        else if(key == 'noChildrenInHousehold') {noChildrenInHousehold == true ? this.setState({ noChildrenInHousehold: false }) : this.setState({ noChildrenInHousehold: true});}
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={[styles.viewDiv, {paddingTop: 30}]}>
                    <Text style={{width: '100%', fontSize: 20, color: Global.DARK_GRAY_COLOR}}>Geographics Targeting</Text>
                </View>
                <View style={[styles.viewDiv, {paddingTop: 20}]}>
                    <Text style={{width: '100%', fontSize: 12, color: Global.BLACK_COLOR}}>Enter a centrally located address to mail around</Text>
                </View>
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Street Address" width="100%" />
                </View>    
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="ZIP CODE" width="30%" keyboardType="number-pad"/>
                    <AthenaSelect name="distance" width={startData.distance.width} options={startData.distance.options} selectedValue={this.state.distance} onValueChange={this.onDistanceChange} />
                </View>  
                {this.state.distance === 'MeasureDistance' ? <View /> :
                <View style={[styles.viewDiv, {paddingTop: 30}]}>
                    <SnapSlider ref="slider" 
                        containerStyle={styles.snapsliderContainer} 
                        items={this.state.distance !== 'MeasureDistance' ? this.state.distance === 'Drivetime' ? driveOptions : radiusOptions : ''}
                        labelPosition="top"
                        defaultItem={this.state.defaultItem}
                        onSlidingComplete={this.slidingComplete} />
                </View> }
                <View style={[styles.viewDiv, {paddingTop: 30}]}>
                    <Text style={{width: '100%', fontSize: 20, color: Global.DARK_GRAY_COLOR}}>Demographic Targeting</Text>
                </View>
                <View style={[styles.viewDiv, {paddingTop: 20}]}>
                    <Text style={{width: '100%', fontSize: 12, color: Global.BLACK_COLOR}}>Use filters such as age, income, home ownership, and more to target the best prospects</Text>
                </View>   
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <AthenaSelect  width={startData.filter1.width} options={startData.filter1.options} selectedValue={this.state.filter1} onValueChange={this.onFilter1Change} />
                </View>
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <AthenaSelect width={startData.filter2.width} options={startData.filter2.options} selectedValue={this.state.filter2} onValueChange={this.onFilter2Change} />
                </View>
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <AthenaSelect width={startData.filter3.width} options={startData.filter3.options} selectedValue={this.state.filter3} onValueChange={this.onFilter3Change} />
                </View>   
                <View style={[styles.viewDiv, styles.justifyCenter, {marginTop: 20, marginBottom: 20, paddingBottom: 20}]}>
                    <AthenaButton buttonTitle="SHOW ME MY PROJECTS" onClick={this.onButtonClick}/>
                </View>
                <Dialog onDismiss={() => {this.setState({ household: false });}} width={0.9} visible={this.state.household} actionsBordered
                    dialogTitle={ <DialogTitle title={"Household Income"} textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} hasTitleBar={false} align="left"/>}
                    footer={ <DialogFooter><DialogButton text="OK" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ household: false });}} key="button-1"/>
                    <DialogButton text="CANCEL" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ household: false });}} key="button-2"/></DialogFooter>}
                >
                    <DialogContent style={{ paddingTop: 10, borderBottomColor: '#EEE', borderBottomWidth: 1, borderTopColor: '#EEE', borderTopWidth: 1}}>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.D0015k} onValueChange={() => this.onHouseholdChecked('D0015k')} /><Text style={styles.tdTitle}>{'<'}$ 15K</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.D1525k} onValueChange={() => this.onHouseholdChecked('D1525k')} /><Text style={styles.tdTitle}>$ 15-25K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.D2535k} onValueChange={() => this.onHouseholdChecked('D2535k')} /><Text style={styles.tdTitle}>$ 25-35K</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.D3550k} onValueChange={() => this.onHouseholdChecked('D3550k')} /><Text style={styles.tdTitle}>$ 35-50K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.D5075k} onValueChange={() => this.onHouseholdChecked('D5075k')} /><Text style={styles.tdTitle}>$ 50-75K</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.D75100k} onValueChange={() => this.onHouseholdChecked('D75100k')} /><Text style={styles.tdTitle}>$ 75-100K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.D100125k} onValueChange={() => this.onHouseholdChecked('D100125k')} /><Text style={styles.tdTitle}>$ 100-125K</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.D125150k} onValueChange={() => this.onHouseholdChecked('D125150k')} /><Text style={styles.tdTitle}>$ 125-150K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.D150175k} onValueChange={() => this.onHouseholdChecked('D150175k')} /><Text style={styles.tdTitle}>$ 150-175K</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.D175200k} onValueChange={() => this.onHouseholdChecked('D175200k')} /><Text style={styles.tdTitle}>$ 175-200K</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.D200250k} onValueChange={() => this.onHouseholdChecked('D200250k')} /><Text style={styles.tdTitle}>$ 200-250K</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.D250pluk} onValueChange={() => this.onHouseholdChecked('D250pluk')} /><Text style={styles.tdTitle}>$ 250K+</Text>
                        </View>
                    </DialogContent>
                </Dialog>
                <Dialog onDismiss={() => {this.setState({ age: false });}} width={0.9} visible={this.state.age} actionsBordered
                    dialogTitle={ <DialogTitle title={"Age"} textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} hasTitleBar={false} align="left"/>}
                    footer={ <DialogFooter><DialogButton text="OK" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ age: false });}} key="button-1"/>
                    <DialogButton text="CANCEL" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ age: false });}} key="button-2"/></DialogFooter>}
                >
                    <DialogContent style={{ paddingTop: 10, borderBottomColor: '#EEE', borderBottomWidth: 1, borderTopColor: '#EEE', borderTopWidth: 1}}>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.A1824E} onValueChange={() => this.onAgeChecked('A1824E')} /><Text style={styles.tdTitle}>18 - 24</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.A2534E} onValueChange={() => this.onAgeChecked('A2534E')} /><Text style={styles.tdTitle}>25 - 34</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.A3544E} onValueChange={() => this.onAgeChecked('A3544E')} /><Text style={styles.tdTitle}>35 - 44</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.A4554E} onValueChange={() => this.onAgeChecked('A4554E')} /><Text style={styles.tdTitle}>45 - 54</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.A5564E} onValueChange={() => this.onAgeChecked('A5564E')} /><Text style={styles.tdTitle}>55 - 64</Text>
                            <CheckBox style={styles.tdCheck} value={this.state.A65plu} onValueChange={() => this.onAgeChecked('A65plu')} /><Text style={styles.tdTitle}>65+</Text>
                        </View>
                    </DialogContent>
                </Dialog>
                <Dialog onDismiss={() => {this.setState({ homeOwnership: false });}} width={0.9} visible={this.state.homeOwnership} actionsBordered
                    dialogTitle={ <DialogTitle title={"Home Ownership"} textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} hasTitleBar={false} align="left"/>}
                    footer={ <DialogFooter><DialogButton text="OK" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ homeOwnership: false });}} key="button-1"/>
                    <DialogButton text="CANCEL" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ homeOwnership: false });}} key="button-2"/></DialogFooter>}
                >
                    <DialogContent style={{ paddingTop: 10, borderBottomColor: '#EEE', borderBottomWidth: 1, borderTopColor: '#EEE', borderTopWidth: 1}}>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.renter} onValueChange={() => this.onHomeOwnershipChecked('renter')} /><Text style={styles.tdTitle}>Renter</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.homeOwner} onValueChange={() => this.onHomeOwnershipChecked('homeOwner')} /><Text style={styles.tdTitle}>Homeowner</Text>
                        </View>
                    </DialogContent>
                </Dialog>
                <Dialog onDismiss={() => {this.setState({ gender: false });}} width={0.9} visible={this.state.gender} actionsBordered
                    dialogTitle={ <DialogTitle title={"Gender"} textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} hasTitleBar={false} align="left"/>}
                    footer={ <DialogFooter><DialogButton text="OK" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ gender: false });}} key="button-1"/>
                    <DialogButton text="CANCEL" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ gender: false });}} key="button-2"/></DialogFooter>}
                >
                    <DialogContent style={{ paddingTop: 10, borderBottomColor: '#EEE', borderBottomWidth: 1, borderTopColor: '#EEE', borderTopWidth: 1}}>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.adultMales} onValueChange={() => this.onGenderChecked('adultMales')} /><Text style={styles.tdTitle}>Adult Males</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.adultFemales} onValueChange={() => this.onGenderChecked('adultFemales')} /><Text style={styles.tdTitle}>Adult Females</Text>
                        </View>
                    </DialogContent>
                </Dialog>
                <Dialog onDismiss={() => {this.setState({ presenceOfChildren: false });}} width={0.9} visible={this.state.presenceOfChildren} actionsBordered
                    dialogTitle={ <DialogTitle title={"Presence Of Children"} textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} hasTitleBar={false} align="left"/>}
                    footer={ <DialogFooter><DialogButton text="OK" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ presenceOfChildren: false });}} key="button-1"/>
                    <DialogButton text="CANCEL" textStyle={{color: '#30539E', fontSize: 19, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ presenceOfChildren: false });}} key="button-2"/></DialogFooter>}
                >
                    <DialogContent style={{ paddingTop: 10, borderBottomColor: '#EEE', borderBottomWidth: 1, borderTopColor: '#EEE', borderTopWidth: 1}}>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.childrenInHousehold} onValueChange={() => this.onPresenceOfChildrenChecked('childrenInHousehold')} /><Text style={styles.tdTitle}>Children In Household</Text>
                        </View>
                        <View style={[styles.trDiv, {marginTop: 10}]}>
                            <CheckBox style={styles.tdCheck} value={this.state.noChildrenInHousehold} onValueChange={() => this.onPresenceOfChildrenChecked('noChildrenInHousehold')} /><Text style={styles.tdTitle}>No Children In Household</Text>
                        </View>
                    </DialogContent>
                </Dialog>                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.WHITE_COLOR,
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#7B8D93',
        borderRadius: 5,
        color: '#ffffff'
    },
    viewDiv: { 
        flexDirection: 'row',
        width: '100%', 
        paddingLeft: 20, 
        paddingRight: 20
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    justifyCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    hide: {
        display: 'none'
    },    
    snapsliderContainer: {
        width: '100%',
        borderWidth: 0,
        backgroundColor: 'transparent',
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
        width: '15%'
    },
    tdTitle: {
        flex: 1, 
        fontSize: 15, 
        color: Global.BLACK_COLOR
    },
    head: { height: 40, backgroundColor: Global.DARK_BLUE_COLOR, textAlign: 'center' },
    headText: { textAlign: 'center', color: Global.WHITE_COLOR, fontWeight: 'bold' },
    text: { margin: 6, textAlign: 'center' }
});


const stateList1 =[
    { id: 1, value: "AL",  name: "Alabama"},
    { id: 2, value: "AK",  name: "Alaska"},
    { id: 3, value: "AZ",  name: "Arizona"},
    { id: 4, value: "AR",  name: "Arkansas"},
    { id: 5, value: "CA",  name: "California"},
    { id: 6, value: "CO",  name: "Colorado"},
    { id: 7, value: "CT",  name: "Connecticut"},
    { id: 8, value: "DC",  name: "District of Columbia"},
    { id: 9, value: "DE",  name: "Delaware"},
    { id: 10, value: "FL",  name: "Florida"},
    { id: 11, value: "GA",  name: "Georgia"},
    { id: 12, value: "HI",  name: "Hawaii"},
    { id: 13, value: "ID",  name: "Idaho"},
    { id: 14, value: "IL",  name: "Illinois"},
    { id: 15, value: "IN",  name: "Indiana"},
    { id: 16, value: "IA",  name: "Iowa"},
    { id: 17, value: "KS",  name: "Kansas"},
    { id: 18, value: "KY",  name: "Kentucky"},
    { id: 19, value: "LA",  name: "Louisiana"},
    { id: 20, value: "ME",  name: "Maine"},
    { id: 21, value: "MD",  name: "Maryland"},
    { id: 22, value: "MA",  name: "Massachusetts"},
    { id: 23, value: "MI",  name: "Michigan"},
    { id: 24, value: "MN",  name: "Minnesota"},
    { id: 25, value: "MS",  name: "Mississippi"},
    { id: 26, value: "MO",  name: "Missouri"},
    { id: 27, value: "MT",  name: "Montana"},
    { id: 28, value: "NE",  name: "Nebraska"},
    { id: 29, value: "NV",  name: "Nevada"},
    { id: 30, value: "NH",  name: "New Hampshire"},
    { id: 31, value: "NJ",  name: "New Jersey"},
    { id: 32, value: "NM",  name: "New Mexico"},
    { id: 34, value: "NY",  name: "New York"},
    { id: 35, value: "NC",  name: "North Carolina"},
    { id: 36, value: "ND",  name: "North Dakota"},
    { id: 37, value: "OH",  name: "Ohio"},
    { id: 38, value: "OK",  name: "Oklahoma"},
    { id: 39, value: "OR",  name: "Oregon"},
    { id: 40, value: "PA",  name: "Pennsylvania"},
    { id: 41, value: "RI",  name: "Rhode Island"},
    { id: 42, value: "SC",  name: "South Carolina"},
    { id: 43, value: "SD",  name: "South Dakota"},
    { id: 44, value: "TN",  name: "Tennessee"},
    { id: 45, value: "TX",  name: "Texas"},
    { id: 46, value: "UT",  name: "Utah"},
    { id: 47, value: "VT",  name: "Vermont"},
    { id: 48, value: "VA",  name: "Virginia"},
    { id: 49, value: "WA",  name: "Washington"},
    { id: 50, value: "WV",  name: "West Virginia"},
    { id: 51, value: "WI",  name: "Wisconsin"},
    { id: 52, value: "WY",  name: "Wyoming"}
]

export default GetStartPage;
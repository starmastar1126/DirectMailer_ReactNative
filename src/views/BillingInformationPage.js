import React from 'react';
import {StyleSheet, ScrollView, View, Text, CheckBox} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaStepIndicator from '../components/AthenaStepIndicator';
import AthenaCard from '../components/AthenaCard';
import AthenaCardTitle from '../components/AthenaCardTitle';
import AthenaCardContent from '../components/AthenaCardContent';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

const textData = [
    { index: 1, title: '', placeholder: 'First Name', keyboardType: '' },
    { index: 2, title: '', placeholder: 'Last Name', keyboardType: '' },
    { index: 3, title: '', placeholder: 'Company', keyboardType: '' },
    { index: 4, title: '', placeholder: 'Address1', keyboardType: '' },
    { index: 5, title: '', placeholder: 'Address2', keyboardType: '' },
    { index: 6, title: '', placeholder: 'City', keyboardType: '' },
    { index: 7, title: '', placeholder: 'State', keyboardType: '' },
    { index: 8, title: '', placeholder: 'ZIP Code', keyboardType: 'numeric' },
    { index: 9, title: '', placeholder: 'Phone Number', keyboardType: 'numeric' }
]

var paymentList = [
    {label: 'xxxx xxxx xxxx 4252', value: 0 },
    {label: 'xxxx xxxx xxxx 6502', value: 1 },
    {label: 'xxxx xxxx xxxx 3125', value: 2 }
];
var  verificationList = [
    {label: 'To the best of my knowledge, no re-\nsidents/businesses have opted-out\n from receiving my marketing colla-\nteral.', value: 0 },
    {label: 'Some residents/businesses have op\nted-out from receiving my marketing\n collateral. (I will provide a list of th-\nese opt-outs)', value: 1 }
]; 

const stateList = [
    { value: 0, label: "State"},
    { value: 1, label: "Alabama"},
    { value: 2, label: "Alaska"},
    { value: 3, label: "Arizona"},
    { value: 4, label: "Arkansas"},
    { value: 5, label: "California"},
    { value: 6, label: "Colorado"},
    { value: 7, label: "Connecticut"},
    { value: 8, label: "District of Columbia"},
    { value: 9, label: "Delaware"},
    { value: 10, label: "Florida"},
    { value: 11, label: "Georgia"},
    { value: 12, label: "Hawaii"},
    { value: 13, label: "Idaho"},
    { value: 14, label: "Illinois"},
    { value: 15, label: "Indiana"},
    { value: 16, label: "Iowa"},
    { value: 17, label: "Kansas"},
    { value: 18, label: "Kentucky"},
    { value: 19, label: "Louisiana"},
    { value: 20, label: "Maine"},
    { value: 21, label: "Maryland"},
    { value: 22, label: "Massachusetts"},
    { value: 23, label: "Michigan"},
    { value: 24, label: "Minnesota"},
    { value: 25, label: "Mississippi"},
    { value: 26, label: "Missouri"},
    { value: 27, label: "Montana"},
    { value: 28, label: "Nebraska"},
    { value: 29, label: "Nevada"},
    { value: 30, label: "New Hampshire"},
    { value: 31, label: "New Jersey"},
    { value: 32, label: "New Mexico"},
    { value: 34, label: "New York"},
    { value: 35, label: "North Carolina"},
    { value: 36, label: "North Dakota"},
    { value: 37, label: "Ohio"},
    { value: 38, label: "Oklahoma"},
    { value: 39, label: "Oregon"},
    { value: 40, label: "Pennsylvania"},
    { value: 41, label: "Rhode Island"},
    { value: 42, label: "South Carolina"},
    { value: 43, label: "South Dakota"},
    { value: 44, label: "Tennessee"},
    { value: 45, label: "Texas"},
    { value: 46, label: "Utah"},
    { value: 47, label: "Vermont"},
    { value: 48, label: "Virginia"},
    { value: 49, label: "Washington"},
    { value: 50, label: "West Virginia"},
    { value: 51, label: "Wisconsin"},
    { value: 52, label: "Wyoming"}
]

class BillingInformationPage extends React.Component {  
    constructor (props) {
        super(props);
        this.state = { date: "05-2016", stateOne: 0, checked: false };
    }       
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Billing Information" navigation={navigation} navigate="ReviewOrderPage" menu={false} />)}
    }
    onCompleteClick = () => {
        this.props.navigation.navigate("GetStartPage");
    };
    showPicker = ()=> {
        const { startYear, endYear, selectedYear, selectedMonth } = this.state;
        this.picker
            .show({startYear, endYear, selectedYear, selectedMonth})
            .then(({year, month}) => {
              this.setState({
                selectedYear: year,
                selectedMonth: month
            })
        })
    }
    onStateChange = (value) => {
        this.setState({ stateOne: value });
    };
    onChecked(){
        const {checked} = this.state;
        checked == true ? this.setState({ checked: false }) : this.setState({ checked: true})
    }
    render() {   
        return (
            <ScrollView style={styles.container}>
                <AthenaStepIndicator currentPosition={2} />
                <AthenaCard>
                    <AthenaCardTitle title='Billing Information'/>
                    <AthenaCardContent>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                Must match the billing address of the payment method being used for this transaction
                            </Text>
                        </View>
                        {textData.map((textItem, textKey) => {
                            return(  
                                textItem.placeholder != 'State' ? 
                                <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                                    <AthenaTextInput placeholder={textItem.placeholder} width="100%" keyboardType={textItem.keyboardType} />
                                </View> :
                                <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                                    <AthenaSelect name="state" width="100%" options={stateList} selectedValue={this.state.stateOne} onValueChange={this.onStateChange} />
                                </View> 
                        );}                       
                        )}  
                    </AthenaCardContent>
                </AthenaCard> 
                <AthenaCard>
                    <AthenaCardTitle title='Payment Options'/>
                    <AthenaCardContent>
                        <View style={{paddingTop: 20, paddingLeft: 20, paddingRight: 10, flexDirection: 'row'}}>
                            <RadioForm radio_props={paymentList} initial={0} buttonColor={Global.DARK_BLUE_COLOR} onPress={(value) => {this.setState({value: value})}} />
                        </View>
                        <View style={{padding: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 15, color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                                --- OR ---
                            </Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder='Card Number' width="100%" keyboardType="numeric" />
                        </View>
                        <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <DatePicker
                                style={[styles.inputStyle, {width: '48%'}]}
                                date={this.state.date}
                                mode="date" placeholder="select date" format="MM-YYYY" minDate="01-2010" maxDate="01-2030"
                                confirmBtnText="Confirm" cancelBtnText="Cancel"
                                customStyles={{ dateIcon: { display: 'none', },
                                    dateInput: { textAlign: 'left', borderWidth: 0, marginLeft: 36 }
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                            <AthenaTextInput placeholder='CVV' width="48%" />
                        </View>
                    </AthenaCardContent>
                </AthenaCard> 
                <AthenaCard>
                    <AthenaCardTitle title='Opt Out Verification'/>
                    <AthenaCardContent>
                        <View style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 20, flexDirection: 'row'}}>
                            <RadioForm radio_props={verificationList} initial={0} buttonColor={Global.DARK_BLUE_COLOR} onPress={(value) => {this.setState({value: value})}} />
                        </View>  
                    </AthenaCardContent>
                </AthenaCard>       
                <AthenaCard>
                    <AthenaCardTitle title='Job Comments and Notification'/>
                    <AthenaCardContent>
                        <View style={{paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                Here you can provide us with special comments and requests as well as change the email address which the receipt and notification will be sent to
                            </Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder='Email To' width="100%" keyboardType="email-address"/>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder='Comments' width="100%" multiline={true} numberOfLines={4}/>
                        </View>   
                        <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <CheckBox style={{width: '10%'}} value={this.state.checked}  onValueChange={() => this.onChecked}/>
                            <Text style={{width: '90%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                By checking this box I am confirming that I have read and agree to the Terms and Conditions below
                            </Text>
                        </View>    
                    </AthenaCardContent>
                </AthenaCard>              
                <View style={{justifyContent: 'center', alignItems: 'center', width:'100%', paddingBottom: 20, marginTop: 10, marginBottom: 40}}>
                    <AthenaButton buttonTitle="COMPLETE YOUR ORDER" onClick={this.onCompleteClick}/>
                </View>  
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.WHITE_COLOR,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    inputStyle: {
      height: 40,
    //   paddingLeft: 10,
      backgroundColor: '#FFFFFF', 
      color: Global.DARK_GRAY_COLOR, 
      fontSize: 13,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Global.RIGHT_BLUE_COLOR
    },

    searchBarContainerStyle: {
      marginBottom: 10,
      flexDirection: "row",
      height: 40,
      shadowOpacity: 1.0,
      shadowRadius: 5,
      shadowOffset: {
        width: 1,
        height: 1
      },
      backgroundColor: "rgba(255,255,255,1)",
      shadowColor: "#d3d3d3",
      borderRadius: 10,
      elevation: 3,
      marginLeft: 10,
      marginRight: 10
    },
  
    selectLabelTextStyle: {
      color: "#000",
      textAlign: "left",
      width: "99%",
      padding: 10,
      flexDirection: "row"
    },
    placeHolderTextStyle: {
      color: "#D3D3D3",
      padding: 10,
      textAlign: "left",
      width: "99%",
      flexDirection: "row"
    },
    dropDownImageStyle: {
      marginLeft: 10,
      width: 10,
      height: 10,
      alignSelf: "center"
    },
  
    pickerStyle: {
      marginLeft: 18,
      elevation:3,
      paddingRight: 25,
      marginRight: 10,
      marginBottom: 2,
      shadowOpacity: 1.0,
      shadowOffset: {
        width: 1,
        height: 1
      },
      borderWidth:1,
      shadowRadius: 10,
      backgroundColor: "rgba(255,255,255,1)",
      shadowColor: "#d3d3d3",
      borderRadius: 5,
      flexDirection: "row"
    },
    subContainer:{
        margin: 8
    },
    rowStyle:{
        backgroundColor: '#FFF',
        color: '#333',
        padding: 8,
        fontSize: 20
    },
    dropDownContainer:{
        borderBottomWidth: 1,
        padding: 8
    },
    dropDownText:{
        fontSize: 20,
        margin: 8
    }
});

export default BillingInformationPage;

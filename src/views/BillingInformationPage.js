import React from 'react';
import {StyleSheet, ScrollView, View, Text, CheckBox} from 'react-native';

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
    { index: 1, title: '', placeholder: 'First Name' },
    { index: 1, title: '', placeholder: 'Last Name' },
    { index: 1, title: '', placeholder: 'Company' },
    { index: 1, title: '', placeholder: 'Address1' },
    { index: 1, title: '', placeholder: 'Address2' },
    { index: 1, title: '', placeholder: 'City' },
    { index: 1, title: '', placeholder: 'State' },
    { index: 1, title: '', placeholder: 'ZIP Code' },
    { index: 1, title: '', placeholder: 'Phone Number' }
]

const billingData = {
    expMonth: {width: '35%', options: [{label: 'Exp Month', value: 0},{label: 'Drivetime', value: 'Drivetime'},{label: 'Radius', value: 'Radius'}]},
    expYear:  {width: '35%', options: [{label: 'Exp Year', value: 0},{label: 'Household Income', value: 'HouseholdIncome'},{label: 'Age', value: 'Age'},{label: 'Home Ownership', value: 'HomeOwnership'},{label: 'Gender', value: 'Gender'},{label: 'Presence Of Children', value: 'PresenceOfChildren'}]},
    cvv:  {width: '25%', options: [{label: 'CVV', value: 0},{label: 'Household Income', value: 'HouseholdIncome'},{label: 'Age', value: 'Age'},{label: 'Home Ownership', value: 'HomeOwnership'},{label: 'Gender', value: 'Gender'},{label: 'Presence Of Children', value: 'PresenceOfChildren'}]},
}

class BillingInformationPage extends React.Component {  
    constructor (props) {
        super(props);
        this.state = {expMonth: 0, exYear: 0, cvv: 0};
    }       
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Billing Information" navigation={navigation} navigate="ReviewOrderPage" menu={false} />)}
    }
    onCompleteClick = () => {
        this.props.navigation.navigate("SplashPage");
    }     
    onExpMonthChange = (value) => {
        this.setState({ expMonth: value });
    };
    onExpYearChange = (value) => {
        this.setState({ exYear: value });
    };
    onCVVChange = (value) => {
        this.setState({ cvv: value });
    };
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
                                <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                                    <AthenaTextInput placeholder={textItem.placeholder} width="100%" />
                                </View>
                            );}                       
                        )}   
                    </AthenaCardContent>
                </AthenaCard> 
                <AthenaCard>
                    <AthenaCardTitle title='Payment Options'/>
                    <AthenaCardContent>
                        <View style={{paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <CheckBox style={{width: '15%'}}/>
                            <Text style={{width: '80%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                xxxx xxxx xxxx 4252
                            </Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <CheckBox style={{width: '15%'}}/>
                            <Text style={{width: '80%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                xxxx xxxx xxxx 6502
                            </Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <CheckBox style={{width: '15%'}}/>
                            <Text style={{width: '80%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                xxxx xxxx xxxx 3125
                            </Text>
                        </View>
                        <View style={{padding: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 15, color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                                --- OR ---
                            </Text>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder='AthenaCard Number' width="100%" />
                        </View>
                        <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <AthenaSelect name="expMonth" width={billingData.expMonth.width} options={billingData.expMonth.options} selectedValue={this.state.expMonth} onValueChange={this.onExpMonthChange} />
                            <AthenaSelect name="expYear" width={billingData.expYear.width} options={billingData.expYear.options} selectedValue={this.state.expYear} onValueChange={this.onExpYearChange} />
                            <AthenaSelect name="cvv" width={billingData.cvv.width} options={billingData.cvv.options} selectedValue={this.state.cvv} onValueChange={this.onCvvChange} />
                        </View>
                    </AthenaCardContent>
                </AthenaCard> 
                <AthenaCard>
                    <AthenaCardTitle title='Opt Out Verification'/>
                    <AthenaCardContent>
                        <View style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row'}}></View>  
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
                            <AthenaTextInput placeholder='Email To' width="100%"/>
                        </View>
                        <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <AthenaTextInput placeholder='Comments' width="100%" multiline={true} numberOfLines={4}/>
                        </View>   
                        <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <CheckBox style={{width: '10%'}}/>
                            <Text style={{width: '90%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                By checking this box I am confirming that I have read and agree to the Terms and Conditions below
                            </Text>
                        </View>    
                    </AthenaCardContent>
                </AthenaCard>              
                <View style={{justifyContent: 'center', alignItems: 'center', width:'100%', paddingBottom: 20, marginTop: 10, marginBottom: 10}}>
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
    }
});

export default BillingInformationPage;
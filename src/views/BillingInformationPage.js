import React from 'react';
import {StyleSheet, ScrollView, View, Text, CheckBox} from 'react-native';
import DatePicker from 'react-native-datepicker'; 
import RadioGroup from 'react-native-radio-buttons-group';

import Global from '../assets/global/Styles';
import Header from '../components/Header';
import StepIndicator from '../components/StepIndicator';
import Dialog from '../components/Dialog';
import DialogHeader from '../components/DialogHeader';
import DialogContent from '../components/DialogContent';
import DialogFooter from '../components/DialogFooter';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import Button from '../components/Button';
import SelectBox from '../components/SelectBox';
import AthenaTextInput from '../components/AthenaTextInput';

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
    {label: 'xxxx xxxx xxxx 4252', value: 1, color: Global.TITLE_COLOR, size: 22, selected: false},
    {label: 'xxxx xxxx xxxx 6502', value: 2, color: Global.TITLE_COLOR, size: 22, selected: false},
    {label: 'xxxx xxxx xxxx 3125', value: 3, color: Global.TITLE_COLOR, size: 22, selected: false},
]

var  verificationList = [
    {label: 'To the best of my knowledge, no residents/businesses have opted\n-out from receiving my marketing\ncollateral.', value: 1, color: Global.TITLE_COLOR, size: 22, selected: false},
    {label: 'Some residents/businesses have opted-out from receiving my mar-\nkneting collateral. (I will provide a\nlist of these opt-outs)', value: 2, color: Global.TITLE_COLOR, size: 22, selected: false}
]; 

var priceData = {
    subTotalPrice: 467.90,
    shippingPrice: 0    
}

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
        this.state = { dateValue: "11-26-2020", stateValue: 0, paymentValue: 1, verificationValue: 1, checked: false, paymentVisible: false };
    }   
    static navigationOptions = ({navigation}) => {
        return {header:(<Header headerTitle="Billing Information" navigation={navigation} navigate="ReviewOrderPage" backBtn={true} accountBtn={true} />)}
    }
    render() {   
        return (
            <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={{marginTop: 15, padding: 5}}><StepIndicator currentPosition={2} /></View>
                <Card width={Global.VW*90}>
                    <CardHeader title='Billing Information'/>
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Must match the billing address of the payment method being used for this transaction</Text>
                        </View>
                        {textData.map((textItem, textKey) => {
                            return(  
                                textItem.placeholder != 'State' ? 
                                <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                                    <AthenaTextInput placeholder={textItem.placeholder} width="100%" keyboardType={textItem.keyboardType} />
                                </View> :
                                <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                                    <SelectBox name="state" width="100%" options={stateList} selectedValue={this.state.stateValue} onValueChange={this.onChangeState} />
                                </View> 
                            );}                       
                        )}  
                    </CardContent>
                </Card> 
                <Card width={Global.VW*90}>
                    <CardHeader title='Payment Options'/>
                    <CardContent>
                        <View style={{paddingTop: 20, paddingLeft: 5, paddingRight: 5, flexDirection: 'row'}}>
                            <RadioGroup radioButtons={paymentList} onPress={this.onChangePayment} />
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
                            <DatePicker style={{width: '48%'}} date={this.state.dateValue}
                                mode="date" placeholder="select date" format="MM YYYY" minDate="01-2010" maxDate="12-2030"
                                confirmBtnText="Confirm" cancelBtnText="Cancel"
                                customStyles={{ dateIcon: {position: 'absolute', right: 0, top: 4 },
                                    dateInput: { width: '100%', flex: 1, height: 35, paddingLeft: 0, borderWidth: 1, borderRadius: 5, fontSize: 15, color: Global.DARK_GRAY_COLOR}
                                }}
                                onDateChange={(date) => {this.setState({dateValue: date})}}
                            />
                            <View style={{width: '48%', marginTop: 3}}>
                            <AthenaTextInput placeholder='CVV' width="100%" />
                            </View>
                        </View>
                    </CardContent>
                </Card> 
                <Card width={Global.VW*90}>
                    <CardHeader title='Opt Out Verification'/>
                    <CardContent>
                        <View style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 20, flexDirection: 'row'}}>
                            <RadioGroup radioButtons={verificationList} onPress={this.onChangeVerification} />
                        </View>  
                    </CardContent>
                </Card>       
                <Card width={Global.VW*90}>
                    <CardHeader title='Job Comments and Notification'/>
                    <CardContent>
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
                            <CheckBox style={{width: '10%'}} value={this.state.checked}  onValueChange={this.onChangeChecked}/>
                            <Text style={{width: '90%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                By checking this box I am confirming that I have read and agree to the Terms and Conditions below
                            </Text>
                        </View>    
                    </CardContent>
                </Card>  
                <View style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                    <Button buttonTitle="COMPLETE YOUR ORDER" width={Global.VW*60} onClick={() => this.setState({paymentVisible: true})}/>
                </View> 
            </ScrollView>
            <Dialog visible={this.state.paymentVisible} width={Global.VW*90} top={150}>
                <DialogHeader title="POSTCARDS" closeVisible={true} onClose={() => this.setState({ paymentVisible: false})}/>
                <DialogContent justifyContent='center' alignItems='center'>   
                    <View style={{paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                        <Text style={{width: '70%', fontSize: 14, fontWeight: 'bold', color: Global.FONT_COLOR}}>SubTotal</Text>
                        <Text style={{width: '30%', fontSize: 14, color: Global.FONT_COLOR, textAlign: 'right'}}>$ {priceData.subTotalPrice}</Text>
                    </View>       
                    <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                        <Text style={{width: '70%', fontSize: 14, fontWeight: 'bold', color: Global.FONT_COLOR}}>Shipping {'&'} Processing</Text>
                        <Text style={{width: '5%', fontSize: 14, color: Global.FONT_COLOR, borderBottomWidth: 1}}>+</Text>
                        <Text style={{width: '25%', fontSize: 14, color: Global.FONT_COLOR, borderBottomWidth: 1, textAlign: 'right'}}>$ {priceData.shippingPrice}</Text>
                    </View>      
                    <View style={{paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                        <Text style={{width: '70%', fontSize: 11, color: Global.FONT_COLOR}}>You Selected:</Text>
                        <Text style={{width: '30%', fontSize: 11, color: Global.FONT_COLOR}}></Text>
                    </View>      
                    <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                        <Text style={{width: '60%', fontSize: 20, color: Global.BLUE_COLOR}}>Total:</Text>
                        <Text style={{width: '40%', fontSize: 20, color: Global.BLUE_COLOR, textAlign: 'right'}}>$ {priceData.subTotalPrice + priceData.shippingPrice}</Text>
                    </View>      
                    <View style={{paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                        <Text style={{width: '100%', fontSize: 11, color: Global.FONT_COLOR}}>{'('}Tax will be added in cart if applicable{')'}</Text>
                    </View>            
                    <View style={{marginTop: 10, paddingBottom: 10, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Button buttonTitle="PAY" width="70%" onClick={this.onPay}/>
                    </View>
                </DialogContent>
                {/* <DialogFooter>   
                    <TouchableOpacity style={{width:Global.VW*90}} onPress={this.onPay}>
                        <Text style={{textAlign: 'center', fontSize: 15, color: Global.WHITE_COLOR, fontWeight: 'bold'}}>PAY</Text>
                    </TouchableOpacity>
                </DialogFooter> */}
            </Dialog>  
            </View>
        );
    }
    onChangeState = (value) => {
        this.setState({ stateValue: value });
    };
    onChangePayment = (payment) => {
        let selectedButton = payment.find(e => e.selected == true);
        this.setState({ paymentValue: selectedButton.value });
    };
    onChangeVerification = (verification) => {
        let selectedButton = verification.find(e => e.selected == true);
        this.setState({ verificationValue: selectedButton.value });
    };
    onChangeChecked = (key) => {
        const {checked} = this.state;
        checked == true ? this.setState({ checked: false }) : this.setState({ checked: true});
    };
    onPay = () => {
        alert('Pay OK!');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.WHITE_COLOR,
        width: Global.VW * 100,
        height: Global.VW * 100,
        zIndex: 0
    }
});

export default BillingInformationPage;

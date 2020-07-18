import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import {Divider} from 'react-native-elements';

import Global from '../assets/global/Styles';
import Header from '../components/Header';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import AthenaTextInput from '../components/AthenaTextInput';
import Button from '../components/Button';

import deleteIcon from '../assets/images/delete_icon.png'

var paymentList = [
    {label: 'xxxx xxxx xxxx 4252'},
    {label: 'xxxx xxxx xxxx 6502'},
    {label: 'xxxx xxxx xxxx 3125'},
]

class PaymentMethodPage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = { dateValue: "11-2020" };
    }   
    static navigationOptions = ({navigation}) => {
        return {header:(<Header headerTitle="Payment Method" navigation={navigation} navigate="SelectRoutesPage" backBtn={true} accountBtn={false} />)}
    }
    render() {
        return (
            <ScrollView style={styles.container}>  
                <Card width={Global.VW*90}>
                    <CardHeader title='Payment Method'/>
                    <CardContent>
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
                        <View style={{marginTop: 20, paddingBottom: 10, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Add" width="70%" onClick={this.onAddPayment}/>
                        </View>   
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '100%', fontSize: 15, fontWeight: 'bold', color: Global.FONT_COLOR}}>Payment List</Text>
                        </View>      
                        <Divider style={{ backgroundColor: Global.BORDER_COLOR }} />  
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            {paymentList.map((paymentItem,paymentKey) => {
                                return(  
                                    <View style={{width: '100%', paddingTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{width: '90%', fontSize: 12, fontWeight: 'normal', color: Global.FONT_COLOR}}>{paymentItem.label}</Text>
                                        <TouchableOpacity onPress={this.onDeletePayment}><Image source={deleteIcon} style={{width: 25, height: 25}}/></TouchableOpacity>
                                    </View>
                                );}                       
                            )}
                        </View>
                    </CardContent>
                </Card>    
                <View style={{marginTop: 20, paddingBottom: 20, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} />
            </ScrollView>
        );
    }
    onAddPayment = () => {
        alert('Add Payment OK!');
        // paymentList.label.push('xxxx xxxx xxxx 1126')
    } 
    onDeletePayment = () => {
        alert('Delete Payment OK!');
        // paymentList.label.pop('xxxx xxxx xxxx 1126')
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.WHITE_COLOR,
        width: Global.VW * 100,
        height: Global.VH * 100,
        paddingTop: 20,
        zIndex: 0
    }
});

export default PaymentMethodPage;
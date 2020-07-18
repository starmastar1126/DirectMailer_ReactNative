import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

import image1 from '../assets/images/placeholder.jpg';

class PaymentMethodPage extends React.Component {  
    constructor (props) {
        super(props);
        this.state = { date: "05-2016" };
    }       
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Payment Method" navigation={navigation} navigate="GetStartPage" />)}
    }
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
    render() {
        return (
            <ScrollView style={styles.container}>    
                <View style={[styles.viewDiv, {paddingTop: 20}]}>
                    <AthenaTextInput placeholder="Card Number" width="100%" keyboardType="number-pad" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    {/* <AthenaTextInput placeholder="Exp Month/Year" width="55%" /> value={this.state.streetAddress} /> */}
                    <DatePicker
                                style={[styles.inputStyle, {width: '55%'}]}
                                date={this.state.date}
                                mode="date" placeholder="Exp Month/Year" format="MM-YYYY" minDate="01-2010" maxDate="01-2030"
                                confirmBtnText="Confirm" cancelBtnText="Cancel"
                                customStyles={{ dateIcon: { display: 'none', },
                                    dateInput: { textAlign: 'left', borderWidth: 0, marginLeft: 36 }
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                    <AthenaTextInput placeholder="CVV" width="40%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <View style={{width: '50%'}} />
                    <View style={{width: '50%'}} >
                        <AthenaButton style="marginRight: 0" buttonTitle="Change" onClick={this.onButtonClick}/>
                    </View>
                </View>
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 25}]}>
                    <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                        xxxx xxxx xxxx 4252
                    </Text>
                    <TouchableOpacity style={{width: 15, height: 15, backgroundColor: '#7B8D93', borderRadius: 18, alignItems: 'center'}}>
                        <Text style={{fontSize: 10, color: '#EEEEEE'}}>$</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                        xxxx xxxx xxxx 6502
                    </Text>
                    <TouchableOpacity style={{width: 15, height: 15, backgroundColor: '#7B8D93', borderRadius: 18, alignItems: 'center'}}>
                        <Text style={{fontSize: 10, color: '#EEEEEE'}}>$</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                        xxxx xxxx xxxx 3125
                    </Text>
                    <TouchableOpacity style={{width: 15, height: 15, backgroundColor: '#7B8D93', borderRadius: 18, alignItems: 'center'}}>
                        <Text style={{fontSize: 10, color: '#EEEEEE'}}>$</Text>
                    </TouchableOpacity>
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
        paddingLeft: 5,
        paddingRight: 5,
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
});

export default PaymentMethodPage;
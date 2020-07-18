import React from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity, Text, Picker} from 'react-native';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaStepIndicator from '../components/AthenaStepIndicator';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

const designData = {
    design: {width: '70%', options: [{label: '--Please Select--', value: 0},{label: 'My Design($0.00)', value: 1},{label: 'Free Template($0.00)', value: 2},{label: 'Professional Design Service($200.00)', value: 3}]},
    fold:  {width: '70%', options: [{label: 'Half Fold', value: 1},{label: 'Half Fold w/Coupons', value: 2},{label: 'Tri-Fold', value: 3},{label: 'Tri-Fold w/Coupons', value: 3},{label: '4-Fold(11×17 only)', value: 4}]},
    extraCopies: {width: '70%', value: 0},
    deliveryAddress: {width: '70%', options: [{label: '--Please Select--', value: 0},{label: '(New Address)', value: 1},{label: 'PO Box 249, Albuquerque, NM 87103-0249, US / los, LA 90001', value: 2}]},
    date:  {width: '70%', options: [{label: '--Please Select--', value: 0},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 1},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 2},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 3},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 4},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 5}]},
    time:  {width: '70%', options: [{label: '1 Time', value: 1},{label: '2 Times', value: 2},{label: '3 Times', value: 3}]},
    oneTime:  {width: '70%', options: [{label: 'Yes', value: 0},{label: 'No', value: 1}]},
    drop:  {width: '70%', options: [{label: '1 Drop', value: 1},{label: '2 Drop (add $99)', value: 2}]},
    week:{width: '70%', options: [{label: 'Every Week', value: 1},{label: 'Every 2 Weeks', value: 2},{label: 'Every 3 Weeks', value: 3},{label: 'Every 4 Weeks', value: 4}]}
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

class DesignPrintPage extends React.Component {   
    constructor (props) {
        super(props);
        this.state = {design: 0, fold: 1, extraCopies: 0, deliveryAddress: 0, date: 0, time: 1, oneTime: 0, drop: 1, week: 1,
            company: '', address1: '', address2: '', city: '', state: 0, zipCode: '', stateOne: 0
        };
    }    
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Design & Print" navigation={navigation} navigate="TargetReviewPage" menu={false} />)}
    }
    onButtonClick = () => {
        this.props.navigation.navigate("OverViewPage")
    }      
    onDesignChange = (value) => {
        this.setState({ design: value });
    }; 
    onFoldChange = (value) => {
        this.setState({ fold: value });
    }; 
    onChangeExtraCopies = (value) => {
        if(value == '' || value == 0){
            this.setState({ extraCopies: 0 });
        } else {
            this.setState({ extraCopies: value });
        }
    }
    onDateChange = (value) => {
        this.setState({ date: value });
    }; 
    onDeliveryAddressChange = (value) => {
        this.setState({ deliveryAddress: value });
    }; 
    onTimeChange = (value) => {
        this.setState({ time: value });
    }; 
    onOneTimeChange = (value) => {
        this.setState({ oneTime: value });
    }; 
    onDropChange = (value) => {
        this.setState({ drop: value });
    }; 
    onWeekChange = (value) => {
        this.setState({ week: value });
    };
    onSelectTemplate = () => {
        alert('choose template')
    };
    onChangeCompany = (value) => {
        this.setState({ company: value });
    };
    onChangeAddress1 = (value) => {
        this.setState({ address1: value });
    };
    onChangeAddress2 = (value) => {
        this.setState({ address2: value });
    };
    onChangeCity = (value) => {
        this.setState({ city: value });
    };
    onChangeState = (value) => {
        this.setState({ state: value });
    };
    onChangeZIPCode = (value) => {
        this.setState({ zipCode: value });
    };
    onStateChange = (value) => {
        this.setState({ stateOne: value });
    };
    render() {
        return (
        <ScrollView style={styles.container}>
            <AthenaStepIndicator currentPosition={1} />            
            <View style={{width: '100%', paddingTop: 30, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Design{'\n'}Option</Text>
                <AthenaSelect name="design" width={designData.design.width} options={designData.design.options} selectedValue={this.state.design} onValueChange={this.onDesignChange} />
            </View>
            {this.state.design == 0 ? <View /> :
             this.state.design == 1 ? 
            <View style={{width: '100%', height: 150, paddingTop: 10, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '100%', fontSize: 14, color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                    Regarding to selection it will change. See "My Design Selection" and "Free Template Selection" pages.
                </Text>
            </View> :
             this.state.design == 2 ? 
            <View style={{width: '100%', height: 150, paddingTop: 10, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '100%', fontSize: 19, fontWeight: 'bold', color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                    Select a FREE Template
                </Text>
                <View style={{width: '100%', height: 50, paddingTop: 10, paddingLeft: 20, paddingRight: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <AthenaButton buttonTitle="CHOOSE TEMPLATE" onClick={this.onSelectTemplate}/>
                </View>                
            </View> : 
            <View style={{width: '100%', height: 150, paddingTop: 10, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '100%', fontSize: 19, fontWeight: 'bold', color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                    Good Choice!
                </Text>
                <Text style={{width: '100%', fontSize: 14, color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                    We will be in touch will contact you within 24 hours or the next business day of placing your order.
                </Text>
            </View>
            }          
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Fold</Text>
                <AthenaSelect name="fold" width={designData.fold.width} options={designData.fold.options} selectedValue={this.state.fold} onValueChange={this.onFoldChange} />
            </View>        
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Extra Copies</Text>
                <AthenaTextInput width={designData.extraCopies.width} value={this.state.extraCopies} keyboardType="numeric" onChangeText={this.onChangeExtraCopies}/>
            </View> 
            {this.state.extraCopies == 0 ? <View /> : 
            <View>
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Delivery address</Text>
                    <AthenaSelect name="deliveryAddress" width={designData.deliveryAddress.width} options={designData.deliveryAddress.options} selectedValue={this.state.deliveryAddress} onValueChange={this.onDeliveryAddressChange} />
                </View>      
                {this.state.deliveryAddress != 1 ? <View /> : <View>
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Company</Text>
                    <AthenaTextInput width="70%" value={this.state.company} onChangeText={this.onChangeCompany}/>
                </View> 
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Street Address</Text>
                    <AthenaTextInput width="70%" value={this.state.address1} onChangeText={this.onChangeAddress1}/>
                </View> 
                <View style={{width: '100%', paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 10, color: Global.DARK_GRAY_COLOR}}></Text>
                    <Text style={{width: '70%', fontSize: 10, color: Global.DARK_GRAY_COLOR}}>Note: we cannot deliver to a P.O. Box.</Text>
                </View> 
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Address2</Text>
                    <AthenaTextInput width="70%" value={this.state.address2} onChangeText={this.onChangeAddress2}/>
                </View> 
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>City</Text>
                    <AthenaTextInput width="70%" value={this.state.city} onChangeText={this.onChangeCity}/>
                </View> 
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>State</Text>
                    <AthenaSelect name="state" width="70%" options={stateList} selectedValue={this.state.stateOne} onValueChange={this.onStateChange} />
                </View> 
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>ZIP Code</Text>
                    <AthenaTextInput width="70%" value={this.state.zipCode} keyboardType="numeric" onChangeText={this.onChangeZIPCode}/>
                </View> 
                </View>
                }           
            </View>
            }
            
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                    Select the estimated delivery dates for your first mailing.
                </Text>
            </View>   
            <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}></Text>
                <AthenaSelect name="date" width={designData.date.width} options={designData.date.options} selectedValue={this.state.date} onValueChange={this.onDateChange} />
            </View>
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                    How many times do you want to mail this offer to each address?
                </Text>
            </View>   
            <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}></Text>
                <AthenaSelect name="time" width={designData.time.width} options={designData.time.options} selectedValue={this.state.time} onValueChange={this.onTimeChange} />
            </View>
            {this.state.time == 1 ? 
            <View>
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                        Do you want to mail all of your pieces at once?
                    </Text>
                </View> 
                <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}></Text>
                    <AthenaSelect name="oneTime" width={designData.oneTime.width} options={designData.oneTime.options} selectedValue={this.state.oneTime} onValueChange={this.onOneTimeChange} />
                </View>
                {this.state.oneTime == 0 ? <View /> :
                    <View>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                How many mailings would you like to distribute?
                            </Text>
                        </View> 
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}></Text>
                            <AthenaSelect name="drop" width={designData.drop.width} options={designData.drop.options} selectedValue={this.state.drop} onValueChange={this.onDropChange} />
                        </View>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                What frequency should additional mailings distribute?
                            </Text>
                        </View> 
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}></Text>
                            <AthenaSelect name="week" width={designData.week.width} options={designData.week.options} selectedValue={this.state.week} onValueChange={this.onWeekChange} />
                        </View>
                    </View>
                }
            </View> :
            <View>
                <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                        What frequency should additional mailings distribute?
                    </Text>
                </View> 
                <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}></Text>
                    <AthenaSelect name="week" width={designData.week.width} options={designData.week.options} selectedValue={this.state.week} onValueChange={this.onWeekChange} />
                </View>
            </View> 
            }
            <View style={{width: '100%', marginTop: 20, marginBottom: 50, paddingLeft: 20, paddingRight: 20, justifyContent: 'center', alignItems: 'center'}}>
                <AthenaButton buttonTitle="CONTINUE" onClick={this.onButtonClick}/>
            </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    }
});

export default DesignPrintPage;
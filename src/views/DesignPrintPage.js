import React from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity, Text, Picker} from 'react-native';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaStepIndicator from '../components/AthenaStepIndicator';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

const designData = {
    design: {width: '70%', options: [{label: '--Please Select--', value: 0},{label: 'My Design($0.00)', value: 1},{label: 'Free Template($0.00)', value: 2},{label: 'Professional Design Service($200.00)', value: 2}]},
    fold:  {width: '70%', options: [{label: 'Half Fold', value: 1},{label: 'Half Fold w/Coupons', value: 2},{label: 'Tri-Fold', value: 3},{label: 'Tri-Fold w/Coupons', value: 3},{label: '4-Fold(11×17 only)', value: 4}]},
    extraCopies: {width: '70%', value: 0},
    date:  {width: '70%', options: [{label: '--Please Select--', value: 0},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 1},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 2},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 3},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 4},{label: 'Mon, Jun 10, 2019 - Sat, Jun 15, 2019', value: 5}]},
    time:  {width: '70%', options: [{label: '1 Time', value: 1},{label: '2 Times', value: 2},{label: '3 Time', value: 3}]},
    week:{width: '70%', options: [{label: 'Yes', value: 1},{label: 'No', value: 2},{label: 'Every Week', value: 3},{label: 'Every 2 Weeks', value: 4},{label: 'Every 3 Weeks', value: 5},{label: 'Every 4 Weeks', value: 6}]}
}

class DesignPrintPage extends React.Component {   
    constructor (props) {
        super(props);
        this.state = {design: 0, fold: 1, extraCopies: 0, date: 0, time: 1, week: 1};
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
    onDateChange = (value) => {
        this.setState({ date: value });
    }; 
    onTimeChange = (value) => {
        this.setState({ time: value });
    }; 
    onWeekChange = (value) => {
        this.setState({ week: value });
    };
    render() {
        return (
        <ScrollView style={styles.container}>
            <AthenaStepIndicator currentPosition={1} />            
            <View style={{width: '100%', paddingTop: 30, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Design{'\n'}Option</Text>
                <AthenaSelect name="design" width={designData.design.width} options={designData.design.options} selectedValue={this.state.design} onValueChange={this.onDesignChange} />
            </View>
            <View style={{width: '100%', height: 150, paddingTop: 10, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '100%', fontSize: 14, color: Global.DARK_GRAY_COLOR, textAlign: 'center'}}>
                    Regarding to selection it will change. See "My Design Selection" and "Free Template Selection" pages.
                </Text>
            </View>            
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Fold</Text>
                <AthenaSelect name="fold" width={designData.fold.width} options={designData.fold.options} selectedValue={this.state.fold} onValueChange={this.onFoldChange} />
            </View>        
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Extra{'\n'}copies</Text>
                <AthenaTextInput width={designData.extraCopies.width} value={this.state.extraCopies} />
            </View>        
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Delivery address</Text>
                <AthenaSelect name="date" width={designData.date.width} options={designData.date.options} selectedValue={this.state.date} onValueChange={this.onDateChange} />
            </View>     
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Estimated delivery date</Text>
                <AthenaSelect name="time" width={designData.time.width} options={designData.time.options} selectedValue={this.state.time} onValueChange={this.onTimeChange} />
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
            <View style={{width: '100%', paddingTop: 20, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                What frequency should additional mailings distribute?
                </Text>
            </View> 
            <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}></Text>
                <AthenaSelect name="week" width={designData.week.width} options={designData.week.options} selectedValue={this.state.week} onValueChange={this.onWeekChange} />
            </View>
            <View style={{width: '100%', height: 100, paddingTop: 10, paddingLeft: 20, paddingRight: 20, justifyContent: 'center', alignItems: 'center'}}>
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
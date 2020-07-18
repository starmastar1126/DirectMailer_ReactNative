import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

const startData = {
    distance: {width: '66%', options: [{label: 'Measure Distance', value: 'MeasureDistance'},{label: 'Drivetime', value: 'Drivetime'},{label: 'Radius', value: 'Radius'}]},
    filter1:  {width: '100%', options: [{label: 'Add Filter', value: 'AddFilter'},{label: 'Household Income', value: 'HouseholdIncome'},{label: 'Age', value: 'Age'},{label: 'Home Ownership', value: 'HomeOwnership'},{label: 'Gender', value: 'Gender'},{label: 'Presence Of Children', value: 'PresenceOfChildren'}]},
    filter2:  {width: '100%', options: [{label: 'Add Filter', value: 'AddFilter'},{label: 'Household Income', value: 'HouseholdIncome'},{label: 'Age', value: 'Age'},{label: 'Home Ownership', value: 'HomeOwnership'},{label: 'Gender', value: 'Gender'},{label: 'Presence Of Children', value: 'PresenceOfChildren'}]},
    filter3:  {width: '100%', options: [{label: 'Add Filter', value: 'AddFilter'},{label: 'Household Income', value: 'HouseholdIncome'},{label: 'Age', value: 'Age'},{label: 'Home Ownership', value: 'HomeOwnership'},{label: 'Gender', value: 'Gender'},{label: 'Presence Of Children', value: 'PresenceOfChildren'}]}
}

class GetStartPage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {streetAddress: "", zipCode: "", distance: "", filter1: "", filter2: "", filter3: ""};
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
    };
    onFilter2Change = (value) => {
        this.setState({ filter2: value });
    };
    onFilter3Change = (value) => {
        this.setState({ filter3: value });
    };
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
                    <AthenaTextInput placeholder="ZIP CODE" width="30%" />
                    <AthenaSelect name="distance" width={startData.distance.width} options={startData.distance.options} selectedValue={this.state.distance} onValueChange={this.onDistanceChange} />
                </View> 
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
                <View style={[styles.viewDiv, styles.justifyCenter, {height: 100}]}>
                    <AthenaButton buttonTitle="SHOW ME MY PROJECTS" onClick={this.onButtonClick}/>
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
    }
});

export default GetStartPage;
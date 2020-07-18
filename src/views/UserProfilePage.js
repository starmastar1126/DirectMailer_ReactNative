import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

import image1 from '../assets/images/default-avatar.png';

class UserProfilePage extends React.Component { 
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="User Profile" navigation={navigation} navigate="GetStartPage" />)}
    }
    render() {
        return (
            <ScrollView style={styles.container}>                
                <View style={{width: '100%', paddingTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={image1} style={{width: 100, height: 100, borderRadius: 60, alignItems: 'center', borderWidth: 1, borderColor: Global.DARK_BLUE_COLOR}} />
                </View>
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="First Name" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Last Name" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="First Name" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Address line1" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Address line2" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="City" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="State" width="50%" />{/*  value={this.state.streetAddress} /> */}
                    <AthenaTextInput placeholder="ZIP Code" width="40%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Phone Number" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View> 
                <View style={[styles.viewDiv, styles.justifyCenter, {height: 100}]}>
                    <AthenaButton buttonTitle="SAVE" onClick={this.onButtonClick}/>
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
    }
});

export default UserProfilePage;
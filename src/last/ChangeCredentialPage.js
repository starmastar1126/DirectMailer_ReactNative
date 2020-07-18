import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

import image1 from '../assets/images/placeholder.jpg';

class ChangeCredentialPage extends React.Component { 
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="User Profile" navigation={navigation} navigate="GetStartPage" />)}
    }
    render() {
        return (
            <ScrollView style={styles.container}>    
                <View style={[styles.viewDiv, {paddingTop: 20}]}>
                    <AthenaTextInput placeholder="Current Email" width="100%" keyboardType="email-address" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="New Email" width="100%" keyboardType="email-address" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <View style={{width: '50%'}} />
                    <View style={{width: '50%'}} >
                        <AthenaButton buttonTitle="Change" onClick={this.onButtonClick}/>
                    </View>
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 20}]}>
                    <AthenaTextInput placeholder="Current Password" width="100%" secureTextEntry={true} />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="New Password" width="100%" secureTextEntry={true} />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <View style={{width: '50%'}} />
                    <View style={{width: '50%'}} >
                        <AthenaButton buttonTitle="Change" onClick={this.onButtonClick}/>
                    </View>
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

export default ChangeCredentialPage;
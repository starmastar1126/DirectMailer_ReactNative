import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Global from '../assets/global/Styles';
import Header from '../components/Header';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import AthenaTextInput from '../components/AthenaTextInput';
import Button from '../components/Button';

class ChangeCredentialPage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = { stateValue: 0 };
    }   
    static navigationOptions = ({navigation}) => {
        return {header:(<Header headerTitle="Change Credential" navigation={navigation} navigate="SelectRoutesPage" backBtn={true} accountBtn={false} />)}
    }
    render() {
        return (
            <ScrollView style={styles.container}>  
                <Card width={Global.VW*90}>
                    <CardHeader title='Change Email'/>
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <AthenaTextInput placeholder="Current Email" width="100%" keyboardType="email-address" />
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <AthenaTextInput placeholder="New Email" width="100%" keyboardType="email-address" />  
                        </View>        
                        <View style={{marginTop: 20, paddingBottom: 10, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Change" width="70%" onClick={this.onChangeEmail}/>
                        </View>
                    </CardContent>
                </Card> 
                <Card width={Global.VW*90}>
                    <CardHeader title='Change Password'/>
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <AthenaTextInput placeholder="Current Password" width="100%" secureTextEntry={true} />
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <AthenaTextInput placeholder="New Password" width="100%" secureTextEntry={true} />  
                        </View>        
                        <View style={{marginTop: 20, paddingBottom: 10, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Button buttonTitle="Change" width="70%" onClick={this.onChangePassword}/>
                        </View>
                    </CardContent>
                </Card>      
                <View style={{marginTop: 20, paddingBottom: 20, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} />
            </ScrollView>
        );
    }
    onChangeEmail = () => {
        alert(" Change Email OK!")
    } 
    onChangePassword = () => {
        alert(" Change Password OK!")
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

export default ChangeCredentialPage;
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Global from '../views/Global'
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaButton from '../components/AthenaButton';

 class RegisterPage extends React.Component {
  static navigationOptions = {
    header: null
  };
  onButtonClick = () => {
      this.props.navigation.navigate("EmailVerificationPage")
  }  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.loginPanel}>
          <View style={styles.loginHeader}>
            <View style={{width: '90%'}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: Global.FORE_COLOR}}>EDDM Register</Text>
            </View>
            <View style={{width: '10%'}}>
              <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('LoginPage')}>
                <Text style={{fontSize: 18, color: Global.WHITE_COLOR}}>×</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.loginMain}>
            <View style={{width: '100%', paddingTop: 20, flexDirection: 'row'}}>
              <AthenaTextInput placeholder="Email Address" width="100%" />
            </View>     
            <View style={{width: '100%', paddingTop: 20, flexDirection: 'row'}}>
              <AthenaTextInput placeholder="Choose a Password" width="100%" />
            </View>      
            <View style={{width: '100%', paddingTop: 20, flexDirection: 'row'}}>
              <AthenaTextInput placeholder="Confirm your Password" width="100%" />
            </View>      
            <View style={{justifyContent: 'center', alignItems: 'center', width:'100%', marginTop: 15, marginBottom: 15}}>
                <AthenaButton buttonTitle="Register" onClick={this.onButtonClick}/>
            </View> 
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginPage')}>
                <Text style={{fontSize: 13, color: Global.BUTTON_COLOR, textDecorationLine: 'underline'}}>Login</Text>
              </TouchableOpacity>
            </View>  
          </View>
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF'
  },
  loginPanel: {
      position: 'absolute',
      width: 300,
      backgroundColor: '#FFFFFF',
      zIndex: 99,
      borderWidth: 1,
      borderColor: Global.DARK_BLUE_COLOR,
      borderRadius: 15,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
  },
  loginHeader: {
      width: '100%',
      height: 35,
      borderTopStartRadius: 5,
      borderTopEndRadius: 5,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderColor: Global.DARK_BLUE_COLOR,
      backgroundColor: Global.RIGHT_BLUE_COLOR,
      zIndex: 99,
      paddingLeft: 10,
      paddingRight: 10, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  loginMain: {
      width: '100%',
      borderBottomStartRadius: 5,
      borderBottomEndRadius: 5,
      borderWidth: 1,
      borderColor: Global.DARK_BLUE_COLOR,
      backgroundColor: Global.WHITE_COLOR,
      zIndex: 99,
      paddingLeft: 10,
      paddingRight: 10,
  },
  closeButton: {
    width: 25, 
    height: 25, 
    borderWidth: 1, 
    borderColor: Global.DARK_BLUE_COLOR,
    backgroundColor: Global.BUTTON_COLOR,
    borderRadius: 18, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default RegisterPage;
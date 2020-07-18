import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Divider } from 'react-native-elements';

import Global from '../views/Global';
import accountIcon from '../assets/images/person_icon.png'


class AthenaHeader extends React.Component {
  render() {
    const { headerTitle, navigation, navigate, menu } = this.props;    
    return (  
        <View style={styles.naviContainer}>
          {menu !== true ?     
            <TouchableOpacity style={{width: 70}} onPress={() => navigation.navigate(navigate)}>
                <Text style={[styles.backButton, {paddingLeft: 10}]}>{'<'}&nbsp;Back</Text>
            </TouchableOpacity>
            :<View style={{width: 50}}/>
          }      
          <Text style={styles.title}>{headerTitle}</Text>        
          <View style={{width: 50}}>
            {menu === true ?     
              <Menu>
                <MenuTrigger><Image source={accountIcon} style={{width: 30, height: 30}} /></MenuTrigger>
                <MenuOptions>
                  <MenuOption style={{height: 35, marginTop: 7}} onSelect={() => navigation.navigate('MyMapsPage')} text='My Maps' /><Divider style={{ backgroundColor: '#AAA' }} />
                  <MenuOption style={{height: 35, marginTop: 7}} onSelect={() => navigation.navigate('UserProfilePage')} text='User Profile' /><Divider style={{ backgroundColor: '#AAA' }} />
                  <MenuOption style={{height: 35, marginTop: 7}} onSelect={() => navigation.navigate('ChangeCredentialPage')} text='Change Credential'/><Divider style={{ backgroundColor: '#AAA' }} />
                  <MenuOption style={{height: 35, marginTop: 7}} onSelect={() => navigation.navigate('PaymentMethodPage')} text='Payment Method'/><Divider style={{ backgroundColor: '#AAA' }} />
                  <MenuOption style={{height: 35, marginTop: 7}} onSelect={() => alert('Logout')} text='Logout'/>
                </MenuOptions>
              </Menu>
              :<View />
            }           
          </View>         
        </View>
    );
  }
}

const styles = StyleSheet.create({
  naviContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      height: 50, 
      backgroundColor: Global.RIGHT_BLUE_COLOR, 
      borderBottomWidth: 1,
      borderBottomColor: '#DDDDDD',  
  },
  backButton: {
      backgroundColor: Global.RIGHT_BLUE_COLOR, 
      color: Global.FORE_COLOR, 
      fontSize: 15, 
      // fontWeight: Global.FONT_BOLD
  },
  title: {
      backgroundColor: Global.RIGHT_BLUE_COLOR, 
      color: Global.FORE_COLOR, 
      fontSize: 18, 
      fontWeight: Global.FONT_BOLD
  },
});

export default AthenaHeader;

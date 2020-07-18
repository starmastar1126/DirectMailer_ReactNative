import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Divider } from 'react-native-elements';

import Global from '../assets/global/Styles';
import accountIcon from '../assets/images/account_icon.png'
import backIcon from '../assets/images/back_icon.png';


class AthenaHeader extends React.Component {
  render() {
    const { headerTitle, navigation, navigate, backBtn, accountBtn } = this.props;    
    return (  
        <View style={styles.naviContainer}>
          {backBtn === true ?     
            <TouchableOpacity style={{width: 70, marginLeft: 10}} onPress={() => navigation.navigate(navigate)}>
                <Image source={backIcon} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            :<View style={{width: 50}}/>
          }      
          <Text style={styles.title}>{headerTitle}</Text>        
          <View style={{width: 50}}>
            {accountBtn === true ?     
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
      // position: 'absolute',
      width: Global.VW * 100, height: 50, 
      // top: 0, left: 0,
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor: Global.HEADER_COLOR, 
      // shadowColor: Global.BLACK_COLOR,
      // shadowOffset: { width: 0, height: 5 },
      // shadowOpacity: 0.58,
      // shadowRadius: 10,
      // elevation: 10,
  },
  title: {
      color: Global.FORE_COLOR, 
      fontSize: 20, 
      fontWeight: Global.FONT_BOLD
  },
});

export default AthenaHeader;

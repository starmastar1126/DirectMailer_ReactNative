import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Divider } from 'react-native-elements';

import Global from '../assets/global/Styles';
import accountIcon from '../assets/images/account_icon.png'
import menuIcon from '../assets/images/menu_icon.png'
import homeIcon from '../assets/images/home_icon.png';
import backIcon from '../assets/images/back_icon.png';
import mapIcon from '../assets/images/map_icon.png';
import profileIcon from '../assets/images/profile_icon.png';
import credentialIcon from '../assets/images/credential_icon.png';
import paymentIcon from '../assets/images/payment_icon.png';
import logoutIcon from '../assets/images/logout_icon.png';


class Header extends React.Component {
  render() {
    const { headerTitle, navigation, navigate, backBtn, accountBtn } = this.props;    
    return (  
        <View style={styles.naviContainer}>
          {backBtn === true ?     
            <TouchableOpacity style={{width: 40, marginLeft: 10}} onPress={() => navigation.navigate(navigate)}>
                <Image source={backIcon} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            :<View style={{width: 40}}/>
          }      
          <Text style={styles.title}>{headerTitle}</Text>        
          <View style={{width: 40}}>
            {accountBtn === true ?     
              <Menu>
                <MenuTrigger><Image source={menuIcon} style={{width: 30, height: 30}} /></MenuTrigger>
                <MenuOptions>
                  {/* <View style={{flexDirection: 'row', paddingLeft: 5}}><Image source={mapIcon} style={{marginTop: 7, width: 30, height: 30}} /><MenuOption style={{width: '100%', height: 35, marginTop: 7}} onSelect={() => alert(ok)} text='My Maps Test'/></View><Divider style={{ backgroundColor: '#AAA' }} /> */}
                  <View style={{flexDirection: 'row', paddingLeft: 5}}><Image source={homeIcon} style={{marginTop: 7, width: 30, height: 30}} /><MenuOption style={{width: '100%', height: 35, marginTop: 7}} onSelect={() => navigation.navigate('SelectRoutesPage')} text='Home'/></View><Divider style={{ backgroundColor: '#AAA' }} />
                  <View style={{flexDirection: 'row', paddingLeft: 5}}><Image source={profileIcon} style={{marginTop: 7, width: 30, height: 30}} /><MenuOption style={{width: '100%', height: 35, marginTop: 7}} onSelect={() => navigation.navigate('UserProfilePage')} text='User Profile' /></View><Divider style={{ backgroundColor: '#AAA' }} />
                  <View style={{flexDirection: 'row', paddingLeft: 5}}><Image source={credentialIcon} style={{marginTop: 7, width: 30, height: 30}} /><MenuOption style={{width: '100%', height: 35, marginTop: 7}} onSelect={() => navigation.navigate('ChangeCredentialPage')} text='Change Credential'/></View><Divider style={{ backgroundColor: '#AAA' }} />
                  <View style={{flexDirection: 'row', paddingLeft: 5}}><Image source={paymentIcon} style={{marginTop: 7, width: 30, height: 30}} /><MenuOption style={{width: '100%', height: 35, marginTop: 7}} onSelect={() => navigation.navigate('PaymentMethodPage')} text='Payment Method'/></View><Divider style={{ backgroundColor: '#AAA' }} />
                  <View style={{flexDirection: 'row', paddingLeft: 5}}><Image source={logoutIcon} style={{marginTop: 7, width: 30, height: 30}} /><MenuOption style={{width: '100%', height: 35, marginTop: 7}} onSelect={() => alert('Logout')} text='Logout'/></View>
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
      shadowColor: Global.BLACK_COLOR,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.58,
      shadowRadius: 10,
      elevation: 10,
  },
  title: {
      color: Global.FORE_COLOR, 
      fontSize: 20, 
      fontWeight: Global.FONT_BOLD
  },
});

export default Header;

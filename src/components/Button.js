import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import Global from '../assets/global/Styles';

class Button extends React.Component {
  render() {
    const { width, icon, buttonTitle, onClick } = this.props;    
    return (  
      icon ? 
      <TouchableOpacity style={[{width: width, flexDirection: 'row'}, styles.startButton]} onPress={onClick} activeOpacity={0.5}>
        <Image source={icon} style={{width: 25, height: 25, marginRight: 10}}/>
        <Text style={{fontSize: 13, color: Global.WHITE_COLOR}}>{buttonTitle}</Text>
      </TouchableOpacity> :
      <TouchableOpacity style={[{width: width}, styles.startButton]} onPress={onClick} activeOpacity={0.5}>
        <Text style={{fontSize: 13, color: Global.WHITE_COLOR}}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  startButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 35,
      backgroundColor: Global.BUTTON_COLOR,
      borderRadius: 10,
      shadowColor: Global.BLACK_COLOR,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
      elevation: 10,
  },
});

export default Button;

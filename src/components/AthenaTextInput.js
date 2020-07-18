import React from 'react';
import {StyleSheet, View, TextInput } from 'react-native';

import Global from '../views/Global';

class AthenaTextInput extends React.Component {
  render() {
    const { placeholder, width, value, multiline, numberOfLines, keyboardType, secureTextEntry } = this.props;    
    return (   
      <TextInput 
          style={[styles.inputStyle, {width : width}]}
          placeholder={placeholder}
          value={value}
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          // multiline={multiline}
          // numberOfLines={numberOfLines}
          // autoCapitalize={'none'}
          // returnKeyType='done'
          placeholderTextColor={Global.DARK_GRAY_COLOR}
          underlineColorAndroid="transparent"
          // onChangeText={(address) => this.setState({address})}
      />          
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF', 
    color: Global.DARK_GRAY_COLOR, 
    fontSize: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Global.RIGHT_BLUE_COLOR
  }
});

export default AthenaTextInput;


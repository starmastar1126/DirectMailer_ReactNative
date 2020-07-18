import React from 'react';
import {StyleSheet, TextInput } from 'react-native';

import Global from '../assets/global/Styles';

class AthenaTextInput extends React.Component {
  render() {
    const { placeholder, width, value, multiline, numberOfLines, keyboardType, secureTextEntry } = this.props;    
    return (   
      <TextInput 
          style={[styles.inputStyle, multiline ? styles.height140: styles.height35, {width : width}]}
          placeholder={placeholder}
          value={value}
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          // autoCapitalize={'none'}
          // returnKeyType='done'
          placeholderTextColor={Global.DARK_GRAY_COLOR}
          underlineColorAndroid="transparent"
          // onChangeText={(address) => this.setState({address})}
          onChangeText={this.props.onChangeText}
      />          
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0, paddingBottom: 0,
    backgroundColor: Global.WHITE_COLOR, 
    color: Global.FONT_COLOR, 
    fontSize: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Global.RIGHT_GRAY_COLOR
  },
  height35: {
    height: 35
  },
  height140: {
    height: 140
  }
});

export default AthenaTextInput;


import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Global from '../views/Global';

class AthenaButton extends React.Component {
  render() {
    const { style, buttonTitle, onClick } = this.props;    
    return (  
    <TouchableOpacity style={[{style}, styles.startButton]} onPress={onClick} activeOpacity={1}>
      <Text style={{fontSize: 13, color: Global.WHITE_COLOR}}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>   
    );
  }
}

const styles = StyleSheet.create({
  startButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width:'80%',
      height: 35,
      backgroundColor: Global.BUTTON_COLOR,
      borderRadius: 10,
      // bottom: 50
  },
});

export default AthenaButton;

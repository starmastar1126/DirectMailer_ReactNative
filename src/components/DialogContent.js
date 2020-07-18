import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Global from '../assets/global/Styles';

class DialogContent extends React.Component {
  render() {
    const { flexDirection, justifyContent, alignItems, children } = this.props;    
    return (  
    <View style={[styles.container,{flexDirection: flexDirection, justifyContent: justifyContent, alignItems: alignItems}]}>
      {children}
    </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Global.WHITE_COLOR,
    padding: 10,
    shadowColor: Global.BLACK_COLOR,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  }  
});

export default DialogContent;

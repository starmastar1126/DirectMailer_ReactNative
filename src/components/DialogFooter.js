import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Global from '../assets/global/Styles';

class DialogFooter extends React.Component {
  render() {
    const { children } = this.props;    
    return (  
    <View style={styles.container}>
      {children}
    </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    bottom: 0,
    backgroundColor: Global.BUTTON_COLOR,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: Global.BLACK_COLOR,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
  
});

export default DialogFooter;

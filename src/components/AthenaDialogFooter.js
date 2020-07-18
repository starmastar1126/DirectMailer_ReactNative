import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Global from '../assets/global/Styles';

class AthenaDialogFooter extends React.Component {
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
    backgroundColor: Global.DIALOG_COLOR,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
  
});

export default AthenaDialogFooter;

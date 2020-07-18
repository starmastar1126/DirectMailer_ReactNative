import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Global from '../views/Global';

class AthenaDialog extends React.Component {
  render() {
    const { style, children, visible } = this.props;    
    return (  
    <View style={[styles.container, visible ? styles.show : styles.hide, {style}]}>
      {children}
    </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  show: {
    display: 'block'
  },
  hide: {
    display: 'none'
  }
});

export default AthenaDialog;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Global from '../assets/global/Styles';

class AthenaCardContent extends React.Component {
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
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#4EA0B2',
    padding: 10,
  }  
});

export default AthenaCardContent;

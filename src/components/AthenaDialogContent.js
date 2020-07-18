import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Global from '../assets/global/Styles';

class AthenaDialogContent extends React.Component {
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
    // flexDirection:'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    padding: 10,
  }  
});

export default AthenaDialogContent;

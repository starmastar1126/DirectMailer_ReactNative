import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Global from '../assets/global/Styles';

class AthenaDialogHeader extends React.Component {
  render() {
    const { title } = this.props;    
    return (  
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: Global.DIALOG_COLOR,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Global.WHITE_COLOR,
  }
  
});

export default AthenaDialogHeader;

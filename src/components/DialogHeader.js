import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Global from '../assets/global/Styles';

class DialogHeader extends React.Component {
  render() {
    const { title, closeVisible, onClose } = this.props;    
    return (  
    <View style={styles.container}>
      <View style={{width: 30}} />
      <Text style={styles.title}>{title}</Text>      
      {closeVisible ? 
        <View style={{width: 30}}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{fontSize: 18, color: Global.WHITE_COLOR}}>×</Text>
          </TouchableOpacity>
        </View>
      :<View style={{width: 30}} />}
    </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: Global.TITLE_COLOR,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: Global.BLACK_COLOR,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Global.WHITE_COLOR,
  },
  closeButton: {
    width: 25, 
    height: 25, 
    // backgroundColor: Global.WHITE_COLOR,
    borderRadius: 18, 
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});

export default DialogHeader;

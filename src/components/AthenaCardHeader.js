import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Global from '../assets/global/Styles';
import minimizeIcon from '../assets/images/minimize_icon.png'

class AthenaCardHeader extends React.Component {
  render() {
    const { fontSize, title } = this.props;    
    return (  
    <View style={styles.container}>
      <View style={{width: 20}}/>
      <Text style={[styles.title,{fontSize: fontSize}]}>{title}</Text>
      <TouchableOpacity onPress={this.props.onMinimizeButtone}>
        <Image source={minimizeIcon} style={{width: 20, height: 20, margin: 10}}/>
      </TouchableOpacity>
    </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 35,
    backgroundColor: Global.DIALOG_COLOR,
    borderWidth: 1,
    borderColor: '#4EA0B2',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: Global.WHITE_COLOR,
  }
  
});

export default AthenaCardHeader;

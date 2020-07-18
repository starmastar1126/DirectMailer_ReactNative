import React from 'react';
import {StyleSheet, View} from 'react-native';

import Global from '../assets/global/Styles';

class AthenaDialog extends React.Component {
  render() {
    const { style, width, height, top, children, visible } = this.props;    
    return (  
      <View style={[styles.container, visible ? styles.absolute : '', visible ? styles.show : styles.hide, {style}]}>
        <View style={{width: Global.VW*100, height: Global.VH*100, backgroundColor: '#00000098', zIndex: 99}} />
        <View style={[styles.dialogContainer, visible ? styles.absolute : '', {width: width, top: top}]}>
          {children}
        </View>
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    width: Global.VW * 100,
    height: Global.VH * 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
    // position: 'absolute',
    // backgroundColor: Global.WHITE_COLOR,
    borderRadius: 10,
    zIndex: 100
  },
  show: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  absolute: {
    position: 'absolute'
  }
});

export default AthenaDialog;

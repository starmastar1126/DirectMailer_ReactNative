import React from 'react';
import {StyleSheet, View} from 'react-native';

import Global from '../assets/global/Styles';

class Dialog extends React.Component {
  render() {
    const { style, width, top, children, visible } = this.props;    
    return (  
      <View style={[styles.container, visible ? styles.absolute : '', visible ? styles.show : styles.hide, {style}]}>
        <View style={{width: Global.VW*100, height: '100%', backgroundColor: '#00000098', zIndex: 99}} />
        <View style={[styles.dialogContainer, visible ? styles.absolute : '', {width: width, top: top}]}>
          {children}
        </View>
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Global.VW * 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
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

export default Dialog;

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Global from '../assets/global/Styles';

class AthenaCard extends React.Component {
  render() {
    const { width, height, top, left, right, bottom, children, visible } = this.props;    
    return (  
      <View style={[styles.container, visible ? styles.absolute : '', visible ? styles.show : styles.hide, {width: width, top: top, left: left, right: right, bottom: bottom}]}>
        {children}
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
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

export default AthenaCard;

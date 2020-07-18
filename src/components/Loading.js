import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Global from '../assets/global/Styles';
import loading from '../assets/images/loading.gif'

class Loading extends React.Component {
  render() {
    const { style, visible } = this.props;    
    return (  
      <View style={[styles.container, visible ? styles.absolute : '', visible ? styles.show : styles.hide, style]}>
        <View style={{width: Global.VW*100, height: '100%', backgroundColor: '#00000098', zIndex: 99}} />
        <View style={{position: 'absolute', top: '45%', justifyContent: 'center', alignItems: 'center', zIndex: 100}}>
          <Image source={loading} resizeMode='contain' style={{width: 50, height: 50}} />
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

export default Loading;

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Global from '../assets/global/Styles';

class Card extends React.Component {
  render() {
    const { width, children } = this.props;    
    return (  
      <View style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <View style={[styles.container,{width: width}]}>
          {children}
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 10
  },
});

export default Card;

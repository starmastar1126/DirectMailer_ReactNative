import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Global from '../assets/global/Styles';

class CardContent extends React.Component {
  render() {
    const { children } = this.props;    
    return (  
      <View style={styles.cardContent}>
        {children}
      </View>  
    );
  }
}

const styles = StyleSheet.create({  
    cardContent: {
      width: '100%',
      backgroundColor: Global.WHITE_COLOR,
      // borderLeftWidth: 1,
      // borderRightWidth: 1,
      // borderBottomWidth: 1,
      // borderColor: Global.BORDER_COLOR,
      padding: 10,
      shadowColor: Global.BLACK_COLOR,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
      elevation: 10,

    },
});

export default CardContent;

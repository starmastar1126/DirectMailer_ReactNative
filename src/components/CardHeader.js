import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Global from '../assets/global/Styles';

class CardHeader extends React.Component {
  render() {
    const { title } = this.props;    
    return (  
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  cardHeader: {
      width: '100%',
      height: 35,
      backgroundColor: Global.TITLE_COLOR,
      // borderWidth: 1,
      // borderColor: Global.BORDER_COLOR,
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
      paddingLeft: 10
  },
  cardTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: Global.WHITE_COLOR,
      fontSize: 15
  },
  
});

export default CardHeader;

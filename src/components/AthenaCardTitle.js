import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

import Global from '../views/Global';

class AthenaCardTitle extends React.Component {
  render() {
    const { title } = this.props;    
    return (   
      <View style={styles.container}>
        <Text style={styles.AthenaCardTitle}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    paddingLeft: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Global.DARK_BLUE_COLOR,
    backgroundColor: Global.RIGHT_BLUE_COLOR,    
    borderTopStartRadius: 10,
    borderTopEndRadius: 10
  },
  AthenaCardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Global.FORE_COLOR
  }
});

export default AthenaCardTitle;
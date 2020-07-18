import React from 'react';
import {StyleSheet, View} from 'react-native';

import Global from '../views/Global';

class AthenaCardTitle extends React.Component {
  render() {
    const { children } = this.props;    
    return (   
      <View style={styles.container}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    borderWidth: 1,
    borderColor: Global.DARK_BLUE_COLOR,
    backgroundColor: Global.WHITE_COLOR,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default AthenaCardTitle;

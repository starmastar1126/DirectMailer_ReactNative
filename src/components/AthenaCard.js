import React from 'react';
import {StyleSheet, View } from 'react-native';

class AthenaCard extends React.Component {
  render() {
    const { children} = this.props;    
    return (   
      <View style={styles.container}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default AthenaCard;
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import Routes from './Routes'
import Global from './src/views/Global'

class App extends React.Component {
  render() {
    return (
      <MenuProvider style={{height: 100}}>
        <View style={styles.container}>
          <Routes />
        </View>
      </MenuProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Global.SPLASH_COLOR
  }  
});

export default App;
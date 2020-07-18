import React from 'react';
import {StatusBar, View} from 'react-native';

import AppContainer from './navigation/AppContainer';

import layout from './themes/layout'
import colors from './themes/colors'

export default class App extends React.Component {

    render() {
        return(
            <View style={layout.root}>
                <StatusBar
                    translucent={true}
                    barStyle='light-content'
                    backgroundColor='transparent'
                />
                <AppContainer />
            </View>
        );
    }
    
}

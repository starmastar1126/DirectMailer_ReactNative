import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';


class HeaderTabsMenu extends React.Component {

    constructor(props){
        super(props);
    }

    onSelectTab = (value) => {
        this.props.tabs.map((item, key) => {
            if (value == item.route)
                this.props.navigation.navigate(value);
        })
    }

    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
            {
                this.props.tabs.map((item, key) => {
                    return (
                        <TouchableOpacity key={key} style={[styles.bottomTab, this.props.selectedTab == item.route ? styles.selectedTab : styles.unselectedTab]}
                            onPress = { () =>
                                this.onSelectTab(item.route)
                        }>
                            <Text style={styles.tabText}>{item.text}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            </View>
        );
    }
};

export default HeaderTabsMenu;

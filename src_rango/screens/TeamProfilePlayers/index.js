import React from 'react';
import { ScrollView, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TeamProfileHeader from '../../components/TeamProfileHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import PlayerDetailsList from '../../components/PlayerDetailsList';

// import layout from '../../themes/layout';
// import styles from './styles';

class TeamProfilePlayersScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'TeamProfile',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    onSelectPlayer = () => {
        this.props.navigation.navigate('PlayerProfile');
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <TeamProfileHeader
                    navigation={this.props.navigation}
                    selectedTab='TeamProfilePlayers'
                />
                <ScrollView style={{height: hp('45%')}}>
                    <View style={{paddingBottom: hp('4.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <PlayerDetailsList onSelectPlayer={() => this.onSelectPlayer()} />
                    </View>
                </ScrollView>
                <BottomTabsMenu navigation={this.props.navigation} selectedTab={this.state.selectedBottomTab}
                    onSelectTab={ (value) =>
                        this.onSelectBottomTab(value)}
                />
            </View>
        );
    }

}

export default TeamProfilePlayersScreen

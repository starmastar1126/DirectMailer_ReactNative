import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import MatchScheduleHeader from '../../components/MatchScheduleHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import ImageSlide from '../../components/ImageSlide';

// import layout from '../../themes/layout';
// import styles from './styles';

class MatchScheduleMapScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'MatchSchedule'
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#f5f5f5', alignItems: 'center'}}>
                <MatchScheduleHeader
                    navigation={this.props.navigation}
                    selectedTab='MatchScheduleMap'
                />
                <Image source={require('../../assets/images/googlemap.jpg')} style={{width: wp('100%'), height: hp('48%'), resizeMode: 'cover'}} />
                <View style={{width: wp('100%'), height: hp('5%'), backgroundColor: '#22d498', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: hp('0.5%')}}>
                    <TouchableOpacity style={{width: wp('10%')}}>
                        <Icon name='settings' type='octicon' color='#fff' size={hp('3.5%')} style={{alignItems: 'flex-start'}} />
                    </TouchableOpacity>
                    <Text style={{width: wp('40%'), textAlign: 'left', fontWeight: '400', color: 'white', fontSize: hp('2.0%')}}>Search By Filter</Text>
                    <View style={{width: wp('20%')}}>
                    </View>
                    <TouchableOpacity style={{width: wp('10%')}}>
                        <Icon name='swap' type='antdesign' color='#fff' size={hp('4%')} />
                    </TouchableOpacity>
                </View>
                <ImageSlide onSelectMatch={() => this.props.navigation.navigate('MatchCenterScoreCard')} />
                <BottomTabsMenu navigation={this.props.navigation} selectedTab={this.state.selectedBottomTab}
                    onSelectTab={ (value) =>
                        this.onSelectBottomTab(value)}
                />
            </View>
        );
    }

}

export default MatchScheduleMapScreen

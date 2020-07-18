import React from 'react';
import { ScrollView, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SearchHeader from '../../components/SearchHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const newsList = [
    {key: '1', matchDate: 'MONDAY 28 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - Rajiv Gandhi Intl. Cricket Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '2', matchDate: 'MONDAY 27 APRIL 2019', matchTime: '09:00', matchPhase: 'First stage - Group B, Eden Garden, Kolkata', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'KXIP', homeTeamImage: require('../../assets/images/KXIP.png'), awayTeam: 'KKR', awayTeamImage: require('../../assets/images/KKR.png')},
    {key: '3', matchDate: 'MONDAY 27 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'MI', homeTeamImage: require('../../assets/images/MI.png'), awayTeam: 'CSK', awayTeamImage: require('../../assets/images/CSK.png')},
    {key: '4', matchDate: 'MONDAY 25 APRIL 2019', matchTime: '09:00', matchPhase: 'First stage - Wankhede Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'KXIP', homeTeamImage: require('../../assets/images/KXIP.png'), awayTeam: 'MI', awayTeamImage: require('../../assets/images/MI.png')},
    {key: '5', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '6', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '7', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
    {key: '8', matchDate: 'MONDAY 20 APRIL 2019', matchTime: '15:00', matchPhase: 'First stage - M. A. Chidambaram Stadium', homeTeamScore: '230/4', awayTeamScore: '20/2', homeTeam: 'CSK', homeTeamImage: require('../../assets/images/CSK.png'), awayTeam: 'SRH', awayTeamImage: require('../../assets/images/SRH.png')},
]

class SearchNewsScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'Search',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <SearchHeader
                    navigation={this.props.navigation}
                    selectedTab='SearchNews'
                />
                <ScrollView style={{width: wp('100%'), paddingHorizontal: wp('2%'), paddingVertical: hp('0.0%'), height: hp('65%')}}>
                    <View style={{paddingVertical: hp('2.0%'), paddingHorizontal: wp('1%')}}>
                        {
                            newsList.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingVertical: hp('0.5%'), paddingHorizontal: wp('2.0%'), width: wp('94%'), marginVertical: hp('0.5%'), backgroundColor: '#fff', borderRadius: 5}} onPress={() => this.props.navigation.navigate('NewsDetails')}>
                                        <ImageBackground
                                            resizeMode='cover'
                                            style={{width: wp('24%'), height: wp('16%'), marginVertical: hp('0.5%')}}
                                            source={require('../../assets/images/teamprofile-news.jpg')}
                                        >
                                        <TouchableOpacity>
                                            <View style={{width: wp('24%'), height: wp('16%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                <Icon name='playcircleo' type='antdesign' color='#fff' size={hp('3.0%')} />
                                            </View>
                                        </TouchableOpacity>
                                        </ImageBackground>
                                        <View style={{width: wp('64%'), flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                            <Text style={{paddingVertical: hp('0.0%'), fontSize: hp('1.5%'), fontWeight: '500', color: '#444'}}>
                                                Magnificent England captain stunning century
                                            </Text>
                                            <Text style={{fontSize: hp('1.25%'), fontWeight: '400', color: '#444'}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </Text>
                                            <View style={{paddingVertical: hp('0.25%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                                <Text style={{textAlign: 'left', width: wp('20.0%'), fontSize: hp('1.0%'), fontWeight: '400', color: '#888'}}>
                                                    16 JULY 2018
                                                </Text>
                                                <Icon name='eye' type='feather' color='#1dd29f' size={hp('1.5%')} />
                                                <Text style={{textAlign: 'left', paddingLeft: wp('1.0%'), width: wp('20.0%'), fontSize: hp('1.0%'), fontWeight: '400', color: '#888'}}>
                                                    145,5655
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
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

export default SearchNewsScreen

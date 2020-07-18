import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TeamProfileHeader from '../../components/TeamProfileHeader';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import ImageSlide from '../../components/ImageSlide';
import NewsList from '../../components/NewsList';

// import layout from '../../themes/layout';
// import styles from './styles';

class TeamProfileNewsScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'TeamProfile',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    onSelectMatch = () => {
        this.props.navigation.navigate('MatchCenterScoreCard');
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <TeamProfileHeader
                    navigation={this.props.navigation}
                    selectedTab='TeamProfileNews'
                />
                <ScrollView style={{height: hp('45%')}}>
                    <View style={{paddingBottom: hp('2.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/teamprofile-news.jpg')} style={{marginTop: hp('1.0%'), marginBottom: hp('1.0%'), width: wp('94%'), height: wp('56%'), resizeMode: 'cover'}} />
                        <Text style={{width: wp('94%'), textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('2.0%')}}>FINAL: ENGLAND VS SCOTLAND 2018</Text>
                        <Text style={{width: wp('94%'), textAlign: 'left', color: '#444', fontSize: hp('1.25%')}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.
                        </Text>
                        <View style={{width: wp('94%'), marginVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Icon name='calendar' type='font-awesome' color='#222' size={hp('1.5%')} />
                            <Text style={{paddingHorizontal: wp('1.0%'), width: wp('18%'), textAlign: 'left', fontWeight: '400', color: '#222', fontSize: hp('1.25%')}}>19 May 2018</Text>
                            <Icon name='clock' type='feather' color='#222' size={hp('1.5%')} />
                            <Text style={{paddingHorizontal: wp('1.0%'), width: wp('18%'), textAlign: 'left', fontWeight: '400', color: '#222', fontSize: hp('1.25%')}}>2 min ago</Text>
                            <Icon name='eye' type='feather' color='#222' size={hp('1.5%')} />
                            <Text style={{paddingHorizontal: wp('1.0%'), width: wp('18%'), textAlign: 'left', fontWeight: '400', color: '#222', fontSize: hp('1.25%')}}>145,5655</Text>
                        </View>
                        <NewsList navigation={this.props.navigation} />
                        <ImageSlide backgroundColor='#f0f0f0' onSelectMatch={() => this.onSelectMatch()} />
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

export default TeamProfileNewsScreen

import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import MatchCenterHeader from '../../components/MatchCenterHeader';
import SponsorsGroup from '../../components/SponsorsGroup';
import ImageSlide from '../../components/ImageSlide';
import BottomTabsMenu from '../../components/BottomTabsMenu';
import TeamSelector from '../../components/TeamSelector';
import BallByBall from '../../components/BallByBall';

import CommentsList from '../../components/CommentsList';
import CommentInputArea from '../../components/CommentInputArea';

import images from '../../constants/images';
// import layout from '../../themes/layout';
// import styles from './styles';

const commentsList = [
    {key: 0, avatar: images.commentsPersonJpg, name: 'John Doe', datetime: 'Aug 01, 2018 @ 20:12', like: true, likeNum: 24, post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.'},
    {key: 1, avatar: images.commentsPersonJpg, name: 'John Doe', datetime: 'Aug 01, 2018 @ 20:12', like: false, likeNum: 36, post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.'},
    {key: 2, avatar: images.commentsPersonJpg, name: 'John Doe', datetime: 'Aug 01, 2018 @ 20:12', like: true, likeNum: 9, post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.'},
    {key: 3, avatar: images.commentsPersonJpg, name: 'John Doe', datetime: 'Aug 01, 2018 @ 20:12', like: false, likeNum: 2, post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.'},
]

const teamData = [
    {key: '1', player1: 'Sunrisers Hyderabad', player2: 'b Deepak Chahar', runs: '0', balls: '1', sr: '0.00', sec4: '0', sec6: '18'},
    {key: '2', player1: 'Kolkata Knight Riders', player2: 'c & b Lungi Ngidi', runs: '12', balls: '11', sr: '133.33', sec4: '0', sec6: '18'},
    {key: '3', player1: 'Chennai Super Kings', player2: 'b Deepak Chahar', runs: '24', balls: '9', sr: '160.00', sec4: '0', sec6: '18'},
    {key: '4', player1: 'Rajasthan Royals', player2: 'c & b Lungi Ngidi', runs: '8', balls: '9', sr: '50.00', sec4: '0', sec6: '18'},
    {key: '5', player1: 'Kings XI Punjab', player2: 'b Deepak Chahar', runs: '12', balls: '8', sr: '120.00', sec4: '0', sec6: '18'},
    {key: '6', player1: 'Delhi Daredevils', player2: 'c & b Lungi Ngidi', runs: '24', balls: '7', sr: '82.75', sec4: '0', sec6: '18'},
    {key: '7', player1: 'Mumbai Indians', player2: 'NOT OUT', runs: '43', balls: '2', sr: '148.27', sec4: '1', sec6: '18'},
    {key: '8', player1: 'Royal Challengers Bangalore', player2: 'run out(MS Dhoni)', runs: '13', balls: '1', sr: '60.33', sec4: '0', sec6: '18'},
]

class MatchCenterScoreCardScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'TeamProfile',
            commentsList: commentsList,
            selectedTeam: 'SRH',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    onSelectLike = (key, like, likeNum) => {
        if (like == true) {
            this.state.commentsList[key].like = false;
            this.state.commentsList[key].likeNum = likeNum - 1;
        } else {
            this.state.commentsList[key].like = true;
            this.state.commentsList[key].likeNum = likeNum + 1;
        }
        this.forceUpdate();
    }

    changeSelectedTeam = (value) => {
        this.setState({selectedTeam: value})
    }

    onSelectMatch = () => {
        this.props.navigation.navigate('MatchCenterScoreCard');
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa', alignItems: 'center'}}>
                <MatchCenterHeader
                    navigation={this.props.navigation}
                    selectedTab='MatchCenterScoreCard'
                />
                <ScrollView style={{height: hp('45%')}}>
                    <View style={{paddingVertical: hp('2.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <TeamSelector
                            leftTeamName='SRH' selectedBackgroundColor='#3dc9ec' leftTeamImage={require('../../assets/images/SRH.png')}
                            rightTeamName='CSK' rightTeamImage={require('../../assets/images/CSK.png')}
                            selectedTeam={this.state.selectedTeam} changeSelectedTeam={(value) => this.changeSelectedTeam(value)}
                        />
                        <View style={{marginVertical: hp('0.5%'), width: wp('94%'), backgroundColor: '#fff', borderRadius: 5}}>
                            <View style={{flexDirection: 'row', backgroundColor: '#3dc9ec', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingVertical: hp('0.5%'), borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                <Text style={{width: wp('42.0%'), textAlign: 'left', fontWeight: '500', color: '#eee', fontSize: hp('2.0%')}}>
                                    SRH
                                </Text>
                                <Text style={{width: wp('9.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    Runs
                                </Text>
                                <Text style={{width: wp('9.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    Balls
                                </Text>
                                <Text style={{width: wp('14.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    SR
                                </Text>
                                <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    4s
                                </Text>
                                <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    6s
                                </Text>
                            </View>
                            {
                                teamData.map((item, key) => {
                                    return (
                                        <View key={item.key} style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                            <View style={{paddingVertical: hp('0.25%')}}>
                                                <Text style={{width: wp('42.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                                    {item.player1}
                                                </Text>
                                                <Text style={{width: wp('42.0%'), textAlign: 'left', fontWeight: '400', color: '#888', fontSize: hp('1.5%')}}>
                                                    {item.player2}
                                                </Text>
                                            </View>
                                            <Text style={{width: wp('9.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.runs}
                                            </Text>
                                            <Text style={{width: wp('9.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.balls}
                                            </Text>
                                            <Text style={{width: wp('14.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.sr}
                                            </Text>
                                            <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.sec4}
                                            </Text>
                                            <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.sec6}
                                            </Text>
                                        </View>
                                    )
                                })
                            }
                            <View style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'flex-start', paddingVertical: hp('0.25%')}}>
                                <Text style={{width: wp('20.0%'), textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.5%')}}>
                                    DID NOT BAT:
                                </Text>
                                <Text style={{width: wp('64.0%'), textAlign: 'left', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                    Rashid Khan, Siddarth Kaul, Sandeep Sharma, Sandeep Sharma, Sandeep Sharma
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', backgroundColor: '#3dc9ec', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingVertical: hp('0.5%')}}>
                                <Text style={{width: wp('28.0%'), textAlign: 'left', fontWeight: '500', color: '#fff', fontSize: hp('2.0%')}}>
                                    TOTAL
                                </Text>
                                <Text style={{width: wp('28.0%'), textAlign: 'center', fontWeight: '500', color: '#fff', fontSize: hp('1.5%')}}>
                                    (7 wickets; 20 overs)
                                </Text>
                                <Text style={{width: wp('28.0%'), textAlign: 'right', fontWeight: '500', color: '#fff', fontSize: hp('1.5%')}}>
                                    139
                                </Text>
                            </View>
                        </View>
                        <View style={{marginVertical: hp('0.5%'), width: wp('94%'), backgroundColor: '#fff', borderRadius: 5}}>
                            <View style={{flexDirection: 'row', backgroundColor: '#e8ac2a', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingVertical: hp('0.5%'), borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                <Text style={{width: wp('42.0%'), textAlign: 'left', fontWeight: '500', color: '#eee', fontSize: hp('2.0%')}}>
                                    Bowler
                                </Text>
                                <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    O
                                </Text>
                                <Text style={{width: wp('9.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    R
                                </Text>
                                <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    W
                                </Text>
                                <Text style={{width: wp('14.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    Econ
                                </Text>
                                <Text style={{width: wp('9.0%'), textAlign: 'center', fontWeight: '500', color: '#eee', fontSize: hp('1.5%')}}>
                                    Dots
                                </Text>
                            </View>
                            {
                                teamData.map((item, key) => {
                                    return (
                                        <View key={item.key} style={{flexDirection: 'row', backgroundColor: '#fff', paddingVertical: hp('0.5%'), justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                            <Text style={{width: wp('42.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.player1}
                                            </Text>
                                            <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.runs}
                                            </Text>
                                            <Text style={{width: wp('9.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.balls}
                                            </Text>
                                            <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.sec4}
                                            </Text>
                                            <Text style={{width: wp('14.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.sr}
                                            </Text>
                                            <Text style={{width: wp('9.0%'), textAlign: 'center', fontWeight: '400', color: '#666', fontSize: hp('1.5%')}}>
                                                {item.sec6}
                                            </Text>
                                        </View>
                                    )
                                })
                            }
                            <View style={{width: wp('94%'), height: hp('2.0%'), backgroundColor: '#e8ac2a', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingVertical: hp('0.5%')}}>
                            </View>
                        </View>
                        <View style={{marginVertical: hp('0.5%'), width: wp('94%'), backgroundColor: '#fff', borderRadius: 5}}>
                            <View style={{flexDirection: 'row', backgroundColor: '#3ab248', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingVertical: hp('0.5%'), borderBottomColor: '#eee', borderBottomWidth: 1}}>
                                <Text style={{width: wp('88.0%'), textAlign: 'left', fontWeight: '500', color: '#eee', fontSize: hp('1.75%')}}>
                                    FALL OF WICKETS
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'flex-start', paddingVertical: hp('0.5%'), borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                                <Text style={{width: wp('88.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    1-0 (Dhawan, 0.1 ov) , 2-34 (Goswami, 3.5 ov) , 3-36 (Williamson, 4.2 ov) , 4-50 (Al Hasan, 6.4 ov) , 
                                    5-69 (Pandey, 11.3 ov), 6-88 (Pathan, 14.6 ov) , 7-139 (Kumar, 19.6 ov)
                                </Text>
                            </View>
                        </View>
                        <BallByBall />
                        <SponsorsGroup />
                        <Text style={{marginTop: hp('2.0%'), marginBottom: hp('1.0%'), alignSelf: 'center', fontWeight: '500', color: '#666', fontSize: hp('2.0%'), paddingVertical: hp('0.25%'), paddingHorizontal: wp('2.0%'), borderBottomColor: '#20d39b', borderBottomWidth: 1}}>
                            RECENT LEAGUES
                        </Text>
                        <ImageSlide backgroundColor='#f0f0f0' onSelectMatch={() => this.onSelectMatch()} />
                        <Text style={{marginVertical: hp('1.0%'), alignSelf: 'center', fontWeight: '500', color: '#666', fontSize: hp('2.0%'), paddingVertical: hp('0.25%'), paddingHorizontal: wp('2.0%'), borderBottomColor: '#20d39b', borderBottomWidth: 1}}>
                            COMMENTS
                        </Text>
                        <CommentsList commentsList={this.state.commentsList}
                            onSelectLike={ (key, like, likeNum) =>
                                this.onSelectLike(key, like, likeNum)}
                        />
                        <CommentInputArea />
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

export default MatchCenterScoreCardScreen

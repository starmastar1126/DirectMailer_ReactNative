import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../../components/TopMenu';
import TeamSelector from '../../components/TeamSelector';
import BallByBall from '../../components/BallByBall';
import BottomTabsMenu from '../../components/BottomTabsMenu';

// import layout from '../../themes/layout';
// import styles from './styles';

const teamData = [
    {key: '1', backgroundColor: '#fff', player1: 'Sunrisers Hyderabad', player2: 'b Deepak Chahar', runs: '0', balls: '1', sr: '0.00', sec4: '0', sec6: '18'},
    {key: '2', backgroundColor: '#d2e1f4', player1: 'Kolkata Knight Riders', player2: 'c & b Lungi Ngidi', runs: '12', balls: '11', sr: '133.33', sec4: '0', sec6: '18'},
    {key: '3', backgroundColor: '#fff', player1: 'Chennai Super Kings', player2: 'b Deepak Chahar', runs: '24', balls: '9', sr: '160.00', sec4: '0', sec6: '18'},
    {key: '4', backgroundColor: '#fff', player1: 'Rajasthan Royals', player2: 'c & b Lungi Ngidi', runs: '8', balls: '9', sr: '50.00', sec4: '0', sec6: '18'},
]

class ScoreEntryScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'ScoreEntry',
            selectedTeam: 'SRH',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    changeSelectedTeam = (value) => {
        this.setState({selectedTeam: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#f6f8fa'}}>
                <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} style={{flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: wp('100%'), height: hp('30%')}} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}>
                    <View style={{height: hp('8.0%')}}></View>
                    <TopMenu navigation={this.props.navigation} />
                    <Text style={{textAlign: 'center', fontWeight: '600', color: 'white', fontSize: hp('3.0%'), letterSpacing: 1}}>IPL 2018</Text>
                    <Text style={{textAlign: 'center', fontWeight: '600', color: 'white', fontSize: hp('2.0%'), letterSpacing: 1}}>JN STADIUM, Washington DC</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/CSK.png')} style={{alignSelf: 'center', width: hp('7.0%'), height: hp('6.0%'), resizeMode: 'contain'}} />
                        <Text style={{width: wp('15%'), textAlign: 'center', fontWeight: '600', color: 'white', fontSize: hp('3.0%')}}>CSK</Text>
                        <View style={{width: wp('20%'), height: hp('8%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../assets/images/shield.png')} style={{top: hp('0.0%'), alignSelf: 'center', width: wp('20.0%'), height: hp('8.0%'), resizeMode: 'contain', position: 'absolute'}} />
                            <Text style={{lineHeight: hp('1.5%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>LIVE</Text>
                            <Text style={{lineHeight: hp('2.5%'), textAlign: 'center', fontWeight: '600', color: '#222', fontSize: hp('2.5%')}}>VS</Text>
                        </View>
                        <Text style={{width: wp('15%'), textAlign: 'center', fontWeight: '600', color: 'white', fontSize: hp('3.0%')}}>SRH</Text>
                        <Image source={require('../../assets/images/SRH.png')} style={{alignSelf: 'center', width: hp('7.0%'), height: hp('6.0%'), resizeMode: 'contain'}} />
                    </View>
                </LinearGradient>
                <ScrollView style={{height: hp('60%')}}>
                    <View style={{marginTop: hp('1.0%'), marginBottom: hp('4.0%'), alignItems: 'center'}}>
                        <TeamSelector
                            leftTeamName='SRH' selectedBackgroundColor='#3dc9ec' leftTeamImage={require('../../assets/images/SRH.png')}
                            rightTeamName='CSK' rightBackgroundColor='#fff' rightTeamImage={require('../../assets/images/CSK.png')}
                            selectedTeam={this.state.selectedTeam} changeSelectedTeam={(value) => this.changeSelectedTeam(value)}
                        />
                        <View style={{marginVertical: hp('0.5%'), width: wp('94%'), backgroundColor: '#fff', borderRadius: 5}}>
                            <View style={{paddingHorizontal: wp('3.0%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#63b6f8', borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingVertical: hp('0.5%')}}>
                                <Text style={{width: wp('30.0%'), textAlign: 'left', fontWeight: '500', color: '#eee', fontSize: hp('2.0%')}}>
                                    1st Innings
                                </Text>
                                <Text style={{width: wp('30.0%'), textAlign: 'right', fontWeight: '500', color: '#fff', fontSize: hp('2.0%')}}>
                                    Total&nbsp;&nbsp;17/0
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', backgroundColor: '#e4e4e4', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('3.0%'), backgroundColor: '#ccc', textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('42.0%'), backgroundColor: '#ccc', textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    Batters
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('9.0%'), backgroundColor: '#ccc', textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    R
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('9.0%'), backgroundColor: '#ccc', textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    B
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('7.0%'), backgroundColor: '#ccc', textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    4s
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('7.0%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    6s
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('14.0%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    SR
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('3.0%'), textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                </Text>
                            </View>
                            <View style={{paddingVertical: hp('0.25%'), borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                            {
                                teamData.map((item, key) => {
                                    return (
                                        <View key={item.key} style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{paddingVertical: hp('0.5%'), width: wp('2.0%'), textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.5%')}}>
                                            </Text>
                                            <TouchableOpacity>
                                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: hp('0.25%'), width: wp('39.0%'), paddingHorizontal: wp('1.0%'), backgroundColor: item.backgroundColor, borderRadius: 5}}>
                                                    <Text style={{width: wp('33.0%'), textAlign: 'left', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                        {item.player1}
                                                    </Text>
                                                    <Text style={{paddingVertical: hp('0.25%'), width: wp('4.0%'), textAlign: 'left', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                        ...
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('4.0%'), textAlign: 'left', color: '#444', fontSize: hp('1.5%')}}>
                                                
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('9.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.runs}
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('9.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.balls}
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('7.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.sec4}
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('7.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.sec6}
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('14.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.sr}
                                            </Text>
                                            <Text style={{paddingVertical: hp('0.5%'), width: wp('3.0%'), textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.5%')}}>
                                            </Text>
                                        </View>
                                    )
                                })
                            }
                            </View>
                            <View style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingVertical: hp('1.0%')}}>
                                <Text style={{width: wp('2.0%'), textAlign: 'right', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                </Text>
                                <Text style={{width: wp('11.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    Extra
                                </Text>
                                <Text style={{width: wp('8.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    nb0
                                </Text>
                                <Text style={{width: wp('8.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    wd1
                                </Text>
                                <Text style={{width: wp('8.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    b0
                                </Text>
                                <Text style={{width: wp('8.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    lb0
                                </Text>
                                <Text style={{width: wp('2.0%'), textAlign: 'right', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                </Text>
                                <Text style={{width: wp('16.0%'), textAlign: 'left', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    Partnership
                                </Text>
                                <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    9
                                </Text>
                                <Text style={{width: wp('7.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    6
                                </Text>
                                <Text style={{width: wp('14.0%'), textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                    1
                                </Text>
                                <Text style={{width: wp('3.0%'), textAlign: 'right', fontWeight: '500', color: '#666', fontSize: hp('1.5%')}}>
                                </Text>
                            </View>
                        </View>
                        <View style={{marginVertical: hp('0.5%'), width: wp('94%'), backgroundColor: '#fff', borderRadius: 5}}>
                            <View style={{flexDirection: 'row', backgroundColor: '#e4e4e4', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('3.0%'), backgroundColor: '#ccc', textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.5%'), borderTopLeftRadius: 5}}>
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('42.0%'), backgroundColor: '#ccc', textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    Bowler
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('9.0%'), backgroundColor: '#ccc', textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    O
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('9.0%'), backgroundColor: '#ccc', textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    M
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('7.0%'), backgroundColor: '#ccc', textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    R
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('7.0%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    W
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('14.0%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                    ECON
                                </Text>
                                <Text style={{paddingVertical: hp('0.5%'), width: wp('3.0%'), textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>
                                </Text>
                            </View>
                            <View style={{paddingVertical: hp('0.25%')}}>
                            {
                                teamData.map((item, key) => {
                                    return (
                                        <View key={item.key} style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{paddingVertical: hp('0.5%'), width: wp('2.0%'), textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.5%')}}>
                                            </Text>
                                            <TouchableOpacity>
                                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: hp('0.25%'), width: wp('39.0%'), paddingHorizontal: wp('1.0%'), backgroundColor: item.backgroundColor, borderRadius: 5}}>
                                                    <Text style={{width: wp('33.0%'), textAlign: 'left', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                        {item.player1}
                                                    </Text>
                                                    <Text style={{paddingVertical: hp('0.25%'), width: wp('4.0%'), textAlign: 'left', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                        ...
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('4.0%'), textAlign: 'left', color: '#444', fontSize: hp('1.5%')}}>
                                                
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('9.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.runs}
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('9.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.balls}
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('7.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.sec4}
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('7.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.sec6}
                                            </Text>
                                            <Text style={{marginVertical: hp('0.25%'), paddingVertical: hp('0.25%'), width: wp('14.0%'), textAlign: 'center', fontWeight: '400', color: '#444', fontSize: hp('1.5%')}}>
                                                {item.sr}
                                            </Text>
                                            <Text style={{paddingVertical: hp('0.5%'), width: wp('3.0%'), textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.5%')}}>
                                            </Text>
                                        </View>
                                    )
                                })
                            }
                            </View>
                        </View>
                        <View style={{marginVertical: hp('1.5%'), width: wp('94%')}}>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#444'}}>
                                    <Text style={{fontWeight: '600', color: '#444', fontSize: hp('2.0%')}}>0</Text>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#444'}}>
                                    <Text style={{fontWeight: '600', color: '#444', fontSize: hp('2.0%')}}>1</Text>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#444'}}>
                                        <Text style={{fontWeight: '600', color: '#444', fontSize: hp('2.0%')}}>2</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#444'}}>
                                        <Text style={{fontWeight: '600', color: '#444', fontSize: hp('2.0%')}}>3</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), backgroundColor: '#2d9af9', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#2d9af9'}}>
                                        <Text style={{fontWeight: '600', color: '#fff', fontSize: hp('2.0%')}}>4</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), backgroundColor: '#78b66d', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#78b66d'}}>
                                        <Text style={{fontWeight: '600', color: '#fff', fontSize: hp('2.0%')}}>6</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#444'}}>
                                        <Text style={{fontWeight: '600', color: '#444', fontSize: hp('2.0%')}}>5+</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('7.0%'), height: hp('4.75%'), backgroundColor: '#bfc4ca', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#bfc4ca'}}>
                                        <Icon name='exit-to-app' type='material' color='#444' size={hp('3.0%')} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), backgroundColor: '#3162be', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#3162be'}}>
                                        <Text style={{lineHeight: hp('1.25%'), fontWeight: '600', color: '#fff', fontSize: hp('1.25%')}}>NO</Text>
                                        <Text style={{lineHeight: hp('1.25%'), fontWeight: '600', color: '#fff', fontSize: hp('1.25%')}}>BALL</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), backgroundColor: '#3162be', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#3162be'}}>
                                        <Text style={{lineHeight: hp('1.25%'), fontWeight: '600', color: '#fff', fontSize: hp('1.25%')}}>BYE</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), backgroundColor: '#3162be', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#3162be'}}>
                                        <Text style={{lineHeight: hp('1.25%'), fontWeight: '600', color: '#fff', fontSize: hp('1.25%')}}>LEG</Text>
                                        <Text style={{lineHeight: hp('1.25%'), fontWeight: '600', color: '#fff', fontSize: hp('1.25%')}}>BYE</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), backgroundColor: '#cb1d1e', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#cb1d1e'}}>
                                        <Text style={{lineHeight: hp('1.0%'), fontWeight: '600', color: '#fff', fontSize: hp('1.0%')}}>WICKET</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{width: hp('4.75%'), height: hp('4.75%'), backgroundColor: '#3162be', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#3162be'}}>
                                        <Text style={{lineHeight: hp('1.25%'), fontWeight: '600', color: '#fff', fontSize: hp('1.25%')}}>END</Text>
                                        <Text style={{lineHeight: hp('1.25%'), fontWeight: '600', color: '#fff', fontSize: hp('1.25%')}}>OVER</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{width: hp('2.5%')}}></View>
                                <TouchableOpacity>
                                    <View style={{width: hp('15%'), height: hp('4.75%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#2d9af9'}}>
                                        <Text style={{fontWeight: '600', color: '#666', fontSize: hp('1.5%')}}>MATCH ACTIONS</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <BallByBall />
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

export default ScoreEntryScreen

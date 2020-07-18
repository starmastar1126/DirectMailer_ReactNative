import React from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const teamData = [
    {key: '1', num: 0, firstname: 'DINESH', lastname: 'KARTHIK', teamImage: require('../../assets/images/KKR.png'), playerImage: require('../../assets/images/matchcenter-teams-player.png')},
    {key: '2', num: 1, firstname: 'DINESH', lastname: 'KARTHIK', teamImage: require('../../assets/images/KKR.png'), playerImage: require('../../assets/images/matchcenter-teams-player.png')},
    {key: '3', num: 2, firstname: 'DINESH', lastname: 'KARTHIK', teamImage: require('../../assets/images/KKR.png'), playerImage: require('../../assets/images/matchcenter-teams-player.png')},
    {key: '4', num: 3, firstname: 'DINESH', lastname: 'KARTHIK', teamImage: require('../../assets/images/KKR.png'), playerImage: require('../../assets/images/matchcenter-teams-player.png')},
    {key: '5', num: 4, firstname: 'DINESH', lastname: 'KARTHIK', teamImage: require('../../assets/images/KKR.png'), playerImage: require('../../assets/images/matchcenter-teams-player.png')},
    {key: '6', num: 5, firstname: 'DINESH', lastname: 'KARTHIK', teamImage: require('../../assets/images/KKR.png'), playerImage: require('../../assets/images/matchcenter-teams-player.png')},
    {key: '7', num: 6, firstname: 'DINESH', lastname: 'KARTHIK', teamImage: require('../../assets/images/KKR.png'), playerImage: require('../../assets/images/matchcenter-teams-player.png')},
    {key: '8', num: 7, firstname: 'DINESH', lastname: 'KARTHIK', teamImage: require('../../assets/images/KKR.png'), playerImage: require('../../assets/images/matchcenter-teams-player.png')},
]

const PlayerDetailsItem = props => {
    const {
        playerDetailsItem,
        onSelectItem,
    } = props;
    return (
        <TouchableOpacity onPress={onSelectItem}>
            <View style={{paddingTop: hp('0.5%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2d2362', height: hp('18%'), width: hp('15%'), alignItems: 'center'}}>
                <Image source={playerDetailsItem.playerImage} style={{width: hp('15%'), height: hp('9.5%'), resizeMode: 'contain'}} />
                <ImageBackground
                    resizeMode={'stretch'}
                    source={require('../../assets/images/matchcenter-teams-bottombar.jpg')}
                    style={{width: hp('15%'), height: hp('8.0%')}}
                >
                    <View style={{width: hp('15%'), height: hp('8.0%'), flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{width: hp('15%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight: '500', color: '#fff', fontSize: hp('1.25%')}}>
                                {playerDetailsItem.firstname}
                            </Text>
                            <Text style={{fontWeight: '500', color: '#fff', fontSize: hp('1.25%')}}>
                                {playerDetailsItem.lastname}
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <View style={{width: hp('5.0%'), flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                                <Text style={{fontWeight: '400', color: '#fff', fontSize: hp('0.9%')}}>
                                    Matches
                                </Text>
                                <Text style={{fontWeight: '400', color: '#fff', fontSize: hp('1.0%')}}>
                                    16
                                </Text>
                            </View>
                            <View style={{width: hp('4.0%'), flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', borderLeftColor: '#888', borderLeftWidth: 1, borderRightColor: '#888', borderRightWidth: 1}}>
                                <Text style={{fontWeight: '400', color: '#fff', fontSize: hp('0.9%')}}>
                                    Runs
                                </Text>
                                <Text style={{fontWeight: '400', color: '#fff', fontSize: hp('1.0%')}}>
                                    498
                                </Text>
                            </View>
                            <View style={{width: hp('5.0%'), flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                                <Text style={{fontWeight: '400', color: '#fff', fontSize: hp('0.9%')}}>
                                    Wickets
                                </Text>
                                <Text style={{fontWeight: '400', color: '#fff', fontSize: hp('1.0%')}}>
                                    0
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <Image source={playerDetailsItem.teamImage} style={{top: hp('0.0%'), position: 'absolute', width: hp('15%'), height: hp('10%'), resizeMode: 'cover', opacity: 0.5, zIndex: -1}} />
            </View>
        </TouchableOpacity>
    )
}

const PlayerDetailsList = props => {
    const {
        onSelectPlayer,
    } = props;

    return (
        <View>
        {
            teamData.map((item, key) => {
                if (key % 3 == 1) {
                    if ((key + 2) <= teamData.length)
                        return (
                            <View key={key} style={{marginVertical: hp('0.5%'), width: wp('94%')}}>
                                <View style={{width: wp('94%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: hp('1.5%')}}>
                                    <PlayerDetailsItem playerDetailsItem={teamData[key - 1]} onSelectItem={onSelectPlayer} />
                                    <PlayerDetailsItem playerDetailsItem={teamData[key]} onSelectItem={onSelectPlayer} />
                                    <PlayerDetailsItem playerDetailsItem={teamData[key + 1]} onSelectItem={onSelectPlayer} />
                                </View>
                            </View>
                        )
                    else if ((key + 1) <= teamData.length)
                        return (
                            <View key={key} style={{marginVertical: hp('0.5%'), width: wp('94%')}}>
                                <View style={{width: wp('94%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: hp('1.5%')}}>
                                    <PlayerDetailsItem playerDetailsItem={teamData[key - 1]} onSelectItem={onSelectPlayer} />
                                    <PlayerDetailsItem playerDetailsItem={teamData[key]} onSelectItem={onSelectPlayer} />
                                    <View style={{width: hp('15.0%')}}></View>
                                </View>
                            </View>
                        )
                    else
                        return (
                            <View key={key} style={{marginVertical: hp('0.5%'), width: wp('94%')}}>
                                <View style={{width: wp('94%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: hp('1.5%')}}>
                                    <PlayerDetailsItem playerDetailsItem={teamData[key - 1]} onSelectItem={onSelectPlayer} />
                                    <View style={{width: hp('15.0%')}}></View>
                                    <View style={{width: hp('15.0%')}}></View>
                                </View>
                            </View>
                        )
                }
            })
        }
        </View>
    );
};

export default PlayerDetailsList;

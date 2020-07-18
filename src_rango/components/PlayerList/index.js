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

const PlayerItem = props => {
    const {
        playerItem,
        onSelectItem,
    } = props;
    return (
        <TouchableOpacity onPress={onSelectItem}>
            <View style={{paddingTop: hp('1.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2d2362', height: hp('16%'), width: hp('14%'), alignItems: 'center'}}>
                <Image source={playerItem.playerImage} style={{width: hp('14%'), height: hp('11%'), resizeMode: 'contain'}} />
                <ImageBackground
                    resizeMode={'stretch'}
                    source={require('../../assets/images/matchcenter-teams-bottombar.jpg')}
                    style={{width: hp('14%'), height: hp('4.0%')}}
                >
                    <View style={{width: hp('14%'), height: hp('4.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: '500', color: '#fff', fontSize: hp('1.25%')}}>
                            {playerItem.firstname}
                        </Text>
                        <Text style={{fontWeight: '500', color: '#fff', fontSize: hp('1.25%')}}>
                            {playerItem.lastname}
                        </Text>
                    </View>
                </ImageBackground>
                <Image source={playerItem.teamImage} style={{top: hp('0.0%'), position: 'absolute', width: hp('14%'), height: hp('12%'), resizeMode: 'cover', opacity: 0.5, zIndex: -1}} />
            </View>
        </TouchableOpacity>
    )
}


const PlayerList = props => {
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
                                    <PlayerItem playerItem={teamData[key - 1]} onSelectItem={onSelectPlayer} />
                                    <PlayerItem playerItem={teamData[key]} onSelectItem={onSelectPlayer} />
                                    <PlayerItem playerItem={teamData[key + 1]} onSelectItem={onSelectPlayer} />
                                </View>
                            </View>
                        )
                    else if ((key + 1) <= teamData.length)
                        return (
                            <View key={key} style={{marginVertical: hp('0.5%'), width: wp('94%')}}>
                                <View style={{width: wp('94%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: hp('1.5%')}}>
                                    <PlayerItem playerItem={teamData[key - 1]} onSelectItem={onSelectPlayer} />
                                    <PlayerItem playerItem={teamData[key]} onSelectItem={onSelectPlayer} />
                                    <View style={{width: hp('14.0%')}}></View>
                                </View>
                            </View>
                        )
                    else
                        return (
                            <View key={key} style={{marginVertical: hp('0.5%'), width: wp('94%')}}>
                                <View style={{width: wp('94%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: hp('1.5%')}}>
                                    <PlayerItem playerItem={teamData[key - 1]} onSelectItem={onSelectPlayer} />
                                    <View style={{width: hp('14.0%')}}></View>
                                    <View style={{width: hp('14.0%')}}></View>
                                </View>
                            </View>
                        )
                }
            })
        }
        </View>
    );
};

export default PlayerList;

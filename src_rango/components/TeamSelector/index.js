import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const TeamSelector = props => {
    const {
        selectedTeam,
        leftTeamName,
        leftTeamImage,
        selectedBackgroundColor,
        rightTeamName,
        rightTeamImage,
        changeSelectedTeam,
    } = props;

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: hp('0.5%'), borderBottomColor: '#ffd300', borderBottomWidth: hp('0.5%'), borderRadius: 5}}>
        <TouchableOpacity style={[{width: wp('47%'), paddingVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5}, selectedTeam == leftTeamName ? {backgroundColor: selectedBackgroundColor} : {backgroundColor: '#fff'}]} onPress={() => changeSelectedTeam(leftTeamName)}>
            <Image source={leftTeamImage} style={{width: hp('5%'), height: hp('5%'), resizeMode: 'contain'}} />
            <Text style={[{paddingHorizontal: wp('4.0%'), fontWeight: '500', fontSize: hp('1.8%')}, selectedTeam == leftTeamName ? {color: '#fff'} : {color: '#222'}]}>
                {leftTeamName}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{width: wp('47%'), paddingVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 5}, selectedTeam == rightTeamName ? {backgroundColor: selectedBackgroundColor} : {backgroundColor: '#fff'}]} onPress={() => changeSelectedTeam(rightTeamName)}>
            <Image source={rightTeamImage} style={{width: hp('5%'), height: hp('5%'), resizeMode: 'contain'}} />
            <Text style={[{paddingHorizontal: wp('4.0%'), fontWeight: '500', color: '#222', fontSize: hp('1.8%')}, selectedTeam == rightTeamName ? {color: '#fff'} : {color: '#222'}]}>
                {rightTeamName}
            </Text>
        </TouchableOpacity>
    </View>
  );
};

export default TeamSelector;

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const LeftIconButton = props => {
  const {
    title,
    backgroundColor,
    iconName,
    iconType,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{paddingVertical: hp('1.0%'), width: wp('45%'), borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor}}>
            <View style={{width: wp('12%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={iconName} type={iconType} color='#fff' size={hp('5.0%')} />
            </View>
            <View style={{width: wp('33%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: '500', color: '#fff', fontSize: hp('2.0%'), letterSpacing: 1}}>{title}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
};

export default LeftIconButton;

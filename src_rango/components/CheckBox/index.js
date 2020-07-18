import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const CheckBox = props => {
  const {
    checked,
    iconColor,
    text,
    fontSize=hp('2.0%'),
    onPress,
    width,
  } = props;

  return (
    <TouchableOpacity style={[styles.container, {width: width}]} onPress={onPress}>
      <Icon name={checked ? 'check-circle-outline' : 'checkbox-blank-circle-outline'} type='material-community' color={iconColor} size={hp('2.5%')} />
      <Text style={[styles.text, {width: width - wp('2.0%') - hp('2.5%')}, {fontSize: fontSize}]}>
          {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;

import React from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const LeftIconInputBox = props => {
  const {
    iconType,
    iconName,
    iconColor,
    placeholder,
    secureTextEntry,
  } = props;

  return (
    <View style={styles.container}>
        <Icon name={iconName} type={iconType} color={iconColor} size={hp('3.0%')} />
        <TextInput style={styles.textInput} placeholder={placeholder} secureTextEntry={secureTextEntry} />
    </View>
  );
};

export default LeftIconInputBox;

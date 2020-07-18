import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const LeftIconInputBox = props => {
  const {
    selected,
    image,
    text,
    onPress,
  } = props;

  return (
    <View style={styles.container}>
        <View style={styles.avatarImageView}>
            <Image source={image} style={[styles.avatarImage, !(selected) ? styles.unselectedImage : null]} />
        </View>
        <View style={styles.textView}>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.text, !(selected) ? styles.unselectedText : null]}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default LeftIconInputBox;

import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const HeaderBanner = props => {
  const {
      slogan,
  } = props;

  return (
    <View style={styles.container}>
        <View style={styles.flagView}>
            <View style={[styles.triangle, styles.leftTriangle]}></View>
            <View style={styles.square}></View>
        </View>
        <Text style={styles.centerSloganText}>{slogan}</Text>
        <View style={styles.flagView}>
            <View style={styles.square}></View>
            <View style={[styles.triangle, styles.rightTriangle]}></View>
        </View>
    </View>
  );
};

export default HeaderBanner;

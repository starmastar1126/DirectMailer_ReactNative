import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const SocialShareIconsGroup = props => {
  const {
  } = props;

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.socialIconView}>
            <Icon iconStyle={{backgroundColor: '#463d8e', borderRadius: 100, padding: hp('0.5%'), opacity: 0.8}} name='facebook' type='material-community' color='#fff' size={hp('2.25%')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconView}>
            <Icon iconStyle={{backgroundColor: '#463d8e', borderRadius: 100, padding: hp('0.5%'), opacity: 0.8}} name='twitter' type='material-community' color='#fff' size={hp('2.25%')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconView}>
            <Icon iconStyle={{backgroundColor: '#463d8e', borderRadius: 100, padding: hp('0.5%'), opacity: 0.8}} name='google-plus' type='material-community' color='#fff' size={hp('2.25%')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconView}>
            <Icon iconStyle={{backgroundColor: '#463d8e', borderRadius: 100, padding: hp('0.5%'), opacity: 0.8}} name='youtube' type='material-community' color='#fff' size={hp('2.25%')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconView}>
            <Icon iconStyle={{backgroundColor: '#463d8e', borderRadius: 100, padding: hp('0.5%'), opacity: 0.8}} name='pinterest' type='material-community' color='#fff' size={hp('2.25%')} />
        </TouchableOpacity>
    </View>
  );
};

export default SocialShareIconsGroup;

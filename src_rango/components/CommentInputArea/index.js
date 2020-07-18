import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const CommentInputArea = props => {
    const {
    } = props;

    return (
        <View style={{backgroundColor: '#fff', height: hp('8.0%'), marginVertical: hp('2.0%'), width: wp('100%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: wp('86%'), paddingHorizontal: wp('3.0%'), paddingVertical: hp('0.25%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style={{width: wp('80%'), height: hp('7.5%'), color: '#666', fontSize: hp('1.5%')}}
                    placeholder = 'Type a Comment ...'
                    multiline={true}
                />
            </View>
            <TouchableOpacity>
                <View style={{backgroundColor: '#3dc9ec', width: wp('14%'), height: hp('8.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='paper-plane-o' type='font-awesome' color='#fff' size={hp('2.5%')} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CommentInputArea;

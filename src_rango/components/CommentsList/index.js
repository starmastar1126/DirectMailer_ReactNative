import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const CommentsList = props => {
    const {
        commentsList,
        onSelectLike,
    } = props;

    return (
        <View style={{width: wp('94%'), alignItems: 'center', paddingVertical: hp('0.5%')}}>
        {
            commentsList.map((item, key) => {
                return (
                    <View key={key} style={{paddingVertical: hp('0.5%'), width: wp('94%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
                        <Image source={item.avatar} style={{width: hp('8%'), height: hp('8%'), resizeMode: 'cover', borderRadius: 100}} />
                        <View style={{width: wp('70%'), flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{width: wp('70%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={{color: '#20d39b', fontSize: hp('2.0%')}}>{item.name}</Text>
                                <Text style={{color: '#444', fontSize: hp('1.25%')}}>{item.datetime}</Text>
                            </View>
                            <Text style={{width: wp('70%'), textAlign: 'left', color: '#444', fontSize: hp('1.25%')}}>
                                {item.post}
                            </Text>
                            <View style={{paddingVertical: hp('0.25%'), width: wp('70%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <View style={{width: wp('24%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <TouchableOpacity>
                                        <Text style={{textAlign: 'left', color: '#444', fontSize: hp('1.25%')}}>Reply</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onSelectLike(key, item.like, item.likeNum)}>
                                        <Text style={[{textAlign: 'left', paddingHorizontal: wp('3.0%'), fontSize: hp('1.25%')}, item.like ? {color: '#dc5252'} : {color: '#444'}]}>{item.like ? 'You Like' : 'Like ?'}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                                    <TouchableOpacity style={{width: wp('5%'), alignSelf: 'center'}}>
                                        <Icon name='heart' type='antdesign' size={hp('1.25%')} color={item.like ? '#dc5252' : '#444'} />
                                    </TouchableOpacity>
                                    <Text style={{textAlign: 'right', color: '#444', fontSize: hp('1.25%')}}>{item.likeNum}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
        </View>
    );
};

export default CommentsList;

import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import images from '../../constants/images';
import styles from './styles';

const newsList = [
    {key: 0, image: images.teamProfileNewsJpg, subject: 'FINAL: ENGLAND VS SCOTLAND 2018', date: '19 May 2018', time: '2 min ago', view: '145,5655', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.'},
    {key: 1, image: images.teamProfileNewsJpg, subject: 'FINAL: ENGLAND VS SCOTLAND 2018', date: '19 May 2018', time: '2 min ago', view: '821,2318', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.'},
    {key: 2, image: images.teamProfileNewsJpg, subject: 'FINAL: ENGLAND VS SCOTLAND 2018', date: '19 May 2018', time: '2 min ago', view: '72,3908', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.'},
    {key: 3, image: images.teamProfileNewsJpg, subject: 'FINAL: ENGLAND VS SCOTLAND 2018', date: '19 May 2018', time: '2 min ago', view: '10,4327', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum. Nullam pharetra turpis in dignissim dignissim. Ut dapibus leo id neque pellentesque, at viverra nisl condimentum.'},
]

const NewsList = props => {
    const {
        navigation,
    } = props;

    return (
        <View style={{width: wp('100%'), alignItems: 'center', paddingVertical: hp('0.5%')}}>
        {
            newsList.map((item, key) => {
                return (
                    <View key={key} style={{paddingHorizontal: wp('3.0%'), paddingVertical: hp('0.5%'), width: wp('100%'), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('NewsDetails')}>
                            <Image source={item.image} style={{marginTop: hp('0.5%'), width: wp('30%'), height: wp('18%'), resizeMode: 'contain'}} />
                        </TouchableOpacity>
                        <View style={{paddingLeft: wp('2.0%'), width: wp('64%'), flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('NewsDetails')}>
                                <Text style={{width: wp('62%'), textAlign: 'left', fontWeight: '500', color: '#222', fontSize: hp('1.5%')}}>{item.subject}</Text>
                            </TouchableOpacity>
                            <Text style={{width: wp('62%'), textAlign: 'left', color: '#444', fontSize: hp('1.25%')}}>
                                {item.post}
                            </Text>
                            <View style={{width: wp('62%'), marginVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                    <Icon name='calendar' type='font-awesome' color='#222' size={hp('1.25%')} />
                                    <Text style={{paddingHorizontal: wp('1.0%'), textAlign: 'left', fontWeight: '400', color: '#222', fontSize: hp('1.0%')}}>{item.date}</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                    <Icon name='clock' type='feather' color='#222' size={hp('1.25%')} />
                                    <Text style={{paddingHorizontal: wp('1.0%'), textAlign: 'left', fontWeight: '400', color: '#222', fontSize: hp('1.0%')}}>{item.time}</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                    <Icon name='eye' type='feather' color='#222' size={hp('1.25%')} />
                                    <Text style={{paddingHorizontal: wp('1.0%'), textAlign: 'left', fontWeight: '400', color: '#222', fontSize: hp('1.0%')}}>{item.view}</Text>
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

export default NewsList;

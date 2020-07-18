import React from 'react';
import { TouchableOpacity, View, ScrollView, Image, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import images from '../../constants/images';
import styles from './styles';

const slideImages = [
    {key: '1', leftImage: images.leftPlayerJpg, rightImage: images.rightPlayerJpg, leftTeam: 'CHENNAI SUPER KING', rightTeam: 'KOLKATA KNIGHT RIDERS', matchDate: '16 JULY 2018'},
    {key: '2', leftImage: images.leftPlayerJpg, rightImage: images.rightPlayerJpg, leftTeam: 'CHENNAI SUPER KING', rightTeam: 'KOLKATA KNIGHT RIDERS', matchDate: '16 JULY 2018'},
    {key: '3', leftImage: images.leftPlayerJpg, rightImage: images.rightPlayerJpg, leftTeam: 'CHENNAI SUPER KING', rightTeam: 'KOLKATA KNIGHT RIDERS', matchDate: '16 JULY 2018'},
    {key: '4', leftImage: images.leftPlayerJpg, rightImage: images.rightPlayerJpg, leftTeam: 'CHENNAI SUPER KING', rightTeam: 'KOLKATA KNIGHT RIDERS', matchDate: '16 JULY 2018'},
]

const ImageSlide = props => {
    const {
        backgroundColor='#f5f5f5',
        onSelectMatch,
    } = props;

    return (
        <View style={{width: wp('100%'), height: hp('24%'), backgroundColor: backgroundColor, paddingTop: hp('1%'), paddingBottom: hp('3%'), paddingHorizontal: hp('0.0')}}>
            <ScrollView horizontal={true} style={{paddingVertical: hp('1%')}}>
            {
                slideImages.map((item, key) => {
                    return (
                        <TouchableOpacity key={key} style={[{flexDirection: 'row', width: hp('32%'), alignItems: 'center', justifyContent: 'center', marginRight: hp('1.0%')}, item.key == 1 ? {marginLeft: hp('2.0%')} : {marginLeft: hp('1.0%')}, item.key == slideImages.length ? {marginRight: hp('2.0%')} : {marginRight: hp('1.0%')}]}
                            onPress={onSelectMatch}
                        >
                            <Image source={item.leftImage} style={{width: hp('16%'), height: hp('18%'), resizeMode: 'cover', borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} />
                            <Image source={item.rightImage} style={{width: hp('16%'), height: hp('18%'), resizeMode: 'cover', borderTopRightRadius: 5, borderBottomRightRadius: 5}} />
                            <View style={{top: hp('7.0%'), width: hp('30%'), height: hp('10%'), position: 'absolute', alignItems: 'center'}}>
                                <Text style={{width: hp('30%'), textAlign: 'center', fontWeight: '500', color: 'white', fontSize: hp('1.5%'), paddingBottom: hp('0.5%')}}>{item.matchDate}</Text>
                                <Image source={images.slideWingPng} style={{marginTop: hp('2.3%'), width: hp('30%'), height: hp('4.0%'), resizeMode: 'stretch'}} />
                                <Image source={images.shieldPng} style={{top: hp('2.5%'), width: hp('7%'), height: hp('8%'), resizeMode: 'stretch', position: 'absolute'}} />
                                <View style={{top: hp('4.0%'), width: hp('30%'), height: hp('4.5%'), position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                                    <View style={{paddingTop: hp('1.0%'), paddingBottom: hp('0.5%'), width: hp('12%'), alignItems: 'center', paddingLeft: hp('0.75%'), paddingRight: hp('0.0%'), flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                                        <Text style={{width: hp('9.0%'), textAlign: 'center', fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>{item.leftTeam}</Text>
                                    </View>
                                    <View style={{width: hp('6%'), alignItems: 'center', paddingHorizontal: hp('1.0%'), flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingTop: hp('0.5%')}}>
                                        <Text style={{width: hp('4%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%')}}>LIVE</Text>
                                        <Text style={{width: hp('4%'), textAlign: 'center', fontWeight: '500', color: '#222', fontSize: hp('2.0%'), paddingHorizontal: hp('0.5%')}}>VS</Text>
                                    </View>
                                    <View style={{paddingTop: hp('1.0%'), paddingBottom: hp('0.5%'), width: hp('12%'), alignItems: 'center', paddingLeft: hp('0.0%'), paddingRight: hp('0.75%'), flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                                        <Text style={{width: hp('9.0%'), textAlign: 'center', fontWeight: '400', color: 'white', fontSize: hp('1.0%')}}>{item.rightTeam}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
            </ScrollView>
        </View>
    );
};

export default ImageSlide;

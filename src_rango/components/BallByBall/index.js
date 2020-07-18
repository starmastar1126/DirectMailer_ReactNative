import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from './styles';

const BallByBall = props => {
    const {
    } = props;

    return (
        <View style={{marginVertical: hp('0.5%'), width: wp('94%'), backgroundColor: '#fff', borderBottomColor:'#3dc9ec', borderBottomWidth: hp('0.5%'), borderRadius: 5}}>
            <View style={{flexDirection: 'row', backgroundColor: '#3dc9ec', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingVertical: hp('0.5%')}}>
                <Text style={{width: wp('88.0%'), textAlign: 'left', fontWeight: '500', color: '#eee', fontSize: hp('1.7%')}}>
                    BALL BY BALL
                </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{backgroundColor: '#d7dee4', width: wp('47%'), flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingVertical: hp('0.5%')}}>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Icon name='left' type='antdesign' color='#444' size={hp('1.25%')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.0%'), padding: hp('0.25%')}}>
                            OVER1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#888', borderWidth: 1, borderRadius: 5}}>
                            0
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#fff', backgroundColor: '#2d9af9', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#2d9af9', borderWidth: 1, borderRadius: 5}}>
                            4
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#fff', backgroundColor: '#77b56c', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#77b56c', borderWidth: 1, borderRadius: 5}}>
                            6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#fff', backgroundColor: '#cb1e1d', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#cb1e1d', borderWidth: 1, borderRadius: 5}}>
                            w
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#888', borderWidth: 1, borderRadius: 5}}>
                            2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#888', borderWidth: 1, borderRadius: 5}}>
                            0
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#e7ecf0', width: wp('47%'), flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingVertical: hp('0.5%')}}>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'left', fontWeight: '500', color: '#444', fontSize: hp('1.0%'), padding: hp('0.25%')}}>
                            OVER2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#888', borderWidth: 1, borderRadius: 5}}>
                            0
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#fff', backgroundColor: '#2d9af9', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#2d9af9', borderWidth: 1, borderRadius: 5}}>
                            4
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#fff', backgroundColor: '#77b56c', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#77b56c', borderWidth: 1, borderRadius: 5}}>
                            6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#fff', backgroundColor: '#cb1e1d', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#cb1e1d', borderWidth: 1, borderRadius: 5}}>
                            w
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#888', borderWidth: 1, borderRadius: 5}}>
                            2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', color: '#666', fontSize: hp('1.25%'), paddingHorizontal: hp('0.5%'), borderColor: '#888', borderWidth: 1, borderRadius: 5}}>
                            0
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Icon name='right' type='antdesign' color='#444' size={hp('1.25%')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default BallByBall;

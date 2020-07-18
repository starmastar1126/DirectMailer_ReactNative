import React from 'react';
import { StatusBar, View, TouchableOpacity, Text, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SignButton from '../../components/SignButton';
import LeftIconInputBox from '../../components/LeftIconInputBox';
import CheckBox from '../../components/CheckBox';

import styles from './styles';

class SigninScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isForgotPasswordModalVisible: false,
            verificationStep: 'sendVerificationCodeToEmail',
            rememberMe: false,
        };
    }

    setForgotPasswordModalVisible(visible) {
        this.setState({isForgotPasswordModalVisible: visible});
        this.setState({verificationStep: 'sendVerificationCodeToEmail'});
    }

    sendVerificationCodeToEmail = () => {
        this.setState({verificationStep: 'sendVerificationCodeToEmailError'});
    }

    resendVerificationCodeToEmail = () => {
        this.setState({verificationStep: 'sendVerificationCodeToServer'});
    }

    sendVerificationCodeToServer = () => {
        this.setState({verificationStep: 'changePassword'});
    }

    changePassword = () => {
        this.setForgotPasswordModalVisible(false);
    }

    setRememberMe = () => {
        if (this.state.rememberMe == false)
            this.setState({rememberMe: true});
        else
            this.setState({rememberMe: false});
    }

    login = () => {
        StatusBar.setBarStyle('light-content', true);
        this.props.navigation.navigate('HomeDrawNav');
    }

    render() {
        return (
            <View style={styles.centerAlign}>
                <StatusBar barStyle="dark-content" />
                <View style={{height: hp('4.0%')}}></View>
                <View style={styles.backIconView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Icon name='arrow-left' type='material-community' color='#888' size={hp('4%')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.screenTitleText}>
                    SIGN IN
                </Text>
                <View style={styles.inputContainer}>
                    <LeftIconInputBox iconName='user' iconType='simple-line-icon' iconColor='#27ae60' placeholder='E-mail' secureTextEntry={false} />
                    <LeftIconInputBox iconName='lock' iconType='simple-line-icon' iconColor='#27ae60' placeholder='Password' secureTextEntry={true} />
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <CheckBox width={wp('50%')} checked={this.state.rememberMe} iconColor='#27ae60' text='Remember me' onPress={() => this.setRememberMe()} />
                        <View style={[styles.forgotPasswordView, styles.rightAlign]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setForgotPasswordModalVisible(true);
                                }}>
                                <Text style={styles.forgotPasswordText}>
                                    Forgot password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{height: hp('30.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.signButtonView}>
                        <SignButton title='SIGN IN'
                            onPress={() =>
                                this.login()
                            }>
                        </SignButton>
                    </View>
                    <View style={styles.bottomBar}>
                        <Text style={[styles.bottomBarText, styles.textColor]}>
                            Create new account.
                        </Text>
                        <View style={styles.rightAlign}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                                <Text style={[styles.bottomBarText, styles.primaryColor]}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.isForgotPasswordModalVisible}
                        >
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <StatusBar backgroundColor="rgba(0,0,0,0.6)" barStyle="light-content" />
                            <TouchableOpacity activeOpacity={1.0} style={{width: wp('100%'), height: hp('100%'), backgroundColor: '#000', opacity: 0.6}}
                                onPressIn={() => {
                                    this.setForgotPasswordModalVisible(false);
                                }}
                                >
                            </TouchableOpacity>
                            {
                                this.state.verificationStep == 'sendVerificationCodeToEmail' ? (
                                    <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: wp('80%'), height: hp('30%'), backgroundColor: '#f5f5f5', position: 'absolute', borderRadius: 2, elevation: 10}}
                                        >
                                        <Text style={{width: wp('72%'), textAlign: 'center', color: '#888', fontSize: hp('2.0%')}}>Please type your account email address.</Text>
                                        <TextInput placeholder='Email' style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%'), fontSize: hp('2.0%'), color: '#444', width: wp('72%'), borderWidth: 1, borderColor: '#ccc', borderRadius: 5}} />
                                        <TouchableOpacity onPress={() => this.sendVerificationCodeToEmail()}>
                                            <Text style={{width: wp('72%'), textAlign: 'center', color: '#fff', fontWeight: '400', fontSize: hp('2.25%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%'), backgroundColor: '#27ae60', borderRadius: 5}}>
                                                Send a Verification Code
                                            </Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>)
                                : null
                            }
                            {
                                this.state.verificationStep == 'sendVerificationCodeToEmailError' ? (
                                    <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: wp('80%'), height: hp('30%'), backgroundColor: '#f5f5f5', position: 'absolute', borderRadius: 2, elevation: 10}}
                                    >
                                        <Text style={{width: wp('72%'), textAlign: 'center', color: '#888', fontSize: hp('2.0%')}}>We did not send a vefification code to your email.</Text>
                                        <TouchableOpacity onPress={() => this.resendVerificationCodeToEmail()}>
                                            <Text style={{width: wp('72%'), textAlign: 'center', color: '#fff', fontWeight: '400', fontSize: hp('2.25%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%'), backgroundColor: '#27ae60', borderRadius: 5}}>
                                                Resend a Verification Code
                                            </Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                ) : null
                            }
                            {
                                this.state.verificationStep == 'sendVerificationCodeToServer' ? (
                                    <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: wp('80%'), height: hp('30%'), backgroundColor: '#f5f5f5', position: 'absolute', borderRadius: 2, elevation: 10}}
                                    >
                                        <Text style={{width: wp('72%'), textAlign: 'center', color: '#888', fontSize: hp('2.0%')}}>We sent a verification code to your email.</Text>
                                        <TextInput placeholder='Verification Code' style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%'), fontSize: hp('2.0%'), color: '#444', width: wp('72%'), borderWidth: 1, borderColor: '#ccc', borderRadius: 5}} />
                                        <TouchableOpacity onPress={() => this.sendVerificationCodeToServer()}>
                                            <Text style={{width: wp('72%'), textAlign: 'center', color: '#fff', fontWeight: '400', fontSize: hp('2.25%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%'), backgroundColor: '#27ae60', borderRadius: 5}}>
                                                Send the Verification Code
                                            </Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                ) : null
                            }
                            {
                                this.state.verificationStep == 'changePassword' ? (
                                    <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: wp('80%'), height: hp('30%'), backgroundColor: '#f5f5f5', position: 'absolute', borderRadius: 2, elevation: 10}}
                                    >
                                        <Text style={{width: wp('72%'), textAlign: 'center', color: '#888', fontSize: hp('2.0%')}}>Please type your new password.</Text>
                                        <TextInput placeholder='New Password' style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%'), fontSize: hp('2.0%'), color: '#444', width: wp('72%'), borderWidth: 1, borderColor: '#ccc', borderRadius: 5}} />
                                        <TextInput placeholder='Confirm Password' style={{paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.5%'), fontSize: hp('2.0%'), color: '#444', width: wp('72%'), borderWidth: 1, borderColor: '#ccc', borderRadius: 5}} />
                                        <TouchableOpacity onPress={() => this.changePassword()}>
                                            <Text style={{width: wp('72%'), textAlign: 'center', color: '#fff', fontWeight: '400', fontSize: hp('2.25%'), paddingHorizontal: wp('2.0%'), paddingVertical: hp('0.75%'), backgroundColor: '#27ae60', borderRadius: 5}}>
                                                Change Password
                                            </Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                ) : null
                            }
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }

}

export default SigninScreen

import React from 'react';
import { StatusBar, View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SignButton from '../../components/SignButton';
import LeftIconInputBox from '../../components/LeftIconInputBox';
import LeftAvatarSelector from '../../components/LeftAvatarSelector';
import CheckBox from '../../components/CheckBox';
import images from '../../constants/images'
import styles from '../Signin/styles';
import RightIconInputBox from '../../components/RightIconInputBox';

class SignupScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            agreeTerms: false,
            userGroup: 'player',
            hidePassword: true,
        };
    }

    setAgreeTerms = () => {
        if (this.state.agreeTerms == false)
            this.setState({agreeTerms: true});
        else
            this.setState({agreeTerms: false});
    }

    selectUserGroup = (text) => {
        this.setState({userGroup: text});
    }

    onClickEyeIcon = () => {
        if (this.state.hidePassword == true)
            this.setState({hidePassword: false});
        else
            this.setState({hidePassword: true});
    }

    gotoNextScreen = () => {
        StatusBar.setBarStyle('light-content', true);
        if (this.state.userGroup == 'player')
            this.props.navigation.navigate('PlayerProfile');
        else
            this.props.navigation.navigate('HomeDrawNav');
    }

    render() {
        return (
            <View style={styles.centerAlign}>
                <View style={{height: hp('4.0%')}}></View>
                <View style={styles.backIconView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Icon name='arrow-left' type='material-community' color='#888' size={hp('4%')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.screenTitleText}>
                    SIGN UP
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: hp('38%'), marginBottom: hp('2.0%')}}>
                    <LeftAvatarSelector selected={this.state.userGroup == 'player'} image={images.signupPlayerPng} text="I'M PLAYER" onPress={() => this.selectUserGroup('player')} />
                    <LeftAvatarSelector selected={this.state.userGroup == 'user'} image={images.signupUserPng} text="I'M USER" onPress={() => this.selectUserGroup('user')} />
                </View>
                <View style={[styles.inputContainer, {height: hp('50%'), borderWidth: 0}]}>
                    <LeftIconInputBox iconName='mail' iconType='octicon' iconColor='#27ae60' placeholder='E-mail' secureTextEntry={false} />
                    <View style={{width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Icon name='lock' type='simple-line-icon' color='#27ae60' size={hp('3.0%')} />
                        <RightIconInputBox inputWidth={wp('78%') - hp('3.0%')} placeholder='Create Password' secureTextEntry={this.state.hidePassword} iconColor={this.state.hidePassword ? '#ccc' : '#888'} iconName={this.state.hidePassword ? 'eye-off' : 'eye'} iconType='material-community' onPress={() => this.onClickEyeIcon()} />
                    </View>
                    <LeftIconInputBox iconName='user' iconType='simple-line-icon' iconColor='#27ae60' placeholder='Name' secureTextEntry={false} />
                    <LeftIconInputBox iconName='user' iconType='simple-line-icon' iconColor='#27ae60' placeholder='Surname' secureTextEntry={false} />
                    <CheckBox width={wp('90%')} checked={this.state.agreeTerms} iconColor='#27ae60' text='I read and agree to Terms & Conditions' onPress={() => this.setAgreeTerms()} />
                </View>
                <View style={{height: hp('20%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.signButtonView}>
                        <SignButton title={this.state.userGroup == 'player' ? 'PLAYER PROFILE' : 'SIGN UP'}
                            onPress={() =>
                                this.gotoNextScreen()
                            }>
                        </SignButton>
                    </View>
                    <View style={styles.bottomBar}>
                        <Text style={[styles.bottomBarText, styles.textColor]}>
                            Already have an account?
                        </Text>
                        <View style={styles.rightAlign}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')}>
                                <Text style={[styles.bottomBarText, styles.primaryColor]}>
                                    Sign In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

export default SignupScreen

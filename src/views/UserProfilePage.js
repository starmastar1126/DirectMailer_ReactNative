import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PhotoUpload from 'react-native-photo-upload'

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

import image1 from '../assets/images/default-avatar.png';

const stateList = [
    { value: 0, label: "State"},
    { value: 1, label: "Alabama"},
    { value: 2, label: "Alaska"},
    { value: 3, label: "Arizona"},
    { value: 4, label: "Arkansas"},
    { value: 5, label: "California"},
    { value: 6, label: "Colorado"},
    { value: 7, label: "Connecticut"},
    { value: 8, label: "District of Columbia"},
    { value: 9, label: "Delaware"},
    { value: 10, label: "Florida"},
    { value: 11, label: "Georgia"},
    { value: 12, label: "Hawaii"},
    { value: 13, label: "Idaho"},
    { value: 14, label: "Illinois"},
    { value: 15, label: "Indiana"},
    { value: 16, label: "Iowa"},
    { value: 17, label: "Kansas"},
    { value: 18, label: "Kentucky"},
    { value: 19, label: "Louisiana"},
    { value: 20, label: "Maine"},
    { value: 21, label: "Maryland"},
    { value: 22, label: "Massachusetts"},
    { value: 23, label: "Michigan"},
    { value: 24, label: "Minnesota"},
    { value: 25, label: "Mississippi"},
    { value: 26, label: "Missouri"},
    { value: 27, label: "Montana"},
    { value: 28, label: "Nebraska"},
    { value: 29, label: "Nevada"},
    { value: 30, label: "New Hampshire"},
    { value: 31, label: "New Jersey"},
    { value: 32, label: "New Mexico"},
    { value: 34, label: "New York"},
    { value: 35, label: "North Carolina"},
    { value: 36, label: "North Dakota"},
    { value: 37, label: "Ohio"},
    { value: 38, label: "Oklahoma"},
    { value: 39, label: "Oregon"},
    { value: 40, label: "Pennsylvania"},
    { value: 41, label: "Rhode Island"},
    { value: 42, label: "South Carolina"},
    { value: 43, label: "South Dakota"},
    { value: 44, label: "Tennessee"},
    { value: 45, label: "Texas"},
    { value: 46, label: "Utah"},
    { value: 47, label: "Vermont"},
    { value: 48, label: "Virginia"},
    { value: 49, label: "Washington"},
    { value: 50, label: "West Virginia"},
    { value: 51, label: "Wisconsin"},
    { value: 52, label: "Wyoming"}
]

class UserProfilePage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = { stateOne: 0 };
    }       
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="User Profile" navigation={navigation} navigate="GetStartPage" />)}
    }
    onButtonClick = () => {
        this.props.navigation.navigate("GetStartPage");
    } 
    onStateChange = (value) => {
        this.setState({ stateOne: value });
    };
    render() {
        return (
            <ScrollView style={styles.container}>                
                <View style={{width: '100%', paddingTop: 30, justifyContent: 'center', alignItems: 'center'}}> 
                    <PhotoUpload
                        // onPhotoSelect={avatar => {
                        //     if (avatar) {
                        //     console.log('Image base64 string: ', avatar)
                        //     }
                        // }}
                        >
                        <Image source={image1} resizeMode='cover' style={{width: 100, height: 100, borderRadius: 60, alignItems: 'center', borderWidth: 1, borderColor: Global.DARK_BLUE_COLOR}} />
                    </PhotoUpload>
                </View>
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="First Name" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Last Name" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>  
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Address line1" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Address line2" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="City" width="100%" />{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, styles.spaceBetween, {paddingTop: 15}]}>
                    <AthenaSelect name="state" width="60%" options={stateList} selectedValue={this.state.stateOne} onValueChange={this.onStateChange} />
                    <AthenaTextInput placeholder="ZIP Code" width="35%" keyboardType="number-pad"/>{/*  value={this.state.streetAddress} /> */}
                </View>   
                <View style={[styles.viewDiv, {paddingTop: 15}]}>
                    <AthenaTextInput placeholder="Phone Number" width="100%" keyboardType="number-pad"/>{/*  value={this.state.streetAddress} /> */}
                </View> 
                <View style={[styles.viewDiv, styles.justifyCenter, {height: 100, paddingBottom: 40}]}>
                    <AthenaButton buttonTitle="SAVE" onClick={this.onButtonClick}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.WHITE_COLOR,
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#7B8D93',
        borderRadius: 5,
        color: '#ffffff'
    },
    viewDiv: { 
        flexDirection: 'row',
        width: '100%', 
        paddingLeft: 20, 
        paddingRight: 20
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    justifyCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UserProfilePage;
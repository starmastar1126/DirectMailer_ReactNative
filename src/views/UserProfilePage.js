import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PhotoUpload from 'react-native-photo-upload'

import Global from '../assets/global/Styles';
import Header from '../components/Header';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import AthenaTextInput from '../components/AthenaTextInput';
import SelectBox from '../components/SelectBox';
import Button from '../components/Button';

import avatar from '../assets/images/default-avatar.png';

const textData = [
    { index: 1, title: '', placeholder: 'First Name', keyboardType: '' },
    { index: 2, title: '', placeholder: 'Last Name', keyboardType: '' },
    { index: 3, title: '', placeholder: 'Address line1', keyboardType: '' },
    { index: 4, title: '', placeholder: 'Address line2', keyboardType: '' },
    { index: 5, title: '', placeholder: 'City', keyboardType: '' },
    { index: 6, title: '', placeholder: 'State', keyboardType: '' },
    { index: 7, title: '', placeholder: 'ZIP Code', keyboardType: 'numeric' },
    { index: 8, title: '', placeholder: 'Phone Number', keyboardType: 'numeric' }
]

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
        this.state = { stateValue: 0 };
    }   
    static navigationOptions = ({navigation}) => {
        return {header:(<Header headerTitle="User Profile" navigation={navigation} navigate="SelectRoutesPage" backBtn={true} accountBtn={false} />)}
    }
    render() {
        return (
            <ScrollView style={styles.container}>                
                <View style={{width: '100%', paddingTop: 30, justifyContent: 'center', alignItems: 'center'}}> 
                    <PhotoUpload>
                        <Image source={avatar} style={styles.avatar} />
                    </PhotoUpload>
                </View>
                <Card width={Global.VW*90}>
                    <CardHeader title='Edit User Profile'/>
                    <CardContent>
                        {textData.map((textItem, textKey) => {
                            return(  
                                textItem.placeholder != 'State' ? 
                                <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                                    <AthenaTextInput placeholder={textItem.placeholder} width="100%" keyboardType={textItem.keyboardType} />
                                </View> :
                                <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                                    <SelectBox name="state" width="100%" options={stateList} selectedValue={this.state.stateValue} onValueChange={this.onChangeState} />
                                </View> 
                            );}                       
                        )}  
                    </CardContent>
                </Card>          
                <View style={{marginTop: 20, paddingBottom: 20, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Button buttonTitle="SAVE" width="70%" onClick={this.onSaveProfile}/>
                </View>
            </ScrollView>
        );
    }
    onSaveProfile = () => {
        alert(" Save Profile OK!")
    } 
    onChangeState = (value) => {
        this.setState({ stateValue: value });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.WHITE_COLOR,
        width: Global.VW * 100,
        height: Global.VW * 100,
        zIndex: 0
    },
    avatar: {
        width: 100, 
        height: 100, 
        borderRadius: 60, 
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: Global.BLACK_COLOR,
        shadowColor: Global.BLACK_COLOR,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 10,
    }
});

export default UserProfilePage;
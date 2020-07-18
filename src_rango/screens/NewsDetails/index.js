import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TopMenu from '../../components/TopMenu';
import BottomTabsMenu from '../../components/BottomTabsMenu';

import images from '../../constants/images';
// import layout from '../../themes/layout';
// import styles from './styles';

const countryList = [
    {key: '1', name: 'India', image: require('../../assets/images/icons8-india-48.png')},
    {key: '2', name: 'United Kingdom', image: require('../../assets/images/icons8-uk-48.png')},
    {key: '3', name: 'China', image: require('../../assets/images/icons8-china-48.png')},
    {key: '4', name: 'Germany', image: require('../../assets/images/icons8-germany-48.png')},
    {key: '5', name: 'Italy', image: require('../../assets/images/icons8-italy-48.png')},
    {key: '5', name: 'Spain', image: require('../../assets/images/icons8-spain-48.png')},
    {key: '5', name: 'France', image: require('../../assets/images/icons8-france-48.png')},
]

const stateList = [
    {key: '1', name: 'Andhra Pradesh', icon: 'city-variant-outline'},
    {key: '2', name: 'Arunachal Pradesh', icon: 'city-variant-outline'},
    {key: '3', name: 'Assam', icon: 'city-variant-outline'},
    {key: '4', name: 'Bihar', icon: 'city-variant-outline'},
    {key: '5', name: 'Chhattisgarh', icon: 'city-variant-outline'},
    {key: '6', name: 'Goa', icon: 'city-variant-outline'},
    {key: '7', name: 'Gujarat', icon: 'city-variant-outline'},
    {key: '8', name: 'Haryana', icon: 'city-variant-outline'},
]

const venueTypeList = [
    {key: '1', name: 'Stadium', icon: 'city-variant-outline'},
    {key: '2', name: 'Arena', icon: 'city-variant-outline'},
    {key: '3', name: 'Ground', icon: 'city-variant-outline'},
    {key: '4', name: 'Street', icon: 'city-variant-outline'},
]

const costTypeList = [
    {key: '1', name: 'Day', icon: 'city-variant-outline'},
    {key: '2', name: 'Hour', icon: 'city-variant-outline'},
    {key: '3', name: 'Week', icon: 'city-variant-outline'},
]

class NewsDetailsScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedBottomTab: 'NewsDetails',
        };
    }

    onSelectBottomTab = (value) => {
        this.setState({selectedBottomTab: value})
    }

    render() {
        return (
            <View style={{backgroundColor: '#f5f5f5', alignItems: 'center'}}>
                <LinearGradient colors={['#eb9edf', '#7a85de']} locations={[0, 1.0]} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('100%'), height: hp('10%')}}>
                    <TopMenu
                        navigation={this.props.navigation}
                        leftMenu={false}
                        title='NEWS'
                    />
                </LinearGradient>
                <ScrollView style={{width: wp('100%'), height: hp('80%')}}>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={images.teamProfileNewsJpg} style={{marginTop: hp('1.0%'), marginBottom: hp('0.0%'), width: wp('96%'), height: wp('56%'), resizeMode: 'cover'}} />
                        <Text style={{width: wp('90%'), textAlign: 'center', marginTop: hp('1.5%'), color: '#444', fontSize: hp('3.0%'), fontWeight: '600'}}>ICC Cricket World Cup 2019:</Text>
                        <Text style={{width: wp('90%'), textAlign: 'center', marginVertical: hp('0.75%'), color: '#444', fontSize: hp('2.75%'), fontWeight: '600'}}>Ravi Shastri speacks about India</Text>
                        <View style={{width: wp('92%'), marginVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{color: '#444', fontSize: hp('1.75%')}}>10hrs ago, John Doe</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name='heart' type='material-community' color='#eb4654' size={hp('2.0%')} />
                                <Text style={{marginHorizontal: wp('2.0%'), color: '#666', fontSize: hp('1.75%')}}>152</Text>
                                <Icon name='share-variant' type='material-community' color='#444' size={hp('2.0%')} />
                            </View>
                        </View>
                        <Text style={{width: wp('94%'), marginTop: hp('1.0%'), marginBottom: hp('2.0%'), lineHeight: hp('3.2%'), color: '#444', fontSize: hp('2.0%')}}>
                            Hi, I am a Full-Time, professional developer have specialized in developing iOS/Android cross-platform mobile apps with Web services(back-end/REST API), and can build your iOS/Android mobile apps with React Native successfully.
                            {'\n'}React Native is the best solution for developing iOS/Android cross-platform native mobile apps with flexible UI.
                            {'\n'}I specialize in React Native with Redux/Recompose/Axios, Apollo Client/GraphQL, JSX, ES6, Node.js, Firebase Auth/Storage/Firestore, AWS Cognito/S3/DynamoDB, PHP/MySQL/Laravel, MongoDB, Express.js/Mongoose, REST API.
                            {'\n'}You can check my high skill at https://play.google.com/store/apps/details?id=com.sws.tuurnt&hl=en_US, https://itunes.apple.com/us/app/tuurnt-nearby-party-events/id1052603038?mt=8 and tuurnt.com.
                            {'\n'}My skills and experience meet your demand.
                            {'\n'}I will provide you High Quality work and hope Long-Term with you.
                        </Text>
                    </View>
                </ScrollView>
                <BottomTabsMenu navigation={this.props.navigation} selectedTab={this.state.selectedBottomTab}
                    onSelectTab={ (value) =>
                        this.onSelectBottomTab(value)}
                />
            </View>
        );
    }

}

export default NewsDetailsScreen

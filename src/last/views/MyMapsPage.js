import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaTemplate from '../components/AthenaTemplate';
import AthenaTextInput from '../components/AthenaTextInput';
import AthenaSelect from '../components/AthenaSelect';
import AthenaButton from '../components/AthenaButton';

import image1 from '../assets/images/placeholder.jpg';
import image2 from '../assets/images/placeholder.jpg';
import image3 from '../assets/images/placeholder.jpg';
import image4 from '../assets/images/placeholder.jpg';
import image5 from '../assets/images/placeholder.jpg';
import image6 from '../assets/images/placeholder.jpg';
import image7 from '../assets/images/placeholder.jpg';
import image8 from '../assets/images/placeholder.jpg';
import image9 from '../assets/images/placeholder.jpg';

const templateData = [
    { index: 1, title: '11" × 17" EDDM Flyer/Menu', image: image2, description: 'Search for the best prospects using free, powerful geographic and demographic filters such as age, income, and drive-time from your business'},
    { index: 2, title: '8.5" × 11" EDDM Postcard', image: image3, description: 'Choose the perfect design, print, and marketing options to build great-looking marketing campaigns for your needs'},
    { index: 3, title: '8.5" × 11" EDDM Postcard', image: image4, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
    { index: 4, title: '8.5" × 11" EDDM Postcard', image: image5, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
    { index: 5, title: '8.5" × 11" EDDM Postcard', image: image6, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
    { index: 6, title: '8.5" × 11" EDDM Postcard', image: image7, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
    { index: 7, title: '8.5" × 11" EDDM Postcard', image: image8, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
]

class MyMapsPage extends React.Component { 
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="My Maps" navigation={navigation} navigate="GetStartPage" />)}
    }
    render() {
        return (
            <ScrollView style={styles.container}>    
                {templateData.map((templateItem, templateKey) => {
                    return(  
                        <AthenaTemplate 
                            image={templateItem.image}
                            title={templateItem.title}
                            description={templateItem.description}
                            onClick={this.onTemplateClick}
                        />
                    );}                      
                )}   
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

export default MyMapsPage;
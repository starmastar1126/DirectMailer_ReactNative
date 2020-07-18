import React from 'react';
import {StyleSheet, ScrollView, View, Text, Dimensions, Image, WebView} from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaStepIndicator from '../components/AthenaStepIndicator';
import AthenaCard from '../components/AthenaCard';
import AthenaCardTitle from '../components/AthenaCardTitle';
import AthenaCardContent from '../components/AthenaCardContent';
import AthenaTemplate from '../components/AthenaTemplate';

// import image1 from '../assets/images/catgory1.png';
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

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

class TargetReviewPage extends React.Component {  
    constructor (props) {
        super(props);
        this.state = {region: {latitude: LATITUDE, longitude: LONGITUDE, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA}, markers: []};
    }     
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Choose your Products" navigation={navigation} navigate="SelectRoutesPage" menu={false} />)}
    }
    onTemplateClick = () => {
        this.props.navigation.navigate("DesignPrintPage");
    }   
    onMapPress(e) {
      this.setState({
        markers: [
          ...this.state.markers,
          {
            coordinate: e.nativeEvent.coordinate,
            key: id++,
            color: randomColor(),
          },
        ],
      });
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <AthenaStepIndicator currentPosition={0} />
                {/* <Image source={image1} style={{width: '100%', height: 400}}/> */}
                <View style={{width: '100%', height: 350, paddingTop: 20, flexDirection: 'row'}}> 
                    <MapView
                        provider={this.props.provider}
                        style={styles.map}
                        initialRegion={this.state.region}
                        onPress={e => this.onMapPress(e)}
                        >
                        {this.state.markers.map(marker => (
                            <Marker
                            key={marker.key}
                            coordinate={marker.coordinate}
                            pinColor={marker.color}
                            />
                        ))}
                    </MapView>
                </View>
                <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row'}}>
                    <Text style={{width: '100%', fontSize: 25, color: Global.BLACK_COLOR}}>Title</Text>
                </View>
                <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row'}}>
                    <Text style={{width: '100%', fontSize: 13, color: Global.BLACK_COLOR}}>
                        Your selection of 4 carrier routes, accross 1 ZIP Cide targetubg Residential, Bussiness and Post Office Box addresses will reach 2519 postal customers.
                    </Text>
                </View>
                <View style={{paddingLeft: 20, paddingRight: 20}}>
                    <AthenaCard>
                        <AthenaCardTitle title='Select Template' />
                        <AthenaCardContent>
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
                        </AthenaCardContent>
                    </AthenaCard> 
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },

    map: {
    ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});

export default TargetReviewPage;
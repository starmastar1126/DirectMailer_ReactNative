import React from 'react';
import {StyleSheet, ScrollView, View, Text, WebView, Button} from 'react-native';
// import { WebView } from 'react-native-webview';
import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton, SlideAnimation, ScaleAnimation } from 'react-native-popup-dialog';
import { Table, Row, Rows } from 'react-native-table-component';
  


import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaStepIndicator from '../components/AthenaStepIndicator';
import AthenaCard from '../components/AthenaCard';
import AthenaCardTitle from '../components/AthenaCardTitle';
import AthenaCardContent from '../components/AthenaCardContent';
import AthenaTemplate from '../components/AthenaTemplate';

import image2 from '../assets/images/placeholder.jpg';
import image3 from '../assets/images/placeholder.jpg';
import image4 from '../assets/images/placeholder.jpg';
import image5 from '../assets/images/placeholder.jpg';
import image6 from '../assets/images/placeholder.jpg';
import image7 from '../assets/images/placeholder.jpg';
import image8 from '../assets/images/placeholder.jpg';

const templateData = [
    { index: 1, title: '11" × 17" EDDM Flyer/Menu', image: image2, description: 'Search for the best prospects using free, powerful geographic and demographic filters such as age, income, and drive-time from your business'},
    { index: 2, title: '8.5" × 11" EDDM Postcard', image: image3, description: 'Choose the perfect design, print, and marketing options to build great-looking marketing campaigns for your needs'},
    { index: 3, title: '8.5" × 11" EDDM Postcard', image: image4, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
    { index: 4, title: '8.5" × 11" EDDM Postcard', image: image5, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
    { index: 5, title: '8.5" × 11" EDDM Postcard', image: image6, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
    { index: 6, title: '8.5" × 11" EDDM Postcard', image: image7, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
    { index: 7, title: '8.5" × 11" EDDM Postcard', image: image8, description: 'Our online mail delivery scheduleing system puts you in control while eliminating all paperwork and hassless from the process'},
]

const priceData = [
    ['1,000', '69¢'],
    ['2,500', '39¢'],
    ['5,000', '34¢'],
    ['10,000', '32¢'],
    ['25,000', '31¢'],
    ['50,000', '29¢'],
]

class TargetReviewPage extends React.Component {      
    state = {
        customBackgroundDialog: false,
        defaultAnimationDialog: false,
        scaleAnimationDialog: false,
        slideAnimationDialog: false,
        dialogTitle: '',
        tableHead: ['QUANTITY', 'PRICE/PIECE']
    };  
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Choose your Products" navigation={navigation} navigate="SelectRoutesPage" menu={false} />)}
    }
    onTemplateClick = () => {
        this.props.navigation.navigate("DesignPrintPage");
    } 
    render() {
        return (
            <ScrollView style={styles.container}>
                <AthenaStepIndicator currentPosition={0} />
                <View style={{width: '100%', height: 350, paddingTop: 20, flexDirection: 'row'}}> 
                <WebView
                    source={{uri:'file:///android_asset/region.html'}}
                    // javaScriptEnabled={true}
                    // domStorageEnabled={true}
                />
                </View>
                <View style={{width: '100%', paddingTop: 10, paddingLeft: 20, paddingRight: 20, flexDirection: 'row'}}>
                    <Text style={{width: '100%', fontSize: 25, color: Global.BLACK_COLOR}}>Title</Text>
                </View>
                <View style={{paddingTop: 10, paddingBottom: 50, paddingLeft: 20, paddingRight: 20}}>
                    <AthenaCard>
                        <AthenaCardTitle title='Select Template' />
                        <AthenaCardContent>
                            {templateData.map((templateItem, templateKey) => {
                                return(  
                                    <AthenaTemplate 
                                        key={templateKey}
                                        image={templateItem.image}
                                        title={templateItem.title}
                                        description={templateItem.description}
                                        onClick={this.onTemplateClick}
                                        onPrice={() => {this.setState({defaultAnimationDialog: true, dialogTitle: templateItem.title});}}
                                    />
                                );}                      
                            )}   
                        </AthenaCardContent>
                    </AthenaCard> 
                </View>
                <Dialog
                    onDismiss={() => {this.setState({ defaultAnimationDialog: false });}}
                    width={0.9} visible={this.state.defaultAnimationDialog} actionsBordered
                    dialogTitle={
                        <DialogTitle title={this.state.dialogTitle + " Price Breaks"} textStyle={{color: '#30539E', fontSize: 17, fontWeigth: 'bold'}} hasTitleBar={false} align="left"/>
                    }
                    footer={
                        <DialogFooter>
                            {/* <DialogButton text="CANCEL" bordered onPress={() => {this.setState({ defaultAnimationDialog: false });}} key="button-1"/> */}
                            <DialogButton text="CLOSE" textStyle={{color: '#30539E', fontSize: 17, fontWeigth: 'bold'}} bordered onPress={() => {this.setState({ defaultAnimationDialog: false });}} key="button-2"/>
                        </DialogFooter>
                    }
                >
                    <DialogContent style={{ paddingTop: 10, borderBottomColor: '#EEE', borderBottomWidth: 1, borderTopColor: '#EEE', borderTopWidth: 1}}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.headText}/>
                            <Rows data={priceData} textStyle={styles.text}/>
                        </Table>
                    </DialogContent>
                </Dialog>
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
    routesHeader: {
        width: '100%',
        height: 30,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: Global.DARK_BLUE_COLOR,
        backgroundColor: Global.RIGHT_BLUE_COLOR,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    routesMain: {
        width: '100%',
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
        borderWidth: 1,
        borderColor: Global.DARK_BLUE_COLOR,
        backgroundColor: Global.WHITE_COLOR,
        paddingLeft: 10,
        paddingRight: 10,
    },
    tdHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Global.FORE_COLOR,
    },  
    trDiv:{
        flexDirection: 'row', 
        height: 35, 
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Global.DARK_BLUE_COLOR,
    },
    head: { height: 40, backgroundColor: Global.DARK_BLUE_COLOR, textAlign: 'center' },
    headText: { textAlign: 'center', color: Global.WHITE_COLOR, fontWeight: 'bold' },
    text: { margin: 6, textAlign: 'center' }
    
});

export default TargetReviewPage;
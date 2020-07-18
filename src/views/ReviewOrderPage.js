import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';

import Global from '../assets/global/Styles';
import Header from '../components/Header';
import StepIndicator from '../components/StepIndicator';
import Dialog from '../components/Dialog';
import DialogHeader from '../components/DialogHeader';
import DialogContent from '../components/DialogContent';
import DialogFooter from '../components/DialogFooter';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import Button from '../components/Button';

import frontThumb from '../assets/template/t-10333-front.jpg';
import backThumb from '../assets/template/t-10333-back.jpg';
import mapThumb from '../assets/template/t-10333-map.png';

const reviewData = {
    size: '11\" × 17\"', stock: '14PT C2S', color: '4 / 0 (4 color front)', coating: 'VS Coating, Front Only',
    templateId: '#10073', frontThumb: frontThumb, backThumb: backThumb, mapThumb: mapThumb
}

class ReviewOrderPage extends React.Component {       
    constructor (props) {
        super(props);
        this.state = {templateVisible: 0};
    }     
    static navigationOptions = ({navigation}) => {
        return {header:(<Header headerTitle="Review Your Order" navigation={navigation} navigate="DesignPrintPage" backBtn={true} accountBtn={true} />)}
    }
    render() {
        return (
            <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={{marginTop: 15, padding: 5}}><StepIndicator currentPosition={1} /></View>
                <Card width={Global.VW*90}>
                    <CardHeader title='Print Product'/>
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 20, color: Global.DARK_GRAY_COLOR}}>{reviewData.size} EDDM Flyer/Menu</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Size:</Text>
                            <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>{reviewData.size}</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Stock:</Text>
                            <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>{reviewData.stock}</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Color:</Text>
                            <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>{reviewData.color}</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Coating:</Text>
                            <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>{reviewData.coating}</Text>
                        </View>
                    </CardContent>
                </Card> 
                <Card width={Global.VW*90}>
                    <CardHeader title='Design' />
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 20, color: Global.DARK_GRAY_COLOR}}>Template {reviewData.templateId}</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{width: '45%'}}><TouchableOpacity onPress={() => this.setState({templateVisible: 1})}><Image source={reviewData.frontThumb}  style={{width: '100%', height: 90}}/></TouchableOpacity></View>
                            <View style={{width: '45%'}}><TouchableOpacity onPress={() => this.setState({templateVisible: 2})}><Image source={reviewData.backThumb}  style={{width: '100%', height: 90}}/></TouchableOpacity></View>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{width: '35%', textAlign: 'center', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Front</Text>
                            <Text style={{width: '35%', textAlign: 'center', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Back</Text>
                        </View>
                    </CardContent>
                </Card> 
                <Card width={Global.VW*90}>
                    <CardHeader title='Map' />
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 20, color: Global.DARK_GRAY_COLOR}}>Demo</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center'}}>
                            <Image source={reviewData.mapThumb} style={{width: 300, height: 300}}/>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                Your selection of 4 carrier routes, across 1 ZIP Code targeting Residential, Business and Post Office Box deliveries will reach 3, 149 postal customers.
                            </Text>
                        </View>
                    </CardContent>
                </Card> 
                <Card width={Global.VW*90}>
                    <CardHeader title='Every Door Direct Mail@ Drops' />
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '35%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Estimated Delivery:</Text>
                            <Text style={{width: '65%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>6/3/2019 - 6/8/2019 Dates</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '35%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Drop:</Text>
                            <Text style={{width: '65%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>1</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '35%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Pieces:</Text>
                            <Text style={{width: '65%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>3,149</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '35%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Routes:</Text>
                            <Text style={{width: '65%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>98027PBOX, 98027R032</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '35%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}></Text>
                            <Text style={{width: '65%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>98027R025, 98027R034</Text>
                        </View>
                    </CardContent>
                </Card> 
                <Card width={Global.VW*90}>
                    <CardHeader 
                        title='Amount'
                    />
                    <CardContent>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '65%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Every Door Direct Mail@</Text>
                            <Text style={{width: '35%', fontSize: 13, color: '#AA0000', textAlign: 'right'}}>$1574.50</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 0, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 11, color: Global.DARK_GRAY_COLOR}}>3,149 Pieces</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '65%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Subtotal</Text>
                            <Text style={{width: '35%', fontSize: 13, color: '#AA0000', textAlign: 'right'}}>$1574.50</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '65%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Total</Text>
                            <Text style={{width: '35%', fontSize: 13, color: '#AA0000', textAlign: 'right'}}>$1574.50</Text>
                        </View>   
                    </CardContent>
                </Card>
                <View style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                    <Button buttonTitle="CheckOut" width={Global.VW*60} onClick={() => this.props.navigation.navigate("BillingInformationPage")}/>
                </View>      
            </ScrollView>
            <Dialog visible={this.state.templateVisible == 0 ? false : true} width={Global.VW*90} top={130}>
                <DialogHeader title="Template" closeVisible={true} onClose={() => this.setState({ templateVisible: 0})}/>
                <DialogContent justifyContent='center' alignItems='center'>
                    {this.state.templateVisible == 1 ?
                        <Image source={reviewData.frontThumb} resizeMode='contain' style={{borderWidth: 1, width: '100%', height: 200}} />
                    :
                        <Image source={reviewData.backThumb} resizeMode='contain' style={{borderWidth: 1, width: '100%', height: 200}} />
                    }                
                </DialogContent>
            </Dialog>  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.WHITE_COLOR,
        width: Global.VW * 100,
        height: Global.VW * 100,
        zIndex: 0
    }
});

export default ReviewOrderPage;
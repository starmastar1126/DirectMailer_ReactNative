import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

import Global from '../views/Global';
import AthenaHeader from '../components/AthenaHeader';
import AthenaStepIndicator from '../components/AthenaStepIndicator';
import AthenaCard from '../components/AthenaCard';
import AthenaCardTitle from '../components/AthenaCardTitle';
import AthenaCardContent from '../components/AthenaCardContent';
import AthenaButton from '../components/AthenaButton';

import image1 from '../assets/images/placeholder.jpg';
import image2 from '../assets/images/placeholder.jpg';
import image3 from '../assets/images/placeholder.jpg';

class ReviewOrderPage extends React.Component {      
    static navigationOptions = ({navigation}) => {
        return {header:(<AthenaHeader headerTitle="Review Your Order" navigation={navigation} navigate="OverViewPage" menu={false} />)}
    }
    onCheckOutClick = () => {
        this.props.navigation.navigate("BillingInformationPage");
    }  
    render() {
        return (
            <ScrollView style={styles.container}>
                <AthenaStepIndicator currentPosition={2} />
                <AthenaCard>
                    <AthenaCardTitle title='Print Product'/>
                    <AthenaCardContent>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 20, color: Global.DARK_GRAY_COLOR}}>11"*17" EDDM Flyer/Menu</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Stock:</Text>
                            <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>80# Gloss Text</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Fold:</Text>
                            <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Half Fold</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Ink:</Text>
                            <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>4/4 - Full Color Both Sides</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '30%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Bleed:</Text>
                            <Text style={{width: '70%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Bleed</Text>
                        </View>
                    </AthenaCardContent>
                </AthenaCard> 
                <AthenaCard>
                    <AthenaCardTitle title='Design' />
                    <AthenaCardContent>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 20, color: Global.DARK_GRAY_COLOR}}>Template #10073</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Image source={image1} style={{width: '40%', height: 100}}/>
                            <Image source={image2} style={{width: '40%', height: 100}}/>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{width: '35%', textAlign: 'center', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Front</Text>
                            <Text style={{width: '35%', textAlign: 'center', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>Back</Text>
                        </View>
                    </AthenaCardContent>
                </AthenaCard> 
                <AthenaCard>
                    <AthenaCardTitle title='Map' />
                    <AthenaCardContent>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 20, color: Global.DARK_GRAY_COLOR}}>Demo</Text>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'center'}}>
                            <Image source={image3} style={{width: 300, height: 300}}/>
                        </View>
                        <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
                            <Text style={{width: '100%', fontSize: 13, color: Global.DARK_GRAY_COLOR}}>
                                Your selection of 4 carrier routes, across 1 ZIP Code targeting Residential, Business and Post Office Box deliveries will reach 3, 149 postal customers.
                            </Text>
                        </View>
                    </AthenaCardContent>
                </AthenaCard> 
                <AthenaCard>
                    <AthenaCardTitle title='Every Door Direct Mail@ Drops' />
                    <AthenaCardContent>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
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
                    </AthenaCardContent>
                </AthenaCard> 
                <AthenaCard>
                    <AthenaCardTitle 
                        title='Amount'
                    />
                    <AthenaCardContent>
                        <View style={{width: '100%', paddingTop: 20, paddingLeft: 10, paddingRight: 10, flexDirection: 'row'}}>
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
                    </AthenaCardContent>
                </AthenaCard>             
                <View style={{justifyContent: 'center', alignItems: 'center', width:'100%', paddingBottom: 20, marginTop: 10, marginBottom: 40}}>
                    <AthenaButton buttonTitle="CheckOut" onClick={this.onCheckOutClick}/>
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
        paddingLeft: 20,
        paddingRight: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#7B8D93',
        color: '#ffffff'
    },
});

export default ReviewOrderPage;
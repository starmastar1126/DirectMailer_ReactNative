import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Global from '../views/Global'
import AthenaButton from '../components/AthenaButton';

const overViewData = {
    prodcut: '11" × 17" EDDM@ Flyer/Menu',
    piecesMailed: 9447,
    extraCopies: 5,
    noOfDrops: 3, 
    price: '$0.4100 Each',
    estTotal: '$8874.51',
    printMailPrep: '05/24/19 to 05/30/19',
    USPSDropDate: '05/31/19',
    delievered: '06/03/19 to 06/08/19'
}

 class OverViewPage extends React.Component {
  static navigationOptions = {
    header: null
  };
  onContinueClick = () => {
    this.props.navigation.navigate("ReviewOrderPage");
  } 
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.loginPanel}>
          <View style={styles.loginHeader}>
            <View style={{width: '90%'}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: Global.FORE_COLOR}}>Campaign OverView</Text>
            </View>
            <View style={{width: '10%'}}>
              <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('DesignPrintPage')}>
                <Text style={{fontSize: 18, color: Global.WHITE_COLOR}}>×</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.loginMain}>
            <View style={{width: '100%', paddingTop: 10, flexDirection: 'row'}}>
              <Text style={{width: '40%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                Products
              </Text>
              <Text style={{width: '60%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                {overViewData.prodcut}
              </Text>
            </View>    
            <View style={{width: '100%', paddingTop: 10, flexDirection: 'row'}}>
              <Text style={{width: '40%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                Pieces Mailed
              </Text>
              <Text style={{width: '60%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                {overViewData.piecesMailed}
              </Text>
            </View>   
            <View style={{width: '100%', paddingTop: 10, flexDirection: 'row'}}>
              <Text style={{width: '40%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                Extra Copies
              </Text>
              <Text style={{width: '60%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                {overViewData.extraCopies}
              </Text>
            </View>   
            <View style={{width: '100%', paddingTop: 10, flexDirection: 'row'}}>
              <Text style={{width: '50%', fontSize: 15, color: Global.DARK_GRAY_COLOR}}>
                Print Mail Prep
              </Text>
              <Text style={{width: '50%', fontSize: 15, color: Global.DARK_GRAY_COLOR}}>
                {overViewData.printMailPrep}
              </Text>
            </View>     
            <View style={{width: '100%', paddingTop: 10, flexDirection: 'row'}}>
              <Text style={{width: '50%', fontSize: 15, color: Global.DARK_GRAY_COLOR}}>
                EST. Total
              </Text>
              <Text style={{width: '50%', fontSize: 15, color: Global.DARK_GRAY_COLOR}}>
                {overViewData.estTotal}
              </Text>
            </View>   
          </View>
          <View style={[styles.loginHeader, {marginTop: 10}]}>
            <View style={{width: '90%'}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: Global.FORE_COLOR}}>Delivery Estimate</Text>
            </View>
          </View>
          <View style={styles.loginMain}>
            <View style={{width: '100%', paddingTop: 10, flexDirection: 'row'}}>
              <Text style={{width: '40%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                Print {'&'} Mail Prep:
              </Text>
              <Text style={{width: '60%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                {overViewData.printMailPrep}
              </Text>
            </View>   
            <View style={{width: '100%', paddingTop: 10, flexDirection: 'row'}}>
              <Text style={{width: '40%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                USPS Drop Date:
              </Text>
              <Text style={{width: '60%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                {overViewData.USPSDropDate}
              </Text>
            </View>   
            <View style={{width: '100%', paddingTop: 10, flexDirection: 'row'}}>
              <Text style={{width: '40%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                Delievered:
              </Text>
              <Text style={{width: '60%', fontSize: 12, color: Global.DARK_GRAY_COLOR}}>
                {overViewData.delievered}
              </Text>
            </View>   
          </View>    
          <View style={{justifyContent: 'center', alignItems: 'center', width:'100%', marginTop: 15, marginBottom: 15}}>
              <AthenaButton buttonTitle="CONTINUE TO CHECKOUT" onClick={this.onContinueClick}/>
          </View>
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF'
  },
  loginPanel: {
      position: 'absolute',
      width: 300,
      backgroundColor: '#FFFFFF',
      zIndex: 99,
      borderWidth: 1,
      borderColor: Global.RIGHT_BLUE_COLOR,
      borderRadius: 15,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
  },
  loginHeader: {
      width: '100%',
      height: 35,
      borderTopStartRadius: 5,
      borderTopEndRadius: 5,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderColor: Global.DARK_BLUE_COLOR,
      backgroundColor: Global.RIGHT_BLUE_COLOR,
      zIndex: 99,
      paddingLeft: 10,
      paddingRight: 10, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  loginMain: {
      width: '100%',
      borderBottomStartRadius: 5,
      borderBottomEndRadius: 5,
      borderWidth: 1,
      borderColor: Global.DARK_BLUE_COLOR,
      backgroundColor: Global.WHITE_COLOR,
      zIndex: 99,
      paddingLeft: 10,
      paddingRight: 10,
  },
  closeButton: {
    width: 25, 
    height: 25, 
    borderWidth: 1, 
    borderColor: Global.DARK_BLUE_COLOR,
    backgroundColor: Global.BUTTON_COLOR,
    borderRadius: 18, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default OverViewPage;
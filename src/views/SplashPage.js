import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

import Global from '../assets/global/Styles';
import splashIcon1 from '../assets/images/splash1_icon.png';
import splashIcon2 from '../assets/images/splash2_icon.png';
import splashIcon3 from '../assets/images/splash3_icon.png';

const splashData = [
  { index: 1, title: 'Step 1\nTarget the right prospects', image: splashIcon1, description: 'Search for the best prospects using free,\npowerful geographic and demographic filters\nsuch as age, income, and drive-time\nfrom your business', button: false, buttonTitle: '' },
  { index: 2, title: 'Step 2\nCreate your offer', image: splashIcon2, description: 'Choose the perfect design, print,\nand marketing options to build great-looking\nmarketing campaigns for your needs', button: false, buttonTitle: '' },
  { index: 3, title: 'Step 3\nLaunch campaign', image: splashIcon3, description: 'Our online mail delivery scheduleing\nsystem puts you in control while eliminating\nall paperwork and hassless from the process', button: true, buttonTitle: 'GET STARTED' }
]

 class SplashPage extends React.Component {
  static navigationOptions = { header: null };
  onClick = () => {
    this.props.navigation.navigate("SelectRoutesPage")
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onClick}>
        <View>
          <View style={{height: '5%'}}/>
          <View style={{height: '30%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={splashIcon1} style={{width: 50, height: 50}}></Image>
            <Text style={{marginTop: 10, fontFamily: "cac_champagne", fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: Global.WHITE_COLOR}}>{splashData[0].title}</Text>
            <Text style={{marginTop: 5, fontSize: 11, textAlign: 'center', color: Global.WHITE_COLOR}}>{splashData[0].description}</Text>
          </View>
          <View style={{height: '30%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={splashIcon2} style={{width: 50, height: 50}}></Image>
            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold',textAlign: 'center', color: Global.WHITE_COLOR}}>{splashData[1].title}</Text>
            <Text style={{marginTop: 5, fontSize: 11, textAlign: 'center', color: Global.WHITE_COLOR}}>{splashData[1].description}</Text>
          </View>
          <View style={{height: '30%', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={splashIcon3} style={{width: 50, height: 50}}></Image>
            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold',textAlign: 'center', color: Global.WHITE_COLOR}}>{splashData[2].title}</Text>
            <Text style={{marginTop: 5, fontSize: 11, textAlign: 'center', color: Global.WHITE_COLOR}}>{splashData[2].description}</Text>
          </View>
          <View style={{height: '5%'}}/>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Global.SPLASH_COLOR,
  }
});

export default SplashPage;
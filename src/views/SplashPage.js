import React from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from "react-native-web-swiper";

import Global from './Global';
import SplashOne from '../components/SplashOne';

import splashIcon1 from '../assets/images/step1_splash_icon3.png';
import splashIcon2 from '../assets/images/step2_splash_icon3.png';
import splashIcon3 from '../assets/images/step3_splash_icon3.png';

const splashData = [
  { index: 1, title: 'Step 1\nTarget the right prospects', image: splashIcon1, description: 'Search for the best prospects using free,\npowerful geographic and demographic filters\nsuch as age, income, and drive-time\nfrom your business', button: false, buttonTitle: '' },
  { index: 2, title: 'Step 2\nCreate your offer', image: splashIcon2, description: 'Choose the perfect design, print,\nand marketing options to build great-looking\nmarketing campaigns for your needs', button: false, buttonTitle: '' },
  { index: 3, title: 'Step 3\nLaunch campaign', image: splashIcon3, description: 'Our online mail delivery scheduleing\nsystem puts you in control while eliminating\nall paperwork and hassless from the process', button: true, buttonTitle: 'GET STARTED' }
]

 class SplashPage extends React.Component {
  static navigationOptions = {
    header: null
  };
  onButtonClick = () => {
    this.props.navigation.navigate("GetStartPage")
  } 
  render() {
    return (
      <View style={styles.container}>
        <Swiper>
          {splashData.map((splashItem, splashKey) => {
            return(  
              <SplashOne
                title={splashItem.title}
                image={splashItem.image}
                description={splashItem.description}
                button={splashItem.button}
                buttonTitle={splashItem.buttonTitle}
                onClick={this.onButtonClick}
              />
            );}                      
          )}   
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Global.SPLASH_COLOR
  }
});

export default SplashPage;
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Global from '../views/Global';
import AthenaButton from '../components/AthenaButton';

class SplashOne extends React.Component {
    render() {
        const {title, image, description, button, buttonTitle, onClick} = this.props;
        return (
            <View style={styles.slideContainer}>
                <View style={{justifyContent:'center',alignItems: 'center', width:'100%', height:'15%'}} />
                <View style={{justifyContent:'center',alignItems: 'center', width:'100%', height:'20%'}}>
                    <Image source={image} style={{width: 100, height: 100}}/>
                </View>
                <View style={{justifyContent:'center',alignItems: 'center', width:'100%', height: 120}}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: Global.SPLASH_TITLE_COLOR}}>{title}</Text>
                </View>
                <View style={{justifyContent:'center',alignItems: 'center', width:'100%'}}>
                    <Text style={{fontSize: 13, textAlign: 'center', color: Global.SPLASH_CONTENT_COLOR}}>{description}</Text>
                </View>                    
                {button === true ?            
                    <View style={{position: 'absolute', bottom: 50, justifyContent:'center',alignItems: 'center', width:'100%'}}>
                        <AthenaButton buttonTitle={buttonTitle} onClick={this.props.onClick} />
                    </View>
                    :<View />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        alignItems: "center",
        width: '100%',
        height: '100%',
        backgroundColor: Global.SPLASH_COLOR
    }
});


export default SplashOne;
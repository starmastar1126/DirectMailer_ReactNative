import React from 'react';
import { StatusBar, View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel, { Pagination } from "react-native-snap-carousel";
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import images from '../../constants/images';

class WelcomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeSlide: 0,
        };
    }

    sliders = [
      {
        image: images.slide1,
        text: 'Below is an interactive demo that lets you explore the visual results of the different settings.',
      },
      {
        image: images.slide2,
        text: 'Some columns have multiple widths defined, causing the layout to change at the defined breakpoint.',
      },
      {
        image: images.slide3,
        text: 'There is one limitation with the negative margin we use to implement the spacing between items.',
      },
    ]

    _renderItem({ item }) {
        return (
            <View style={{height: hp('75%'), flexDirection: 'column', justifyContent: "space-around", alignItems: "center"}}>
                <Image source={item.image} style={{width: wp('90%'), height: hp('50%'), resizeMode: 'contain'}} />
                <Text style={{width: wp('84%'), fontSize: hp('2.0%'), color: '#444', textAlign: 'center', marginTop: hp('2.0%') }}>{item.text}</Text>
            </View>
        );
    }

    Pagination = () => {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={3}
                activeDotIndex={activeSlide}
                dotStyle={{width: hp('1.0%'), height: hp('1.0%'), borderRadius: 5, backgroundColor: '#804ac5'}}
                inactiveDotStyle={{width: hp('1.0%'), height: hp('1.0%'), borderRadius: 5, backgroundColor: "#804ac5",}}
                inactiveDotOpacity={0.2}
                inactiveDotScale={1.0}
            />
        );
    };

    gotoNextSlide = () => {
        this.state.activeSlide = this.state.activeSlide + 1;
        this.forceUpdate();
    }

    render() {
        const { Pagination, sliders } = this;
        const { activeSlide } = this.state;
        return (
            <View style={{paddingTop: hp('4.0%'), paddingBottom: hp('1.0%'), flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                <StatusBar barStyle="dark-content" />
                <View style={{width: wp('90%'), height: hp('4.0%'), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Signin")}>
                        <Text style={{color: '#804ac5', fontSize: hp('2.5%')}}>
                            SKIP
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: wp('90%'), height: hp('90.0%'), flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Carousel
                        ref={'slider'}
                        data={sliders}
                        renderItem={this._renderItem}
                        sliderWidth={wp('90%')}
                        itemWidth={wp('90%')}
                        onSnapToItem={(slideIndex) => this.setState({activeSlide: slideIndex})}
                    />
                    {
                        activeSlide === 2
                        ?
                            <View style={{width: wp('100%'), height: hp('15.0%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
                                    <Text style={{width: wp('50%'), fontSize: hp('3.0%'), paddingVertical: hp('1.5%'), textAlign: 'center', color: '#804ac5', borderTopRightRadius: 50, borderBottomRightRadius: 50}}>Signup</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Signin")}>
                                    <LinearGradient colors={['#804ac5', '#eb9edf']} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: wp('50%'), height: hp('6%'), backgroundColor: '#804ac5', borderTopLeftRadius: 50, borderBottomLeftRadius: 50}}>
                                        <Text style={{fontSize: hp('3.0%'), color: '#fff'}}>Login</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        :
                            <View style={{width: wp('90%'), height: hp('15.0%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Pagination />
                                <TouchableOpacity onPress={() => this.refs.slider.snapToNext()} style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: hp('5.0%'), height: hp('5.0%'), borderRadius: 100, elevation: 1}}>
                                    <Icon name='right' type='antdesign' color='#804ac5' size={hp('3.0%')} />
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        )
    }

}

export default WelcomeScreen

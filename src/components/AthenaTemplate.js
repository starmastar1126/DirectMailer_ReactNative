import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Global from '../views/Global';

class AthenaTemplate extends React.Component {
  render() {
    const { key, image, title, description, onClick } = this.props;    
    return (  
      <TouchableOpacity activeOpacity={1} onPress={this.props.onClick}>
        <View style={{width: '100%', paddingTop: 10, paddingLeft: 10, paddingRight: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: Global.RIGHT_BLUE_COLOR}}>
            <View><Image source={image} style={{width: 50, height: 50}} /></View>
            <View style={{marginLeft: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '100%'}}><Text style={{fontSize: 15, color: Global.BLACK_COLOR}}>
                  {title.length > 20 ? title.substring(0, 20) + "...": title}
                </Text></View>
                <View style={{height: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{width: '80%', textAlign: 'left', fontSize: 13, color: Global.BLACK_COLOR}}>
                      {description.length > 20 ? description.substring(0, 20) + "...": description}
                    </Text>
                    <TouchableOpacity style={{width: 15, height: 15, backgroundColor: '#7B8D93', borderRadius: 18, alignItems: 'center'}}>
                        <Text style={{fontSize: 10, color: '#EEEEEE'}}>$</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>  
    );
  }
} 

export default AthenaTemplate;

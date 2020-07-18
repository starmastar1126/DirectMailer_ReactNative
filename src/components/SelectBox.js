import React from 'react';
import {StyleSheet, View, Picker} from 'react-native';

import Global from '../assets/global/Styles';

class SelectBox extends React.Component {
  render() {
    const { width, options, selectedValue } = this.props;    
    return (  
      <View style={[styles.viewStyle, {width : width}]} >
        <Picker style={styles.selectStyle} selectedValue={selectedValue} onValueChange={this.props.onValueChange}>
          {options.map((item, key) => {
            return(  
              <Picker.Item key={key} label={item.label} value={item.value} mode="dialog" />
            );}
          )}   
        </Picker>    
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 35,
    backgroundColor: '#FFFFFF', 
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Global.RIGHT_GRAY_COLOR,
    fontSize: 8
  },
  selectStyle: {
    height: 30,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF', 
    borderRadius: 5,
    color: Global.FONT_COLOR, 
    fontSize: 8,
  },
  itemStyle: {
    color: Global.FONT_COLOR, 
    fontSize: 8,
  }
});

export default SelectBox;

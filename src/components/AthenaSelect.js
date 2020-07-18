import React from 'react';
import {StyleSheet, View, Picker} from 'react-native';

import Global from '../views/Global';

class AthenaTextInput extends React.Component {
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
    height: 40,
    backgroundColor: '#FFFFFF', 
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Global.RIGHT_BLUE_COLOR
  },
  selectStyle: {
    height: 35,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF', 
    color: Global.DARK_GRAY_COLOR, 
    fontSize: 12,
  },
  itemStyle: {
    paddingLeft: 10,
    backgroundColor: '#0000FF', 
    color: Global.DARK_GRAY_COLOR, 
    fontSize: 12,
  }
});

export default AthenaTextInput;

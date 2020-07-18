import { StyleSheet } from 'react-native';
import { sizes } from '@theme';

const edit_padding = 6; // eslint-disable-line

export const styles = StyleSheet.create({
  editTextStyle: {
    fontSize: sizes.resize_value6(15, true, false),
    fontFamily: 'Montserrat',
    color: 'white',
  },
  editBaseStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    paddingTop: edit_padding,
    paddingBottom: edit_padding,
  },
  textHiddenStyle: {
    opacity: 0,
    paddingTop: edit_padding,
    paddingBottom: edit_padding,
    marginRight: 5,
  },
  underlineBaseStyle: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: '#999',
  },
  tagWrapperStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  tagTextStyle: {
    fontSize: sizes.resize_value6(11, true, false),
    fontFamily: 'Montserrat',
    color: 'white',
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    overflow: 'hidden',
  },
  tagStyle: {
    backgroundColor: '#8D14F5',
    borderRadius: 3,
    borderWidth: 0,
    marginLeft: 5,
    marginBottom: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editLeftTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: 'white',
    marginRight: 5,
  },
});

export default styles;

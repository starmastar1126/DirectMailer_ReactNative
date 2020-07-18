import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes, consts } from '@theme';

const width = consts.phone ? sizes.screen.width - 40 : 450;
const height = consts.phone ? 40 : 50;

export default StyleSheet.create({
  container: {
    ...bs.layout.match_parent,
    ...bs.align.start_center,
    ...bs.align.item.stretch,
    ...bs.statusbar.padding,
    backgroundColor: 'black',
  },
  view_content: {
    ...bs.layout.absolute_full,
    ...bs.layout.match_parent,
    ...bs.align.center,
  },
  avatar_border: {
    borderWidth: 0.5,
    borderColor: '#CDCDCD',
  },
  btn_close: {
    position: 'absolute',
    top: 0,
    left: 4,
    padding: 10,
  },
  btn_login_email: {
    ...bs.align.center,
    ...bs.align.self.center,
    width,
    height,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  txt_close: {
    ...bs.font.normal,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  txt_desc: {
    ...bs.align.self.center,
    ...bs.font.normal,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:9,
  },
  txt_login_email: {
    ...bs.font.normal,
    fontSize: 19,
    color: '#C9A004',
    fontWeight: 'bold',
  },
  mt_20: {
    marginTop: 20,
  },
  mt_15: {
    marginTop: 15,
  },
  mb_20: {
    marginBottom: 20,
  },
  mb_15: {
    marginBottom: 15,
  },
});

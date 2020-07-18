import { StyleSheet } from 'react-native';
import { basestyles as bs, consts, sizes } from '@theme';

const width = consts.phone ? sizes.screen.width - 40 : 450;
const height = consts.phone ? 40 : 50;

export default StyleSheet.create({
  container: {
    ...bs.layout.absolute_full,
    // backgroundColor: 'rgba(0,0,0,0.7)',
    backgroundColor: '#000000',
  },

  scroll: {
    ...bs.layout.match_parent,
    backgroundColor: 'transparent',
  },
  scroll_content: {
    ...bs.layout.match_parent,
    ...bs.align.center,
  },

  btn_close: {
    position: 'absolute',
    top: 0,
    right: 4,
    padding: 10,
  },
  txt_close: {
    ...bs.font.normal,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  view_content: {
    ...bs.layout.absolute_full,
  },

  view_edit: {
    ...bs.align.self.center,
    width: width - 20,
  },
  edit: {
    ...bs.font.normal,
    ...bs.align.self.stretch,
    fontSize: 16,
    color: 'white',
    height,
  },
  edit_underline: {
    height: 1.5,
    backgroundColor: '#E7B700',
  },

  btn_login_email: {
    ...bs.align.center,
    ...bs.align.self.center,
    width,
    height,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  txt_login_email: {
    ...bs.font.normal,
    fontSize: 20,
    color: '#C9A004',
  },

  txt_desc: {
    ...bs.align.self.center,
    ...bs.font.normal,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  txt_desc2: {
    ...bs.align.self.center,
    ...bs.font.normal,
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
    marginTop: 2,
  },
  txt_link: {
    ...bs.align.self.center,
    ...bs.font.normal,
    fontSize: 14,
    color: '#E7B700',
    textAlign: 'center',
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

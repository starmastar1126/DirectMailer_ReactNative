import { StyleSheet } from 'react-native';
import { basestyles as bs, gstyles as gs, consts, sizes, colors } from '@theme';

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

  view_code: {
    ...bs.layout.row,
    ...bs.align.self.stretch,
    ...bs.align.center,
  },
  edit_content: {
    ...gs.edit.content,
    marginLeft: 4,
    marginRight: 4,
    width: 45,
    height: 90,
  },
  edit_normal: {
    ...gs.edit.normal,
    padding: 0,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'grey',
    backgroundColor: '#ffffff',
  },
  edit_text: {
    ...gs.edit.text,
    fontSize: 40,
    textAlign: 'center',
  },
  txt_code_sep: {
    ...bs.font.normal,
    marginLeft: 4,
    marginRight: 4,
    fontSize: 40,
    color: 'white',
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
    fontSize: 15,
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
    color: '#C9A004',
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

import { StyleSheet } from 'react-native';
import { basestyles as bs } from '@theme';

const rowHeight = 34;

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'black',
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    transform: [{ translateY: -50 }],
  },

  content: {
    ...bs.p_xs,
  },

  // input
  view_name: {
    ...bs.layout.row,
    ...bs.align.start_center,
    ...bs.align.self.stretch,
    ...bs.mt_sm,
    height: rowHeight,
    backgroundColor: 'white',
    paddingLeft: 8,
    borderRadius: 3,
  },
  edit_name: {
    ...bs.layout.match_parent,
    ...bs.font.normal,
    fontSize: 15,
    color: 'black',
  },
  btn_add: {
    ...bs.align.self.stretch,
    ...bs.align.center,
    ...bs.ph_xls,
    backgroundColor: 'transparent',
  },

  btn_done: {
    ...bs.align.center,
    ...bs.align.self.stretch,
    ...bs.mt_xs,
    height: rowHeight,
    backgroundColor: '#DCAF00',
  },
  txt_done: {
    ...bs.font.normal,
    fontSize: 15,
    color: 'black',
  },


  popup_frame: {
    ...bs.align.center,
    backgroundColor: 'white',
  },
  popup_container: {
    ...bs.align.center,
    ...bs.align.self.stretch,
    margin: 20,
  },
  popup_content: {
    ...bs.align.center,
    ...bs.align.self.stretch,
  },
  view_title: {
    ...bs.layout.row,
    ...bs.align.start_center,
    ...bs.align.self.stretch,
  },
  txt_title: {
    ...bs.font.normal,
    color: 'black',
    fontSize: 15,
  },

  list: {
    ...bs.align.self.stretch,
    ...bs.mt_xs,
    height: rowHeight * 3,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  list_row: {
    ...bs.layout.row,
    ...bs.align.start_center,
    ...bs.align.self.stretch,
    height: rowHeight,
    paddingLeft: 8,
    paddingRight: 8,
  },
  list_row_sel: {
    ...bs.layout.row,
    ...bs.align.start_center,
    ...bs.align.self.stretch,
    height: rowHeight,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#CDCDCD',
  },
  txt_row_name: {
    ...bs.font.normal,
    fontSize: 14,
    color: 'black',
  },
  btn_play: {
    ...bs.align.center,
    width: rowHeight,
    height: rowHeight,
  },
});

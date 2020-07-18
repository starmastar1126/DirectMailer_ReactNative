import { StyleSheet } from 'react-native';
import { basestyles as bs } from '@theme';

const rowHeight = 40;

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
  },

  txt_title: {
    ...bs.align.self.stretch,
    ...bs.m_md,
    textAlign: 'center',
    color: 'black',
    fontSize: 17,
  },

  txt_dev_name: {
    ...bs.font.normal,
    color: 'black',
    fontSize: 15,
  },

  view_name: {
    ...bs.align.start_center,
    ...bs.align.self.stretch,
    ...bs.ph_xs,
    ...bs.mh_md,
    height: rowHeight,
    backgroundColor: 'black',
  },
  edit_name: {
    ...bs.layout.match_parent,
    ...bs.font.normal,
    fontSize: 15,
    color: 'white',
  },
  btn_done: {
    ...bs.align.center,
    ...bs.align.self.stretch,
    ...bs.mt_sm,
    height: rowHeight,
    backgroundColor: '#DCAF00',
  },
  txt_done: {
    ...bs.font.normal,
    fontSize: 15,
    color: 'black',
  },
});

import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.layout.match_parent,
    ...bs.align.start_center,
    ...bs.statusbar.padding,
    backgroundColor: colors.background,
  },
  view_title: {
    ...bs.layout.row,
    ...bs.align.start_center,
    ...bs.mh_xls,
    height: sizes.resize_value6(44),
  },
  txt_title: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(17, true, false),
    color: colors.text,
    flex: 1,
  },
  btn_close: {
    ...bs.align.center,
    ...bs.align.self.stretch,
    ...bs.ph_xs,
  },
  button: {
    ...bs.align.center,
    ...bs.align.self.stretch,
    ...bs.ph_xs,
  },
  img_live: {
    width: sizes.resize_value6(28),
    height: sizes.resize_value6(28),
    resizeMode: 'contain',
  },

  // play list
  list: {
    ...bs.layout.match_parent,
  },
  list_row: {
    ...bs.layout.match_parent,
    ...bs.layout.row,
    ...bs.align.start_center,
    padding: 4,
  },

  // list row
  btn_row_play: {
    ...bs.align.center,
    padding: sizes.resize_value6(16),
  },
  img_row_play: {
    width: sizes.resize_value6(36),
    height: sizes.resize_value6(36),
    resizeMode: 'contain',
    tintColor: 'white',
  },

  view_row_title: {
    ...bs.layout.match_parent,
    ...bs.align.center_start,
  },
  btn_row_func: {
    ...bs.align.center,
    paddingTop: 4,
    paddingBottom: 4,
  },
  txt_row_title: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(16, true, false),
    color: colors.text,
  },
  txt_row_desc: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(14, true, false),
    color: colors.text_light,
  },
  txt_row_btns: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(14, true, false),
    color: '#878687',
  },
  view_row_info: {
    ...bs.layout.match_parent,
    ...bs.align.start_start,
  },
  view_row_btns: {
    ...bs.layout.row,
    ...bs.align.start_center,
    marginTop: 5,
  },
  btn_play: {
    ...bs.align.center,
    padding: 4,
  },
});

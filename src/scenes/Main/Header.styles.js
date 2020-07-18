import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.layout.absolute,
    ...bs.align.item.stretch,
    ...bs.statusbar.padding,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: colors.background,
    // backgroundColor: 'red',
  },
  content1: {
    ...bs.layout.absolute_full,
    backgroundColor: 'white',
    // backgroundColor: 'red',
  },
  content2: {
    ...bs.layout.absolute_full,
    ...bs.align.center,
    backgroundColor: 'transparent',
  },

  buttons: {
    ...bs.layout.match_parent,
    ...bs.layout.row,
    ...bs.align.between_center,
    ...bs.mh_xls,
  },
  button: {
    ...bs.align.center,
    padding: 8,
  },
  txt_left: {
    fontFamily: 'Stink on the Death',
    fontWeight: 'normal',
    fontSize: sizes.resize_value6(40, true, false),
    color: 'white',
    paddingRight: sizes.resize_value6(10),
    paddingTop: -sizes.resize_value6(10),
    backgroundColor: 'transparent',
  },

  img_right: {
    width: sizes.resize_value6(24),
    height: sizes.resize_value6(24),
    resizeMode: 'contain',
  },

  img_live: {
    width: sizes.resize_value6(28),
    height: sizes.resize_value6(28),
    resizeMode: 'contain',
  },

  view_mid: {
    ...bs.layout.match_parent,
    ...bs.align.center,
    backgroundColor: 'transparent',
  },
  view_search: {
    ...bs.layout.absolute_full,
    ...bs.align.center,
    ...bs.ph_xs,
    backgroundColor: 'transparent',
  },
  edit_search: {
    ...bs.align.self.stretch,
    ...bs.font.normal,
    fontSize: sizes.resize_value6(14, false),
    color: '#000',
    textAlign: 'center',
    // height: sizes.resize_value6(28),
    marginBottom: 4,
  },
  view_search_underline: {
    ...bs.align.self.stretch,
    backgroundColor: '#666',
    height: 1,
  },
});

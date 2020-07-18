import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.align.self.stretch,
    ...bs.align.start_center,
    backgroundColor: colors.background,
    // backgroundColor: 'red',
    zIndex: 100,
  },

  view_info: {
    ...bs.layout.absolute,
    ...bs.align.start_center,
    right: 0,
    top: 0,
    backgroundColor: colors.background,
  },

  // title
  view_title1: {
    ...bs.layout.match_parent,
    ...bs.align.center,
  },
  view_title2: {
    ...bs.layout.row,
    ...bs.align.start_start,
    ...bs.align.self.stretch,
  },
  txt_title: {
    ...bs.font.normal,
    ...bs.mh_xls,
    color: colors.text,
    fontSize: sizes.resize_value6(17, true, false),
  },
  txt_artist: {
    ...bs.font.normal,
    ...bs.mt_xls,
    ...bs.mh_xls,
    color: colors.text_light,
    flex: 1,
    textAlign: 'center',
    fontSize: sizes.resize_value6(12, true, false),
  },

  // control small
  view_ctrl_sm: {
    ...bs.layout.row,
    ...bs.align.center,
    ...bs.pr_xs,
    overflow: 'hidden',
  },
  btn_ctrl_sm: {
    ...bs.align.center,
    padding: sizes.resize_value6(4),
  },
  img_ctrl_sm: {
    width: sizes.resize_value6(16),
    height: sizes.resize_value6(16),
    tintColor: colors.text,
    resizeMode: 'stretch',
  },
  img_ctrl_play_sm: {
    width: sizes.resize_value6(20),
    height: sizes.resize_value6(20),
    tintColor: colors.text,
    resizeMode: 'stretch',
  },

  // control large
  view_ctrl_lg: {
    ...bs.layout.row,
    ...bs.align.self.stretch,
    ...bs.align.between_center,
    overflow: 'hidden',
  },
  btn_ctrl_lg: {
    ...bs.align.center,
    padding: sizes.resize_value6(4),
  },
  img_ctrl_lg: {
    width: sizes.resize_value6(26),
    height: sizes.resize_value6(26),
    tintColor: colors.text,
    resizeMode: 'contain',
  },
  img_ctrl_play_lg: {
    width: sizes.resize_value6(36),
    height: sizes.resize_value6(36),
    tintColor: colors.text,
    resizeMode: 'contain',
  },
  img_ctrl_live_lg: {
    width: sizes.resize_value6(26),
    height: sizes.resize_value6(25),
    resizeMode: 'contain',
  },

  // progress
  view_progress: {
    ...bs.align.self.stretch,
  },

  // player
  view_player: {
    ...bs.layout.absolute,
    left: 0,
  },
  img_thumb: {
    ...bs.layout.absolute,
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
  view_ctrl_full: {
    ...bs.layout.absolute,
    ...bs.align.start_center,
    ...bs.statusbar.padding,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  full_player: {
    ...bs.layout.match_parent,
  },
  video_player: {
    ...bs.layout.absolute_full,
  },
  audio_player: {
    ...bs.layout.absolute_full,
    opacity: 0,
  },
  fullscreen_player: {
    ...bs.layout.absolute_full,
    zIndex: 100,
  },
});

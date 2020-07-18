import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.layout.absolute,
    ...bs.align.start_center,
    left: 0,
    right: 0,
    top: sizes.header.height,
    height: sizes.profile.height,
    backgroundColor: colors.background,
  },
  content: {
    ...bs.layout.match_parent,
    backgroundColor: 'white',
  },

  // title
  bar_title: {
    ...bs.layout.row,
    ...bs.align.self.stretch,
    ...bs.align.between_start,
    height: sizes.profile.titleHeight,
    // backgroundColor: colors.alternative,
    backgroundColor: 'white',
  },
  btn_change_song: {
    ...bs.align.center,
    padding: 8,
  },
  view_title: {
    ...bs.align.start_center,
    flex: 1,
  },
  txt_artist: {
    ...bs.font.normal,
    color: colors.text_alt,
    fontSize: sizes.resize_value6(17, true, false),
    marginBottom: sizes.resize_value6(4),
  },
  txt_title: {
    ...bs.font.normal,
    color: colors.text_alt_light,
    fontSize: sizes.resize_value6(12, true, false),
  },

  // thumb
  view_thumb: {
    ...bs.layout.match_parent,
    ...bs.align.center,
    backgroundColor: colors.background,
  },
  img_thumb: {
    ...bs.layout.match_parent,
    // width: sizes.screen.width,
    // height: sizes.profile.thumbHeight,
  },

  // progress
  view_progress: {
    ...bs.align.end_center,
    ...bs.align.self.stretch,
    height: sizes.profile.sliderHeight,
    // backgroundColor: colors.alternative,
    backgroundColor: 'white',
  },

  view_play: {
    ...bs.layout.absolute_full,
    ...bs.align.center,
  },
  btn_play: {
    ...bs.align.center,
  },
  img_play: {
    width: sizes.resize_value6(64),
    height: sizes.resize_value6(64),
    resizeMode: 'contain',
  },
});

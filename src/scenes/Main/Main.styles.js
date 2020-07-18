import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.layout.match_parent,
  },
  content: {
    ...bs.layout.absolute_full,
    ...bs.align.start_center,
    backgroundColor: colors.background,
  },

  view_player: {
    ...bs.layout.absolute,
    ...bs.align.start_center,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: colors.background,
  },

  // menu
  view_menu: {
    ...bs.layout.absolute,
    left: sizes.screen.width / 2 - 16,
    top: (sizes.header.height1 + sizes.statusBarHeight - 32) / 2,
  },
  btn_menu: {
    ...bs.align.center,
    padding: 8,
  },
  img_menu: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
});

import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

const overlayHeight = sizes.screen.width * 0.2;

export default StyleSheet.create({
  container: {
    ...bs.align.self.stretch,
    height: sizes.list.height,
    backgroundColor: colors.background,
  },

  img_top_overlay: {
    ...bs.layout.absolute,
    top: -5,
    left: -5,
    right: -5,
    height: overlayHeight,
    transform: [{ rotate: '180deg' }],
  },
  img_bottom_overlay: {
    ...bs.layout.absolute,
    left: -5,
    right: -5,
    bottom: -5,
    height: overlayHeight,
  },
});

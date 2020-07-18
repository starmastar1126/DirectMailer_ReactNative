import { StyleSheet } from 'react-native';
import { basestyles as bs, sizes } from '@theme';

const overlayHeight = sizes.screen.width * 0.2;

export default StyleSheet.create({
  container: {
    ...bs.layout.absolute,
    left: 0,
    right: 0,
    bottom: 0,
    top: sizes.header.height,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  img_top_overlay: {
    ...bs.layout.absolute,
    top: -5,
    left: -5,
    right: -5,
    height: overlayHeight / 2,
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

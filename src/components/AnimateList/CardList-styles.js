import { StyleSheet } from 'react-native';
import { basestyles as bs, sizes } from '@theme';

export default StyleSheet.create({
  list: {
    ...bs.align.self.stretch,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  scroll: {
    ...bs.layout.absolute_full,
  },
  scroll_content: {
    ...bs.align.self.stretch,
  },

  header: {
    ...bs.layout.absolute,
    ...bs.align.start_center,
    left: 0,
    right: 0,
    top: 0,
  },

  row: {
    ...bs.align.center,
    width: sizes.screen.width,
  },
});

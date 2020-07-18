import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.layout.match_parent,
    ...bs.align.center,
    backgroundColor: colors.background,
  },

});

import { StyleSheet } from 'react-native';
import { basestyles as bs } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.layout.match_parent,
    ...bs.align.center,
    ...bs.align.item.stretch,
  },

});

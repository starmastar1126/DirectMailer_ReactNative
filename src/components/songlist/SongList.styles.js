import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.align.self.stretch,
    height: sizes.list.height,
    backgroundColor: colors.background,
  },

  view_footer: {
    paddingBottom: sizes.screen.width * 0.15,
  },
  view_footer1: {
    ...bs.align.center,
    height: 50,
  },

  row: {
    overflow: 'hidden',
  },
  btn_row: {
    ...bs.layout.absolute_full,
    ...bs.align.center,
  },
  img_row_thumb: {
    ...bs.layout.absolute_full,
    resizeMode: 'cover',
  },
  view_row_overlay: {
    ...bs.layout.absolute_full,
    backgroundColor: 'black',
  },
  view_row_title: {
    ...bs.align.center,
    marginTop: -15,
  },
  img_row_play: {
    width: 15,
    height: 15,
    marginBottom: 10,
  },
  txt_row_artist: {
    ...bs.font.normal,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 13,
    marginBottom: 2,
    flexWrap: 'wrap',
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'transparent',
  },
  txt_row_title: {
    ...bs.font.normal,
    color: '#CCC',
    fontSize: 11,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'transparent',
  },
});

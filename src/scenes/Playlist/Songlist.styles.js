import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

const songRowHeight = sizes.resize_value6(80);
const songThumbHeight = sizes.resize_value6(70);
const playSize = sizes.resize_value6(32);

export default StyleSheet.create({
  container: {
    ...bs.layout.match_parent,
    ...bs.align.start_center,
    ...bs.statusbar.padding,
    backgroundColor: colors.background,
  },
  view_title: {
    ...bs.layout.row,
    ...bs.align.self.stretch,
    ...bs.align.start_center,
    ...bs.mh_xls,
    height: sizes.resize_value6(44),
  },
  txt_title: {
    ...bs.font.normal,
    ...bs.ml_sm,
    flex: 1,
    fontSize: sizes.resize_value6(17, true, false),
    color: colors.text,
  },
  btn_close: {
    ...bs.align.center,
    ...bs.align.self.stretch,
    ...bs.ph_xs,
  },
  button: {
    ...bs.align.center,
    ...bs.align.self.stretch,
    ...bs.ph_xs,
  },
  img_live: {
    width: sizes.resize_value6(28),
    height: sizes.resize_value6(28),
    resizeMode: 'contain',
  },

  // play list
  list: {
    ...bs.layout.match_parent,
  },
  list_row: {
    ...bs.layout.row,
    ...bs.align.start_center,
    width: sizes.screen.width,
    height: songRowHeight,
  },

  view_song_thumb: {
    ...bs.align.center,
    width: songThumbHeight,
    height: songThumbHeight,
  },
  img_song_thumb: {
    ...bs.layout.absolute_full,
    width: songThumbHeight,
    height: songThumbHeight,
    resizeMode: 'cover',
  },
  btn_play: {
    ...bs.align.center,
    width: playSize,
    height: playSize,
    borderRadius: sizes.resize_value6(20),
    backgroundColor: 'transparent',
  },
  view_play_circle: {
    ...bs.align.center,
    width: playSize,
    height: playSize,
    borderRadius: playSize / 2,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  view_song_info: {
    ...bs.layout.match_parent,
    ...bs.align.center_start,
    marginLeft: 10,
    marginRight: 10,
  },
  txt_song_title: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(16, true, false),
    color: 'white',
  },
  txt_song_artist: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(12, true, false),
    color: 'white',
  },
  btn_delete: {
    ...bs.align.center_start,
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'red',
  },
  txt_delete: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(12, true, false),
    color: 'white',
  },
});

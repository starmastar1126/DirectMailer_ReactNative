import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';
export default StyleSheet.create({
  container: {
    ...bs.layout.match_parent,
    ...bs.align.start_center,
    ...bs.align.item.stretch,
    ...bs.statusbar.padding,
    backgroundColor: 'black',
  },
  chat_button: {
    ...bs.align.center,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 50,
    height: 50,
  },
  txt_search_mark: {
    ...bs.ml_xs,
    fontFamily: 'Stink on the Death',
    fontWeight: 'normal',
    fontSize: sizes.resize_value6(36, true, false),
    color: colors.text,
    paddingRight: sizes.resize_value6(10),
    marginTop: sizes.resize_value6(5),
  },
  view_searchbar: {
    ...bs.layout.row,
    ...bs.align.self.stretch,
    ...bs.align.center,
  },
  view_search: {
    ...bs.layout.match_parent,
    ...bs.align.center,
  },
  input_tag: {
    ...bs.align.center,
    backgroundColor: colors.search.bg_input_tag,
    borderRadius: sizes.resize_value6(3),
    borderWidth: 0,
    marginLeft: sizes.resize_value6(5),
    marginBottom: sizes.resize_value6(5),
    overflow: 'hidden',
  },
  input_tag_text: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(14, true, false),
    color: colors.search.input_tag_text,
    padding: sizes.resize_value6(2),
    paddingLeft: sizes.resize_value6(5),
    paddingRight: sizes.resize_value6(5),
    overflow: 'hidden',
  },
});

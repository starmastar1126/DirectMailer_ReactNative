import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

export default StyleSheet.create({
  container: {
    ...bs.layout.match_parent,
    ...bs.align.start_center,
    backgroundColor: 'black',
  },

  // search bar
  search_bar: {
    ...bs.align.center,
    ...bs.align.self.stretch,
    ...bs.statusbar.padding,
    backgroundColor: 'black',
  },
  img_ctrl_live_lg: {
    width: sizes.resize_value6(26),
    height: sizes.resize_value6(25),
    resizeMode: 'contain',
  },
  addList: {
    ...bs.align.center,
    ...bs.align.self.stretch,
  },

  view_search: {
    ...bs.layout.match_parent,
    ...bs.align.center,
  },
  view_searchbar: {
    ...bs.layout.row,
    ...bs.align.self.stretch,
    ...bs.align.center,
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
  txt_sharp: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(20, true, false),
    color: colors.text,
    paddingLeft: sizes.resize_value6(12),
    paddingTop: sizes.resize_value6(4),
  },
  btn_close: {
    ...bs.align.center,
    padding: sizes.resize_value6(8),
    marginTop: sizes.resize_value6(10),
  },


  tags_bar: {
    ...bs.layout.row,
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingBottom: sizes.resize_value6(8),
  },
  tags_bar1: {
    ...bs.layout.row,
    flex: 6,
    flexWrap: 'wrap',
    marginLeft: sizes.resize_value6(10),
    marginRight: sizes.resize_value6(8),
  },
  tags_bar2: {
    ...bs.layout.row,
    flex: 4,
    flexWrap: 'wrap',
    marginRight: sizes.resize_value6(10),
  },
  search_list: {
    ...bs.layout.match_parent,
    ...bs.mt_sm,
  },
  search_tag1: {
    ...bs.align.center,
    height: sizes.resize_value6(20),
    backgroundColor: colors.search.bg_tag1,
    borderRadius: sizes.resize_value6(3),
    borderWidth: 0,
    padding: sizes.resize_value6(3),
    marginLeft: sizes.resize_value6(5),
    marginTop: sizes.resize_value6(5),
    overflow: 'hidden',
  },
  search_tag2: {
    ...bs.align.center,
    height: sizes.resize_value6(20),
    backgroundColor: colors.search.bg_tag2,
    borderRadius: sizes.resize_value6(3),
    borderWidth: 0,
    padding: sizes.resize_value6(3),
    marginLeft: sizes.resize_value6(5),
    marginTop: sizes.resize_value6(5),
    overflow: 'hidden',
  },
  tag_text1: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(11, true, false),
    color: colors.search.tag_text1,
    overflow: 'hidden',
  },
  tag_text2: {
    ...bs.font.normal,
    fontSize: sizes.resize_value6(11, true, false),
    color: colors.search.tag_text2,
    overflow: 'hidden',
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
  chat_button: {
    ...bs.align.center,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 50,
    height: 50,
  },
});

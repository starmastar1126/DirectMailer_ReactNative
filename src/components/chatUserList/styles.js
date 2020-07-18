import { basestyles as bs } from '@theme';

export default {
  separator: {
    backgroundColor: 'black',
    opacity: 0.2,
    height: 1,
  },
  view_mark_online: {
    backgroundColor: '#00FF22',
    width: 4,
    height: 4,
    borderRadius: 2,
    marginLeft: 8,
  },
  view_mark_offline: {
    backgroundColor: '#FF0000',
    width: 4,
    height: 4,
    borderRadius: 2,
    marginLeft: 8,
  },
  row_container: {
    ...bs.layout.match_parent,
    backgroundColor: 'black',
  },
  btn_container: {
    ...bs.layout.match_parent,
  },
  row_content: {
    ...bs.layout.match_parent,
    ...bs.layout.row,
    marginHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth:1,
    borderBottomColor:'white',
  },
  avatar_border: {
    borderWidth: 0.5,
    borderColor: '#CDCDCD',
  },
  view_user_info1: {
    ...bs.align.center_start,
    marginLeft: 10,
  },
  view_user_name: {
    ...bs.layout.row,
    ...bs.align.start_center,
  },
  txt_user_name: {
    ...bs.font.normal,
    fontSize: 14,
    color: 'white',
  },
  txt_date: {
    ...bs.font.normal,
    fontSize: 30,
    justifyContent:'center',
    color: 'gray',
  },
};

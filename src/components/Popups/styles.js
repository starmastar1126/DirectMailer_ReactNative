import { styles as g, gstyles, sizes } from '@theme';

export default {
  common: {
    container: {
      ...g.align.center,
      ...g.align.self.center,
    },
  },

  register: {
    scroll: {
      flexGrow: 0,
    },
    scroll_content: {
      ...g.align.center,
      padding: 10,
      paddingTop: 20,
      paddingBottom: 20,
    },
    txt_title: {
      ...g.font.normal,
      fontSize: 22,
      color: '#1a2c3f',
    },
    txt_desc: {
      ...g.font.normal,
      fontSize: 13,
      color: 'rgba(0,0,0,0.3)',
      marginTop: 17,
      textAlign: 'center',
    },
    edit_name: {
      ...g.align.self.stretch,
      ...gstyles.edit.content_base,
      marginTop: 20,
    },
    img_signup: {
      width: sizes.nextBtnSize,
      height: sizes.nextBtnSize * 0.5,
      resizeMode: 'contain',
    },
    btn_signup: {
      marginTop: 30,
      marginBottom: 10,
    },
  },
};

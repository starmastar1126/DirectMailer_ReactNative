import { StyleSheet } from 'react-native';
import consts from './consts';
import bs from './basestyles';
import colors from './colors';
import sizes from './sizes';

const popupWidth = consts.phone ? sizes.screen.width - 80 : 300;
export default {
  dropAlert: {
      title: {
          ...bs.font.normal,
          fontSize: 16,
          textAlign: 'left',
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'transparent',
      },
      messages: {
          ...bs.font.normal,
          fontSize: 14,
          textAlign: 'left',
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'transparent',
      },
  },

  edit: {
    none: {},

    normal: {
      ...bs.align.center,
      padding: 18,
      paddingTop: 0,
      paddingBottom: 0,
      borderWidth: 1.5,
      borderRadius: 4,
      backgroundColor: colors.edit_bg_normal,
    },

    active: {
      elevation: 6,
      borderColor: colors.edit_border_active,
      shadowColor: colors.edit_shadow_active,
      shadowOffset: {width: 1, height: 1},
      shadowRadius: 4,
      shadowOpacity: 1,
    },

    empty: {
      borderColor: colors.edit_border_empty,
    },

    fill: {
      borderColor: colors.edit_border_fill,
    },

    text: {
      ...bs.font.normal,
      ...bs.align.self.stretch,
      flex: 1,
      padding: 0,
      fontSize: 14,
      color: colors.edit_text_normal,
      backgroundColor: 'transparent',
    },

    content_base: {
      height: sizes.editHeight,
    },

    content: {
      width: (consts.isphone ? undefined : 300),
      height: sizes.editHeight,
      marginLeft: (consts.isphone ? 60 : undefined),
      marginRight: (consts.isphone ? 60 : undefined),
    },
  },

  popup: {
    container: {
      ...bs.align.center,
      width: popupWidth,
      marginTop: 10,
      marginBottom: 10,
    },
    content: {
      ...bs.align.center,
      ...bs.align.self.center,
      width: popupWidth,
    },
    frame: {
      ...bs.align.center,
      borderRadius: 30,
      borderWidth: 0.5,
      borderColor: '#000000',
      shadowColor: '#000000',
      shadowOpacity: 0.5,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 4,
      padding: 10,
      backgroundColor: 'white',
    },
  },
  common: {
    btn_back: {
      ...bs.layout.absolute,
      padding: 4,
      zIndex: 10,
      left: 4,
      top: sizes.statusBarHeight,
    },
    img_back: {
      tintColor: '#8F8F8F',
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
  },
};
import sizes from './sizes';

export default {
  align: {
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    start_start: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    end_end: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    start_center: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    start_end: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    start_stretch: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    end_center: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    end_start: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    end_stretch: {
      justifyContent: 'flex-end',
      alignItems: 'stretch',
    },
    center_start: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    center_end: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    center_stretch: {
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    between_center: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    between_start: {
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    between_end: {
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    between_stretch: {
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    around_center: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    around_start: {
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    around_end: {
      justifyContent: 'space-around',
      alignItems: 'flex-end',
    },
    around_stretch: {
      justifyContent: 'space-around',
      alignItems: 'stretch',
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
    },
    item: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-start',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    self: {
      center: {
        alignSelf: 'center',
      },
      start: {
        alignSelf: 'flex-start',
      },
      end: {
        alignSelf: 'flex-end',
      },
      stretch: {
        alignSelf: 'stretch',
      },
    },
  },

  layout: {
    column: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
    },
    absolute: {
      position: 'absolute',
    },
    match_parent: {
      flex: 1,
      alignSelf: 'stretch',
    },
    absolute_full: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },

  statusbar: {
    padding: {
      paddingTop: sizes.statusBarHeight,
    },
    margin: {
      marginTop: sizes.statusBarHeight,
    },
  },

  font: {
    normal: {
      fontFamily: 'Montserrat',
      fontWeight: '400',
    },
    bold: {
      fontFamily: 'Montserrat',
      fontWeight: '700',
    },
    semibold: {
      fontFamily: 'Montserrat',
      fontWeight: '600',
    },
    light: {
      fontFamily: 'Montserrat',
      fontWeight: '200',
    },
  },

  text_normal: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },
  text_bold: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
  },
  text_semibold: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  text_light: {
    fontFamily: 'Montserrat',
    fontWeight: '200',
  },
  text_xls: {
    fontSize: 9,
  },
  text_xs: {
    fontSize: 10,
  },
  text_sm: {
    fontSize: 12,
  },
  text_md: {
    fontSize: 14,
  },
  text_lg: {
    fontSize: 16,
  },
  text_xlg: {
    fontSize: 20,
  },

  // margin
  m_statusbar: {
    marginTop: sizes.statusBarHeight,
  },
  m_none: {
    margin: 0,
  },
  mt_none: {
    marginTop: 0,
  },
  mb_none: {
    marginBottom: 0,
  },
  ml_none: {
    marginLeft: 0,
  },
  mr_none: {
    marginRight: 0,
  },
  mh_none: {
    marginHorizontal: 0,
  },
  mv_none: {
    marginVertical: 0,
  },
  m_xls: {
    margin: 5,
  },
  mt_xls: {
    marginTop: 5,
  },
  mb_xls: {
    marginBottom: 5,
  },
  ml_xls: {
    marginLeft: 5,
  },
  mr_xls: {
    marginRight: 5,
  },
  mh_xls: {
    marginHorizontal: 5,
  },
  mv_xls: {
    marginVertical: 5,
  },
  m_xs: {
    margin: 10,
  },
  mt_xs: {
    marginTop: 10,
  },
  mb_xs: {
    marginBottom: 10,
  },
  ml_xs: {
    marginLeft: 10,
  },
  mr_xs: {
    marginRight: 10,
  },
  mh_xs: {
    marginHorizontal: 10,
  },
  mv_xs: {
    marginVertical: 10,
  },
  m_sm: {
    margin: 15,
  },
  mt_sm: {
    marginTop: 15,
  },
  mb_sm: {
    marginBottom: 15,
  },
  ml_sm: {
    marginLeft: 15,
  },
  mr_sm: {
    marginRight: 15,
  },
  mh_sm: {
    marginHorizontal: 15,
  },
  mv_sm: {
    marginVertical: 15,
  },
  m_md: {
    margin: 20,
  },
  mt_md: {
    marginTop: 20,
  },
  mb_md: {
    marginBottom: 20,
  },
  ml_md: {
    marginLeft: 20,
  },
  mr_md: {
    marginRight: 20,
  },
  mh_md: {
    marginHorizontal: 20,
  },
  mv_md: {
    marginVertical: 20,
  },
  m_lg: {
    margin: 30,
  },
  mt_lg: {
    marginTop: 30,
  },
  mb_lg: {
    marginBottom: 30,
  },
  ml_lg: {
    marginLeft: 30,
  },
  mr_lg: {
    marginRight: 30,
  },
  mh_lg: {
    marginHorizontal: 30,
  },
  mv_lg: {
    marginVertical: 30,
  },
  m_xlg: {
    margin: 40,
  },
  mt_xlg: {
    marginTop: 40,
  },
  mb_xlg: {
    marginBottom: 40,
  },
  ml_xlg: {
    marginLeft: 40,
  },
  mr_xlg: {
    marginRight: 40,
  },
  mh_xlg: {
    marginHorizontal: 40,
  },
  mv_xlg: {
    marginVertical: 40,
  },

  // padding
  p_statusbar: {
    paddingTop: sizes.statusBarHeight,
  },
  p_none: {
    padding: 0,
  },
  pt_none: {
    paddingTop: 0,
  },
  pb_none: {
    paddingBottom: 0,
  },
  pl_none: {
    paddingLeft: 0,
  },
  pr_none: {
    paddingRight: 0,
  },
  ph_none: {
    paddingHorizontal: 0,
  },
  pv_none: {
    paddingVertical: 0,
  },
  p_xls: {
    padding: 5,
  },
  pt_xls: {
    paddingTop: 5,
  },
  pb_xls: {
    paddingBottom: 5,
  },
  pl_xls: {
    paddingLeft: 5,
  },
  pr_xls: {
    paddingRight: 5,
  },
  ph_xls: {
    paddingHorizontal: 5,
  },
  pv_xls: {
    paddingVertical: 5,
  },
  p_xs: {
    padding: 10,
  },
  pt_xs: {
    paddingTop: 10,
  },
  pb_xs: {
    paddingBottom: 10,
  },
  pl_xs: {
    paddingLeft: 10,
  },
  pr_xs: {
    paddingRight: 10,
  },
  ph_xs: {
    paddingHorizontal: 10,
  },
  pv_xs: {
    paddingVertical: 10,
  },
  p_sm: {
    padding: 15,
  },
  pt_sm: {
    paddingTop: 15,
  },
  pb_sm: {
    paddingBottom: 15,
  },
  pl_sm: {
    paddingLeft: 15,
  },
  pr_sm: {
    paddingRight: 15,
  },
  ph_sm: {
    paddingHorizontal: 15,
  },
  pv_sm: {
    paddingVertical: 15,
  },
  p_md: {
    padding: 20,
  },
  pt_md: {
    paddingTop: 20,
  },
  pb_md: {
    paddingBottom: 20,
  },
  pl_md: {
    paddingLeft: 20,
  },
  pr_md: {
    paddingRight: 20,
  },
  ph_md: {
    paddingHorizontal: 20,
  },
  pv_md: {
    paddingVertical: 20,
  },
  p_lg: {
    padding: 30,
  },
  pt_lg: {
    paddingTop: 30,
  },
  pb_lg: {
    paddingBottom: 30,
  },
  pl_lg: {
    paddingLeft: 30,
  },
  pr_lg: {
    paddingRight: 30,
  },
  ph_lg: {
    paddingHorizontal: 30,
  },
  pv_lg: {
    paddingVertical: 30,
  },
  p_xlg: {
    padding: 40,
  },
  pt_xlg: {
    paddingTop: 40,
  },
  pb_xlg: {
    paddingBottom: 40,
  },
  pl_xlg: {
    paddingLeft: 40,
  },
  pr_xlg: {
    paddingRight: 40,
  },
  ph_xlg: {
    paddingHorizontal: 40,
  },
  pv_xlg: {
    paddingVertical: 40,
  },
};

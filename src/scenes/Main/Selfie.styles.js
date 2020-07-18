import { StyleSheet } from 'react-native';
import { basestyles as bs, colors, sizes } from '@theme';

const captureOuterSize = sizes.selfie.captureBtnSize;
const captureInnerSize = sizes.selfie.captureBtnInnerSize;

export default StyleSheet.create({
  container: {
    ...bs.layout.absolute_full,
    ...bs.align.end_center,
    backgroundColor: colors.background,
  },
  broadcast: {
    ...bs.layout.absolute_full,
  },
  view_bottom: {
    ...bs.layout.row,
    ...bs.align.self.stretch,
    ...bs.align.between_center,
    ...bs.ph_sm,
    backgroundColor: 'transparent',
  },
  btn_bottom: {
    ...bs.align.center,
    ...bs.m_xs,
  },
  btn_capture: {
    ...bs.align.center,
    ...bs.mb_md,
    width: captureOuterSize,
    height: captureOuterSize,
    borderRadius: captureOuterSize / 2,
    backgroundColor: colors.alternative,
  },
  btn_capture_inner: {
    width: captureInnerSize,
    height: captureInnerSize,
    borderRadius: captureInnerSize / 2,
    backgroundColor: colors.background,
  },
  btn_capture_inner_rec: {
    width: captureInnerSize,
    height: captureInnerSize,
    borderRadius: captureInnerSize / 2,
    backgroundColor: '#f00',
  },

  btn_golive: {
    ...bs.layout.absolute,
    ...bs.align.self.stretch,
    ...bs.align.center,
    left: 0,
    right: 0,
    top: sizes.header.height,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.alternative,
  },
  txt_golive: {
    ...bs.font.normal,
    color: colors.text_alt,
    fontSize: sizes.resize_value6(16, true, false),
  },
});

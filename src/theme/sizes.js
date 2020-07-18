import { Dimensions } from 'react-native';
import consts from './consts';

const window = Dimensions.get('window');
const screenHeight = Math.max(window.width, window.height);
const screenWidth = Math.min(window.width, window.height);
const statusBarHeight = consts.ios ? 20 : 0;

// ios: 320x480, 320x568, 375x667, 414x736, pad: 768x1024, 1024x1366
// android: 340x640, 411x731, 480x853, tablet: 600x960, 678x1024, 800x1280

function getHorzScale() {
  if (screenWidth < 360) { // 320x480, 320x568, 340x640
    return 0; // base 320
  } else if (screenWidth < 420) { // 375x667
    return 1; // base 375
  } else if (screenWidth < 480) { // 411x731, 414x736
    return 2; // base 414
  } else if (screenWidth < 600) { // 480x853
    return 3; // base 480
  } else if (screenWidth < 750) { // 600x960, 678x1024
    return 4; // pad - base 600
  } else if (screenWidth < 1024) { // 768x1024, 800x1280
    return 5; // pad - base 768
  } // 1024x1366
  return 6; // pad - base 1024
}
function getVertScale() {
  if (screenHeight < 560) { // 320x480
    return 0; // base 480
  } else if (screenHeight < 640) { // 320x568
    return 1; // base 568
  } else if (screenHeight < 720) { // 340x640, 375x667
    return 2; // base 667
  } else if (screenHeight < 900) { // 414x736, 480x853
    return 3; // base 736
  } else if (screenHeight < 1020) { // 600x960
    return 4; // pad - base 960
  } else if (screenHeight < 1250) { // 678x1024, 768x1024
    return 5; // pad - base 1024
  } // 800x1280, 1024x1366
  return 6; // pad - base 1280
}

const hscale = getHorzScale();
const vscale = getVertScale();
let wrate6 = screenWidth / 320; // 375;
let hrate6 = screenHeight / 568; // 667;
const isPad = hscale >= 4;

if (screenWidth >= 600) {
  wrate6 = 1.5 * screenWidth / 768;
}
if (screenHeight >= 960) {
  hrate6 = 1.5 * screenHeight / 1024;
}

const sizes = {
  resize_value6(sz, horz = true, floor = true) {
    const rate = horz === true ? wrate6 : hrate6;
    if (floor) return Math.floor(rate * sz);
    return rate * sz;
  },

  // horz: 0: 320, 1: 375, 2: 414, 3: 480, 4: 600, 5:  768, 6: 1024
  // vert: 0: 480, 1: 568, 2: 667, 3: 736, 4: 960, 5: 1024, 6: 1280
  select_value(values, horz = true) {
    let scale = horz === true ? hscale : vscale;
    while (scale >= 0) {
      if (values[scale]) return values[scale];
      scale -= 1;
    }

    scale = horz === true ? hscale : vscale;
    while (scale <= 10) {
      if (values[scale]) return values[scale];
      scale += 1;
    }
    return 0;
  },

  // Window Dimensions
  screen: {
    height: screenHeight,
    width: screenWidth,

    widthHalf: screenWidth * 0.5,
    widthThird: screenWidth * 0.333,
    widthTwoThirds: screenWidth * 0.666,
    widthQuarter: screenWidth * 0.25,
    widthThreeQuarters: screenWidth * 0.75,
  },

  statusBarHeight,
};

const itemsPerRow = isPad ? 5 : 3;
const gridSize = Math.floor(sizes.screen.width / itemsPerRow) - 1;
sizes.list = {
  itemsPerRow,
};

sizes.header = {
  height: statusBarHeight + sizes.resize_value6(70),
  height1: statusBarHeight + sizes.resize_value6(50),
};

sizes.selfie = {
  height: sizes.screen.height,
  captureBtnSize: 80,
  captureBtnInnerSize: 64,
};

sizes.profile = {
  titleHeight: sizes.resize_value6(60),
  sliderHeight: sizes.resize_value6(50),
  animHeight: sizes.screen.height - sizes.header.height1,
  height: sizes.screen.height - sizes.header.height,
};
sizes.profile.thumbHeight = sizes.profile.height - sizes.profile.titleHeight - sizes.profile.sliderHeight;

sizes.expanded = {
  titleHeight: sizes.resize_value6(56),
  controlHeight: sizes.resize_value6(64),
  thumbHeight: sizes.screen.width,
};
const temp = sizes.header.height1 + sizes.expanded.titleHeight + sizes.expanded.controlHeight;
if (temp + sizes.expanded.thumbHeight > sizes.screen.height - gridSize) {
  sizes.expanded.thumbHeight = sizes.screen.height - gridSize - temp;
}
if (sizes.expanded.thumbHeight < sizes.screen.height / 3) {
  sizes.expanded.thumbHeight = Math.floor(sizes.screen.height / 3);
}
sizes.expanded.height = sizes.expanded.titleHeight + sizes.expanded.controlHeight + sizes.expanded.thumbHeight;

sizes.collapsed = {
  thumbSize: sizes.resize_value6(74),
};
sizes.collapsed.height = sizes.collapsed.thumbSize;

sizes.list.height = sizes.screen.height - sizes.header.height1 - sizes.collapsed.height;

sizes.selfie.animHeight = sizes.profile.height;
sizes.profile.animHeight = sizes.screen.height - sizes.header.height1;
sizes.expanded.animHeight = sizes.expanded.height - sizes.collapsed.height;
console.log(sizes);
export default sizes;

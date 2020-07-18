import { Animated } from 'react-native';

const g = {};


g.isNull = obj => (!obj || obj === null);

g.isEmpty = str => (g.isNull(str) || str.length === 0);

g.isEqualFrame = (f1, f2) =>
  (f1 && f2 && f1.x === f2.x &&
    f1.y === f2.y && f1.width === f2.width && f1.height && f2.height);

g.random = () => Math.floor(Math.random() * 0x7FFFFFFF);

g.calculateRatio = (total, current) => {
  var ratio = current / total;
  if (ratio > 1) {
    return 1;
  } else if (ratio < 0) {
    return 0;
  }
  return ratio;
};

// g.formatCount = (count, dots = 1) => {
//   if (count > 1000000) {
//     return `${Number(count / 1000000).toFixed(dots)}M`;
//   } else if (count > 1000) {
//     return `${Number(count / 1000).toFixed(dots)}k`;
//   }
//   return `${count}`;
// };

g.formatCount = (count, unit, pl = 's') => `${count}${unit}${count > 1 ? pl : ''}`;

g.animateSetValue = function (animValue, newValue,
  animated = false, duration = 500,
  animlist = undefined) {
  if (animValue.__getValue() !== newValue) {
    if (animated) {
      if (animlist !== undefined) {
        animlist.push(Animated.timing(animValue, {
          duration,
          toValue: newValue,
        }));
      } else {
        Animated.timing(animValue, { // eslint-disable-line
          duration,
          toValue: newValue,
        }).start();
      }
    } else {
      animValue.setValue(newValue);
    }
  }
  return animlist;
};

g.getS3Url = function (name, bucket = 'chune-media', region = 'us-west-2') {
  return `https://s3-${region}.amazonaws.com/${bucket}/${name}`;
};

g.getMDFileUrl = (file) => {
  if (!file) return null;
  return file.url || file.Location;
};

g.findMDFile = (files, type = undefined) => {
  if (!files) return null;
  if (files.length <= 0) return null;
  if (!type) return files[0];

  return files.find(file => file.type === type);
};

g.findMDFileUrl = (files, type = undefined) => {
  const file = g.findMDFile(files, type);
  return g.getMDFileUrl(file);
};

export default g;

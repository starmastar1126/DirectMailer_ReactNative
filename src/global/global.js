// import { Animated } from 'react-native';

export function isNull(obj: Object) {
  return typeof obj === 'undefined' || obj == null;
}
export function isNotNull(obj: Object) {
  return typeof obj !== 'undefined' && obj != null;
}

export function isEmpty(str: String) {
  return (str || '').length === 0;
}

export function isEqualFrame(f1: Object, f2: Object) {
  return f1 && f2 && f1.x === f2.x && f1.y === f2.y &&
    f1.width === f2.width && f1.height === f2.height;
}

export function random() {
  return Math.floor(Math.random() * 0x7FFFFFFF);
}

export function calculateRatio(total: Number, current: Number) {
  var ratio = current / total;
  if (ratio > 1) {
    return 1;
  } else if (ratio < 0) {
    return 0;
  }
  return ratio;
}

export function formatCount(count: Number, unit: String, pl: String = 's') {
  return `${count}${unit}${count > 1 ? pl : ''}`;
}

export function getMDFileUrl(file: Object) {
  if (!file) return null;
  return file.url || file.Location;
}

export function findMDFile(files: Array, type: String = undefined) {
  if (!files) return null;
  if (files.length <= 0) return null;
  if (!type) return files[0];

  return files.find(file => file.type === type);
}

export function findMDFileUrl(files: Array, type: String = undefined) {
  const file = findMDFile(files, type);
  return getMDFileUrl(file);
}

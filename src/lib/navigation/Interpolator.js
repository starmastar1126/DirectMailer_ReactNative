import { I18nManager } from 'react-native';

function forInitial(props): Object {
  const { navigation, scene } = props;

  const focused = navigation.state.index === scene.index;
  const opacity = focused ? 1 : 0;
  // If not focused, move the scene far away.
  const translate = focused ? 0 : 1000000;
  return {
    opacity,
    transform: [{ translateX: translate }, { translateY: translate }],
  };
}

function getForHorizontal(inverse: Boolean): Function {
  return function (props: Object): Object {
    const { layout, position, scene } = props;

    if (!layout.isMeasured) {
      return forInitial(props);
    }

    const index = scene.index;
    const inputRange = [index - 1, index, index + 1];

    const width = layout.initWidth;
    const outputRange = inverse
      ? ([-width, 0, 10]: Array<number>)
      : ([width, 0, -10]: Array<number>);

    // Add [index - 1, index - 0.99] to the interpolated opacity for screen transition.
    // This makes the screen's shadow to disappear smoothly.
    const opacity = position.interpolate({
      inputRange: ([
        index - 1,
        index - 0.99,
        index,
        index + 0.99,
        index + 1,
      ]: Array<number>),
      outputRange: ([0, 1, 1, 0.3, 0]: Array<number>),
    });

    const translateY = 0;
    const translateX = position.interpolate({
      inputRange,
      outputRange,
    });

    return {
      opacity,
      transform: [{ translateX }, { translateY }],
    };
  };
}

function getForVertical(inverse: Boolean): Function {
  return function (props: Object): Object {
    const { layout, position, scene } = props;

    if (!layout.isMeasured) {
      return forInitial(props);
    }

    const index = scene.index;
    const inputRange = [index - 1, index, index + 1];

    const height = layout.initHeight;
    const outputRange = inverse
        ? ([-height, 0, 10]: Array<number>)
        : ([height, 0, -10]: Array<number>);

    // Add [index - 1, index - 0.99] to the interpolated opacity for screen transition.
    // This makes the screen's shadow to disappear smoothly.
    const opacity = position.interpolate({
      inputRange: ([
        index - 1,
        index - 0.99,
        index,
        index + 0.99,
        index + 1,
      ]: Array<number>),
      outputRange: ([0, 1, 1, 0.3, 0]: Array<number>),
    });

    const translateX = 0;
    const translateY = position.interpolate({
      inputRange,
      outputRange,
    });

    return {
      opacity,
      transform: [{ translateX }, { translateY }],
    };
  };
}

const interpolators = {
  forHorizontal: getForHorizontal(false),
  forHorizontalInverse: getForHorizontal(true),
  forVerticalInverse: getForVertical(true),
};

export default interpolators;

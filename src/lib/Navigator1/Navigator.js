
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { fadeInScene } from './Interpolator';

const NavigationCardStackStyleInterpolator = require('NavigationCardStackStyleInterpolator');
const NavigationCardStackPanResponder = require('NavigationCardStackPanResponder');

const {
  Card: NavigationCard,
  CardStack: NavigationCardStack,
} = NavigationExperimental;

export class Navigator extends StackNavigator {

  static defaultProps = {
    enableGestures: false,
  };

  constructor(props) {
    super(props);

    this._orgRenderScene = this._renderScene;
    this._renderScene = this._renderSceneEx.bind(this);
  }

  static shared = undefined;
  componentDidMount() {
    if (Navigator.shared === undefined) {
      Navigator.shared = this;
    }
  }

  componentWillUnmount() {
    if (Navigator.shared === this) {
      Navigator.shared = undefined;
    }
  }

  _renderSceneEx(props) {
    const { scene } = props;
    const isVertical = scene.route.animation === 'vertical';
    let panHandlers = null;
    let style = null;

    if (this.props.enableGestures) {
      const panHandlersProps = {
        ...props,
        onNavigateBack: this.props.onNavigateBack,
        gestureResponseDistance: this.props.gestureResponseDistance,
      };
      panHandlers = isVertical ?
        NavigationCardStackPanResponder.forVertical(panHandlersProps) :
        NavigationCardStackPanResponder.forHorizontal(panHandlersProps);
    }

    if (scene.route.animation === 'fade') {
      style = fadeInScene(props);
    } else {
      style = isVertical ?
        NavigationCardStackStyleInterpolator.forVertical(props) :
        NavigationCardStackStyleInterpolator.forHorizontal(props);
    }

    return (
      <NavigationCard
        {...props}
        key={`card_${props.scene.key}`}
        panHandlers={panHandlers}
        renderScene={this.props.renderScene}
        style={[style, this.props.cardStyle]}
      />
    );
  }
}

export function getInstance() {
  return Navigator.shared;
}

export function getSharedState() {
  const navigator = getInstance();
  if (navigator) {
    return navigator.props.navigationState;
  }
  return {};
}

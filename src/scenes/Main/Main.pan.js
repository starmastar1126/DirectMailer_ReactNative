import { Animated, PanResponder } from 'react-native';
import { gstates } from '@common';
import { handler } from '@redux';
import { sizes, consts } from '@theme';
import { ViewType } from './types';

const { main: mainHandler } = handler;

export default class MainPanHandler {

  main = null;
  animating = false;
  panResponder = null;
  panStartPos: Number = 0;

  constructor(main) {
    this.main = main;

    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: this._onMoveShouldSetResponderCapture,
      onMoveShouldSetPanResponderCapture: this._onMoveShouldSetPanResponderCapture,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove,
      onPanResponderRelease: this._onPanResponderRelease,
      onPanResponderTerminate: this._onPanResponderRelease,
    });

    this.panMoveCb = Animated.event([{
      toValue: main.state.animView,
    }]);
  }

  get panHandlers() {
    return this.panResponder.panHandlers;
  }

  // want to allow MOVEMENT of the view weâ€™ll attach this panresponder to.
  _onMoveShouldSetResponderCapture = () => true;

  // want to allow DRAGGING of the view weâ€™ll attach this panresponder to.
  _onMoveShouldSetPanResponderCapture = (event, gs) => {
    if (!gstates.panMovable || gstates.searchState === 2 || gstates.player.fullscreen || this.animating) {
      return false;
    }

    const viewState = gstates.viewState;

    if (gs.dy < 0) {
      // SWIPE UP
      // can't do swipe up when in Player Collapsed state
      if (viewState === ViewType.collapsed) {
        return false;
      }
    } else {
      // SWIPE DOWN
      if (viewState === ViewType.collapsed) { // eslint-disable-line
        if (gs.vy > 3) {
          return true;
        } else if (gs.moveY < sizes.screen.height - sizes.list.height) {
          return true;
        } else if (gstates.listOffset <= 10) {
          return true;
        }
        return false;
      }
    }
    return true;
  }

  // invoked when we got ACCESS to the movement of the element
  _onPanResponderGrant = () => {
    const poses = this._getPanPoses();
    const vs = this._view2pos(gstates.viewState);

    if (gstates.searchState === 1) {
      gstates.searchState = 0;
      mainHandler.updateView();
    }

    this.panStartPos = poses[vs];
  }

  // invoked when we MOVE the element, which we can use to calculate the next value for the object
  _onPanResponderMove = (event, gs) => {
    const multiplier = 1.5;
    const dy = gs.dy * multiplier;
    const panpos = this.panStartPos - dy;
    const newpos = this._calcNewPos(panpos);

    this.panMoveCb({ toValue: newpos });
  }

  // invoked when we RELEASE the view
  _onPanResponderRelease = (event, gs) => {
    const multiplier = 1.5;
    const dy = gs.dy * multiplier;
    const panpos = this.panStartPos - dy;
    const newpos = this._calcNewPos(panpos);
    let newvs;

    for (let k = 0; k < 4; k += 1) {
      if (newpos < k + 0.5) {
        newvs = k;
        break;
      }
    }
    if (newvs === gstates.viewState) {
      if (gs.vy > 1) {
        newvs = Math.min(Math.max(newvs - 1, 0), 3);
      } else if (gs.vy < -1) {
        newvs = Math.min(Math.max(newvs + 1, 0), 3);
      }
    }

    this.changeView(newvs, true);
  }

  changeView = (vs, force = false, animate = true) => {
    const prev = gstates.viewState;
    if (force === false && vs === prev) {
      return;
    }

    const newpos = this._view2pos(vs);

    this.animating = true;
    Animated.timing(this.main.state.animView, {
      duration: animate ? consts.animViewDuration : 0,
      toValue: newpos,
    }).start(() => {
      this.animating = false;

      if (prev !== vs) {
        gstates.viewState = vs;
        mainHandler.updateView();
      }
    });
  }

  _calcNewPos = (panpos) => {
    const count = ViewType.count;
    const poses = this._getPanPoses();
    let newpos = 0;

    if (panpos < 0) {
      panpos = 0;
    } else if (panpos > poses[count - 1]) {
      panpos = poses[count - 1];
    }

    for (let i = 0; i < count; i += 1) {
      if (panpos > poses[i] && panpos <= poses[i + 1]) {
        newpos = i + (panpos - poses[i]) / (poses[i + 1] - poses[i]);
        newpos = Math.min(Math.max(newpos, 0), count - 1);
        break;
      }
    }
    return newpos;
  }

  _getPanPoses = () => {
    const poses = [];
    let pos = 0;

    // selfie
    poses.push(pos);
    pos += sizes.selfie.animHeight;

    // profle
    poses.push(pos);
    pos += sizes.profile.animHeight;

    // expanded
    poses.push(pos);
    pos += sizes.expanded.animHeight;

    // collapsed
    poses.push(pos);
    pos += sizes.screen.height;

    // dummy
    poses.push(pos);
    return poses;
  }

  _view2pos = (vs) => {
    switch (vs) {
      case ViewType.selfie:
        return 0;
      case ViewType.profile:
        return 1;
      case ViewType.expanded:
        return 2;
      case ViewType.collapsed:
        return 3;
      default:
        break;
    }
    return 1;
  }

  _pos2view = (pos) => {
    if (pos >= 0 && pos < 1) {
      return ViewType.selfie;
    } else if (pos >= 1 && pos < 2) {
      return ViewType.profile;
    } else if (pos >= 2 && pos < 3) {
      return ViewType.expanded;
    } else if (pos >= 3) {
      return ViewType.collapsed;
    }
    return ViewType.profile;
  }
}

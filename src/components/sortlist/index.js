/* eslint-disable react/no-multi-comp, prefer-spread */

import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';
import {
  ListView,
  LayoutAnimation,
  View,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import PropTypes from 'prop-types';


const HEIGHT = Dimensions.get('window').height;

class SortListRow extends Component {
  // static propTypes = {
  //   hovering: PropTypes.any,
  //   active: PropTypes.any,
  //   rowData: PropTypes.any.isRequired,
  //   list: PropTypes.any.isRequired,
  //   activeDivider: PropTypes.any,
  //   // rowHasChanged: PropTypes.func,
  //   renderRow: PropTypes.func.isRequired,
  //   onRowActive: PropTypes.func,
  //   onRowLayout: PropTypes.func,
  // };
  static defaultProps = {
    hovering: false,
    active: false,
    activeDivider: null,
    // rowHasChanged: () => false,
    onRowActive: undefined,
    onRowLayout: undefined,
  };

  _data: {};

  shouldComponentUpdate(props) {
    if (props.hovering !== this.props.hovering) return true;
    if (props.active !== this.props.active) return true;
    if (props.rowData.data !== this.props.rowData.data) return true;
    if (props.rowHasChanged) return props.rowHasChanged(props.rowData.data, this._data);
    return false;
  }

  componentDidUpdate(props) {
    // Take a shallow copy of the active data. So we can do manual comparisons of rows if needed.
    if (props.rowHasChanged) {
      this._data = (typeof props.rowData.data === 'object') ? Object.assign({}, props.rowData.data) : props.rowData.data;
    }
  }

  handleLongPress(e) {
    this.view.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
      const layout = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
      this.props.onRowActive({
        layout,
        touch: e.nativeEvent,
        rowData: this.props.rowData,
      });
    });
  }

  measure(...args) {
    return this.view.measure.apply(this, Array.from(args));
  }

  render() {
    // const layout = this.props.list.layoutMap[this.props.rowData.index];
    const { rowData, list } = this.props;
    const activeData = list.state.active;

    const activeIndex = activeData ? activeData.rowData.index : -5;
    const shouldDisplayHovering = activeIndex !== this.props.rowData.index;
    const row = this.props.renderRow(rowData.data, rowData.section, rowData.index, null, this.props.active, {
      delayLongPress: 500,
      onLongPress: this.handleLongPress.bind(this),
      onPressOut: list.cancel,
    });
    return (
      <View
        onLayout={this.props.onRowLayout}
        style={[
          this.props.active && !this.props.hovering ? { height: 0.01 } : null,
          this.props.active && this.props.hovering ? { opacity: 0.0 } : null,
        ]}
        ref={(node) => { this.view = node; }}
      >
        {this.props.hovering && shouldDisplayHovering ? this.props.activeDivider : null}
        {row}
      </View>
    );
  }
}

class SortDragRow extends Component {
  static propTypes = {
    list: PropTypes.any.isRequired,
    // panResponder: PropTypes.any.isRequired,
    sortRowStyle: PropTypes.any,
    rowData: PropTypes.any,
    renderRow: PropTypes.func.isRequired,
  };
  static defaultProps = {
    sortRowStyle: null,
    rowData: {},
  };

  constructor(props) {
    super(props);

    const layout = props.list.state.active.layout;
    const wrapperLayout = props.list.wrapperLayout;

    this.state = {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        // opacity: 0.2,
        height: layout.frameHeight,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        marginTop: layout.pageY - wrapperLayout.pageY, // Account for top bar spacing
      },
    };
  }

  render() {
    // const handlers = this.props.panResponder.panHandlers;
    return (
      <Animated.View
        ref={(node) => { this.view = node; }}
        style={[this.state.style, this.props.sortRowStyle, this.props.list.state.pan.getLayout()]}
      >
        {this.props.renderRow(this.props.rowData.data, this.props.rowData.section, this.props.rowData.index, null, true)}
      </Animated.View>
    );
  }
}

class SortList extends Component {
  static propTypes = {
    _legacySupport: PropTypes.bool,
    data: PropTypes.any.isRequired,
    order: PropTypes.any,
    style: PropTypes.any,
    disableSorting: PropTypes.bool,
    scrollEnabled: PropTypes.bool,
    rowHasChanged: PropTypes.func,
    renderActiveDivider: PropTypes.func,
    onMoveStart: PropTypes.func,
    onMoveEnd: PropTypes.func,
    onRowMoved: PropTypes.func,
    onScroll: PropTypes.func,
  };
  static defaultProps = {
    _legacySupport: false,
    order: undefined,
    disableSorting: false,
    scrollEnabled: true,
    style: { flex: 1, alignSelf: 'stretch' },
    rowHasChanged: undefined,
    renderActiveDivider: undefined,
    onMoveStart: undefined,
    onMoveEnd: undefined,
    onRowMoved: undefined,
    onScroll: undefined,
  };

  constructor(props) {
    super(props);
    const currentPanValue = { x: 0, y: 0 };

    this.state = {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => {
        if (this.props.rowHasChanged) return this.props.rowHasChanged(r1, r2);
        return false;
      } }),
      active: false,
      hovering: false,
      pan: new Animated.ValueXY(currentPanValue),
    };
    this.listener = this.state.pan.addListener((e) => { this.panY = e.y; });
    const onPanResponderMoveCb = Animated.event([null, {
      dx: this.state.pan.x, // x,y are Animated.Value
      dy: this.state.pan.y,
    }]);

    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (/* e */) => true,
      onMoveShouldSetPanResponderCapture: (e, a) => {
        // Only capture when moving vertically, this helps for child swiper rows.
        const vy = Math.abs(a.vy);
        const vx = Math.abs(a.vx);

        return (vy) > vx && this.state.active;
      },
      onPanResponderMove: (evt, gestureState) => {
        gestureState.dx = 0;
        this.moveY = gestureState.moveY;
        onPanResponderMoveCb(evt, gestureState);
      },

      onPanResponderGrant: (/* e, gestureState */) => {
        this.moved = true;
        this.props.onMoveStart && this.props.onMoveStart();
        this.state.pan.setOffset(currentPanValue);
        this.state.pan.setValue(currentPanValue);
      },
      onPanResponderRelease: (/* e */) => {
        this.moved = false;
        this.props.onMoveEnd && this.props.onMoveEnd();
        if (!this.state.active) {
          if (this.state.hovering) {
            this.setState({ hovering: false });
          }
          this.moveY = null;
          return;
        }

        const itemHeight = this.state.active.layout.frameHeight;
        const fromIndex = this.order.indexOf(this.state.active.rowData.index);
        let toIndex = this.state.hovering === false ? fromIndex : Number(this.state.hovering);
        const up = toIndex > fromIndex;

        if (up) toIndex -= 1;
        if (toIndex === fromIndex) {
          this.setState({ active: false, hovering: false });
          return;
        }

        const args = {
          row: this.state.active.rowData,
          from: fromIndex,
          to: toIndex,
        };

        this.props.onRowMoved && this.props.onRowMoved(args);
        if (this.props._legacySupport) { // rely on parent data changes to set state changes
          // LayoutAnimation.easeInEaseOut();
          this.state.active = false;
          this.state.hovering = false;
        } else {
          this.setState({
            active: false,
            hovering: false,
          });
        }

        const MAX_HEIGHT = Math.max(0, this.scrollContainerHeight - this.listLayout.height + itemHeight);
        if (this.scrollValue > MAX_HEIGHT) {
          this.scrollResponder.scrollTo({ y: MAX_HEIGHT });
        }

        this.state.active = false;
        this.state.hovering = false;
        this.moveY = null;
      },
    });
  }

  cancel = () => {
    if (!this.moved) {
      this.setState({
        active: false,
        hovering: false,
      });
    }
  }

  _mounted = false;
  componentDidMount() {
    this._mounted = true;
    setTimeout(() => {
      this.scrollResponder = this.list.getScrollResponder();
    }, 1);
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  measureWrapper = () => {
    if (this.wrapper) {
      this.wrapper.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
        const layout = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
        this.wrapperLayout = layout;
      });
    }
  }

  scrollValue = 0;
  scrollContainerHeight = HEIGHT * 1.2; // Gets calculated on scroll, but if you havent scrolled needs an initial value

  scrollAnimation = () => {
    if (this._mounted /* deprecated and unnecessary: using TimerMixin */ && this.state.active) {
      if (this.moveY === undefined) {
        this.requestAnimationFrame(this.scrollAnimation);
        return;
      }

      const SCROLL_OFFSET = this.wrapperLayout.pageY;
      const moveY = this.moveY - SCROLL_OFFSET;
      const SCROLL_LOWER_BOUND = 80;
      const SCROLL_HIGHER_BOUND = this.listLayout.height - SCROLL_LOWER_BOUND;
      const NORMAL_SCROLL_MAX = this.scrollContainerHeight - this.listLayout.height;
      const MAX_SCROLL_VALUE = NORMAL_SCROLL_MAX + (this.state.active.layout.frameHeight * 2);
      const currentScrollValue = this.scrollValue;
      let newScrollValue = null;
      const SCROLL_MAX_CHANGE = 20;

      if (moveY < SCROLL_LOWER_BOUND && currentScrollValue > 0) {
        const PERCENTAGE_CHANGE = 1 - (moveY / SCROLL_LOWER_BOUND);
        newScrollValue = currentScrollValue - (PERCENTAGE_CHANGE * SCROLL_MAX_CHANGE);
        if (newScrollValue < 0) newScrollValue = 0;
      }
      if (moveY > SCROLL_HIGHER_BOUND && currentScrollValue < MAX_SCROLL_VALUE) {
        const PERCENTAGE_CHANGE = 1 - ((this.listLayout.height - moveY) / SCROLL_LOWER_BOUND);
        newScrollValue = currentScrollValue + (PERCENTAGE_CHANGE * SCROLL_MAX_CHANGE);
        if (newScrollValue > MAX_SCROLL_VALUE) newScrollValue = MAX_SCROLL_VALUE;
      }
      // if (moveY < SCROLL_HIGHER_BOUND && currentScrollValue > NORMAL_SCROLL_MAX
      //     && NORMAL_SCROLL_MAX > 0) {
      //   const PERCENTAGE_CHANGE = 1 - ((this.listLayout.height - moveY) / SCROLL_LOWER_BOUND);
      //   const pc = PERCENTAGE_CHANGE;
      //
      //   // newScrollValue = currentScrollValue + (PERCENTAGE_CHANGE * SCROLL_MAX_CHANGE);
      // }
      if (newScrollValue !== null) {
        this.scrollValue = newScrollValue;
         // this.scrollResponder.scrollWithoutAnimationTo(this.scrollValue, 0);
        this.scrollResponder.scrollTo({ y: this.scrollValue, x: 0, animated: false });
      }
      this.checkTargetElement();
      this.requestAnimationFrame(this.scrollAnimation);
    }
  }

  checkTargetElement = () => {
    const SLOP = 1.0; // assume rows will be > 1 pixel high
    const scrollValue = this.scrollValue;

    const moveY = this.moveY - this.wrapperLayout.pageY;

    const activeRowY = scrollValue + moveY - this.firstRowY;

    let indexHeight = 0.0;
    let i = 0;
    let row;
    const order = this.order;
    let isLast = false;
    while (indexHeight < activeRowY + SLOP) {
      const key = order[i];
      row = this.layoutMap[key];
      if (!row) {
        isLast = true;
        break;
      }
      indexHeight += row.height;
      i += 1;
    }
    if (!isLast) i -= 1;
    // console.log(i, this.state.hovering);
    if (i !== this.state.hovering && i >= 0) {
      LayoutAnimation.easeInEaseOut();
      this._previouslyHovering = this.state.hovering;
      this.__activeY = this.panY;
      this.setState({
        hovering: String(i),
      });
    }
  }

  firstRowY = undefined;
  layoutMap = {};
  _rowRefs = {};

  handleRowActive = (row) => {
    if (this.props.disableSorting) return;
    this.state.pan.setValue({ x: 0, y: 0 });
    LayoutAnimation.easeInEaseOut();
    this.moveY = row.layout.pageY;
    this.setState({
      active: row,
      hovering: row.rowData.index,
    }, this.scrollAnimation);
  }

  renderActiveDivider = () => {
    const height = this.state.active ? this.state.active.layout.frameHeight : null;
    if (this.props.renderActiveDivider) return this.props.renderActiveDivider(height);
    return <View style={{ height }} />;
  }

  renderRow = (data, section, index, highlightfn, active) => {
    const RowComponent = active ? SortDragRow : SortListRow;
    const isActiveRow = (!active && this.state.active && this.state.active.rowData.index === index);
    if (!active && isActiveRow) {
      active = { active: true };
    }
    const hoveringIndex = this.order[this.state.hovering] || this.state.hovering;
    return (
      <RowComponent
        {...this.props}
        activeDivider={this.renderActiveDivider()}
        key={index}
        active={active}
        list={this}
        ref={(view) => { this._rowRefs[active ? 'ghost' : index] = view; }}
        hovering={hoveringIndex === index}
        panResponder={this.state.panResponder}
        rowData={{ data, section, index }}
        onRowActive={this.handleRowActive}
        onRowLayout={layout => this._updateLayoutMap(index, layout.nativeEvent.layout)}
      />
    );
  }

  _updateLayoutMap = (index, layout) => {
    if (this.firstRowY === undefined || layout.y < this.firstRowY) {
      this.firstRowY = layout.y;
    }
    this.layoutMap[index] = layout;
  }

  renderActive = () => {
    if (!this.state.active) return null;
    const index = this.state.active.rowData.index;
    return this.renderRow(this.props.data[index], 's1', index, () => {}, { active: true, thumb: true });
  }

  componentWillMount() {
    this.setOrder(this.props);
  }

  componentWillReceiveProps(props) {
    this.setOrder(props);
  }

  setOrder = (props) => {
    this.order = props.order || Object.keys(props.data) || [];
  }

  getScrollResponder = () => this.scrollResponder;

  render() {
    const { style, data, order, onScroll, scrollEnabled, ...otherProps } = this.props;
    const dataSource = this.state.ds.cloneWithRows(data, order);

    return (
      <View
        ref={(node) => { this.wrapper = node; }}
        style={style}
        onLayout={() => { this.measureWrapper(); }}
      >
        <ListView
          enableEmptySections
          {...otherProps}
          {...this.state.panResponder.panHandlers}
          ref={(node) => { this.list = node; }}
          dataSource={dataSource}
          style={[
            this.state.active && { opacity: 0.3 },
            { flex: 1, alignSelf: 'stretch' },
          ]}
          onScroll={(e) => {
            this.scrollValue = e.nativeEvent.contentOffset.y;
            if (onScroll) onScroll(e);
          }}
          onContentSizeChange={(width, height) => {
            this.scrollContainerHeight = height;
          }}
          onLayout={(e) => { this.listLayout = e.nativeEvent.layout; }}
          scrollEnabled={!this.state.active && (scrollEnabled !== false)}
          renderRow={this.renderRow}
        />
        {this.renderActive()}
      </View>
    );
  }

  scrollTo(...args) {
    this.scrollResponder.scrollTo.apply(this.scrollResponder, args);
  }
}

reactMixin(SortList.prototype, TimerMixin);

export {
  SortList,
};

import React, { Component } from 'react';
import { View, findNodeHandle } from 'react-native';
import moment from 'moment';
import 'moment-range';
import DayView from './DayView';
import styles from './styles';

const UIManager = require('NativeModules').UIManager;

/* eslint-disable react/no-unused-prop-types,no-unused-expressions */

type WeekType = {
  range: boolean,
  date: ?moment,
  startDate: ?moment,
  endDate: ?moment,
  focusedInput: 'startDate' | 'endDate',
  currentDate: moment,
  focusedMonth: moment,
  startOfWeek: moment,
  addRef: React.PropTypes.func,
  index: React.PropTypes.number,
  onDatesChange: (date: { date?: ?moment, startDate?: ?moment, endDate?: ?moment }) => void,
  isDateBlocked: (date: moment) => boolean
}

export default class WeekView extends Component {
  props: WeekType

  dayViews = [];

  constructor(props) {
    super(props);
    props.addRef && props.addRef(this, props.index);
  }

  _isContainPoint(frame, x, y) {
    return frame && x >= frame.pageX && y >= frame.pageY &&
      x <= frame.pageX + frame.width && y <= frame.pageY + frame.height;
  }

  hitTest(x, y) {
    return new Promise((resolve) => {
      const handle = findNodeHandle(this.weekView);
      UIManager.measure(handle, (frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
        const frameWeek = { x: frameX,
          y: frameY,
          pageX,
          pageY,
          width: frameWidth,
          height: frameHeight };
        if (!this._isContainPoint(frameWeek, x, y)) {
          return;
        }

        this.dayViews.forEach((dayView) => {
          const handle1 = findNodeHandle(dayView);
          UIManager.measure(handle1, (frameX1, frameY1,
            frameWidth1, frameHeight1, pageX1, pageY1) => {
            const frameView = { x: frameX1,
              y: frameY1,
              width: frameWidth1,
              height: frameHeight1,
              pageX: pageX1,
              pageY: pageY1 };
            if (this._isContainPoint(frameView, x, y)) {
              resolve(dayView);
            }
          });
        });
      });
    });
  }

  _renderDays() {
    const { startOfWeek } = this.props;
    const endOfWeek = startOfWeek.clone().endOf('week');
    const days = [];
    var index = 0;

    moment.range(startOfWeek, endOfWeek).by('days', (day: moment) => {
      days.push(
        <DayView
          {...this.props}
          key={`day_${day.month()}_${day.date()}`}
          addRef={(node, idx) => { this.dayViews[idx] = node; }}
          index={index}
          startOfDay={day}
        />,
      );
      index += 1;
    });
    return days;
  }

  render() {
    return (
      <View ref={(node) => { this.weekView = node; }} style={styles.week.barWeek} >
        {this._renderDays()}
      </View>
    );
  }
}

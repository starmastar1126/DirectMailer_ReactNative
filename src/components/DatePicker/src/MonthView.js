import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import 'moment-range';
import WeekView from './WeekView';
import styles from './styles';

/* eslint-disable react/no-unused-prop-types,no-unused-expressions */

type MonthType = {
  range: boolean,
  date: ?moment,
  startDate: ?moment,
  endDate: ?moment,
  focusedInput: 'startDate' | 'endDate',
  currentDate: moment,
  focusedMonth: moment,
  onDatesChange: (date: { date?: ?moment, startDate?: ?moment, endDate?: ?moment }) => void,
  isDateBlocked: (date: moment) => boolean
}

export default class MonthView extends Component {
  props: MonthType
  weekViews = [];

  hitTestDay(x, y) {
    return new Promise((resolve) => {
      var found = false;
      this.weekViews.forEach((view) => {
        view.hitTest(x, y).then((hitView) => {
          const day = hitView.props.startOfDay;
          const isBlocked = this.props.isDateBlocked(day);
          if (!isBlocked && found === false) {
            found = true;
            resolve(day);
          }
        });
      });
    });
  }

  _renderDayNames() {
    const { currentDate } = this.props;
    const dayNames = [];
    const weekRange = moment.range(currentDate.clone().startOf('week'), currentDate.clone().endOf('week'));

    weekRange.by('days', (day: moment) => {
      dayNames.push(
        <Text key={`dn_${day.date()}`} style={styles.month.textDayNames}>
          {(day.format('ddd')).toUpperCase().substring(0, 1)}
        </Text>,
      );
    });

    return (
      <View style={styles.month.barWeek}>
        {dayNames}
      </View>
    );
  }

  _renderWeekDays() {
    const { focusedMonth } = this.props;
    const weeks = [];
    var startOfMonth = focusedMonth.clone().startOf('month').startOf('week');
    var endOfMonth;
    var index = 0;

    if (startOfMonth.date() === 1) {
      startOfMonth = startOfMonth.clone().add(-1, 'week');
    }
    endOfMonth = startOfMonth.clone().add(41, 'day');

    moment.range(startOfMonth, endOfMonth).by('weeks', (week: moment) => {
      weeks.push(
        <WeekView
          {...this.props}
          key={`wb_${index}`}
          addRef={(node, idx) => { this.weekViews[idx] = node; }}
          index={index}
          startOfWeek={week}
        />,
      );
      index += 1;
    });
    return weeks;
  }

  render() {
    return (
      <View style={styles.month.container} >
        {this._renderDayNames()}
        {this._renderWeekDays()}
      </View>
    );
  }
}

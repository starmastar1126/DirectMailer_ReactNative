import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import MonthView from './MonthView';
import styles from './styles';

/* eslint-disable react/no-unused-prop-types,no-unused-expressions */
type DatesType = {
  header: boolean,
  range: boolean,
  date: ?moment,
  startDate: ?moment,
  endDate: ?moment,
  onStartSelect: React.PropTypes.func,
  onEndSelect: React.PropTypes.func,
  focusedInput: 'startDate' | 'endDate',
  onDatesChange: (date: { date?: ?moment, startDate?: ?moment, endDate?: ?moment }) => void,
  isDateBlocked: (date: moment) => boolean,
}

export default class CalendarView extends Component {
  props: DatesType

  static defaultProps = {
    header: true,
  }

  constructor(props) {
    super(props);

    this.state = {
      currentDate: moment(),
      focusedMonth: moment().startOf('month'),

      startDate: undefined,
      endDate: undefined,
      dragStartDate: undefined,
      dragLastDate: undefined,
      focusedInput: 'startDate',
      canChangeMonth: true,
      canChangeMonthCounter: 0,
    };
  }

  adjustMonth(day) {
    if (this.state.canChangeMonth === false) {
      return;
    }

    const focusedMonth = this.state.focusedMonth;
    const startOfMonth = focusedMonth.clone().startOf('month');
    const endOfMonth = focusedMonth.clone().endOf('month');
    const isBeforeMonth = day.isBefore(startOfMonth);
    const isAfterMonth = day.isAfter(endOfMonth);

    if (isBeforeMonth || isAfterMonth) {
      if (isBeforeMonth) {
        this._pressPrevMonth();
      } else {
        this._pressNextMonth();
      }

      const counter = this.state.canChangeMonthCounter + 1;
      this.state.canChangeMonth = false;
      this.state.canChangeMonthCounter = counter;
      setTimeout(() => {
        if (this.state.canChangeMonthCounter === counter) {
          this.state.canChangeMonth = true;
        }
      }, 5000);
    } else {
      this.state.canChangeMonth = true;
    }
  }

  changeDates(start, end, drag, focus) {
    var newStart = start;
    var newEnd = end;
    if (newStart && newEnd && newStart.isAfter(newEnd)) {
      newStart = end;
      newEnd = start;
    }

    this.setState({
      startDate: newStart,
      endDate: newEnd,
      dragStartDate: drag,
      focusedInput: focus,
    }, () => {
      this.props.onDatesChange && this.props.onDatesChange(newStart, newEnd, focus);
    });
  }

  _onResponderGrant = (event) => {
    console.log(event.nativeEvent);
    this.monthView.hitTestDay(event.nativeEvent.pageX, event.nativeEvent.pageY).then((day) => {
      console.log('start select ', day.format('MM/DD'));

      const { startDate, endDate, focusedInput } = this.state;

      this.state.canChangeMonthCounter = 0;
      this.state.canChangeMonth = true;
      this.state.dragLastDate = day;
      this.adjustMonth(day);
      this.props.onStartSelect && this.props.onStartSelect();

      if (startDate && endDate && day.isSame(startDate)) {
        this.changeDates(startDate, endDate, endDate, 'dragging');
      } else if (startDate && endDate && day.isSame(endDate)) {
        this.changeDates(startDate, endDate, startDate, 'dragging');
      } else if (startDate && focusedInput === 'endDate') {
        const newEndDate = day.isSame(startDate) ? startDate.clone().add(1, 'day') : day;
        this.changeDates(startDate, newEndDate, startDate, 'dragging');
      } else {
        this.changeDates(day, undefined, day, 'dragging');
      }
    });
  }

  _onResponderMove = (event) => {
    if (this.state.focusedInput !== 'dragging') {
      return;
    }
    this.monthView.hitTestDay(event.nativeEvent.pageX, event.nativeEvent.pageY).then((day) => {
      const dragStartDate = this.state.dragStartDate;
      if (day.isSame(dragStartDate)) {
        return;
      }
      if (this.state.dragLastDate && this.state.dragLastDate.isSame(day)) {
        return;
      }

      this.state.dragLastDate = day;

      let newStartDate;
      let newEndDate;
      if (day.isBefore(dragStartDate)) {
        newStartDate = day;
        newEndDate = dragStartDate;
      } else {
        newStartDate = dragStartDate;
        newEndDate = day;
      }

      this.adjustMonth(day);
      this.changeDates(newStartDate, newEndDate, dragStartDate, 'dragging');
    });
  }

  _onResponderRelease = () => {
    this.props.onEndSelect && this.props.onEndSelect();
    if (this.state.focusedInput !== 'dragging') {
      return;
    }

    const day = this.state.dragLastDate;
    const dragStartDate = this.state.dragStartDate;
    const endDate = this.state.endDate;

    if (!endDate) {
      this.changeDates(this.state.startDate, undefined, dragStartDate, 'endDate');
    } else {
      let newStartDate;
      let newEndDate;
      if (day.isBefore(dragStartDate)) {
        newStartDate = day;
        newEndDate = dragStartDate;
      } else {
        newStartDate = dragStartDate;
        newEndDate = day;
      }
      this.changeDates(newStartDate, newEndDate, dragStartDate, 'startDate');
    }
  }

  _pressPrevMonth() {
    this.setState({ focusedMonth: this.state.focusedMonth.add(-1, 'M') });
  }

  _pressNextMonth() {
    this.setState({ focusedMonth: this.state.focusedMonth.add(1, 'M') });
  }

  _renderHeader() {
    if (this.props.header) {
      return (
        <View style={styles.calendar.header}>
          <TouchableOpacity
            onPress={this._pressPrevMonth.bind(this)}
            style={styles.calendar.btnPrevMonth}
          >
            <Text style={styles.calendar.textPrevMonth}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.calendar.textCurMonth}>{this.state.focusedMonth.format('MMMM').toUpperCase()}</Text>
          <TouchableOpacity
            onPress={this._pressNextMonth.bind(this)}
            style={styles.calendar.btnNextMonth}
          >
            <Text style={styles.calendar.textNextMonth}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return undefined;
  }

  render() {
    return (
      <View
        style={styles.calendar.container}
        onTouchStart={this._onResponderGrant.bind(this)}
        onTouchMove={this._onResponderMove.bind(this)}
        onTouchEnd={this._onResponderRelease.bind(this)}
      >
        {this._renderHeader()}
        <MonthView
          {...this.props}
          ref={(node) => { this.monthView = node; }}
          currentDate={this.state.currentDate}
          focusedMonth={this.state.focusedMonth}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </View>
    );
  }
}

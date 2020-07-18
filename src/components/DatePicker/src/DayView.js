import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import 'moment-range';
import styles from './styles';

/* eslint-disable react/no-unused-prop-types,no-unused-expressions */

type DayType = {
  range: boolean,
  date: ?moment,
  startDate: ?moment,
  endDate: ?moment,
  focusedInput: 'startDate' | 'endDate',
  currentDate: moment,
  focusedMonth: moment,
  startOfWeek: moment,
  startOfDay: moment,
  addRef: React.PropTypes.func,
  index: React.PropTypes.number,
  onDatesChange: (date: { date?: ?moment, startDate?: ?moment, endDate?: ?moment }) => void,
  isDateBlocked: (date: moment) => boolean
}

export default class DayView extends Component {
  props: DayType
  state = { frame: {} }

  constructor(props) {
    super(props);
    this.calcBasic(props);
    props.addRef && props.addRef(this, props.index);
  }

  componentWillReceiveProps(nextProps) {
    this.calcBasic(nextProps);
  }

  calcBasic(props) {
    const { startOfDay, startOfWeek, currentDate, focusedMonth } = props;
    this.startOfMonth = focusedMonth.clone().startOf('month');
    this.endOfMonth = focusedMonth.clone().endOf('month');
    this.endOfWeek = startOfWeek.clone().endOf('week');
    this.startDate = props.startDate ? props.startDate.clone().startOf('day') : undefined;
    this.endDate = props.endDate ? props.endDate.clone().startOf('day') : undefined;
    this.today = currentDate.clone().startOf('day');

    this.isBeforeMonth = startOfDay.isBefore(this.startOfMonth);
    this.isAfterMonth = startOfDay.isAfter(this.endOfMonth);
    this.isOutMonth = this.isBeforeMonth || this.isAfterMonth;
    this.isToday = startOfDay.isSame(this.today);
  }

  _isFrameChanged(oldFrame, newFrame) {
    return !oldFrame || !newFrame ||
      oldFrame.x !== newFrame.y || oldFrame.y !== newFrame.y ||
      oldFrame.width !== newFrame.width || oldFrame.height !== newFrame.height;
  }

  render() {
    const { startOfDay, isDateBlocked } = this.props;
    const startDate = this.startDate;
    const endDate = this.endDate;

    const isOutMonth = this.isOutMonth;
    const isToday = this.isToday;
    const isBlocked = isDateBlocked(startOfDay);
    const styleText = [
      styles.day.textDays,
      isOutMonth && isBlocked && styles.day.textOutBlockDays,
      isOutMonth && !isBlocked && styles.day.textOutMonthDays,
      !isOutMonth && isBlocked && styles.day.textBlockDays,
      isToday && styles.week.textCurDate,
    ];

    const width = this.state.frame.width > this.state.frame.height ?
      this.state.frame.height : this.state.frame.width;
    const size = Math.floor(width * 0.7);
    const isStartDate = startDate && startOfDay.isSame(startDate);
    const isEndDate = endDate && startOfDay.isSame(endDate);
    const isMidSelected = (startDate && endDate &&
      startOfDay.isAfter(startDate) && startOfDay.isBefore(endDate));
    const isCapSelected = (isStartDate && !endDate) || (isEndDate && !startDate);
    const isSelected = isStartDate || isEndDate || isMidSelected || isCapSelected;
    const border = '#4A90E2';
    const fill = '#4A90E230';
    var styleSelBack = [
      { borderColor: border,
        backgroundColor: fill,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: size },
      (isCapSelected || !isSelected) && { opacity: 0 },
      isMidSelected && { width: this.state.frame.width },
      isStartDate && { marginLeft: this.state.frame.width / 2, width: this.state.frame.width / 2 },
      isEndDate && { width: this.state.frame.width / 2 },
    ];

    const styleSelMark = [
      { borderColor: border,
        backgroundColor: border,
        borderWidth: 1,
        borderRadius: size / 2,
        width: size,
        height: size },
      (!isSelected || isMidSelected) && { opacity: 0 },
    ];

    const _onLayout = (event) => {
      if (this._isFrameChanged(this.state.frame, event.nativeEvent.layout)) {
        this.setState({ frame: event.nativeEvent.layout });
      }
    };

    return (
      <View style={styles.day.viewDay} onLayout={_onLayout}>
        <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
          <View style={styleSelBack} />
        </View>
        <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} >
          <View style={styleSelMark} />
        </View>
        <Text style={styleText}>
          {startOfDay.date()}
        </Text>
      </View>
    );
  }
}

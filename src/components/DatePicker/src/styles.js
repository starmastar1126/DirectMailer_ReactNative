import { StyleSheet } from 'react-native';

const calendar = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  btnPrevMonth: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNextMonth: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCurMonth: {
    flex: 3,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  textPrevMonth: {
    color: 'white',
    fontSize: 16,
  },
  textNextMonth: {
    color: 'white',
    fontSize: 16,
  },
});

const month = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  barWeek: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  textDayNames: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
});

const week = StyleSheet.create({
  barWeek: {
    flexDirection: 'row',
    flex: 1,
  },
});

const day = StyleSheet.create({
  viewDay: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDays: {
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
  textCurDate: {
    color: '#FF1444',
  },
  textBlockDays: {
    color: '#777777',
  },
  textOutBlockDays: {
    color: '#77777780',
  },
  textOutMonthDays: {
    color: '#BBB',
  },
});

const styles = {
  calendar,
  month,
  week,
  day,
};

export default styles;

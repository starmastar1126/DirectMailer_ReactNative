import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import { gstates } from '@common';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  text_timer: {
    fontSize: 11,
    marginLeft: 5,
    marginRight: 5,
    fontFamily: 'Montserrat',
  },
  slider_style: {
    height: 2,
  },
  slider_track: {
    height: 2,
    marginTop: 0,
  },
  slider_thumb: {
    width: 0,
    height: 0,
  },
});

function formattedTime(sec) {
  if (sec === undefined) {
    return '0:00';
  }

  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec - minutes * 60);

  if (isNaN(minutes) || isNaN(seconds)) {
    return '0:00';
  }
  let strSeconds = '';
  if (seconds < 10) {
    strSeconds = `0${seconds}`;
  } else {
    strSeconds = `${seconds}`;
  }
  return `${minutes}:${strSeconds}`;
}

const TimeProgress = (props) => {
  const { timeTextStyle, sliderStyle, /* duration, playedTime, */
    minTrackColor, maxTrackColor, trackStyle, thumbStyle,
    onSlidingStart, onSlidingComplete, onSlidingChange, style, textColor, textTop } = props;
  let value = 0;
  const duration = gstates.player.duration;
  const playedTime = gstates.player.currentTime;
  if (playedTime !== undefined && duration !== undefined && duration > 0) {
    value = playedTime / duration;
  }
  const textStyle = [timeTextStyle, { color: textColor, marginTop: textTop ? 0 : 4, marginBottom: textTop ? 4 : 0 }];
  const texts = (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
      <Text style={textStyle}>{ formattedTime(playedTime) }</Text>
      <Text style={textStyle}>{ formattedTime(duration) }</Text>
    </View>
  );
  const slider = (
    <Slider
      onSlidingStart={onSlidingStart}
      onSlidingComplete={onSlidingComplete}
      onValueChange={onSlidingChange}
      minimumTrackTintColor={minTrackColor}
      maximumTrackTintColor={maxTrackColor}
      style={[styles.slider_style, sliderStyle]}
      trackStyle={[styles.slider_track, trackStyle]}
      thumbStyle={[styles.slider_thumb, thumbStyle]}
      value={value}
    />
  );
  if (textTop) {
    return (
      <View style={[{ alignSelf: 'stretch', backgroundColor: 'transparent' }, style]} >
        { texts }
        { slider }
      </View>
    );
  }
  return (
    <View style={[{ alignSelf: 'stretch', backgroundColor: 'transparent' }, style]} >
      { slider }
      { texts }
    </View>
  );
};

TimeProgress.propTypes = {
  onSlidingStart: PropTypes.func,
  onSlidingComplete: PropTypes.func,
  onSlidingChange: PropTypes.func,
  textColor: PropTypes.string,
  minTrackColor: PropTypes.string,
  maxTrackColor: PropTypes.string,
  timeTextStyle: PropTypes.any,
  sliderStyle: PropTypes.any,
  trackStyle: PropTypes.any,
  thumbStyle: PropTypes.any,
  textTop: PropTypes.bool,
  style: PropTypes.any,
};

TimeProgress.defaultProps = {
  minTrackColor: '#FFFFFF',
  maxTrackColor: '#C9A004',
  textColor: '#FFFFFF',
  timeTextStyle: styles.text_timer,
  sliderStyle: styles.slider_style,
  trackStyle: styles.slider_track,
  thumbStyle: styles.slider_thumb,
  style: styles.container,
  textTop: true,
  onSlidingStart: () => null,
  onSlidingComplete: () => null,
  onSlidingChange: () => null,
};

const mapStateToProps = state => ({
  timeFlag: state.main.timeFlag,
  playerFlag: state.main.playerFlag,
});

const mapDispatchToProps = dispatch => ({ // eslint-disable-line
});

// export default TimeProgress;
export default connect(mapStateToProps, mapDispatchToProps)(TimeProgress);

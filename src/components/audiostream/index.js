import React, { Component } from 'react';
import {
    NativeModules,
    View,
    DeviceEventEmitter,
} from 'react-native';
import PropTypes from 'prop-types';

const { ReactNativeAudioStreaming } = NativeModules;

const PLAYING = 'PLAYING';
const STREAMING = 'STREAMING';
const PAUSED = 'PAUSED';
const STOPPED = 'STOPPED';
const ERROR = 'ERROR';
const BUFFERING = 'BUFFERING';
const START_PREPARING = 'START_PREPARING'; // Android only
const BUFFERING_START = 'BUFFERING_START'; // Android only
const METADATA_UPDATED = 'METADATA_UPDATED';

class AudioStream extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: STOPPED,
      song: '',
    };
  }

  componentDidMount() {
    this.subscription = DeviceEventEmitter.addListener(
      'AudioBridgeEvent', (evt) => {
        // We just want meta update for song name
        if (evt.status === METADATA_UPDATED && evt.key === 'StreamTitle') {
          this.props.onStreamTitle && this.props.onStreamTitle(evt.value);
        } else if (evt.status !== METADATA_UPDATED) {
          this._onStreamStatus(evt, evt.status);
        }
      },
    );

    ReactNativeAudioStreaming.getStatus((error, status) => {
      if (error) {
        console.log(error);
      } else {
        this._onStreamStatus(status, status.status);
      }
    });

    // this.play();
  }

  componentWillUnmount() {
    ReactNativeAudioStreaming.stop();
  }

  _onStreamStatus = (evt, status) => {
    this.props.onStreamEvent && this.props.onStreamEvent(evt, status);

    if (status === this.state.status) return;

    this.state.status = status;
    switch (status) {
      case START_PREPARING:
        this.props.onStreamPrepare && this.props.onStreamPrepare(evt);
        break;
      case BUFFERING:
      case BUFFERING_START:
        this.props.onStreamBuffering && this.props.onStreamBuffering(evt);
        break;
      case PAUSED:
        this.props.onStreamPause && this.props.onStreamPause(evt);
        break;
      case PLAYING:
      case STREAMING:
        this.props.onStreamPlay && this.props.onStreamPlay(evt);
        break;
      case STOPPED:
      case ERROR:
        this.props.onStreamStop && this.props.onStreamStop(evt);
        break;

      default: break;
    }
  }

  play() {
    if (this.state.status === PAUSED) {
      ReactNativeAudioStreaming.resume();
    } else if (this.state.status === STOPPED || this.state.status === ERROR) {
      console.log('start play - ', this.props.url);
      ReactNativeAudioStreaming.stop();
      ReactNativeAudioStreaming.play(this.props.url, { showIniOSMediaCenter: false, showInAndroidNotifications: false });
    }
  }

  pause() {
    if (this.state.status === PLAYING || this.state.status === STREAMING) {
      ReactNativeAudioStreaming.pause();
    } else if (this.state.status === BUFFERING) {
      ReactNativeAudioStreaming.stop();
    }
  }

  stop() {
    ReactNativeAudioStreaming.stop();
  }

  render() {
    return (
      <View style={{ opacity: 0, position: 'absolute', left: 0, top: 0, width: 0, height: 0 }} />
    );
  }
}

AudioStream.propTypes = {
  url: PropTypes.string.isRequired,
  onStreamTitle: PropTypes.func,
  onStreamPlay: PropTypes.func,
  onStreamPrepare: PropTypes.func,
  onStreamBuffering: PropTypes.func,
  onStreamPause: PropTypes.func,
  onStreamStop: PropTypes.func,
  onStreamEvent: PropTypes.func,
};

AudioStream.defaultProps = {
  onStreamTitle: () => {},
  onStreamPlay: () => {},
  onStreamPrepare: () => {},
  onStreamBuffering: () => {},
  onStreamPause: () => {},
  onStreamStop: () => {},
  onStreamEvent: () => {},
};

export default AudioStream;

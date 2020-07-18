/**
 * Created by liuyu on 2017/1/18.
 */

import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator,
    Animated,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Hud extends PureComponent {
  mount = false;
    // 构造
  constructor(props) {
    super(props);
        // 初始状态
    this.state = {
      isShow: false,
      text: '',
      opacityValue: new Animated.Value(this.props.opacity),
    };
  }

  componentDidMount() {
    this.mount = true;
  }

  componentWillUnmount() {
    this.mount = false;
  }

  show(text = '', after = null) {
    this.setState({
      isShow: true,
      text,
    });
    this.isShow = true;
    Animated.timing(
            this.state.opacityValue,
      {
        toValue: this.props.opacity,
        duration: this.props.fadeInDuration,
      },
        ).start();
    if (after !== null) {
      this.close(after);
    }
  }

  close(after = null) {
    if (!this.isShow) return;
    const animate = () => {
      Animated.timing(
                this.state.opacityValue,
        {
          toValue: 0.0,
          duration: this.props.fadeOutDuration,
        },
            ).start(() => {
              this.mount && this.setState({
                isShow: false,
              });
              this.isShow = false;
            });
    };

    if (after != null) {
      setTimeout(animate, after);
    } else {
      animate();
    }
  }

  render() {
    let hud = null;
    if (!this.props.textOnly) {
      switch (this.props.hudType) {
        case 'info':
          hud = <Image style={[this.props.imageStyle, styles.image]} source={require('./src/info.png')} />;
          break;
        case 'success':
          hud = <Image style={[this.props.imageStyle, styles.image]} source={require('./src/success.png')} />;
          break;
        case 'error':
          hud = <Image style={[this.props.imageStyle, styles.image]} source={require('./src/error.png')} />;
          break;
        default:
          hud = this.props.source == null ?
            <ActivityIndicator style={styles.image} animating={this.state.isShow} size={'large'} /> :
            <Image style={this.props.imageStyle} source={this.props.source} />;
          break;
      }
    }


    const view = this.state.isShow ?
      (<View
        ref="container" pointerEvents={this.props.backgroundTouchable ? 'none' : 'auto'}
        style={[styles.container, { paddingTop: this.props.positionValue }]}
      >
        <Animated.View
          style={[styles.content, { opacity: this.state.opacityValue }, this.props.style]}
        >
          {hud}
          {this.state.text !== '' ? <Text numberOfLines={20} style={this.props.textStyle}>{this.state.text}</Text> : null}
        </Animated.View>
      </View>) : null;
    return view;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,

  },
  text: {
    color: 'white',
  },
  content: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    marginBottom: 0,
  },
});

// Hud.propTypes = {
//   style: View.propTypes.style,
//   textStyle: Text.propTypes.style,
//   fadeInDuration: PropTypes.number,
//   fadeOutDuration: PropTypes.number,
//   opacity: PropTypes.number,
//   positionValue: PropTypes.number,
//   source: Image.propTypes.source,
//   textOnly: PropTypes.bool,
//   hudType: PropTypes.oneOf([
//     'info',
//     'success',
//     'error',
//     'none',
//   ]),
//   imageStyle: Image.propTypes.style,
//   backgroundTouchable: PropTypes.bool,
// };

Hud.defaultProps = {
  textStyle: styles.text,
  fadeInDuration: 500,
  fadeOutDuration: 500,
  opacity: 1,
  positionValue: 0,
  textOnly: false,
  backgroundTouchable: true,
  imageStyle: {
    tintColor: 'white',
  },
  hudType: 'none',
  source: null,
  style: null,
};

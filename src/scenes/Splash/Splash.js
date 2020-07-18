import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { gstates } from '@common';
import { handler } from '@redux';
import { images } from '@theme';
import { routeKeys, routeNames } from '@routes';
import styles from './Splash.styles';

const { navigation: navHandler } = handler;

class Splash extends React.Component {

  componentDidMount() {
    handler.tracker.startStatusTrack();
    this._performCheckValid();
  }

  _performCheckValid = (delay = 100) => {
    setTimeout(() => {
      this._checkValid();
    }, delay);
  }

  async _checkValid() {
    let valid = true;
    if (gstates.inited === false) {
      valid = false;
    } else if (this.props.status.connected === false) {
      valid = false;
    }
    if (valid === false) {
      this._performCheckValid();
      return;
    }

    console.log('connected', this.props.status);

    this.gotoMain();
  }

  gotoMain() {
    navHandler.resetTo(routeNames.app.main, routeKeys.app.main);
  }

  render() {
    return (
      <View style={styles.container} >
        <Image
          source={images.bg_splash}
          style={styles.img_splash}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  status: state.meteor.status,
});

const mapDispatchToProps = dispatch => ({ // eslint-disable-line
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

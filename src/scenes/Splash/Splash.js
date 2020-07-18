import React from 'react';
import { View, Image, Text } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { gAppStates } from '@common';
import { handler } from '@redux';
import { apis } from '@lib';
import { sizes, images } from '@theme';
import styles from './Splash.styles';

const { navigation: navHandler } = handler;

class Splash extends React.Component {

  componentDidMount() {
    // SplashScreen.hide();
    handler.tracker.startStatusTrack();
    // this._performCheckValid();
  }

  _performCheckValid = (delay = 100) => {
    setTimeout(() => {
      this._checkValid();
    }, delay);
  }

  async _checkValid() {
    // navHandler.reset([{ key: 'app.main', routeName: 'main' }], 0);

    let valid = true;
    if (gAppStates.inited === false) {
      valid = false;
    } else if (this.props.status.connected === false) {
      valid = false;
    }
    if (valid === false) {
      this._performCheckValid();
      return;
    }

    console.log('connected', this.props.status);
    console.log('savedUser - ', gAppStates.user.email);

    apis.syncServerTime().then(() => {
      this.checkLogin();
    }).catch(() => {
      this._performCheckValid();
    });
  }

  checkLogin() {
    if (gAppStates.user.email) {
      apis.login(gAppStates.user.email, gAppStates.user.password).then(() => {
        this.gotoMain();
      }).catch(() => {
        this.gotoMain();
      });
    } else {
      this.gotoMain();
    }
  }

  gotoMain() {
    navHandler.reset([{ key: 'app.main', routeName: 'main' }], 0);
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>Boilerplate</Text>
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

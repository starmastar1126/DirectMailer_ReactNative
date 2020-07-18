import React from 'react';
import { View, Text } from 'react-native';
import { Navigators } from '@routes';
import DropdownAlert from 'react-native-dropdownalert';
import LoadingHud from 'react-native-lyhud';
import Meteor from 'react-native-meteor';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { actions, shallowEqual, bindActionCreators } from '@redux';
import { gstyles } from '@theme';
import styles from './styles';
import config from './config';

Meteor.connect(config.METEOR_URL);

type AppPropTypes = {
  navApp: *,
  drop: *,
  hud: *,
  actions: *,
  dispatch: *,
};

class App extends React.Component<AppPropTypes> {

  // static ViewPropTypes = AppPropTypes;

  componentDidUpdate(prevProps) {
    const { drop: newDrop, hud: newHud } = this.props;
    const { drop: oldDrop, hud: oldHud } = prevProps;

    if (!shallowEqual(oldDrop, newDrop, false)) {
      if (newDrop.visible) {
        this.dropAlert.alertWithType(newDrop.type, newDrop.title, newDrop.message);
      } else {
        this.closedAlert;
      }
    }
    if (newHud.visible !== oldHud.visible) {
      if (newHud.visible) {
        this.loadingHud.show(newHud.message);
      } else {
        this.loadingHud.close();
      }
    }
  }

  closedAlert = () => {
    if (this.props.drop.visible) {
      this.props.actions.drop.hide();
    }
  }

  _renderDropAlert = () => (
    <DropdownAlert
      ref={(node) => { this.dropAlert = node; }}
      titleStyle={gstyles.dropAlert.title}
      messagesStyle={gstyles.dropAlert.messages}
      panResponderEnabled={false}
      onClose={this.closedAlert}
    />
  )

  _renderHud = () => (
    <LoadingHud
      ref={(node) => { this.loadingHud = node; }}
    />
  )

  _renderNavigator = () => {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.navApp,
    });

    return (
      <Navigators.App
        navigation={navigation}
      />
    );
  }

  render() {
    return (
      <View style={styles.container} >
          { this._renderNavigator() }
          { this._renderDropAlert() }
          { this._renderHud() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  navApp: state.navApp,
  drop: state.alert.drop,
  hud: state.alert.hud,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    drop: bindActionCreators(actions.alert.drop, dispatch),
    hud: bindActionCreators(actions.alert.hud, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { View, Animated, Image } from 'react-native';
import { Button } from '@components/button';
import { connect } from 'react-redux';
import { gstates } from '@common';
import { sizes, images } from '@theme';
import Header from './Header';
import Selfie from './Selfie';
import Profile from './Profile';
import Player from './Player';
import Search from './Search';
import RadioList from './RadioList';
import MainPanHandler from './Main.pan';
import MainActions from './Main.actions';
import MainMethods from './Main.methods';
import NamePopup from './NamePopup';
import { ViewType } from './types';
import styles from './Main.styles';

// const { navigation: navHandler } = handler;

class Main extends React.Component {
  actions = null;
  pan = null;

  constructor(props) {
    super(props);

    this.state = {
      animView: new Animated.Value(ViewType.profile),
      animFull: new Animated.Value(0),
      width: sizes.screen.width,
      height: sizes.screen.height,
    };

    gstates.viewState = ViewType.profile;

    this.actions = new MainActions(this);
    this.pan = new MainPanHandler(this);
    gstates.methods = new MainMethods(this);
    gstates.frame.width = sizes.screen.width;
    gstates.frame.height = sizes.screen.height;
  }

  componentDidMount() {
    gstates.methods.loadSongs();
    if (!gstates.deviceName) {
      setTimeout(() => {
        this.namePopup.show();
      }, 500);
    }
  }

  _onLayout = (e) => {
    const newFrame = e.nativeEvent.layout;
    if (newFrame.width !== this.state.width || newFrame.height !== this.state.height) {
      this.setState({ width: newFrame.width, height: newFrame.height });
    }
  }

  _renderHeader = () => (
    <Header
      actions={this.actions}
      animView={this.state.animView}
      playerFlag={this.props.playerFlag}
    />
  )

  _renderSearch = () => {
    if (gstates.searchState !== 2) {
      return null;
    }
    return (
      <Search
        searchFlag={this.props.searchFlag}
      />
    );
  }

  _renderSelfie = () => (
    <Selfie
      actions={this.actions}
      viewFlag={this.props.viewFlag}
      playerFlag={this.props.playerFlag}
    />
  )

  _renderProfile = () => (
    <Profile
      actions={this.actions}
      animView={this.state.animView}
      playerFlag={this.props.playerFlag}
    />
  )

  _renderPlayer = () => {
    const trans = sizes.screen.height - sizes.header.height1;
    const animTrans = this.state.animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [trans, trans, 0, 0],
    });
    const animTop = this.state.animFull.interpolate({
      inputRange: [0, 1],
      outputRange: [sizes.header.height1, 0],
    });

    return (
      <Animated.View
        style={[
          styles.view_player,
          { top: animTop, transform: [{ translateY: animTrans }] },
        ]}
      >
        <Player
          actions={this.actions}
          animView={this.state.animView}
          animFull={this.state.animFull}
          screen={{ width: this.state.width, height: this.state.height }}
          playerFlag={this.props.playerFlag}
        />
        <RadioList
          actions={this.actions}
          listFlag={this.props.listFlag}
        />
      </Animated.View>
    );
  }

  _renderMenu = () => {
    const btnSize = 32;
    const btnTop = (sizes.header.height1 + sizes.statusBarHeight - btnSize) / 2;
    const trans = sizes.screen.height - sizes.profile.sliderHeight - btnTop;
    const animTrans = this.state.animView.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [sizes.screen.height, trans, 0, 0],
    });
    const menuColor = gstates.viewState === ViewType.selfie || gstates.viewState === ViewType.profile ? '#000' : '#fff';
    return (
      <Animated.View
        style={[
          styles.view_menu,
          { transform: [{ translateY: animTrans }] },
        ]}
        pointerEvents="box-none"
      >
        <Button
          style={styles.btn_menu}
          onPress={this.actions.onPressMenu}
          onPressIn={this.actions.onButtonPressIn}
          onPressOut={this.actions.onButtonPressOut}
        >
          <Image source={images.ic_menu} style={[styles.img_menu, { tintColor: menuColor }]} />
        </Button>
      </Animated.View>
    );
  }
  _renderNamePopup = () => (
    <NamePopup
      ref={(node) => { this.namePopup = node; }}
    />
  )

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout} {...this.pan.panHandlers} >
        <View style={styles.content} >
          { this._renderSelfie() }
          { this._renderProfile() }
          { this._renderHeader() }
          { this._renderMenu() }
          { this._renderPlayer() }
          { this._renderNamePopup() }
          { this._renderSearch() }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  status: state.meteor.status,
  viewFlag: state.main.viewFlag,
  playerFlag: state.main.playerFlag,
  listFlag: state.main.listFlag,
  searchFlag: state.main.searchFlag,
});

const mapDispatchToProps = dispatch => ({ // eslint-disable-line
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React, { Component } from 'react';
import { View, ListView, Text, Image } from 'react-native';
import { Button } from '@components/button';
import { IOIcon, MTIcon } from '@components/icons';
import { gstates } from '@common';
import { connect } from 'react-redux';
import { handler } from '@redux';
import { routeNames } from '@routes';
import TagInput from '@components/taginput';
import { bindActionCreators } from 'redux';
import ChatUserList from '../../components/chatUserList';
import apis from '../../lib/apis';
import { colors, sizes, consts, images } from '@theme';

import { loginSubmit , loginRequest, loginSuccess, loginFailure, setToken, logout } from '../../actions/login';
import { setServer } from '../../actions/server';
import { appInit } from '../../actions';

import RocketChat from '../../lib/rocketchat';
import realm from '../../lib/realm';
import styles from './ChatUsers.styles';
import PropTypes from 'prop-types';

const { navigation: navHandler } = handler;
const { hud: hudHandler, drop: dropHandler } = handler.alert;

class ChatUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.redirected = false;
    this.buildDatasource(props.chatMsgFlag, false);
  }
  componentWillMount() {
    this.props.appInit();
  }
  componentWillUpdate(nextProps) {
    if (this.props.connected &&
    this.props.server &&
    !this.props.login.token &&
    !this.redirected) {
        this.redirected = true;
        var username = gstates.phoneNumber;
        var password = '123456789';
        var code = null;
        if (this.props.login.isFetching){
            hudHandler.show('Loading...');
        }else{
            hudHandler.hide();
        }
    this.props.loginSubmit({ username, password, code })
    if (this.props.login.error)
        alert(this.props.login.error)
    }
  }

  buildDatasource(flag, updateState) {
    const users = gstates.chatUsers.map(chatUser => ({ user: chatUser, flag }));
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => (r1 !== r2 || r1.flag !== r2.flag) });
    const dsvehicle = ds.cloneWithRows(users);
    if (updateState) {
      this.setState({ dataSource: dsvehicle });
    } else {
      this.state.dataSource = dsvehicle;
    }
  }

  search(nameKey, myArray) {
    var array = [];
    for (var i=0; i < myArray.length; i++) {
      if (myArray[i].name.toLowerCase().indexOf(nameKey.toLowerCase()) > -1) {
        array.push(myArray[i]);
      }
    }
    if (array.length > 0){
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => (r1 !== r2 || r1.flag !== r2.flag) });
      this.setState({dataSource: ds.cloneWithRows(array.map(chatUser => ({ user: chatUser })))})
    }
  }

  _onSelectedUser = ({sec, row}, info) => { // eslint-disable-line
    hudHandler.show('Loading user...');
    gstates.inviteUSer = info.user;
    apis.findUserByNumberOrEmail({number: info.user.phoneNumber.replace( /\D+/g, '')}).then((result) => {
      if (!result) {
        hudHandler.hide();
        dropHandler.showError(consts.appName, 'Your phone number or email aren\'t regester');
        navHandler.navigate({ routeName: routeNames.app.invte });
        return;
      }
      gstates.chatByUsername = result.username;
        console.warn(result.username)
      hudHandler.hide();
      if(this.props.login.token && !this.props.login.failure){
        RocketChat.createDirectMessage(result.username)
        .then(room => {
            gstates.chatByRid = room.rid;
            navHandler.navigate({ routeName: routeNames.app.chat });
        })
      }else {
        navHandler.navigate({ routeName: routeNames.app.smsmobile });
      }
      dropHandler.showSuccess(consts.appName, 'Successfully.');
    }).catch(() => {
      hudHandler.hide();
      dropHandler.showError(consts.appName, 'Failed to Number or Email');
    });
  }
  onPressClose = () => {
    navHandler.navback();
  }
  backShearch = () => {
    navHandler.navback();
  }
  _renderSearchBar = () => (
    <View style={styles.view_searchbar}>
      <Text style={styles.txt_search_mark} >{'C'}</Text>

      <View style={styles.view_search} >
        <TagInput
          ref={(node) => { this.tagInput = node; }}
          tagStyle={styles.input_tag}
          tagTextStyle={styles.input_tag_text}
          onChange={(text) => this.search(text, gstates.chatUsers)}
        />
      </View>

      <Button onPress={this.onPressClose} style={styles.btn_close} >
        <IOIcon name="md-close" size={sizes.resize_value6(24)} color={colors.text} />
      </Button>
    </View>
  )

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.search_bar} >
          { this._renderSearchBar() }
        </View>
        <ChatUserList
          dataSource={this.state.dataSource}
          onSelectedUser={this._onSelectedUser}
        />
        <Button style={styles.chat_button} onPress={this.backShearch} >
          <IOIcon name={'ios-arrow-down'} size={sizes.resize_value6(33)} color={colors.text} style={{ backgroundColor: '#00000000' }} />
        </Button>
      </View>
    );
  }
}

ChatUsers.propTypes = {
    login: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired,
    appInit: PropTypes.func.isRequired,
    server: PropTypes.string,
    loginSubmit: PropTypes.func.isRequired,
};
export default connect(
    state => ({
        login: state.login,
        app: state.app,
        server: state.server.server,
        connected: state.meteor.connected

    }),
    dispatch => bindActionCreators({
        appInit,
        loginSubmit,
        loginRequest,
        loginSuccess,
        loginFailure,
        setToken,
        setServer
    }, dispatch)
)(ChatUsers);
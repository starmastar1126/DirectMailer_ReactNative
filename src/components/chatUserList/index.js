import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import moment from 'moment';
import { Button } from '@components/button';
import AvatarView from '@components//AvatarView';
import styles from './styles';

import PropTypes from 'prop-types';

class ChatUserList extends Component {

  static propTypes = {
    onSelectedUser: PropTypes.func,
    dataSource: PropTypes.any.isRequired,
  }
  static defaultProps = {
    onSelectedUser: () => null,
  };

  onSelected = (index, info) => {
    this.props.onSelectedUser && this.props.onSelectedUser(index, info);
  }

  formatDate = (date) => {
    if (date) {
      const today = moment();
      const diffDays = today.diff(date, 'days');
      if (diffDays >= 1) {
        return date.format('d MMM') + '\n' + date.format('h:mm'); // eslint-disable-line
      }
      return date.format('h:mm');
    }
    return '';
  }

  _renderRow = (info, sec, row) => {
    const user = info.user;
    const userName = user.name;
    const userIcon = user.avatar;
    const connStyle = user.online ? styles.view_mark_online : styles.view_mark_offline;
    const lastMessage = user.lastMessage;
    const message = lastMessage ? lastMessage.text : '[No messages yet]';
    const date = lastMessage ? this.formatDate(moment(lastMessage.createdAt)) : '';
    const _onPress = () => { this.onSelected({ sec, row }, info); };

    return (
      <View style={styles.row_container} >
        <Button activeOpacity={0.7} onPress={_onPress} style={styles.btn_container} >
          <View style={styles.row_content} >
            <AvatarView image={userIcon} size={44} borderStyle={styles.avatar_border} />
            <View style={styles.view_user_info1} >
              <View style={styles.view_user_name} >
                <Text style={styles.txt_user_name} >{userName.toUpperCase()}</Text>
                {/*<View style={connStyle} />*/}
              </View>
              {/*<Text numberOfLines={1} style={styles.txt_user_message} >{message}</Text>*/}
            </View>
            <View style={{ flex: 1 }} />
            <Text style={styles.txt_date} > > </Text>
          </View>
        </Button>
      </View>
    );
  }

  _renderSeparator = (sec, row) => (<View key={`${sec}-${row}`} style={styles.separator} />)

  render() {
    const { dataSource, ...otherProps } = this.props;
    return (
      <ListView
        {...otherProps}
        enableEmptySections
        dataSource={dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
      />
    );
  }
}

export default ChatUserList;

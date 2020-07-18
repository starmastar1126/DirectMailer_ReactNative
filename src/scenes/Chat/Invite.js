
import React, { Component } from 'react';
import { View, ListView, Text, Image } from 'react-native';
import { Button } from '@components/button';
import { IOIcon, MTIcon } from '@components/icons';
import { gstates } from '@common';
import { connect } from 'react-redux';
import { handler } from '@redux';
import { routeNames } from '@routes';
import AvatarView from '@components/AvatarView';
import apis from '../../lib/apis';
import { colors, sizes, consts, images } from '@theme';

import styles from './Invite.styles';
import PropTypes from 'prop-types';

const { navigation: navHandler } = handler;
const { hud: hudHandler, drop: dropHandler } = handler.alert;

class Invite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: gstates.inviteUSer.name,
            avatar: gstates.inviteUSer.avatar,

        };
    }

    _renderButton = (text, styleButton, styleText, onPress) => (
        <Button onPress={onPress} style={styleButton} >
            <Text style={styleText}>{text}</Text>
        </Button>
    )

    _onPressClose = () => {
        navHandler.navback();
    }
    _onInviteContact = () => {
        hudHandler.show('Loading user...');
        var contactInfo = {
            mobileNumber: gstates.inviteUSer.phoneNumber,
            email: gstates.inviteUSer.email,
        }
        apis.inviteContact(contactInfo).then((result) => {
            hudHandler.hide();
            dropHandler.showSuccess(consts.appName, 'Invite successfully.');
            this._onPressClose()
        }).catch(() => {
            alert('c')
            hudHandler.hide();
        })
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.view_content} >
                    <AvatarView image={this.state.avatar} size={87} borderStyle={styles.avatar_border} />
                    <Text style={styles.txt_desc} >Invite</Text>
                    <Text style={styles.txt_desc} >{this.state.name}</Text>
                    <Text style={styles.txt_desc} >to Chilll</Text>
                    {this._renderButton('Invite Now', [styles.btn_login_email, styles.mt_20, styles.mb_15], styles.txt_login_email, this._onInviteContact)}
                </View>

                <Button onPress={this._onPressClose} style={styles.btn_close} >
                    <Text style={styles.txt_close}> {'<'} </Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProps = state => ({ // eslint-disable-line
});

const mapDispatchToProps = dispatch => ({
    dispatcher: state => dispatch(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Invite);

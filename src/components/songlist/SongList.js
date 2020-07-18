import React, { Component } from 'react';
import { View, Text, Image, Animated, ActivityIndicator } from 'react-native';
import { Button } from '@components/button';
import GridView from '@components/gridview';
import { shallowEqual } from '@redux';
import { gstates } from '@common';
import { images, sizes, basestyles as bs } from '@theme';
import styles from './SongList.styles';

export default class SongList extends Component {

  static defaultProps = {
    loading: false,
    songs: [],
    onPressSong: () => {},
    loadMore: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      animScroll: new Animated.Value(0),
      width: sizes.screen.width,
      height: sizes.screen.height,
    };

    this.animScrollCB = Animated.event([{ nativeEvent: { contentOffset: { y: this.state.animScroll } } }]);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!shallowEqual(nextProps, this.props, 0, 2)) {
      return true;
    }
    if (!shallowEqual(nextState, this.state, 0, 2)) {
      return true;
    }
    return false;
  }

  _onScroll = (e) => {
    gstates.listOffset = e.nativeEvent.contentOffset.y;
    this.animScrollCB(e);
  }

  _onLayout = (e) => {
    const newFrame = e.nativeEvent.layout;
    if (newFrame.width !== this.state.width || newFrame.height !== this.state.height) {
      this.setState({ width: newFrame.width, height: newFrame.height });
    }
  }

  _renderFooter = () => {
    if (!this.props.loading) return (<View style={styles.view_footer1} />);
    return (
      <View style={styles.view_footer}>
        <View style={styles.view_footer1} >
          <ActivityIndicator size="small" color="white" animating />
        </View>
      </View>
    );
  }

  _renderSong = (song, row, col) => {
    row = parseInt(row, 10);
    col = parseInt(col, 10);

    const { onPressSong, songs } = this.props;
    const { animScroll } = this.state;
    const itemsPerRow = sizes.list.itemsPerRow;
    const itemSize = Math.floor(this.state.width / itemsPerRow);
    const index = row * 3 + col;
    const itemSize1 = this.state.width - itemSize * (itemsPerRow - 1);
    const width = col === 2 ? itemSize1 : itemSize;
    const height = itemSize;
    let borderStyle = null;

    if (col === 0) {
      if (row === 0) {
        borderStyle = { borderTopWidth: 1, borderLeftWidth: 1, borderBottomWidth: 1, borderRightWidth: 1 };
      } else {
        borderStyle = { borderTopWidth: 0, borderLeftWidth: 1, borderBottomWidth: 1, borderRightWidth: 1 };
      }
    } else if (row === 0) {
      borderStyle = { borderTopWidth: 1, borderLeftWidth: 0, borderBottomWidth: 1, borderRightWidth: 1 };
    } else {
      borderStyle = { borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 1, borderRightWidth: 1 };
    }
    borderStyle = { ...borderStyle, ...bs.layout.absolute_full, borderColor: '#000000' };

    if (!song) {
      return (
        <View key={`slip.${row}.${col}`} style={{ width, height, overflow: 'hidden' }} >
          <View style={borderStyle} />
        </View>
      );
    }

    const y = row * height;
    const totalRows = parseInt((songs.length - 1) / 3, 10);
    const totalHeight = totalRows * height + 50;
    const lastOffset = totalHeight - this.state.height - height;
    const hm1 = Math.min(y - height * 3, lastOffset) - 0.01;
    const hm2 = Math.min(y, lastOffset);
    const hm3 = y;
    const hm4 = y + height;
    const animOverlayOpacity = animScroll.interpolate({
      inputRange: [y - height * 1000, hm1, hm2, hm3, hm4, y + height * 1000],
      outputRange: [0.8, 0.8, 0.3, 0.3, 0.7, 0.7],
    });
    const animTitleTrans = animScroll.interpolate({
      inputRange: [y - height * 1000, hm1, hm2, hm3, hm4, y + height * 1000],
      outputRange: [height * 0.6, height * 0.6, 0, 0, 0, 0],
    });

    const thumbImage = song.thumbImage ? { uri: song.thumbImage } : images.img_def_song_thumb;
    const rowStyle = [styles.row, { width, height }];
    const thumbStyle = [styles.img_row_thumb, { width, height }];
    const overlayStyle = [styles.view_row_overlay, { opacity: animOverlayOpacity }];
    // const titleStyle = [styles.view_row_title, { transform: [{ translateY: animTitleTrans }] }];
    const titleStyle = [styles.view_row_title];
    const artist = song.artist || '';
    const title = song.title1 || '';

    return (
      <View key={`sli.${row}.${col}`} style={rowStyle} >
        <Button style={styles.btn_row} onPress={() => { onPressSong && onPressSong(song, index); }} >
          <Image source={thumbImage} style={thumbStyle} />
          <Animated.View style={overlayStyle} />
          <Animated.View style={titleStyle} >
            <Image source={images.ic_list_play} style={styles.img_row_play} />
            <Text style={styles.txt_row_artist} numberOfLines={1} >{artist}</Text>
            <Text style={styles.txt_row_title} numberOfLines={1} >{title}</Text>
          </Animated.View>
        </Button>
        <View style={borderStyle} pointerEvents="none" />
      </View>
    );
  }

  _renderPlaceholder = (row, col) => this._renderSong(null, row, col)

  render() {
    return (
      <GridView
        enableEmptySections
        data={this.props.songs}
        itemsPerRow={sizes.list.itemsPerRow}
        renderItem={this._renderSong}
        renderPlaceholder={this._renderPlaceholder}
        renderFooter={this._renderFooter}
        ref={(node) => { this.list = node; }}
        onScroll={this._onScroll}
        onLayout={this._onLayout}
        onEndReached={this.props.loadMore}
      />
    );
  }
}

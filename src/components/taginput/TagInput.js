/* eslint-disable */

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './TagInput.styles';

import PropTypes from 'prop-types';

const DEFAULT_SEPARATORS = [',', ' ', ';', '\n'];

class TagInput extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    editTextStyle: PropTypes.any,
    underlineStyle: PropTypes.any,
    tagTextStyle: PropTypes.any,
    tagStyle: PropTypes.any,
    onChange: PropTypes.func,
    onPressTag: PropTypes.func,
  }
  static defaultProps = {
//     suggestedTags: ['Future', 'Test', 'Lime', 'Great', 'Future1', 'Future2', 'Future3', 'Future4', 'Future5', 'Future6', 'Future7'],
    placeholder: 'SEARCH',
    placeholderTextColor: '#999',
    editTextStyle: styles.editTextStyle,
    tagTextStyle: styles.tagTextStyle,
    tagStyle: styles.tagStyle,
    onPressTag: () => null,
    onChange: () => null,
    underlineStyle: undefined,
  }

  constructor(props) {
    super(props);

    console.log('tagInput constructor');

    this.state = {
      text: '',
      tags: [],

      waitText: '',
      waitTags: [],
      suggestedTags: [],

      frameEdit: {},
      paddingTagTop: 0,
      lastPressTag: 0,
    };
  }

  componentDidUpdate() {
    // hack - for android infinite loop problem
    if (this.searchInput) {
      if (this.searchInput._lastNativeText !== this.state.text) {
        console.log('222 - ', this.state.text);
        this.searchInput._inputRef.setNativeProps({ text: this.state.text, value: this.state.text });
        this.searchInput._lastNativeText = this.state.text;
      }
    }
  }

  setValue(text, tags, sugTags) {
    console.log('change value ', 'text: ', text, ', tags: ', tags, ', suggestedTags: ', sugTags);
    this.state.waitText = text;
    this.state.waitTags = tags;
    this.state.suggestedTags = sugTags;
    this._parseTags();
  }

  _parseTags() {
    var delimeter = DEFAULT_SEPARATORS.join('');
    var searchTags = this.state.waitTags;
    var remainText = this.state.waitText.replace(new RegExp(`[${delimeter}]`, 'gi'), ' ');

    this.state.suggestedTags.forEach((tag) => {
      var regex;
      var sharp = tag.charAt(0) == '#';
      if (sharp) {
        regex = new RegExp(`(?:${tag} )|(?:${tag}$)`, 'gi');
      } else {
        regex = new RegExp(`(?: ${tag}[# ])|(?:^${tag}[# ])|(?: ${tag}$)`, 'gi');
      }

      while (1) {
        var index = remainText.search(regex);
        if (index < 0) {
          break;
        }

        var startIndex = index;
        if (startIndex != 0 && sharp == false) {
          startIndex += 1;
        }
        var lastIndex = startIndex + tag.length;
        if (lastIndex != remainText.length && remainText.charAt(lastIndex) != '#') {
          lastIndex += 1;
        }

        remainText = `${remainText.slice(0, startIndex)} ${remainText.slice(lastIndex)}`;
        searchTags = [...new Set([...searchTags, tag])];
      }
    });
    while (1) {
      var results = remainText.match(/ {2}/gi);
      if (!results || results.length == 0) {
        break;
      }
      remainText = remainText.replace(/ {2}/gi, ' ');
    }
    console.log('remainText: ', remainText, remainText.length, ', tags: ', searchTags);

    this.setState({
      text: remainText,
      tags: searchTags,
      waitText: '',
      waitTags: [],
    });
    if (this.props.onChange) {
      this.props.onChange(remainText, searchTags);
    }
  }

  _onChangeText(text) {
    const lastTyped = text.charAt(text.length - 1);
    const parseWhen = this.props.separators || DEFAULT_SEPARATORS;

    if (parseWhen.indexOf(lastTyped) > -1) {
      console.log('Inputed delimeter');
      this.state.waitText = text;
      this.state.waitTags = this.state.tags;
      this._parseTags();
    } else {
      this.setState({ text });
      if (this.props.onChange) {
        this.props.onChange(text, this.state.tags);
      }
    }
  }

  _onPressTag(tag, index) {
    var curTime = new Date().getTime();
    var delta = curTime - this.state.lastPressTag;

    if (delta < 400) {
      console.log('_onDoublePressTag');
      this.state.lastPressTag = 0;
      if (this.props.onPressTag) {
        this.props.onPressTag(tag, index);
      }
    } else {
      this.state.lastPressTag = curTime;
    }
  }

  _onLongPressTag(tag, index) {
    console.log('onLongPressTag, index: ', index, ', tag: ', tag);

    var newTags = this.state.tags;
    newTags.splice(index, 1);
    newTags = newTags && newTags.length ? newTags : [];
    this.setState({ tags: newTags });
    if (this.props.onChange) {
      this.props.onChange(this.state.text, newTags);
    }
  }

  _calculatePaddingTag() {
    if (!this.state.frameTag || !this.state.frameEdit) {
      return;
    }
    var paddingTop = parseInt((this.state.frameEdit.height - this.state.frameTag.height) / 2);
    console.log('paddingTagTop: ', paddingTop);
    if (this.state.paddingTagTop != paddingTop) {
      this.setState({ paddingTagTop: paddingTop });
    }
  }

  _onLayoutTag(ev) {
    this.state.frameTag = ev.nativeEvent.layout;
    this._calculatePaddingTag();
  }
  _onLayoutEdit(ev) {
    this.state.frameEdit = ev.nativeEvent.layout;
    this._calculatePaddingTag();
  }

  _renderTag(tag, index) {
    return (
      <TouchableOpacity onPress={this._onPressTag.bind(this, tag, index)} onLongPress={this._onLongPressTag.bind(this, tag, index)} key={index} style={[this.props.tagStyle, { height: this.state.frameTag.height }]}>
        <Text style={this.props.tagTextStyle}>{tag}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { editTextStyle, underlineStyle, tagStyle, tagTextStyle, placeholder, placeholderTextColor, style } = this.props;
    var isTextEmpty = !(this.state.text && this.state.text.length > 0);
    var hiddenText = isTextEmpty == false ? this.state.text : this.props.placeholder;
    var hiddenFlex = isTextEmpty ? 1 : 0;

    return (
      <View style={[style, { alignSelf: 'stretch' }]} >
        <View style={{ position: 'absolute', left: 0, right: 0, opacity: 0 }}>
          <View style={tagStyle} onLayout={this._onLayoutTag.bind(this)} >
            <Text style={tagTextStyle} numberOfLines={1}>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</Text>
          </View>
        </View>

        <View style={[styles.tagWrapperStyle, { paddingTop: this.state.paddingTagTop }]} >
          <View style={{ height: this.state.frameEdit.height, marginTop: (-this.state.paddingTagTop), opacity: 0, flexDirection: 'row' }} >
            {/* <Text style={styles.editLeftTextStyle}>#</Text>*/}
            <Text style={[styles.textHiddenStyle, editTextStyle]} numberOfLines={1}>{hiddenText}</Text>
          </View>

          <View style={{ position: 'absolute', left: 0, top: 0, right: 0 }} >
            <Text onLayout={this._onLayoutEdit.bind(this)} style={[styles.textHiddenStyle, editTextStyle]} numberOfLines={1}>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</Text>
            <View style={{ position: 'absolute', left: 0, top: 0, right: 0, height: this.state.frameEdit.height, flexDirection: 'row', alignItems: 'center' }} >
              {/* <Text style={styles.editLeftTextStyle}>#</Text>*/}
              <TextInput
                ref={(node) => { this.searchInput = node; }}
                text={this.state.text}
                keyboardAppearance="dark"
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.editBaseStyle, editTextStyle]}
                onChangeText={this._onChangeText.bind(this)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          {this.state.tags.map((tag, index) => this._renderTag(tag, index))}

          <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }} >
            <View style={[styles.underlineBaseStyle, underlineStyle]} />
          </View>
        </View>
      </View>
    );
  }
}

export default TagInput;

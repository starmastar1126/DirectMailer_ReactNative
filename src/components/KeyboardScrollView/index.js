import React from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    flexGrow: 0,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  contentContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  contentStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
});

const KeyboardScrollView = (props) => {
  const { contentStyle, contentContainerStyle, ...otherProps } = props;
  const newContentStyle = [styles.contentStyle, contentStyle];
  const newContainerStyle = [styles.contentContainerStyle, contentContainerStyle];

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={newContainerStyle}
      {...otherProps}
    >
      <View style={newContentStyle} >
        {props.children}
      </View>
    </KeyboardAwareScrollView>
  );
};

KeyboardScrollView.propTypes = {
  ...KeyboardAwareScrollView.propTypes,
};

KeyboardScrollView.defaultProps = {
  ...KeyboardAwareScrollView.defaultProps,
  style: styles.scroll,
  contentStyle: styles.contentStyle,
  contentContainerStyle: styles.contentContainerStyle,
  automaticallyAdjustContentInsets: false,
  bounces: false,
};

export default KeyboardScrollView;
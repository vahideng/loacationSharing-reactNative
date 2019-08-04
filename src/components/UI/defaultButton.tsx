import React from 'react';

import { TouchableHighlight, StyleSheet, Text } from 'react-native';
type Props = {
  onPress: () => any;
  title: string;
  style?: object;
};

const defaultButton: React.FC<Props> = props => (
  <TouchableHighlight
    onPress={props.onPress}
    style={[styles.placeButton, props.style]}
  >
    <Text style={styles.TextStylle}>{props.title}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  placeButton: {
    width: '40%',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    margin: 10
  },
  TextStylle: {
    color: 'white'
  }
});

export default defaultButton;

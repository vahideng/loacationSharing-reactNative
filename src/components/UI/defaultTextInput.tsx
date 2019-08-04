import React from 'react';

import { TextInput, StyleSheet, Text } from 'react-native';
type Props = {
  style?: object;
  placeholder?: string;
};

const defaultTextInput: React.FC<Props> = props => (
  <TextInput
    placeholder={props.placeholder}
    style={[styles.DefaultTextInput, props.style]}
  />
);

const styles = StyleSheet.create({
  DefaultTextInput: {
    fontSize: 12,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    margin: 10
  }
});

export default defaultTextInput;

import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
  style?: object;

  context: any;
};

const defaultText: React.FC<Props> = props => (
  <Text style={[styles.DefaultTextInput, props.style]}> {props.context}</Text>
);

const styles = StyleSheet.create({
  DefaultTextInput: {
    fontSize: 14,

    margin: 10
  }
});

export default defaultText;

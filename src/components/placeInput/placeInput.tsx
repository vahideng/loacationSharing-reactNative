import React from 'react';

import {
  TextInput,
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from 'react-native';

import DefaultTextinput from '../UI/defaultTextInput'
import DefaultButton from '../UI/defaultButton';
type Props = {
  placesName: string;
  placeCHangeHandler: (e: any) => any;
  addPlaceHandler: () => any;
};

const placeInput: React.FC<Props> = props => (
  <View style={styles.inputContainer}>
    <DefaultTextinput
      style={styles.placeInput}
      onChangeText={props.placeCHangeHandler}
      value={props.placesName}
      placeholder={'An awesome place'}
    />

    
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  placeInput: {
    width: '100%',
    height:30
  },
  
});

export default placeInput;

import React from 'react';

import { TextInput,TouchableHighlight,View, Text, StyleSheet } from 'react-native';

type Props = {
    placesName: string;
  placeCHangeHandler: ((e: any) => any),
  addPlaceHandler :(()=> any)
};

const placeInput: React.FC<Props> = props => (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      onChangeText={props.placeCHangeHandler}
      value={props.placesName}
      placeholder={'An awesome place'}
    />

    <TouchableHighlight
      onPress={props.addPlaceHandler}
      style={styles.placeButton}
    >
      <Text>ADD</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      placeInput: {
        width: '70%'
      },
      placeButton: {
        width: '30%',
        alignItems: 'center'
      },
     
});

export default placeInput;

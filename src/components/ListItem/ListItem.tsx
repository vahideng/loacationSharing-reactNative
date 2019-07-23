import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type Props = {
  locationPlaces: string;
  itemPressd: (i: any)=>(void)
};

const listItem: React.FC<Props> = props => (
  <TouchableOpacity style={styles.listItem} onPress={props.itemPressd}>
    <Text>{props.locationPlaces}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginTop: 20
  }
});

export default listItem;

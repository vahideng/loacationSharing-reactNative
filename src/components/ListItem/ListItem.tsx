import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IProps  {
  locationPlaces: string;
  itemPressd: (i: any) => void;
  placeImage: any;
};

const listItem: React.FC<IProps> = props => (
  <TouchableOpacity style={styles.listItem} onPress={props.itemPressd}>
    <Image
      resizeMode="cover"
      style={styles.placeImage}
      source={props.placeImage}
    />
    <Text>{props.locationPlaces}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30
  }
});

export default listItem;

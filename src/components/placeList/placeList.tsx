import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItems from '../ListItem/ListItem';
interface dataObject {
  key: any;
  value: string;
}
type Props = {
  places: dataObject[];
  deleteHandler: (e: any) => any;
};

const PlaceList: React.FC<Props> = props => {
  return (
    <FlatList<any> style={styles.ScrollViewsStyle} 
      keyExtractor={item => item.key.toString()}
      data={props.places} //array of object with key properties
      renderItem={info => {
        return (
          <ListItems
            itemPressd={() => props.deleteHandler(info.item.key)}
            locationPlaces={info.item.value}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  ScrollViewsStyle: {
    width: '100%'
  }
});

export default PlaceList;

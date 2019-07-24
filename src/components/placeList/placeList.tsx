import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItems from '../ListItem/ListItem';

interface dataObject {
  key: any;
  name: string;
  image: any
}
type Props = {
  places: dataObject[];
  placeSelected: (e: any) => any;
};

const PlaceList: React.FC<Props> = props => {
  return (
    <FlatList<any> style={styles.ScrollViewsStyle} 
    keyExtractor={item => item.key.toString()}
      data={props.places} //array of object with key properties
      renderItem={info => {
       
          
        return (
          <ListItems
            itemPressd={() => props.placeSelected(info.item.key)}
            locationPlaces={info.item.name}
            placeImage={info.item.image}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  ScrollViewsStyle: {
    width: '100%'
  },
 
});

export default PlaceList;

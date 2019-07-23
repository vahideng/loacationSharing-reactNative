import React from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


type selectedPlaceObject = {
  image: any;
  name: string;
  key: number
};
type Props = {
  slectedPlace: selectedPlaceObject;
  PlaceImage: any;
  onItemDelete: (key: number)=>(void);
  onModalClosed: any
};
const placeDetails: React.FC<Props> = props => {
  let selectedplace = null;
  if (props.slectedPlace) {
    selectedplace = (
      <>
        <Image style={styles.ImagePlace} source={props.slectedPlace.image} />
        <Text style={styles.placeName}>{props.slectedPlace.name}</Text>
      </>
    );
  }

  return (
    <Modal visible={props.slectedPlace ? true : false} animationType="slide">
      <View style={styles.modalContainer}>
        {selectedplace}
        <View>
          <TouchableOpacity onPress={()=>props.onItemDelete(props.slectedPlace.key)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onModalClosed}>
            <Text>Cencel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 22,
    marginTop:"20%",
    alignItems: 'center'
  },

  deleteButton: {
    color: 'red'
  },
  camcelButton: {
    color: 'red'
  },
  ImagePlace: {
    width: "100%",
    height: 200
  },
  placeName : {
      margin:10,
      fontWeight: "bold",
      textAlign: "center",
      fontSize : 28
  }
});
export default placeDetails;

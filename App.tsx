/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */


import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PlaceInput from './src/components//placeInput/placeInput';
import PlaceList from './src/components/placeList/placeList';

const placeImage =  require("./src/assets/placeImage.jpg")
interface dataObject {
  key: any;
  name: string;
  image: any
}

type State = {
  placesName: any;
  places: dataObject[];
};

export class App extends Component<{}, State> {
  state: State = {
    placesName: '',
    places: []
  };

  placeCHangeHandler = (e: any) => {
    this.setState({ placesName: e });
  };

  addPlaceHandler = () => {
    console.log(this.state.placesName, 'this.state.placesName');

    if (this.state.placesName.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: this.state.placesName,
          image: placeImage
        }),
        placesName: ''
      };
    });
  };

  deleteHandler = (index: number) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return place.key !== index;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placesName={this.state.placesName}
          placeCHangeHandler={this.placeCHangeHandler}
          addPlaceHandler={this.addPlaceHandler}
        />

        <PlaceList
          places={this.state.places}
          deleteHandler={this.deleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    padding: 46,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  }
});

export default App;

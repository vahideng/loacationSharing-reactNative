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
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components//placeInput/placeInput';
import PlaceDetail from './src/components/placeDetail/placeDetail';
import PlaceList from './src/components/placeList/placeList';

const placeImage = require('./src/assets/placeImage.jpg');
interface dataObject {
  key: any;
  name: string;
  image: any;
}

type State = {
  placesName: any;
  places: dataObject[];
  selectedPlace: any;
};

export class App extends Component<{}, State> {
  state: State = {
    placesName: '',
    places: [],
    selectedPlace: null
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
          image: {
            uri: 'https://easyadd.my/media/images/products/featured/Sinema.jpg'
          }
        }),
        placesName: ''
      };
    });
  };

  onModalClosed =():void=>{
    this.setState({selectedPlace : null})
  }

  onItemDelete =(key:number):void =>{
    console.log(key,"key");
    

    this.setState(pervState =>{
      return{
        places: pervState.places.filter(place=>{
          return place.key !== key
        }),
        selectedPlace : null
      }
    })
  }
  placeSelected = (index: number) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === index;
        })
      };
    });
  };

  render() {

    
    return (
      <View style={styles.container}>
        <PlaceDetail onModalClosed={this.onModalClosed} onItemDelete={this.onItemDelete} slectedPlace={this.state.selectedPlace} PlaceImage />
        <PlaceInput
          placesName={this.state.placesName}
          placeCHangeHandler={this.placeCHangeHandler}
          addPlaceHandler={this.addPlaceHandler}
        />

        <PlaceList
          places={this.state.places}
          placeSelected={this.placeSelected}
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

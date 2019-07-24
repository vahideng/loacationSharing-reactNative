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
import * as actions from './src/store/actions/index';

import { connect } from 'react-redux';
const placeImage = require('./src/assets/placeImage.jpg');
interface dataObject {
  key: any;
  name: string;
  image: any;
}

type State = {
  placesName: any;
};
type Props = {
  onAddPlace: (placeName: any) => any;
  onCloseModal: () => any;
  onDeletePlace: () => void;
  onSelectPlace: (place: any) => any;
  selectedPlaces: any;
  places: any;
};

export class App extends Component<Props, State> {
  state: State = {
    placesName: ''
  };

  placeCHangeHandler = (e: any) => {
    this.setState({ placesName: e });
  };

  addPlaceHandler = () => {
    if (this.state.placesName.trim() === '') {
      return;
    }
    this.props.onAddPlace(this.state.placesName);
    this.setState({placesName: ""})
  };

  onModalClosed = (): void => {
    this.props.onCloseModal();
  };

  onItemDelete = (key: number): void => {
    this.props.onDeletePlace();
  };
  placeSelected = (index: number) => {
    this.props.onSelectPlace(index);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          onModalClosed={this.onModalClosed}
          onItemDelete={this.onItemDelete}
          slectedPlace={this.props.selectedPlaces}
          PlaceImage
        />
        <PlaceInput
          placesName={this.state.placesName}
          placeCHangeHandler={this.placeCHangeHandler}
          addPlaceHandler={this.addPlaceHandler}
        />

        <PlaceList
          places={this.props.places}
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

const mapStateToProps = (state: any) => {
  return {
    places: state.places.places,
    selectedPlaces: state.places.selectedPlace
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddPlace: (name: any) => dispatch(actions.addPlace(name)),
    onDeletePlace: () => dispatch(actions.deletePlace()),
    onSelectPlace: (key: number) => dispatch(actions.selectPlace(key)),
    onCloseModal: () => dispatch(actions.closeMoadl())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

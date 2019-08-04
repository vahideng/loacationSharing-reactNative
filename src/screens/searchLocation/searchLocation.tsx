import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import PlaceDetail from '../../components/placeDetail/placeDetail';
import PlaceInput from '../../components/placeInput/placeInput';
import PlaceList from '../../components/placeList/placeList';
import * as actions from '../../store/actions/index';
import DefaultText from '../../components/UI/defaultText';
import DefaultButton from '../../components/UI/defaultButton';
import DefaulttextInput from '../../components/UI/defaultTextInput';
import imagePreview from '../../assets/placeImage.jpg';
const placeImage: any = require('../../assets/placeImage.jpg');

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

export class SearchLocation extends Component<Props, State> {
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
    this.setState({ placesName: '' });
  };
  placeSelecteds = () => {};
  onModalClosed = (): void => {
    this.props.onCloseModal();
  };

  onItemDelete = (key: number): void => {
    this.props.onDeletePlace();
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <DefaultText context="Share a place with us" />
          <View style={styles.placeHolderView}>
            <Image source={imagePreview} style={styles.ImagePreview} />
          </View>
          <DefaultButton title="Pick Image" onPress={this.placeSelecteds} />
          <View style={styles.placeHolderView}>
            <DefaultText context="MAP" />
          </View>
          <DefaultButton title="Locate Me" onPress={this.placeSelecteds} />
          <PlaceInput
            placesName={this.state.placesName}
            placeCHangeHandler={this.placeCHangeHandler}
            addPlaceHandler={this.addPlaceHandler}
          />

          <DefaultButton title="Share A Place" onPress={this.addPlaceHandler} />
          {/* <PlaceDetail
          onModalClosed={this.onModalClosed}
          onItemDelete={this.onItemDelete}
          slectedPlace={this.props.selectedPlaces}
          PlaceImage
        />
        <PlaceInput
          placesName={this.state.placesName}
          placeCHangeHandler={this.placeCHangeHandler}
          addPlaceHandler={this.addPlaceHandler}
        /> */}
        </View>
      </ScrollView>
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
  },
  placeHolderView: {
    height: 150,
    width: '80%',
    borderWidth: 1,
    borderColor: 'red'
  },

  placeHolder: {
    width: '80%'
  },
  ImagePreview: {
    height: '100%',
    width: '100%'
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
)(SearchLocation);

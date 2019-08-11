import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PlaceDetail from '../../components/placeDetail/placeDetail';
import PlaceList from '../../components/placeList/placeList';
import * as actions from '../../store/actions';
type selectedPlaceObject = {
  image: any;
  name: string;
  key: number;
};

type Props = {
  selectedPlaces: selectedPlaceObject;
  places: any;
  placeSelected: any;
  onSelectPlace: (key: number) => any;
  placeSelecteds: () => any;
  onCloseModal: any;
  onDeletePlace: () => any;
};

class ShareLocation extends Component<Props, {}> {
  placeSelected = (index: number) => {
    this.props.onSelectPlace(index);
  };
  placeSelecteds = () => {};
  render() {
    return (
      <View style={styles.container}>
        <PlaceList
          places={this.props.places}
          placeSelected={this.placeSelected}
        />
        <PlaceDetail
          onModalClosed={this.props.onCloseModal}
          onItemDelete={this.props.onDeletePlace}
          slectedPlace={this.props.selectedPlaces}
        />
      </View>
    );
  }
}

// ShareLocation.navigationOptions = (
//   screenProps: NavigationScreenProps
// ): NavigationStackScreenOptions => {

//   const buttonRightPress = () => {
//     screenProps.navigation.navigate(ROUTES.SearchLocation);
//   };

//   return {

//     headerRight: (
//       <Icons.Button
//         name="ios-arrow-back"
//         backgroundColor="white"
//         underlayColor="transparent"
//         color="black"
//         onPress={buttonRightPress}
//       />
//     )
//   };
// };

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
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
)(ShareLocation);

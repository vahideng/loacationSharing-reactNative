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
import ListItems from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/placeInput/placeInput';

type State = {
  placesName: any;
  places: Array<string>;
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
    if (this.state.placesName.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placesName),
        placesName: ''
      };
    });
  };

  deleteHandler = (index: number) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      };
    });
  };
  placeDeleteHandler = () => {};
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placesName={this.state.placesName}
          placeCHangeHandler={this.placeCHangeHandler}
          addPlaceHandler={this.addPlaceHandler}
        />

        <ScrollView style={styles.ScrollViewsStyle}>
          {this.state.places.map((pl: string, i: number) => (
            <ListItems
              itemPressd={() => this.deleteHandler(i)}
              key={i}
              places={pl}
            />
          ))}
        </ScrollView>
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
  },
  ScrollViewsStyle :{
    width: "100%"
  }
});

export default App;

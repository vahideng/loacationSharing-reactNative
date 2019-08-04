import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import {
  NavigationScreenProps,
  NavigationScreenComponent,
  NavigationStackScreenOptions
} from 'react-navigation';
import { ROUTES } from '../../routes/index';

const ShareLocation: NavigationScreenComponent<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share Screen</Text>
    </View>
  );
};

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

export default ShareLocation;

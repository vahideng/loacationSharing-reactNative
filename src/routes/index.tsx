import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import React from 'react';

import ShareLocation from '../screens/shareLocation/shareLocation';
import Icons from 'react-native-vector-icons/Ionicons';
import SearchLocation from '../screens/searchLocation/searchLocation';
export enum ROUTES {
  SearchLocation = 'SearchLocation',
  ShareLocation = 'ShareLocation',
  ModalStack = 'ModalStack',
  MainStack = 'MainStack'
}

const ModalStack = createStackNavigator({
  SearchLocation,
  ShareLocation
});
const MainStack = createStackNavigator({
  ShareLocation
});
const RootStack = createBottomTabNavigator(
  {
    'Search Location': ModalStack,
    'Share Location': MainStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName: any;
        const { routeName } = navigation.state;
        let IconComponent = Icons;

        if (routeName === 'Share Location') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          IconComponent = Icons;
        } else if (routeName === 'Search Location') {
          iconName = `${focused ? 'md-search' : 'ios-search'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12
      }
    }
  }
);
// The stack for the main navigation

const AppContainer = createAppContainer(RootStack);
export default AppContainer;

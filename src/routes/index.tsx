import React from 'react';
import { Platform } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Auth from '../screens/auth/auth';
import searchLocation from '../screens/searchLocation/searchLocation';
import ShareLocation from '../screens/shareLocation/shareLocation';

export enum ROUTES {
  SearchLocation = 'SearchLocation',
  ShareLocation = 'ShareLocation',
  ModalStack = 'ModalStack',
  MainStack = 'MainStack',
  Auth = 'Auth',
  RootStack = 'RootStack'
}

const getTypedIcon = (name: any) => {
  return Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`;
};

const RootStack = createBottomTabNavigator(
  {
    [ROUTES.SearchLocation]: searchLocation,
    [ROUTES.ShareLocation]: ShareLocation
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName: any;

        const { routeName } = navigation.state;
        let IconComponent = Icons;
        if (routeName === ROUTES.ShareLocation) {
          iconName = getTypedIcon(`share`);
          IconComponent = Icons;
        } else if (routeName === ROUTES.SearchLocation) {
          iconName = getTypedIcon(`search`);
        }

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
const AuthStack = createSwitchNavigator({
  [ROUTES.Auth]: {
    screen: ({ navigation }: any) => {
      console.log(navigation.navigate, 'navigation');

      return <Auth onpresed={() => navigation.navigate(ROUTES.RootStack)} />;
    },
    navigationOptions: {
      title: 'Authentication'
    }
  },
  [ROUTES.RootStack]: RootStack
});

const DrawerNavigator = createDrawerNavigator(
  {
    Logout: AuthStack
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae'
    }
  }
);
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;

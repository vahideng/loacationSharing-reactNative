

import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import ShareLocation from '../screens/shareLocation/shareLocation';
import searchLocationf from '../screens/searchLocation/searchLocation'

export enum ROUTES {
    SearchLocation = "SearchLocation",
    ShareLocation = "ShareLocation",
}

const RootStack = createBottomTabNavigator(
    {
      [ROUTES.SearchLocation]: {
        screen: ShareLocation
      },
      [ROUTES.ShareLocation]: {
        screen: searchLocationf
      }
    },
   
)

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
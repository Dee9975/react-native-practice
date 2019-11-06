import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import Listscreen from "./src/screens/ListScreen";

const AppNavigator = createStackNavigator(
{
  Home: HomeScreen,
  Components: ComponentsScreen,
  List: Listscreen
},
{
  initialRouteName: "Home",
      defaultNavigationOptions: {
  title: "Webnams"
}
});

export default createAppContainer(AppNavigator);

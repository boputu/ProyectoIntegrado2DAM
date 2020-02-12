import React from 'react';
import 'react-native-gesture-handler';
import LoggingScreen from '../screens/LoggingScreen';
import HomeScreen from '../screens/HomeScreen';
import RateScreen from '../screens/RateScreen';
import AplicacionScreen from '../screens/AplicacionScreen';
import GraphicScreen from '../screens/GraphicScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export const NavegadorDeLApp = createStackNavigator(
  {
    Logging: {screen: LoggingScreen},
    Home: {screen: HomeScreen},
    Rate: {screen: RateScreen},
    Aplicacion: {screen: AplicacionScreen},
    Graphic: {screen: GraphicScreen},
  },
  {initialRoutename: 'Logging'},
);

const AppContainer = createAppContainer(NavegadorDeLApp);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}


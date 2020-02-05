import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RateScreen from '../screens/RateScreen';
import AplicacionScreen from '../screens/AplicacionScreen';
import GraphicScreen from '../screens/GraphicScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

<<<<<<< HEAD
const AplicacionStack = createStackNavigator(
  {
    Aplicacion: AplicacionScreen,
=======
const GraphicStack = createStackNavigator(
  {
    Graphic: GraphicScreen,
>>>>>>> 5cb70fb6751db4723c510f42db09f1ea7a948f32
  },
  config
);

<<<<<<< HEAD
AplicacionStack.navigationOptions = {
  tabBarLabel: 'Aplicacion',
=======
GraphicStack.navigationOptions = {
  tabBarLabel: 'Gráficos',
>>>>>>> 5cb70fb6751db4723c510f42db09f1ea7a948f32
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

<<<<<<< HEAD
AplicacionStack.path = '';
=======
GraphicStack.path = '';
>>>>>>> 5cb70fb6751db4723c510f42db09f1ea7a948f32

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const RateStack = createStackNavigator(
  {
    Rate: RateScreen,
  },
  config
);

RateStack.navigationOptions = {
  tabBarLabel: 'Rate',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

RateStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  RateStack,
<<<<<<< HEAD
  AplicacionStack,
=======
  GraphicStack,
>>>>>>> 5cb70fb6751db4723c510f42db09f1ea7a948f32
},{

tabBarOptions: {
    showLabel: true,
    labelStyle: {
      fontSize: 12,
    },
    activeTintColor: '#CDC12B',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: "#e61a31",
      fontSize: 25
    }
  }
});

tabNavigator.path = '';

export default tabNavigator;

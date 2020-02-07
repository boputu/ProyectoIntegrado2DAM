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

const AplicacionStack = createStackNavigator(
  {
    Aplicacion: AplicacionScreen,
  },
  config
);

AplicacionStack.navigationOptions = {
  tabBarLabel: 'Aplicacion',
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

AplicacionStack.path = '';

const GraphicStack = createStackNavigator(
  {
    Graphic: GraphicScreen,
  },
  config
);

GraphicStack.navigationOptions = {
  tabBarLabel: 'Graficos',
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

AplicacionStack.path = '';

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
  GraphicStack,
  AplicacionStack,
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'

import Sidebar from './app/components/Sidebar'
import HomeScreen from './app/screens/HomeScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import LoginScreen from './app/screens/LoginScreen'

const AppDrawer = DrawerNavigator(
  {
    Home: {screen: HomeScreen },
    Profile: {screen: ProfileScreen },
    Login: {screen: LoginScreen },
  },
  {
    contentComponent: props => <Sidebar {...props} />,
    initialRouteName: 'Login',
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

export default AppDrawer;
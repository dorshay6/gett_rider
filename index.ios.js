import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';
import FlowManager from 'lib/flow_manager'

registerScreens(); // this is where you register all of your app's screens
const flowManager = new FlowManager()
const phuneNum = flowManager.getPhoneNumber()

function goToPage(hasActiveRides){
  // start the app
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Registration',
        screen: 'app.Registration', // this is a registered name for a screen
        // icon: require('../img/one.png'),
        // selectedIcon: require('../img/one_selected.png'), // iOS only
        title: 'Gett On'
      },
      {
        label: 'RideDetails',
        screen: 'app.RideDetails',
        // icon: require('../img/two.png'),
        // selectedIcon: require('../img/two_selected.png'), // iOS only
        title: 'RideDetails'
      },
      {
        label: 'New Rides',
        screen: 'app.NewRide',
        // icon: require('../img/two.png'),
        // selectedIcon: require('../img/two_selected.png'), // iOS only
        title: 'New Rides'
      }
    ]
  });
}
flowManager.getRiderRides({phuneNum, () => goToPage(true), () => goToPage(false) []})

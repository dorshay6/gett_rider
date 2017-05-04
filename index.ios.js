import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';
registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'New Ride',
      screen: 'app.NewRide', // this is a registered name for a screen
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
      label: 'My Rides',
      screen: 'app.MyRides',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'My Rides'
    }
  ]
});

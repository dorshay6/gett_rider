import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';
import FlowManager from './src/lib/flow_manager'

registerScreens(); // this is where you register all of your app's screens
const flowManager = new FlowManager()
const phuneNum = flowManager.getPhoneNumber()

function goToPage(screen){
  console.log(screen)
  Navigation.startSingleScreenApp({screen: { screen: screen } });
}

if(false) {
  flowManager.getRiderRides({phuneNum, successCallback: () => goToPage('app.NewRide'), failureCallback: () => goToPage('app.RideDetails')})
} else {
  goToPage('app.Registration')
}

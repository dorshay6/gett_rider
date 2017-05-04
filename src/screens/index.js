import { Navigation } from 'react-native-navigation';

import NewRide from './NewRide.js';
import MyRides from './MyRides.js';
// import SecondTabScreen from './SecondTabScreen';
// import PushedScreen from './PushedScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('app.NewRide', () => NewRide);
  Navigation.registerComponent('app.MyRides', () => MyRides);
}
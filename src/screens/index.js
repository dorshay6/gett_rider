import { Navigation } from 'react-native-navigation';

import NewRide from './NewRide.js';
import MyRides from './MyRides.js';
import RideDetails from './RideDetails.js';
import Registration from './Registration.js';
// import SecondTabScreen from './SecondTabScreen';
// import PushedScreen from './PushedScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('app.NewRide', () => NewRide);
  Navigation.registerComponent('app.RideDetails', () => RideDetails);
  Navigation.registerComponent('app.MyRides', () => MyRides);
  Navigation.registerComponent('app.Registration', () => Registration);
}

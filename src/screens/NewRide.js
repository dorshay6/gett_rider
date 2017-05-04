import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

import GettAddressInput from '../common/stateless/GettAddressInput';
import GettTextInput from '../common/stateless/GettTextInput';

export default class NewRide extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#fbfbfd',
    navBarTextColor: '#363636',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#fbfbfd',
    statusBarTextColorScheme: 'light'
  };

  constructor(props) {
    super(props);
    this.buttonsCounter = 0;
    this.state = {};
  }

  onSelectAddress(addressType) {
    return (value) => {
      let newState = {}
      newState[`${addressType}Data`] = value
      this.setState(newState)
    }
  }

  render() {
    return (
      <View style={{backgroundColor:'#fbfbfd'}}>
        <GettAddressInput
          navigator={this.props.navigator}
          placeholder="Enter Origion"
          />
        <GettAddressInput
          navigator={this.props.navigator}
          placeholder="Enter Destination"
          />
        <GettTextInput
          placeholder="Ride Time"
          />
        <GettTextInput
          placeholder="Number of passengers"
          />
      </View>
    );
  }
}

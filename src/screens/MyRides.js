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

export default class NewRide extends Component {
  static navigatorStyle: {
    drawUnderTabBar: true,
    navBarBackgroundColor: '#4dbce9',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#000000',
    navBarButtonColor: '#ffffff',
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
      <View>
        <Text> My Rides </Text>

      </View>
    );
  }
}

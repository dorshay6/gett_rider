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
import GettNextButton from '../common/stateless/GettNextButton';

export default class Registration extends Component {
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
    const container = {
      flex: 1,
      alignItems: 'stretch',
      flexDirection: 'column',
      backgroundColor:'#fbfbfd',
    }

    const split_you_ride_with = {
      width: 223,
    	height: 21,
    	fontFamily: 'HelveticaNeue',
    	fontSize: 18,
    	letterSpacing: -0.1,
    	textAlign: 'center',
    	color: '#000000',
      marginTop: 30,
      alignSelf: 'center'
    }

    return (
      <View style={container}>
        <Text style={split_you_ride_with}>
          Split you ride with other pps
        </Text>
        <GettTextInput
          style={{marginTop:60}}
          keyboardType='numeric'
          returnKeyType='go'
          placeholder="Enter your phone"
          />
        <GettNextButton offsetY={200}/>
      </View>
    );
  }
}

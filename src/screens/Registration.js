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
import Logo from '../common/stateless/Logo';

export default class Registration extends Component {
  static navigatorStyle = {
    navBarHidden:true
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
      width: 250,
    	fontFamily: 'HelveticaNeue-Light',
    	fontSize: 22,
    	letterSpacing: -0.1,
    	textAlign: 'center',
    	color: '#606cd0',
      marginTop: 30,
      alignSelf: 'center',
      marginBottom: 67,
    }

    return (
      <View style={container}>
        <Logo />
        <Text style={split_you_ride_with}>
          Start commuting for less
        </Text>
        <GettTextInput
          keyboardType='numeric'
          returnKeyType='go'
          placeholder="Enter your phone"
          style={{color: "#606cd0"}}
          />
        <GettNextButton offsetY={200}/>
      </View>
    );
  }
}

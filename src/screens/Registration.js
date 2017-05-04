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
import FlowManager from '../lib/flow_manager'

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
    	fontFamily: 'HelveticaNeue',
    	fontSize: 33,
    	letterSpacing: -0.1,
    	textAlign: 'center',
    	color: '#606cd0',
      marginTop: 30,
      alignSelf: 'center',
      marginBottom: 40,
      fontWeight: '100'
    }

    // <GettNextButton offsetY={200} onPress={() => (new FlowManager()).createSharedRide({
    //         rider: "1234",
    //         origin:{
    //           lat: 34,
    //           lng: 32
    //         },
    //         destination:{
    //           lat: 23,
    //           lng: 11
    //         },
    //         request_time_start: "2017-04-05T15:04:05Z",
    //         request_time_end:"2006-04-05T16:04:05Z"
    //       }) }/>
    
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

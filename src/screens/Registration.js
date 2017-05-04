import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  AsyncStorage
} from 'react-native';

import GettAddressInput from '../common/stateless/GettAddressInput';
import GettTextInput from '../common/stateless/GettTextInput';
import GettNextButton from '../common/stateless/GettNextButton';
import Logo from '../common/stateless/Logo';
import FlowManager from '../lib/flow_manager'

export default class Registration extends Component {
  static navigatorStyle = {
    navBarHidden:true,
    tabBarHidden: true
  };

  constructor(props) {
    super(props);
    this.buttonsCounter = 0;
    this.state = {userPhone: ''};
  }

  onSelectAddress(addressType) {
    return (value) => {
      let newState = {}
      newState[`${addressType}Data`] = value
      this.setState(newState)
    }
  }

  onChangeText(newText) {
    this.setState({ userPhone: newText})
  }

  async onSubmit() {
    await AsyncStorage.setItem('@splitter:phone_num', this.state.userPhone)
    this.props.navigator.push({ screen: 'app.NewRide' })
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
          onChangeText={this.onChangeText.bind(this)}
          />
        <GettNextButton offsetY={200} onPress={this.onSubmit.bind(this)}/>

      </View>
    );
  }
}

import React, {Component} from 'react';
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

export default class GettNextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const iconStyle = {fontSize:20, color: 'white'}
    const iconContent = <Text style={iconStyle}>&rarr;</Text>
    return (<ActionButton
      buttonColor="#606cd0"
      icon={iconContent}
      {...this.props}
    >

    </ActionButton>
  )
  }
}

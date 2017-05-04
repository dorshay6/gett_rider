import React, {Component} from 'react';
import { TextInput, View, Text,StyleSheet } from 'react-native';

export default class GettTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFocus() {
    this.setState({ focused: true })
    if(this.props.onFocus) {
      this.props.onFocus()
    }
  }

  onBlur() {
    this.setState({ focused: false })
    // if(this.props.onFocus) {
    //   this.props.onFocus()
    // }
  }

  onChangeText(e) {
    if(this.props.onChangeText) {
      this.props.onChangeText(e)
    }
  }

  render() {
    let style = this.state.focused ? styles.focused : styles.normal
    style = { ...style, ...this.props.style }
    return (
      <View style={{padding: 10, paddingRight: 30, paddingLeft: 30}}>
        <Text
          style={{}}
        >
          { this.props.label || '' }
        </Text>
        <TextInput
          onFocus={ this.onFocus.bind(this) }
          onBlur={ this.onBlur.bind(this) }
          onChangeText={ this.onChangeText.bind(this) }
          keyboardType= { this.props.keyboardType }
          placeholder={this.props.placeholder}
          style={ style }
          value={ this.props.value || null }
          shadowColor="#000"
          placeholderTextColor="#919191"
          />
      </View>
      )
  }
}

var styles = {
  focused: {
    height: 50,
    padding: 5,
    backgroundColor: "#ffffff",
    borderRadius: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: {
      height: 10,
      width: 0
    },
  },
  normal: {
    height: 50,
    padding: 5,
    backgroundColor: "#ffffff",
    borderRadius: 3,
  }
}

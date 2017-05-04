import React, {Component} from 'react';
import { TextInput, View, Text,StyleSheet } from 'react-native';
import multipleStyles from 'react-native-multiple-styles'

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
    const baseStyle = this.state.focused ? styles.focused : styles.normal;
    const pointStyle = this.props.pointColor ? styles.hasPoint : {};
    const inputStyle = Object.assign({}, baseStyle, pointStyle)
    return (
      <View style={{paddingRight: 16, paddingLeft: 16}} zIndex={this.state.focused ? 1000 : null}>
        {this.props.label ? <Text style={{}} > { this.props.label } </Text> : null}
        <TextInput
          onFocus={ this.onFocus.bind(this) }
          onBlur={ this.onBlur.bind(this) }
          onChangeText={ this.onChangeText.bind(this) }
          keyboardType= { this.props.keyboardType }
          placeholder={this.props.placeholder}
          style={ inputStyle }
          value={ this.props.value || null }
          shadowColor="#000"
          placeholderTextColor="#919191"
          />
        <View style={{backgroundColor: this.props.pointColor, width: 10, height: 10, borderRadius: 5, marginTop: -30, marginLeft: 10, marginBottom: 30}}/>
      </View>
      )
  }
}

var styles = {
  focused: {
    fontFamily: 'HelveticaNeue-Light',
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
    fontFamily: 'HelveticaNeue-Light',
    height: 50,
    padding: 5,
    backgroundColor: "#ffffff",
    borderRadius: 3,
  },
  hasPoint: {
    paddingLeft: 32
  }
}

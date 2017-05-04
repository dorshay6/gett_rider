import React, {Component} from 'react';
import { TextInput, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Navigation } from 'react-native-navigation';

import GoogleMapsAutoComplete from '../GoogleMapsAutoComplete';
import GettTextInput from '../GettTextInput'

Navigation.registerComponent('GettAddressInput.selectMode', () => GoogleMapsAutoComplete);


export default class GettAddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getValue() {
    return this.state.AddressData ? this.state.AddressData.description : null;
  }

  onSelect(value) {
    return () => {
      this.setState({focused:false})
      if(this.props.onSelect) {
        this.props.onSelect(value)
      }
    }
  }

  onFocus() {
    this.setState({focused:true})
  }

  onChangeText(text) {
    if(this.props.onChangeText) {
      this.props.onChangeText(text)
    }
  }

  render() {
    const options = this.props.options || []
    return (
      <View>
        <GettTextInput
          onFocus={ this.onFocus.bind(this) }
          placeholder={ this.props.value ||  this.props.placeholder }
          onChangeText={ this.onChangeText.bind(this) }
          value={ this.state.focused ?  null : this.props.value }
          label={this.props.label}
        />
      {
        options.length > 0 ?
          (
            <View style={{padding: 10, paddingRight: 30, paddingLeft: 30}}>
              {
                options.map((option) =>  {
                  return (
                    <TouchableHighlight onPress={this.onSelect(option).bind(this)} key={option.text}>
                      <View style={styles.box}>
                        <Text style={styles.text}> {option.text} </Text>
                      </View>
                    </TouchableHighlight>
                  )
                })
            }
            </View>
          )
          :
          null
      }
      </View>
    );
  }
}

var styles = StyleSheet.create({
  box: {
    height: 50,
    padding: 10,
    borderRadius: 3,
    borderTopColor: '#000000',
    borderTopWidth: 1,
  },
  text: {
  }
});

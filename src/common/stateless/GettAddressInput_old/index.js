import React, {Component} from 'react';
import { TextInput, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import GoogleMapsAutoComplete from '../GoogleMapsAutoComplete';
import GettTextInput from '../GettTextInput'

Navigation.registerComponent('GettAddressInput.selectMode', () => GoogleMapsAutoComplete);


export default class GettAddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAddressSelect(value) {
    this.props.navigator.pop()
    this.setState({AddressData: value, selectMode: false})
  }

  getValue() {
    return this.state.AddressData ? this.state.AddressData.description : null;
  }

  onInputPress() {
    this.props.navigator.push({
      screen: 'GettAddressInput.selectMode',
      title: this.props.label,
      passProps: {
        onSelect: this.onAddressSelect.bind(this),
        value: this.getValue(),
        placeholder: this.props.placeholder,
        onSelect: this.onAddressSelect.bind(this)
      }
    });
  }

  render() {
    return (
      <GettTextInput
        onFocus={ this.onInputPress.bind(this) }
        placeholder={this.props.placeholder}
        value={ this.getValue() }
        label={this.props.label}
      />
    );
  }
}

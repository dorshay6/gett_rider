import React, {Component} from 'react';
import { TextInput, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import GoogleMapsAutoComplete from '../GoogleMapsAutoComplete';
import GettTextAutocomplete from '../GettTextAutocomplete'

import Qs from 'qs';


Navigation.registerComponent('GettAddressInput.selectMode', () => GoogleMapsAutoComplete);


export default class GettAddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {options: []};
  }

  onAddressSelect(value) {
    this.setState({AddressData: value, options: []})
  }

  getValue() {
    return this.state.AddressData ? this.state.AddressData.description : null;
  }

  onChangeText(text) {
    qs = Qs.stringify({
      key: 'AIzaSyDRCKG5dE1gay5wa7L-Xyols-orobOSAxQ',
      input: text,
    })

    fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?${qs}`, { method: 'GET', })
    .then((response) => response.json())
    .then((responseJson) => {
      const options = responseJson.predictions.map(option => {
        option.text = option.description
        return option;
      })

      this.setState({ options })
    })
  }

  render() {
    console.log(this.state.options)
    return (
      <GettTextAutocomplete
        onChangeText={this.onChangeText.bind(this)}
        onSelect={this.onAddressSelect.bind(this)}
        placeholder={this.props.placeholder}
        value={ this.getValue() }
        label={this.props.label}
        options={this.state.options}
      />
    );
  }
}

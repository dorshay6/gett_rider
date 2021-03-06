import React, {Component} from 'react';
import { View } from 'react-native';
const {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export default class GoogleMapsAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect(data, details) {
    this.props.onSelect(data, details)
  }

  render() {
    return (
      <View style={{height: 600}}>
        <GooglePlacesAutocomplete
          placeholder={this.props.placeholder}
          minLength={2}
          autoFocus={true}
          listViewDisplayed='auto'
          fetchDetails={true}
          renderDescription={(row) => row.description}
          onPress={this.onSelect.bind(this)}
          getDefaultValue={() => (this.props.value || null)}
          query={{
            key: 'AIzaSyDRCKG5dE1gay5wa7L-Xyols-orobOSAxQ',
            language: 'en',
            types: 'address',
          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          currentLocation={true}
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GoogleReverseGeocoding'
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
          predefinedPlaces={[homePlace, workPlace]}
          debounce={200}
        />
      </View>
    )
  }
}

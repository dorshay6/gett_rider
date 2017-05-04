import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import GettAddressInput from '../common/stateless/GettAddressInput';
import GettTextInput from '../common/stateless/GettTextInput';

export default class NewRide extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#F7F7F9',
    navBarTextColor: '#363636',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#F7F7F9',
    statusBarTextColorScheme: 'light'
  };

  constructor(props) {
    super(props);
    this.buttonsCounter = 0;
    this.state = {
      times: [
        {
          label: '12:30',
          fire: false
        },
        {
          label: '13:30',
          fire: true
        },
        {
          label: '14:30',
          fire: true
        },
        {
          label: '15:30',
          fire: false
        },
        {
          label: '16:30',
          fire: false
        },
      ]
    };
  }

  onSelectAddress(addressType) {
    return (value) => {
      let newState = {}
      newState[`${addressType}Data`] = value
      this.setState(newState)
    }
  }

  render() {
    return (
      <View style={{backgroundColor:'#F7F7F9'}}>
        <GettAddressInput
          navigator={this.props.navigator}
          placeholder="Enter Origion"
          />
        <GettAddressInput
          navigator={this.props.navigator}
          placeholder="Enter Destination"
          />

        <View style={{backgroundColor: '#fff', paddingTop: 15, paddingBottom:15}}>
          <Text style={{fontSize: 10, textAlign: 'center', paddingBottom:15, textColor: '#8f8f8f'}}> CLOSEST </Text>
          <Carousel
            ref={(carousel) => { this._carousel = carousel; }}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width/4}
            activeSlideOffset={0}
            inactiveSlideScale={0.7}
          >
            {
              this.state.times.map( (time) => {
                return (
                  <View style={{width: Dimensions.get('window').width/4}}>
                    <Text style={{fontSize:26, color: '#606cd0'}}> {time.label} </Text>
                    {
                      time.fire ?
                        <Image source={require('../image/ic-fire@3x.png')} style={{width: 15, height: 20, marginLeft: 35, marginTop: 20}}/> :
                        null
                    }
                  </View>
                )
              })
            }
          </Carousel>
        </View>

        <GettTextInput
          placeholder="Number of passengers"
          />
      </View>
    );
  }
}

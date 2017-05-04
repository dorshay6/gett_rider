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

  onAddressSelect(addressType) {
    return (value) => {
      let newState = {}
      newState[`${addressType}Data`] = value
      console.log(newState)
      this.setState(newState)
    }
  }

  render() {
    return (
      <View style={{backgroundColor:'#F7F7F9', height: Dimensions.get('window').height}}>
        <GettAddressInput
          navigator={this.props.navigator}
          placeholder="Enter Origion"
          pointColor="#37b4b8"
          onAddressSelect={this.onAddressSelect('Origion').bind(this)}
          />
        <GettAddressInput
          style={{marginTop: 0}}
          navigator={this.props.navigator}
          placeholder="Enter Destination"
          pointColor="#606cd0"
          onAddressSelect={this.onAddressSelect('Destination').bind(this)}
          />


        {this.state.DestinationData && this.state.OrigionData ?
        (
          <View>
            <View style={{backgroundColor: '#fff', paddingTop: 15, paddingBottom:15, paddingLeft: 15, marginTop: 30, height: 100}}>
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
                      <View style={{width: Dimensions.get('window').width/4}} key={time.label}>
                        <Text style={{fontFamily: 'HelveticaNeue-Light', fontSize:26, color: '#606cd0'}}> {time.label} </Text>
                        {
                          time.fire ?
                            <Image source={require('../image/ic-fire@3x.png')} style={{width: 15, height: 20, marginLeft: 35, marginTop: 10}}/> :
                            null
                        }
                      </View>
                    )
                  })
                }
              </Carousel>
            </View>

            <View style={{marginTop: 16, marginLeft:16, marginRight: 16}}>
              <View style={{backgroundColor: '#fff', height: 50, borderRadius: 3, flexDirection: 'row'}}>
                <Text style={{fontFamily: 'HelveticaNeue-Light',color: '#747474', fontSize: 18, padding: 15, flex: 1}}> Gett on price </Text>
                <Text style={{fontFamily: 'HelveticaNeue-Light',color: '#747474', fontSize: 18, padding: 15, flex: 1,textAlign: 'right'}}> 18.00$ </Text>
              </View>
            </View>
            <View style={{marginLeft:16, marginRight: 16}}>
              <View style={{backgroundColor: '#eeeef4', height: 29, borderRadius: 3, flexDirection: 'row'}}>
                <Text style={{fontFamily: 'HelveticaNeue-Light',color: '#a5a5a5', fontSize: 14, padding: 6,paddingLeft: 20,  flex: 1,textDecorationLine : 'line-through'}}>
                  Gett price
                </Text>
                <Text style={{fontFamily: 'HelveticaNeue-Light',color: '#a5a5a5', fontSize: 14, paddingRight: 15, padding: 6 , flex: 1,textAlign: 'right',textDecorationLine : 'line-through'}}>
                  50.00$
                </Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

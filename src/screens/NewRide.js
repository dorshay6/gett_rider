import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  AsyncStorage
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import GettAddressInput from '../common/stateless/GettAddressInput';
import GettTextInput from '../common/stateless/GettTextInput';
import Logo from '../common/stateless/Logo';
import GettNextButton from '../common/stateless/GettNextButton';

export default class NewRide extends Component {
  static navigatorStyle = {
    navBarHidden:true,
    tabBarHidden: false
  };

  constructor(props) {
    super(props);
    this.buttonsCounter = 0;
    this.state = {
      times: [
        {
          label: '19:30',
          fire: false
        },
        {
          label: '20:30',
          fire: true
        },
        {
          label: '21:30',
          fire: true
        },
        {
          label: '22:30',
          fire: false
        },
        {
          label: '23:30',
          fire: false
        },
        {
          label: '00:30',
          fire: false
        },
        {
          label: '01:30',
          fire: false
        },
        {
          label: '02:30',
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

  async logout() {
    await AsyncStorage.removeItem('@splitter:phone_num')
    this.props.navigator.push({ screen: 'app.Registration' })
  }

  onSubmit() {
    this.props.navigator.push({ screen: 'app.RideDetails' })
  }

  render() {
    const container = {
      flex: 1,
      alignItems: 'stretch',
      flexDirection: 'column',
      backgroundColor:'#fbfbfd',
    }

    return (
      <View style={container}>
        <TouchableOpacity onPress={this.logout.bind(this)}>
          <Logo />
        </TouchableOpacity>
        <GettAddressInput
          navigator={this.props.navigator}
          placeholder="Enter Origion"
          pointColor="#37b4b8"
          onAddressSelect={this.onAddressSelect('Origion').bind(this)}
          />
        <GettAddressInput
          style={{marginTop: -8}}
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
            <GettNextButton offsetY={300} onPress={this.onSubmit.bind(this)}/>
          </View>
        ) : null}
      </View>
    );
  }
}

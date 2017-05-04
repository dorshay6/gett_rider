import React, {Component} from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.centerContent}>
        <Image source={require('../../../image/ic-logo@3x.png')} style={styles.logoImage} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  logoImage: {
    width: 131,
    height: 30,
    marginTop: 33
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
})

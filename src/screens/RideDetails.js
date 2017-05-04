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

import multipleStyles from 'react-native-multiple-styles'

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
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor:'#F7F7F9', height: Dimensions.get('window').height}}>
        <View style={styles.bigCircle}>

        </View>
        <View style={styles.mainBox}>
          <Text style={styles.header}> Looking for another rider </Text>
          <Text style={styles.subtitle}> We will let you know till 16:45 </Text>
          <View style={styles.divider} />
          <View style={styles.dataHolder}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../image/ic-pickupdropoff@3x.png')} style={styles.sideIcones} zIndex={100}/>
              <View>
                <View style={styles.pointHolder}>
                  <Text style={styles.pointName}>17:00  Pickup</Text>
                  <Text style={styles.pointAddress}>70 Kamryn Estates</Text>
                </View>
                <View style={styles.pointHolder}>
                  <Text style={styles.pointName}>17:00  Pickup</Text>
                  <Text style={styles.pointAddress}>70 Kamryn Estates</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}> Price est. </Text>
            <Text style={multipleStyles(styles.bottomText, styles.textRight)}> $8 - $12 </Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  bigCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    marginTop: 50,
    marginBottom: -40,
    zIndex: 10000
  },
  mainBox: {
    margin: 16,
    backgroundColor: "#ffffff",
    borderRadius: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: {
      height: 10,
      width: 0
    }
  },
  header : {
    fontSize: 20,
    color: "#606cd0",
    textAlign: 'center',
    marginTop: 16
  },
  subtitle: {
    fontSize: 14,
    color: "#747474",
    textAlign: 'center',
    marginTop: 16,
    fontFamily: 'HelveticaNeue'
  },
  divider: {
    height: 1,
    backgroundColor: "#ebebeb",
    marginTop: 29
  },
  sideIcones: {
    width: 16,
    height: 86,
    marginTop: 14
  },
  dataHolder: {
    marginTop: 16,
    paddingRight: 23,
    paddingLeft: 25,
  },
  pointName: {
    fontSize: 14,
    marginBottom: 6,
  },
  pointAddress: {
    color: "#747474",
    fontSize: 14,
    fontFamily: 'HelveticaNeue'
  },
  pointHolder: {
    margin: 14
  },
  bottomContainer: {
    flexDirection: 'row'
  },
  bottomText: {
    color: "#999999",
    fontSize: 14,
    flex: 1,
    fontFamily: 'HelveticaNeue',
    padding: 20,
    paddingRight: 15,
    paddingLeft: 15
  },
  textRight: {
    textAlign: 'right'
  }
});

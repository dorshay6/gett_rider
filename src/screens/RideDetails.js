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
  Animated
} from 'react-native';

import multipleStyles from 'react-native-multiple-styles'

export default class NewRide extends Component {
  static navigatorStyle = {
    navBarHidden:true
  };

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),
    }
  }

  componentDidMount() {
    function cycleAnimation() {
      Animated.sequence([
        Animated.timing(this.state.fadeAnim, {
          toValue: 10,
          duration: 1000,
        }),
        Animated.timing(this.state.fadeAnim, {
          toValue: 1,
          duration: 1000
       })
      ]).start(event => {
        if (event.finished) {
          cycleAnimation.apply(this);
        }
      });
    }
    cycleAnimation.apply(this)
  }

  beatingOrange() {
    return {
      width: 20,
      height: 20,
      borderRadius: 10,
      margin: 25,
      backgroundColor: "#fbb822",
      shadowColor: "#fbb822",
      shadowOpacity: 10,
      shadowRadius: this.state.fadeAnim,
      shadowOffset: {
        height: 0,
        width: 0
      }
    }
  }

  render() {
    return (
      <View>
        <Image source={require('../image/bg@3x.png')} style={styles.backgroundImage} />
        <View style={styles.centerContent}>
          <Image source={require('../image/ic-logo@3x.png')} style={styles.logoImage} />
        </View>
        <View>
          <View style={styles.mainBox}>
            <View style={styles.centerContent}>
              <Animated.View style={this.beatingOrange()}>

              </Animated.View>
            </View>
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
      </View>
    );
  }
}

var styles = StyleSheet.create({
  logoImage: {
    width: 131,
    height: 28,
    marginTop: 33
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginBottom: Dimensions.get('window').height * -1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBox: {
    margin: 16,
    marginTop: 100,
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
    marginTop: 16,
    zIndex: 10,
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

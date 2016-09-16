import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View, 
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

export default class Title extends Component {
  render() {
    return (
      <View style={styles.titleContainer}>
        <Image source={require('./img/splash-logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  titleContainer: {
    flex: 6,
    justifyContent: 'center',
  },
}));
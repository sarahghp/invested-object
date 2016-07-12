import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import Lighthouse from './icons/lighthouse';


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
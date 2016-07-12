import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import Lighthouse from './icons/lighthouse';


export default class Title extends Component {
  render() {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          <Text style={styles.O}>
            O/
          <Text style={styles.t}>
            t
          </Text></Text>
        </Text>
        <View style={styles.bgLight}>
          <Lighthouse style={{size: '96', stroke: '#163939', strWidth: '0.5'}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  bgLight: {
    position: 'absolute',
    top: 200,
    left: 38,
  },
  titleContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    margin: '0 0 0 -20',
    letterSpacing: -35,
  },
  O: {
    fontSize: 240,
    fontFamily: 'Futura',
    textAlign: 'center',
  },
  t: {
    fontSize: 154,
    fontFamily: 'PT Serif',
    fontWeight: 'bold',
    textAlign: 'center',
  }
}));
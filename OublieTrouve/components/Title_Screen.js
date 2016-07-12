import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

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
      </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  titleContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    margin: '-100 0 0 -20',
    letterSpacing: -35,
  },
  O: {
    fontSize: 220,
    fontFamily: 'Futura',
    textAlign: 'center',
  },
  t: {
    fontSize: 140,
    fontFamily: 'PT Serif',
    fontWeight: 'bold',
    textAlign: 'center',
  }
}));
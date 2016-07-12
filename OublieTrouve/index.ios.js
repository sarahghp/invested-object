/**
 * OublieTrouve React Native App, by @sarahgp
 * https://github.com/sarahgp/invested-object
 * based on:
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import shorthand from 'react-native-styles-shorthand';


class OublieTrouve extends Component {
  render() {
    return (
      <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aefaea',
  },
  title: {
    color: '#fff',
    margin: '-150 0 0 -20',
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

AppRegistry.registerComponent('OublieTrouve', () => OublieTrouve);

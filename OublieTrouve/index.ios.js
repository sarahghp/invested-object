/**
 * OublieTrouve React Native App, by @sarahgp
 * https://github.com/sarahgp/invested-object
 * based on:
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Tools
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import shorthand from 'react-native-styles-shorthand';

// Components
import Title from './components/Title_Screen';
import ButtonBar from './components/Button_Bar';


class OublieTrouve extends Component {
  render() {
    return ( 
      <View style={styles.container}>
        <Title />
        <ButtonBar />
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
  }
}));

AppRegistry.registerComponent('OublieTrouve', () => OublieTrouve);

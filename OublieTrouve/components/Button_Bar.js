import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

import Button from './Button.js';

export default class ButtonBar extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button />
        <Button />
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));
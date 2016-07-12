import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

export default class Button extends Component {
  render() {
    return (
      <View style={styles.button}>
       {/* put SVG here */}
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  button: {
    height: 80, // eventually make size prop?
    borderRadius: 40, // eventually make size prop?
    width: 80, // eventually make size prop?
    backgroundColor: '#fff',
    margin: 20,
    shadowColor: "#4d4d4d",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    }
  }
}));
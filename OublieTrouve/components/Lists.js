import React, { Component } from 'react';

import { 
  StyleSheet,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';

import TopNav from './TopNav.js';
import MemoryList from './Moments_List';

export default class Lists extends Component {

  render(){
    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} />
        <MemoryList navigator={this.props.navigator} />
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    paddingTop: 44,
    flex: 1,
  },
}));
import React, { Component } from 'react';

import {  
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';

export default class TopNav extends Component { 

    _back() {
      this.props.navigator.pop();
    }

    render() {
      return (
      <View>
        <Text style={styles.text} onPress={this._back.bind(this)} > 
          « Back 
        </Text>  
      </View>    
    );
  }
}

const styles = StyleSheet.create(shorthand({
  text: {
    fontFamily: base.bodyFontFamily,
    paddingLeft: 18,
  },
}));
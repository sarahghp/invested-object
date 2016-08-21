import React, { Component } from 'react';

import {  
  SegmentedControlIOS,
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
        <View style={styles.container}>
            <Text style={styles.text} onPress={this._back.bind(this)} > 
              « Back 
            </Text>
            <Text style={styles.text}>
              {this.props.sectionTitle}
            </Text>
            {/* This is a super hacky way to get the spacing how I want it in the flexbox. It is a terrible idea. */}
            <Text style={styles.text}> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            </Text>  
        </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 9,
    paddingBottom: 11,
    borderBottomColor: base.textSeafoam,
    borderBottomWidth: 1,
  },
  text: {
    // fontFamily: base.bodyFontFamily,
    color: base.textSeafoam,
    fontSize: 16,
    paddingLeft: 18,
  },
}));
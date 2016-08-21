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
        <View>
          <Text style={styles.text} onPress={this._back.bind(this)} > 
            « Back 
          </Text>  
        </View>
        <View style={styles.control}>
          <SegmentedControlIOS 
            tintColor={base.textSeafoam}
            values={['Concordances', 'All Moments']} 
            selectedIndex={1} />
        </View>
        {/* This is a super hacky way to get the spacing how I want it in the flexbox. It is a terrible idea. */}
        <View>
          <Text style={styles.text}> 
              &nbsp;&nbsp;&nbsp;&nbsp;
          </Text>  
        </View>

      </View> 
    );
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    // fontFamily: base.bodyFontFamily,
    color: base.primaryGray,
    paddingLeft: 18,
  },
  control: {
    width: 220,
  },
}));
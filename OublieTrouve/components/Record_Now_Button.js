import React, { Component } from 'react';

import { 
  Image,
  ListView, 
  StyleSheet,
  TouchableHighlight,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';

// Components
import Button     from './Button';

export default class RecordNow extends Component {

  render(){
    return (
      
      <View style={styles.buttonWrapper}>
        <Button size='large' bkg='#a8ffee' opc={0.85} icon='report' />
      </View>
    
    )
  }
}

const styles = StyleSheet.create(shorthand({
  buttonWrapper: {
    position: 'absolute',
    bottom: 22,
    right: 22,
  },
}));
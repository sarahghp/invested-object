import React, { Component } from 'react';

import { 
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

// Components
import Button    from './Button';
import Form      from './Record_Now_Form';

export default class RecordNow extends Component {

  _toForm(){
    this.props.navigator.push({
      name: 'Moments Form',
      component: Form,
      passProps: {
        navigator: this.props.navigator
      }
    })
  }

  render(){
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={this._toForm.bind(this)}>
          <Button size='large' bkg='#a8ffee' opc={0.85} icon='report' />
        </TouchableOpacity>
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
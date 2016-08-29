import React, { Component } from 'react';

import {  
  StyleSheet,
  Text,
  TouchableWithoutFeedback, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base }  from './base_styles';
import events    from './Events';

export default class EditLink extends Component {

  _onEditPress(eventName){
    console.log(eventName);
    events.emit(eventName);
  }

  render() {
    
    let op = this.props.invisible ? 0.0 : 1.0; 

    return (
      <TouchableWithoutFeedback 
        disabled={this.props.invisible} 
        onPress={this._onEditPress.bind(this, this.props.eventName)}>
        <View>
          <Text style={[styles.text, {opacity: op}]}> Edit </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  text: {
    color: base.textSeafoam,
    fontSize: 16,
    paddingRight: 9,
  },
}));
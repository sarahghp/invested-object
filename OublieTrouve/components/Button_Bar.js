import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

// Components
import Button   from './Button';
import ListView from './Moments_List';

export default class ButtonBar extends Component {

  toList() {
    this.props.navigator.push({
      name: 'Moments List',
      component: ListView,
      passProps: {
        navigator: this.props.navigator.pop
      }
    })
  }

  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View style={styles.buttonContainer} ref={component => this._root = component} >
        <Button icon='moment' />
        <Button size='large' icon='report' />
        <TouchableOpacity onPress={this.toList.bind(this)}>
          <Button icon='conx'/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));
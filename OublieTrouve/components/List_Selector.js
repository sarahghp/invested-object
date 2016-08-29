import React, { Component } from 'react';

import {  
  SegmentedControlIOS,
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base }  from './base_styles';
import events    from './Events';

export default class ListSelector extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentListIdx: 0,
    }
  }

  _onValueChange() {

    let nextIdx = +!this.state.currentListIdx;

    this.setState({
      currentListIdx: nextIdx,
    });

    events.emit('listNavChanged', {
      nextIdx: nextIdx,
    })
  } 

  render() {
    return (
      <View style={styles.navControl}>
        <SegmentedControlIOS 
          tintColor={base.textSeafoam}
          values={this.props.values} 
          selectedIndex={this.state.currentListIdx}
          onValueChange={this._onValueChange.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  navControl: {
    width: 220,  
  },
}));
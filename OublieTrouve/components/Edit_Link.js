import React, { Component } from 'react';

import {  
  StyleSheet,
  Text,
  TouchableWithoutFeedback, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base }  from './helpers/base_styles';
import events    from './Events';

export default class EditLink extends Component {

  constructor(props){
    super(props);

    this.state = {
      editingInProgress: false
    }
  }

  _onEditPress(eventName){
    if (!this.state.editingInProgress) {
      console.log(eventName);
      events.emit(eventName);
      this.setState({editingInProgress: true });
    } else {
      console.log(eventName + 'Saved');
      events.emit(eventName + 'Saved');
      this.setState({editingInProgress: false });
    }
  }

  componentWillMount(){
    this.props.saveFirst && this.setState({editingInProgress: true});
  }

  render() {
    
    let op   = this.props.invisible ? 0.0 : 1.0,
        text = this.state.editingInProgress ? 'Save' : 'Edit'; 

    return (
      <TouchableWithoutFeedback 
        disabled={this.props.invisible} 
        onPress={this._onEditPress.bind(this, this.props.eventName)}>
        <View>
          <Text style={[styles.text, {opacity: op}]}> {text} </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  text: {
    color: base.textSeafoam,
    fontSize: 16,
    padding: `0 ${base.padding(0.5)}`,
  },
}));
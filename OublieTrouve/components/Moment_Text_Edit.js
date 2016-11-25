import React, { Component } from 'react';

import { 
  StyleSheet,
  Text,
  TextInput, 
  View
} from 'react-native';

import { _saveToStore,
        _updateDetailState }  from './helpers/data_actions';

import shorthand        from 'react-native-styles-shorthand';
import update           from 'react-addons-update';
import { base, groups } from './helpers/base_styles';
import events           from './Events';

// Component
export default class MomentTextEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {
        title: '',
        description: '',
        elevation: 0,
        distance_from_home: 0,
        temp: 75,
        humidity: 22.5,
        posted: 0,
        id: 0, 
      },

      titleHeight: 0,
      paraHeight: 0,
    }
  }

  componentWillMount(){
    this._saveToStore = _saveToStore.bind(this);
    events.addListener('makeDetailTextEditableSaved', this._saveToStore);
  }

  componentWillUnmount(){
    events.removeListener('makeDetailTextEditableSaved', this._saveToStore);
  }

  componentDidMount(){
    this.setState({details: this.props.details});
  }

  render() {
    
    let date = new Date(this.state.details.posted);

    return (
      <View style={{backgroundColor: "#fff", marginTop: 0}}>
        <TextInput
           style={[styles.text, styles.title, {height: Math.max(88, this.state.titleHeight)}]}
           onChangeText={(text) => _updateDetailState.call(this, text, 'title')}
           value={this.state.details.title}
           multiline={true}
           editable={editOn}
           />
        <TextInput
           style={[styles.text, styles.para, {height: 180}]}
           onChangeText={(text) => _updateDetailState.call(this, text, 'description')}
           placeholder={'Add notes here.'}
           value={this.state.details.description}
           multiline={true}
           editable={editOn}
           />
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  text: groups.bodyFontGroup,
  title: {
    fontSize: 22,
    flex: 1,
  },
  para: {
    flex: 10,
    lineHeight: 21,
    flex: 1,
  },
  small: {
    fontSize: 12,
    fontStyle: 'italic',
    color: base.darkGray,
  },
}));
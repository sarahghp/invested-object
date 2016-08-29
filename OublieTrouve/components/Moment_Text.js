import React, { Component } from 'react';

import { 
  ScrollView,
  StyleSheet,
  Text,
  TextInput, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import update from 'react-addons-update';
import { base, groups } from './base_styles';
import SimpleStore from 'react-native-simple-store';
import events from './Events';

// Component
export default class MomentText extends Component {

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
      },
      editable: false,
    }
  }

  componentWillMount() {
    SimpleStore.get('all_moments')
    .then((data) => {
      this.setState({ details: _.find(data, { title: this.props.title })});
    })
    .catch(error => {
      console.error(error.message);
    });

    events.addListener('makeDetailTextEditable', this._makeEditable.bind(this));
  }

  _makeEditable(){
    this.setState({editable: true});
  }

  _updateDetailState(text, updateMe){
    let newDetail = update(this.state.details, {$merge: {[updateMe]: text} });
    this.setState({details: newDetail});
  }
          

  render() {
    
    let date = new Date(this.state.details.posted)
        editOn = this.state.editable;

    return (
      <View>
        <TextInput
           style={[styles.text, styles.title]}
           onChangeText={(text) => this._updateDetailState.call(this, text, 'title')}
           value={this.state.details.title}
           multiline={true}
           editable={editOn}
           />
        <TextInput
           style={[styles.text, styles.para]}
           onChangeText={(text) => this._updateDetailState.call(this, text, 'description')}
           value={this.state.details.description}
           multiline={true}
           editable={editOn}
           />
        <Text style={[styles.text, styles.small]}>posted at: {date.toString()} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  text: groups.bodyFontGroup,
  title: {
    fontSize: 22,
  },
  para: {
    flex: 1,
    lineHeight: 21,
  },
  small: {
    fontSize: 12,
    fontStyle: 'italic',
    color: base.darkGray,
  },
}));
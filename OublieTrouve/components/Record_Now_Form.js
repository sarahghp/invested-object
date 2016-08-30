import React, { Component } from 'react';

import { 
  StyleSheet,
  Text,
  TextInput, 
  View
} from 'react-native';

import shorthand        from 'react-native-styles-shorthand';
import update           from 'react-addons-update';
import { base, groups } from './base_styles';
import SimpleStore      from 'react-native-simple-store';
import events           from './Events';

// Component
import TopNav           from './TopNav';

export default class MomentTextEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {
        title: '',
        description: '',
        elevation: _.random(1, 10) > 8 ? _.random(0, 1500) : _.random(0, 20000),
        distance_from_home: _.random(2, 200),
        temp:  _.random(0, 100, true),
        humidity: _.random(0, 100, true),
        posted: 0,
        id: 1000, 
      },

      titleHeight: 0,
      paraHeight: 0,
    }
  }

  _saveToStore(){
    let idx;

    SimpleStore.get('all_moments')
    .then((data) => {
       idx = _.findIndex(data, { id: this.props.details.id });
       data[idx].title = this.state.details.title;
       data[idx].description = this.state.details.description;
       SimpleStore.save('all_moments', data);
       events.emit('refreshData');
    })
    .then(() => SimpleStore.get('all_moments'))
    .then((data) => {
      console.log('gotten', data[idx]);
    })
    .catch(error => {
      console.error(error.message);
    });
  }

  _updateDetailState(text, updateMe){
    let newDetail = update(this.state.details, {$merge: {[updateMe]: text} });
    this.setState({details: newDetail});
  }
          

  render() {
    
    let date = new Date();

    return (
      <View>
        <TopNav navigator={this.props.navigator} sectionTitle='Record Moment Now' />
        <Text>Title</Text>
        <TextInput
           style={[styles.text, styles.title, {height: Math.max(88, this.state.titleHeight)}]}
           onChangeText={(text) => this._updateDetailState.call(this, text, 'title')}
           placeholder={date.toString()}
           value={this.state.details.title}
           multiline={true}
           />
        <Text>Notes</Text>
        <TextInput
           style={[styles.text, styles.para, {height: Math.max(260, this.state.titleHeight)}]}
           onChangeText={(text) => this._updateDetailState.call(this, text, 'description')}
           placeholder='Optional notes'
           value={this.state.details.description}
           multiline={true}
           />
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
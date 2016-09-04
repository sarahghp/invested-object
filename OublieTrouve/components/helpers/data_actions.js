import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput, 
  TouchableHighlight,
  View
} from 'react-native';

import update           from 'react-addons-update';
import SimpleStore      from 'react-native-simple-store';
import events           from '../Events';

const _addToStore = function() {

  SimpleStore.get('all_moments')
  .then((data) => {
     let idx = data.length;
     let newEntry = update(this.state.details, { $merge: {id: idx} });
     data.push(newEntry);
     SimpleStore.save('all_moments', data);
     events.emit('refreshData');
  })
  .then(() => SimpleStore.get('all_moments'))
  .then((data) => {
    console.log('gotten', data[data.length - 1]);
  })
  .catch(error => {
    console.error(error.message);
  });
}

const _saveToStore = function(){
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

const _updateDetailState = function(text, updateMe){
  let newDetail = update(this.state.details, {$merge: {[updateMe]: text} });
  this.setState({details: newDetail});
}

export {_addToStore, _saveToStore, _updateDetailState }
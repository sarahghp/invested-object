import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput, 
  TouchableHighlight,
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

  componentWillMount() {
    events.addListener('newMomentSaved', this._addToStore.bind(this));
  }

  _addToStore(){

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

  _updateDetailState(text, updateMe){
    let newDetail = update(this.state.details, {$merge: {[updateMe]: text} });
    this.setState({details: newDetail});
  }
          

  render() {
    
    let date = new Date(),
        colorStyle = { color: this.state.buttonActive ? '#fff' : base.primaryGray, };

    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} sectionTitle='Record Moment Now' 
                saveFirst={true} edit={{eventName: 'newMoment'}} />
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.label]}>Title</Text>
          <TextInput
             style={[styles.text, styles.title, {height: Math.max(88, this.state.titleHeight)}]}
             onChangeText={(text) => this._updateDetailState.call(this, text, 'title')}
             placeholder={date.toString()}
             value={this.state.details.title}
             multiline={true}
             />
          <Text style={[styles.text, styles.label]}>Notes</Text>
          <TextInput
             style={[styles.text, styles.para, {height: Math.max(160, this.state.paraHeight)}]}
             onChangeText={(text) => this._updateDetailState.call(this, text, 'description')}
             placeholder='Optional notes'
             value={this.state.details.description}
             multiline={true}
             />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    paddingTop: 22,
    flex: 1,
    backgroundColor: base.lightSeafoam,
  },
  label: {
    color: base.textSeafoam,
  }, 
  textContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: '36 18 0 18',
  },
  text: groups.bodyFontGroupUnpadded,
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
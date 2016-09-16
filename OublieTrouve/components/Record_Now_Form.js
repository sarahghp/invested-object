import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput, 
  TouchableHighlight,
  View
} from 'react-native';

import { _addToStore,
        _updateDetailState }  from './helpers/data_actions';

import { base, groups } from './helpers/base_styles';
import shorthand        from 'react-native-styles-shorthand';
import update           from 'react-addons-update';;
import events           from './Events';

// Component
import TopNav           from './TopNav';

export default class MomentTextEdit extends Component {

  constructor(props) {
    super(props);

    let date = new Date();

    this.state = {
      details: {
        title: date.toString().split(' ').slice(0, 5).join(', '),
        description: '',
        elevation: _.random(1, 10) > 8 ? _.random(0, 1500) : _.random(0, 20000),
        distance_from_home: _.random(2, 200),
        temp:  _.random(0, 100, true),
        humidity: _.random(0, 100, true),
        posted: date,
        id: 1000, 
      },

      titleHeight: 0,
      paraHeight: 0,
    }
  }

  componentWillMount() {
    this._addToStore = _addToStore.bind(this);
    events.addListener('newMomentSaved', this._addToStore);
  }

  componentWillUnmount() {
    events.removeListener('newMomentSaved', this._addToStore);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} sectionTitle='Record Moment Now' 
                saveFirst={true} edit={{eventName: 'newMoment'}} />
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.label]}>Title</Text>
          <TextInput
             style={[styles.text, styles.title, {height: Math.max(88, this.state.titleHeight)}]}
             onChangeText={(text) => _updateDetailState.call(this, text, 'title')}
             value={this.state.details.title}
             multiline={true}
             />
          <Text style={[styles.text, styles.label]}>Notes</Text>
          <TextInput
             style={[styles.text, styles.para, {height: Math.max(160, this.state.paraHeight)}]}
             onChangeText={(text) => _updateDetailState.call(this, text, 'description')}
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
    paddingTop: base.rowSpacing(1),
    flex: 1,
    backgroundColor: base.lightSeafoam,
  },
  label: {
    color: base.textSeafoam,
  }, 
  textContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: `${base.padding(2)} ${base.padding(1)} 0 ${base.padding(1)}`,
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
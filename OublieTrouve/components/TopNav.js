import React, { Component } from 'react';

import {  
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base } from './base_styles';

// Components
import ListSelector from './List_Selector';
import EditLink from './Edit_Link';

export default class TopNav extends Component { 

    _back() {
      this.props.navigator.pop();
    }

    render() {

      let sectionTitle = <Text style={styles.text}> {this.props.sectionTitle || ''} </Text>,
          editEvent = this.props.edit ? this.props.edit.eventName : null,
          edit = <EditLink invisible={false} eventName={editEvent} />,
          /* This is a super hacky way to get the spacing how I want it in the flexbox. It is a terrible idea. */
          invisibleEdit = <EditLink invisible={true} />,
          selector = <ListSelector lists={this.props.lists} values={this.props.values} />;

      return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={this._back.bind(this)} > 
              « Back 
            </Text>
              {this.props.kind === 'list' ? selector : sectionTitle}
              {this.props.edit ? edit : invisibleEdit}   
        </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 11,
    borderBottomColor: base.textSeafoam,
    borderBottomWidth: 1,
  },
  text: {
    color: base.textSeafoam,
    fontSize: 16,
    paddingLeft: 9,
  },
}));
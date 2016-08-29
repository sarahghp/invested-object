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

// Components
import PlainText from './Moment_Text_Plain';
import EditText from './Moment_Text_Edit';

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
      titleHeight: 0,
      paraHeight: 0,
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
          

  render() {
    
    let date = new Date(this.state.details.posted)
        editOn = this.state.editable,
        plain = <PlainText details={this.state.details} date={date.toString()} />,
        edit = <EditText details={this.state.details} date={date.toString()} />;

    return (
      <View>
        {editOn ? edit : plain}
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({

}));
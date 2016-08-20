import React, { Component } from 'react';

import { 
  ScrollView,
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';
import SimpleStore from 'react-native-simple-store';

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
      }
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
  }


  render() {
    
    let date = new Date(this.state.details.posted);

    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.text, styles.title]}>{this.props.title} </Text>
        <Text style={[styles.text, styles.para]}>{this.state.details.description} </Text>
        <Text style={[styles.text, styles.small]}>posted at: {date.toString()} </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    marginTop: 44,
    flex: 4,
  },
  text: groups.bodyFontGroup,
  title: {
    fontSize: 22,
  },
  para: {
    flex: 1,
    lineHeight: 21,
  },
  small:{
    fontSize: 12,
    fontStyle: 'italic',
    color: base.darkGray,
  },
}));
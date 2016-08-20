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
    
    return (
      
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.props.title} </Text>
        <Text style={styles.para}>{this.state.details.description} </Text>
      </ScrollView>
  

    )
  }

}

const styles = StyleSheet.create(shorthand({
  container: {
    paddingTop: 44,
    flex: 4,
  },
  title: {
    fontFamily: base.bodyFontFamily,
    fontSize: 22,
    padding: 18,
  },
  para: {
    flex: 1,
    fontFamily: base.bodyFontFamily,
    padding: 18,
    lineHeight: 21,
  },
}));
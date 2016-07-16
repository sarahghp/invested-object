import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import shorthand from 'react-native-styles-shorthand';

// Components
import Title      from './Title_Screen';
import ButtonBar  from './Button_Bar';

export default class FrontPage extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Title />
        <ButtonBar navigator={this.props.navigator} />
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aefaea',
  }
}));
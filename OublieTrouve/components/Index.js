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

// Datas
import SimpleStore from 'react-native-simple-store';
import seed from './data_seed.js';

// SimpleStore.delete('all_moments');


SimpleStore.get('all_moments')
  .then((data) => {
    if (!data){
      console.log('Reloaded data');
      SimpleStore.save('all_moments', seed)
        .then(() => SimpleStore.get('all_moments'))
        .then(data => {
          // console.log(data);
        })
        .catch(error => {
          console.error(error.message);
        });
    } else {
      console.log('Data was already loaded.');
    }
  })
  .catch(error => {
    console.error(error.message);
  });

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
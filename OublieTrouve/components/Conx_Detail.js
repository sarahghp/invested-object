import React, { Component } from 'react';

import { 
  Image,
  StyleSheet,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

// Components
import MomentList from './Moments_List';

export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={require('./img/fake-graph.png')} />
        </View>

        <MomentList navigator={this.props.navigator} filter={this.props.filter}/> 
        
      </View>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  container: {
    flex: 4,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#fff',
  },
}));
import React, { Component } from 'react';

import { 
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';

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
          <Image style={styles.image} source={require('./img/fake-graph.png')} />
        </View>

        <MomentList navigator={this.props.navigator} /> 
        
      </View>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  container: {
    flex: 4,
    backgroundColor: '#fff',
  },
  text: groups.bodyFontGroup,
  imageWrapper: {
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#fff',
  },  
  buttonWrapper: {
    position: 'absolute',
    bottom: 22,
    right: 22,
  },
}));
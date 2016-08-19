import React, { Component } from 'react';

import { 
  Image,
  ListView, 
  StyleSheet,
  TouchableHighlight,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';
import SimpleStore from 'react-native-simple-store';

// Component
export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  _back() {
    this.props.navigator.pop();
  }

  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.text, {paddingLeft: 18}} onPress={this._back.bind(this)}> 
          « Back 
        </Text>
        <View style={styles.imageWrapper}><Image style={styles.image} source={require('./img/icon-buddies.png')} /></View>
        {/*moment button*/}
        {/*list*/}

      </View>

    )
  }

}

const styles = StyleSheet.create(shorthand({
  container: {
    paddingTop: 44,
    flex: 1,
  },
  text: groups.bodyFontGroup,
  imageWrapper: {
    alignItems: 'center'
  }
}));
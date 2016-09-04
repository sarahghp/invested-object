import React, { Component } from 'react';

import { 
  Image,
  ListView, 
  StyleSheet,
  TouchableHighlight,
  Text, 
  View
} from 'react-native';

import shorthand        from 'react-native-styles-shorthand';
import { base, groups } from './helpers/base_styles';

// Components
export default class Card extends Component {

  constructor(props){
    super(props);
  }

  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render(){

    return (
      <View style={styles.container} ref={component => this._root = component}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require('./img/fake-graph.png')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.card.type}: {this.props.card.modifier}</Text>
          <Text style={[styles.text, styles.small]}>{this.props.card.members.length} entries</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    margin: '9 9',
    shadowColor: base.primaryShadow,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  textContainer: {
    backgroundColor: base.lightestSeafoam,
    padding: '18',
  },
  text: groups.bodyFontGroupUnpadded,
  small: {
    fontSize: 12,
    fontStyle: 'italic',
    color: base.darkGray,
  },
  imageWrapper: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: base.primarySeafoam,
    borderBottomWidth: 1,
  },  
}));
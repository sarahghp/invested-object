import React, { Component } from 'react';

import { 
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import shorthand  from 'react-native-styles-shorthand';

// Components
import ListDetail from './Conx_Filtered_List';

export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  _toList() {
    this.props.navigator.push({
      name: 'Filtered List',
      component: ListDetail,
      passProps: {
        navigator: this.props.navigator,
        filter: this.props.filter ? this.props.filter : null,
        ...this.props
      }
    })
  }

  render() {
    return (
      <TouchableOpacity onPress={this._toList.bind(this)}>
        <View style={styles.imageWrapper}>
          <Image 
          style={{ height: 100, transform: [{scale: 0.5, translateY:100}] }}
          source={require('./img/path-3.png')} />
        </View>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  imageWrapper: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
}));
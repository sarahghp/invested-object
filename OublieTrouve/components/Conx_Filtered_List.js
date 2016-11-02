import React, { Component } from 'react';

import { 
  Image,
  StyleSheet,
  View
} from 'react-native';

import shorthand  from 'react-native-styles-shorthand';
import { base }   from './helpers/base_styles';

// Components
import MomentList from './Moments_List';
import TopNav     from './TopNav';

export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} sectionTitle={this.props.title} edit={null} />
        <MomentList navigator={this.props.navigator} filter={this.props.filter}/> 
      </View>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  container: {
    paddingTop: base.rowSpacing(1),
    flex: 1,
    backgroundColor: base.lightSeafoam,
  },
}));
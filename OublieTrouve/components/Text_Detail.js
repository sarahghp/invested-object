import React, { Component } from 'react';

import { 
  Image,
  ScrollView,
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';

// Components
import MomentText from './Moment_Text';

export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
    
        <ScrollView style={styles.scrollContainer}>

          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require('./img/icon-buddies.png')} />
          </View>

          <MomentText title={this.props.title} />

        </ScrollView>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  scrollContainer: {
    paddingTop: 44,
    flex: 4,
    backgroundColor: '#fff',
  },
  text: groups.bodyFontGroup,
  imageWrapper: {
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#fff',
  },
}));
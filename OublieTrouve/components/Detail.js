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

// Components
import TopNav     from './TopNav';
import Button     from './Button';
import MomentText from './Moment_Text';
import MomentList from './Moments_List';

export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  _back() {
    this.props.navigator.pop();
  }

  render() {

    let lower;

    if (this.props.detailKind === 'text') {
      lower = <MomentText title={this.props.title} />
    } else if (this.props.detailKind === 'list') {
     lower = <MomentList navigator={this.props.navigator} /> 
    }

    return (

      <View style={styles.container}>

        <TopNav navigator={this.props.navigator} />
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require('./img/icon-buddies.png')} />
        </View>

        {lower}

        <View style={styles.buttonWrapper}>
          <Button style={styles.button} size='large' bkg='#a8ffee' opc={0.85} icon='report' />
        </View>
        

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
    alignItems: 'center',
    flex: 2,
  },  
  buttonWrapper: {
    position: 'absolute',
    bottom: 22,
    right: 22,
  },
}));
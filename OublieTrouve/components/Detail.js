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
import TextDetail from './Text_Detail';
import ListDetail from './Conx_Detail';

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
      lower = <TextDetail title={this.props.title} />
    } else if (this.props.detailKind === 'list') {
      lower = <ListDetail navigator={this.props.navigator} /> 
    }

    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} />

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
    paddingTop: 22,
    flex: 1,
    backgroundColor: base.lightSeafoam,
  },
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
  buttonWrapper: {
    position: 'absolute',
    bottom: 22,
    right: 22,
  },
}));
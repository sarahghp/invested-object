import React, { Component } from 'react';

import { 
  SegmentedControlIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';

// import TopNav from './TopNav.js';
import MemoryList from './Moments_List';
import ConxList   from './Conx_List'; 

export default class Lists extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentListIdx: 0,
      lists: [<MemoryList navigator={this.props.navigator} />, <ConxList navigator={this.props.navigator} />],
      values: ['Concordances', 'All Moments'],
    }
  }

  _back() {
    this.props.navigator.pop();
  }

  _onValueChange(value) {
    this.setState({
      currentListIdx: +!this.state.currentListIdx
    });
  }

  render(){
    // let list = <MemoryList navigator={this.props.navigator} />;
    // let list = this.state.currentList;

    console.log('in render');

    return (
      <View style={styles.container}>

        <View style={styles.navContainer}>
          <View>
            <Text style={styles.navText} onPress={this._back.bind(this)} > 
              « Back 
            </Text>  
          </View>
          <View style={styles.navControl}>
            <SegmentedControlIOS 
              tintColor={base.textSeafoam}
              values={this.state.values} 
              selectedIndex={1}
              onValueChange={this._onValueChange.bind(this)} />
          </View>
          {/* This is a super hacky way to get the spacing how I want it in the flexbox. It is a terrible idea. */}
          <View>
            <Text style={styles.navText}> 
                &nbsp;&nbsp;&nbsp;&nbsp;
            </Text>  
          </View>
        </View> 

        {this.state.lists[this.state.currentListIdx]}

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
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 9,
    borderBottomColor: base.textSeafoam,
    borderBottomWidth: 1,
  },
  navText: {
    // fontFamily: base.bodyFontFamily,
    color: base.textSeafoam,
    fontSize: 16,
    paddingLeft: 18,
    paddingBottom: 11,
  },
  navControl: {
    width: 220,
    paddingBottom: 11,
  },
}));
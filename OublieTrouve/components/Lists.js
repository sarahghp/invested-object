import React, { Component } from 'react';

import { 
  StyleSheet,
  View
} from 'react-native';

import shorthand   from 'react-native-styles-shorthand';
import { base }    from './helpers/base_styles';
import events      from './Events';

// Components
import Nav        from './TopNav';
import MemoryList from './Moments_List';
import ConxList   from './Conx_List';
import Button     from './Record_Now_Button'; 

export default class Lists extends Component {

  static defaultProps = {
    ...Component.defaultProps,
    values: ['Concordances', 'All Moments'],
  }

  constructor(props) {
    super(props);

    this.state = {
      currentListIdx: 0,
    };

  }

  componentWillMount() {
    this._onListChange = this._onListChange.bind(this);
    events.addListener('listNavChanged', this._onListChange);
  }

  componentWillUnmount() {
    events.addListener('listNavChanged', this._onListChange);
  }

  _onListChange(args) {
    this.setState({
      currentListIdx: args.nextIdx,
    });
  }

  render(){
    
    let lists = [<ConxList navigator={this.props.navigator} />, <MemoryList navigator={this.props.navigator} filter={null} />];

    return (
      <View style={styles.container}>
        <Nav kind='list' lists={lists} values={this.props.values} navigator={this.props.navigator}/>
        {lists[this.state.currentListIdx]}
        <Button navigator={this.props.navigator} />
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
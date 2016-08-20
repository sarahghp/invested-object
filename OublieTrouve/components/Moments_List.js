import React, { Component } from 'react';

import { 
  ListView,
  PixelRatio, 
  StyleSheet,
  TouchableHighlight,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import { base, groups } from './base_styles';
import SimpleStore from 'react-native-simple-store';

import DetailView from './Detail.js';

// Data
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

// Component
export default class MemoryList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([''])
    }
  }


  componentWillMount() {
    SimpleStore.get('all_moments')
    .then((data) => {
      let titles = _.map(data, 'title');
      this.setState({dataSource: ds.cloneWithRows(titles)});
    })
    .catch(error => {
      console.error(error.message);
    });
  }


  _back() {
    this.props.navigator.pop();
  }

  _toDetail(data) {
    console.log("You tapped the link!");
    
    this.props.navigator.push({
      name: 'Detail',
      component: DetailView,
      passProps: {
        navigator: this.props.navigator.pop,
        title: data, 
      }
    })
  }

  renderRow(rowData) {
    return (
        <TouchableHighlight 
          style={styles.row} 
          underlayColor={base.lightSeafoam}
          onPress={this._toDetail.bind(this, rowData)}>
            
            <View style={styles.textWapper}>
              <Text style={styles.text}>
                {rowData}
              </Text>

              <Text style={styles.text}>
                »
              </Text>
            </View>
            
          </TouchableHighlight>

    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text, {paddingLeft: 18}} onPress={this._back.bind(this)}> 
          « Back 
        </Text>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          initialListSize={13}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    paddingTop: 44,
    flex: 1,
  },
  text: groups.bodyFontGroup,
  textWapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
      padding: '18',
      height: 44,
      borderBottomWidth: 1,
      borderBottomColor: base.lightSeafoam,
  },
  list: {
    marginTop: 18,
  }
}));
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

// Components
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


  _toDetail(data) {
    console.log("You tapped the link!");
    
    this.props.navigator.push({
      name: 'Detail',
      component: DetailView,
      passProps: {
        navigator: this.props.navigator.pop,
        title: data,
        detailKind: 'text',
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
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
    );
  }
}

const styles = StyleSheet.create(shorthand({
  text: groups.bodyFontGroup,
  textWapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: base.lightSeafoam,
  },
  list: {
    marginTop: 18,
    flex: 4,
  }
}));
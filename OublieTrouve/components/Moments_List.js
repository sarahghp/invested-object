import React, { Component } from 'react';

import { 
  ListView,
  PixelRatio, 
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';
import SimpleStore from 'react-native-simple-store';

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


  back() {
    this.props.navigator.pop();
  }

  renderRow(rowData) {
    return (
        <View>
          <View style={styles.row}>
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
    );
  }

  render() {
    return (
      <View style={{paddingTop: 22}}>
        <Text style={styles.text} onPress={this.back.bind(this)}> « Back </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  text: {
    padding: '6 6 6 18',
    fontSize: 14,
    fontFamily: 'Input Mono',
    fontWeight: 'normal',
  }
}));
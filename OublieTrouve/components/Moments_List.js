import React, { Component } from 'react';

import { 
  ListView,
  PixelRatio, 
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

export default class MemoryList extends Component {

  // Hardcoded data for now
  constructor(props) {

    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        'Mon, Apr 10, 10 a.m.', '********', 'Fri, Apr 7, 11:54 p.m.', 'Kate’s Place', 'Thu, Dec 20, 2015, 2:10 p.m.'
      ])
    };
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
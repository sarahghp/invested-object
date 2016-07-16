import React, { Component } from 'react';

import { 
  ListView, 
  Text, 
  View
} from 'react-native';

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

  render() {
    return (
      <View style={{paddingTop: 22}}>
        <Text onPress={this.back.bind(this)}> « Back {this.props.test} </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}
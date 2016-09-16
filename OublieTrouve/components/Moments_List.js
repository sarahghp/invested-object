import React, { Component } from 'react';

import { 
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text, 
  View
} from 'react-native';

import shorthand        from 'react-native-styles-shorthand';
import { base, groups } from './helpers/base_styles';
import SimpleStore      from 'react-native-simple-store';
import events           from './Events';
import update           from 'react-addons-update';

// Components
import DetailView from './Detail.js';

// Data
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

// Component
export default class MemoryList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(['']),
      idMap: {},
    }
  }


  componentWillMount() {
    this._getAndSetData.call(this);
    this._getAndSetData = this._getAndSetData.bind(this);
    events.addListener('refreshData', this._getAndSetData);
  }

  componentWillUnmount() {
    events.removeListener('refreshData', this._getAndSetData);
  }

  _getAndSetData(){

    if (this.props.filter !== null) { 
      // TBD: Update conx when moments update ... take care of when implementing more than
      // dummy conx
      SimpleStore.get('all_conx')
      .then((data) => {
        let found = _.find(data,['modifier', this.props.filter]);
        let titles = _.map(found.members, 'title');
        this.setState({dataSource: ds.cloneWithRows(titles)});

        _.each(data, (datum) => {
          this._createMap.call(this, datum.members);
        });
        
      })
      .catch(error => {
        console.error(error.message);
      });
    } else {
      SimpleStore.get('all_moments')
      .then((data) => {
        let titles = _.map(data, 'title');
        this._createMap.call(this, data);
        this.setState({dataSource: ds.cloneWithRows(titles)});
      })
      .catch(error => {
        console.error(error.message);
      }); 
    }
  }

  _createMap(data) {
    let tempMap = {};
    
    _.each(data, (d) => {
      tempMap[d.title] = d.id;
    });

    let newMap = update(this.state.idMap, {$merge: tempMap });
    this.setState({idMap: newMap});
  }

  _toDetail(data) {
    
    this.props.navigator.push({
      name: 'Detail',
      component: DetailView,
      passProps: {
        navigator: this.props.navigator,
        title: data,
        id: this.state.idMap[data],
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
  text: groups.bodyFontGroupUnpadded,
  textWapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    height: base.rowSpacing(2),
    borderBottomWidth: 1,
    borderBottomColor: base.lightSeafoam,
    justifyContent: 'space-around',
    padding: base.padding(1),
  },
  list: {
    flex: 4,
    backgroundColor: '#fff',
  }
}));
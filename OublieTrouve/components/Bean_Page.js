import React, { Component } from 'react';

import Native, { 
  StyleSheet,
  Text,
  TouchableHighlight, 
  View
} from 'react-native';

import shorthand  from 'react-native-styles-shorthand';
import { base }   from './helpers/base_styles';

// Components
import TopNav     from './TopNav';


export default class BeanPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      batteryLevel: 'unknown',
    }
  }

  _back() {
    this.props.navigator.pop();
  }

  _initBean(){
    Native.NativeModules.Bean.initBean()
  }

  _disconnectBean(){
    Native.NativeModules.Bean.disconnectFromBean()
  }

  componentDidMount() {
    Native.NativeAppEventEmitter.addListener(
        'BatteryLevel',
        (level) => {
          this.setState({batteryLevel: level})
        }
    );
    Native.NativeModules.Bean.checkBattery(); 
  }

  render() {

    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} sectionTitle='Bean Infos' edit={null} />
        <Text>Battery: {this.state.batteryLevel}</Text>
        <TouchableHighlight onPress={this._initBean.bind(this)}><Text>Reconnect</Text></TouchableHighlight>
        <TouchableHighlight onPress={this._disconnectBean.bind(this)}><Text>Disconnect</Text></TouchableHighlight>

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
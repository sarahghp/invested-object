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
      batteryLevel: 0,
      beanConnected: false,
    }
  }

  _back() {
    this.props.navigator.pop();
  }

  _initBean(){
    Native.NativeModules.Bean.initBean();
  }

  _disconnectBean(){
    Native.NativeModules.Bean.disconnectFromBean();
  }

  _buzzBean(){
    Native.NativeModules.Bean.buzzBean();
  }

  componentDidMount() {
    Native.NativeAppEventEmitter.addListener(
        'BeanStatus',
        ({voltage, status}) => {
          this.setState({batteryLevel: voltage, beanConnected: status})
        }
    );
    Native.NativeModules.Bean.checkBeanStatus(); 
  }

  render() {

    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} sectionTitle='Bean Infos' edit={null} />
        <Text>Battery: {this.state.batteryLevel}</Text>
        <Text>Connected? {this.state.beanConnected}</Text>
        <TouchableHighlight onPress={this._initBean.bind(this)}><Text>Reconnect</Text></TouchableHighlight>
        <TouchableHighlight onPress={this._disconnectBean.bind(this)}><Text>Disconnect</Text></TouchableHighlight>
        <TouchableHighlight onPress={this._buzzBean.bind(this)}><Text>Buzz!</Text></TouchableHighlight>

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
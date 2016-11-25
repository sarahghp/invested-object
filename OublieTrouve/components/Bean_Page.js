import React, { Component } from 'react';

import Native, { 
  StyleSheet,
  Text,
  TouchableHighlight, 
  TouchableOpacity, 
  View
} from 'react-native';

import shorthand  from 'react-native-styles-shorthand';
import { base, groups }   from './helpers/base_styles';

// Components
import TopNav     from './TopNav';

function Button(text, click) {
  return (
    <TouchableOpacity onPress={click.bind(this)}>
      <View style={styles.button}>
        <Text style={[groups.bodyFontGroup, styles.buttonText]}>{text}</Text>
      </View>
    </TouchableOpacity>

  )
}

var sub;

export default class BeanPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      batteryLevel: 0,
      beanConnected: 'disconnected',
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
    sub = Native.NativeAppEventEmitter.addListener(
            'BeanStatus',
            ({voltage, status}) => {
              this.setState({batteryLevel: voltage, beanConnected: status})
            }
        );
    Native.NativeModules.Bean.checkBeanStatus(); 
  }

  componentWillUnmount() {
    sub.remove();
  }

  render() {
    let connectedButtons =  
      <View>
          {Button('Disconnect', this._disconnectBean)}
          {Button('Buzz!', this._buzzBean)}
      </View>,
        disconnectedButtons = 
      <View>
        {Button('Reconnect', this._initBean)}                              
      </View>;
    

    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} sectionTitle='Bean Status' edit={null} />
        <View style={styles.main}>
          <Text style={[groups.bodyFontGroup, {textAlign: 'center'}]}>
            <Text>Talisbean is</Text>
            <Text style={[groups.bodyFontGroup, {fontSize: 30, lineHeight: 60}]}>{'\n' + this.state.beanConnected.toUpperCase()}</Text>
          </Text>
          {this.state.beanConnected === 'connected' ? connectedButtons : disconnectedButtons}          
        </View>
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
  main: {
    backgroundColor: '#fff',
    flex: 1,
    padding: '20 0 40 0',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: base.textSeafoam,
    margin: '5 10',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  }
}));
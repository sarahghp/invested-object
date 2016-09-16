import React, { Component } from 'react';
import  Native, {
  StyleSheet,
  View
} from 'react-native';
import shorthand from 'react-native-styles-shorthand';
import { base } from './helpers/base_styles';

// Datas
import ts             from './helpers/test_and_save';
import { seed, conx } from './helpers/data_seed';
import _              from 'lodash';

_.each([{name: 'all_moments', data: seed}, {name: 'all_conx', data: conx}], 
  (e) => { ts(e.name, e.data) });


// Components
import Title      from './Title_Screen';
import ButtonBar  from './Button_Bar';

const BLE_ON = true;

export default class FrontPage extends Component {

  _getPosition(){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Position:', position);
    });
  }

  componentDidMount(){
    let _getPosition = this._getPosition.bind(this);

    if (BLE_ON) {
      Native.NativeModules.Bean.initBean();
      console.dir(Native.NativeModules.Bean);
    }

    Native.NativeAppEventEmitter.addListener(
        'ButtonPushed',
        () => {
            console.log('EVENT');
            console.log('Button in React!');
            _getPosition();
        }
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <Title />
        <ButtonBar navigator={this.props.navigator} />
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: base.primarySeafoam,
  }
}));
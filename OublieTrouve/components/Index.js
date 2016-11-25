import React, { Component } from 'react';
import  Native, {
  StyleSheet,
  View
} from 'react-native';
import shorthand from 'react-native-styles-shorthand';
import { base } from './helpers/base_styles';

// Datas
import { ts }         from './helpers/test_and_save';
import _              from 'lodash';
import SimpleStore    from 'react-native-simple-store'; // for background testing, otherwise goes through ts

import { 
      seed, 
      conx,
      compConx } from './helpers/data_seed';

import { 
  _addToStore, 
  _checkForConx 
} from './helpers/data_actions';

_.each([{key: 'all_moments', dataBlob: seed}, {key: 'all_conx', dataBlob: conx}, {key: 'comp_conx', dataBlob: compConx}], 
  (e) => { ts(e) });


// Components
import Title           from './Title_Screen';
import ButtonBar       from './Button_Bar';
import BackgroundFetch from 'react-native-background-fetch';


const BLE_ON = true;

export default class FrontPage extends Component {

  _getPosition(){
    let _boundAdd = _addToStore.bind(this);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Position:', position);
      _boundAdd(position);
    });
  }

  componentDidMount(){
    let _getPosition = this._getPosition.bind(this);

    if (BLE_ON) {
      Native.NativeModules.Bean.initBean();
    }

    Native.NativeAppEventEmitter.addListener(
        'ButtonPushed',
        () => {
            console.log('EVENT');
            console.log('Button in React!');
            _getPosition();
        }
    );
    

    // Testing background actions
    // BackgroundFetch.configure({
    //   stopOnTerminate: false
    // }, function() {
    //   SimpleStore.save('background fetch success', {
    //     success: new Date(),
    //   });
    //   BackgroundFetch.finish();
    // }, function(error) {
    //   SimpleStore.save('background fetch fail', {
    //     err: new Date(),
    //     msg: error,
    //   });
    // });

    // this sets up the polling for conx; the third argument determines how likely 
    // the conx check is to happen each iteration with 0 all the time and 1.0 as never
    setInterval(_checkForConx.bind(this, this.props.navigator, 0.4), 600000);
    // setInterval(_checkForConx.bind(this, this.props.navigator, 0), 10000);
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
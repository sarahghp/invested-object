import React, { Component, PropTypes } from 'react';
import Native, {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import shorthand from 'react-native-styles-shorthand';

// Components
import Button      from './Button';
import ListPage    from './Lists';
import BeanPage    from './Bean_Page';
import Form        from './Record_Now_Form';

export default class ButtonBar extends Component {

  _toForm(){
    this.props.navigator.push({
      name: 'Moments Form',
      component: Form,
      passProps: {
        navigator: this.props.navigator
      }
    })
  }

  _toList() {
    this.props.navigator.push({
      name: 'List Page',
      component: ListPage,
      passProps: {
        navigator: this.props.navigator
      }
    })
  }

  _toBean(){
    this.props.navigator.push({
      name: 'Bean Page',
      component: BeanPage,
      passProps: {
        navigator: this.props.navigator
      }
    })
  }

  sendBuzz(){
    Native.NativeModules.Bean.buzzBean();
  }

  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View style={styles.buttonContainer} ref={component => this._root = component} >
        <TouchableOpacity onPress={this._toBean.bind(this)}>
          <Button icon='moment' />
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toForm.bind(this)}>
          <Button size='large' icon='report' />
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toList.bind(this)}>
          <Button icon='conx'/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(shorthand({
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));
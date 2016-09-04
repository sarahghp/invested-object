/**
 * OublieTrouve React Native App, by @sarahgp
 * https://github.com/sarahgp/invested-object
 * based on:
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Tools
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import shorthand from 'react-native-styles-shorthand';

// Components
import Index from './components/Index';


class OublieTrouve extends Component {
  render() {
    return ( 
      <Navigator
        initialRoute={{name: 'Index', component: Index}}
        configureScene={(route) => {
          if (route.name === 'Moments Form') {
            return Navigator.SceneConfigs.FloatFromBottom;
          } else {
            return Navigator.SceneConfigs.FloatFromRight;
          }
          
        }}
        
        renderScene={(route, navigator) => {

          if (route.component) {
            return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route });
          }
          
        }}
      />    
    );
  }
}

AppRegistry.registerComponent('OublieTrouve', () => OublieTrouve);

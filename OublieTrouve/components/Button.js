import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import shorthand  from 'react-native-styles-shorthand';
import { base }   from './base_styles';

import Lighthouse from './icons/lighthouse';
import Signpost   from './icons/signpost';
import Gem        from './icons/gem';

const svgStyles = {
  standard: {
    stroke: base.darkSeafoam,
    strWidth: '0.8',
    size: '36' // svg expects strings
  },

  large: {
    stroke: base.darkSeafoam,
    strWidth: '0.8',
    size: '48' // svg expects strings
  }
};

const icons = {
  'report': <Lighthouse style={svgStyles.large} />,
  'moment': <Gem style={svgStyles.standard} />,
  'conx'  : <Signpost style={svgStyles.standard} />
};

export default class Button extends Component {
  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  
  render() {
    let styleSize = this.props.size === 'large' ? styles.large : styles.standard,
        bkg = this.props.bkg ? this.props.bkg : '#fff',
        opc = this.props.opc ? this.props.opc : 1; 
    
    return (
      <View style={[styles.button, styleSize, {backgroundColor: bkg, opacity: opc}]} 
            ref={component => this._root = component} >
        {icons[this.props.icon]}
      </View>
    )
  }
}

const styles = StyleSheet.create(shorthand({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    shadowColor: base.primaryShadow,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  large: {
    height: 80,
    borderRadius: 40,
    width: 80,
  },
  standard: {
    height: 60,
    borderRadius: 30,
    width: 60,
  }
}));
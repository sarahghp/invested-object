import React, { Component } from 'react';

import Svg,{
    G,
    Path
} from 'react-native-svg';

export default class Signpost extends Component {
  render() {
    return (
      <Svg width={this.props.style.size} height={this.props.style.size} viewbox="0 0 24 24">
        <G stroke={this.props.style.stroke} strokeWidth={this.props.style.strWidth} stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
          <Path d="M11.5 16.5v7M11.5.5v2M11.5 8.5v2"/>
          <Path d="M20.5 8.5h-17v-6h17l3 3zM3.5 16.5h17v-6h-17l-3 3z"/>        
        </G>
      </Svg>
    )
  }
}
import React, { Component } from 'react';

import Svg,{
    G,
    Path
} from 'react-native-svg';


export default class Gem extends Component {
  render() {
    return (
      <Svg width={this.props.style.size} height={this.props.style.size} viewbox="0 0 24 24">
        <G stroke={this.props.style.stroke} strokeWidth={this.props.style.strWidth} stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
          <Path d="M8.037 12.5l3.984-12 3.984 12zM16.005 12.5l5.037-1.5-9.021-10.5M8.037 12.5l-5.037-1.5 9.021-10.5"/>
          <Path d="M16.005 12.5l-3.984 11-3.984-11zM8.037 12.5l-5.037-1.5 9.021 12.5M16.005 12.5l5.037-1.5-9.021 12.5"/>
        </G>
      </Svg>
    )
  }
}
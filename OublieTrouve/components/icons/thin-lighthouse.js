import React, { Component } from 'react';

import Svg,{
    G,
    Path
} from 'react-native-svg';

export default class Lighthouse extends Component {
  render() {
    return (
      <Svg width={this.props.style.size} height={this.props.style.size} viewbox="0 0 24 24">
        <G stroke={this.props.style.stroke} strokeWidth='.5' stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none">
          <Path d="M8.5 10.5h7v13h-7zM9.5 5.5h5v5h-5zM11.5 3.038v-2.538M7.5 10.5h9M8.5 5.5h7M5.5 23.5h13"/>
          <Path d="M10.5 20.5h3v3h-3zM9.5 5.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5M.5 4.5l6 2M.5 10.5l6-2M23.5 4.5l-6 2M23.5 10.5l-6-2M4.5 7.5h-2M19.5 7.5h2"/>
        </G>
      </Svg>
    )
  }
}
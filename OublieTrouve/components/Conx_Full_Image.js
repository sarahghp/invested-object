import React, { Component } from 'react';

import { 
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import shorthand  from 'react-native-styles-shorthand';

// Components
import ListDetail from './Conx_Filtered_List';

export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  _toList() {
    this.props.navigator.push({
      name: 'Filtered List',
      component: ListDetail,
      passProps: {
        navigator: this.props.navigator,
        filter: this.props.filter ? this.props.filter : null,
        ...this.props
      }
    })
  }

  imageSwitch(scale, title){
    if (scale == 2.5){
      switch(title) {
          case 'air.png': 
            return require('./img/conx/scale-2.5/air.png');
          case 'average.png': 
            return require('./img/conx/scale-2.5/average.png');
          case 'brrr.png': 
            return require('./img/conx/scale-2.5/brrr.png');
          case 'clear.png': 
            return require('./img/conx/scale-2.5/clear.png');
          case 'clouds.png': 
            return require('./img/conx/scale-2.5/clouds.png');
          case 'day.png': 
            return require('./img/conx/scale-2.5/day.png');
          case 'desert.png': 
            return require('./img/conx/scale-2.5/desert.png');
          case 'early.png': 
            return require('./img/conx/scale-2.5/early.png');
          case 'evening.png': 
            return require('./img/conx/scale-2.5/evening.png');
          case 'hill.png': 
            return require('./img/conx/scale-2.5/hill.png');
          case 'home.png': 
            return require('./img/conx/scale-2.5/home.png');
          case 'kinda-far.png': 
            return require('./img/conx/scale-2.5/kinda-far.png');
          case 'local.png': 
            return require('./img/conx/scale-2.5/local.png');
          case 'meh.png': 
            return require('./img/conx/scale-2.5/meh.png');
          case 'morning.png': 
            return require('./img/conx/scale-2.5/morning.png');
          case 'mountain.png': 
            return require('./img/conx/scale-2.5/mountain.png');
          case 'neighborhood.png': 
            return require('./img/conx/scale-2.5/neighborhood.png');
          case 'night.png': 
            return require('./img/conx/scale-2.5/night.png');
          case 'ooooh.png': 
            return require('./img/conx/scale-2.5/ooooh.png');
          case 'overnight.png': 
            return require('./img/conx/scale-2.5/overnight.png');
          case 'rain.png': 
            return require('./img/conx/scale-2.5/rain.png');
          case 'sea-level.png': 
            return require('./img/conx/scale-2.5/sea-level.png');
          case 'so-cal.png': 
            return require('./img/conx/scale-2.5/so-cal.png');
          case 'swamp.png': 
            return require('./img/conx/scale-2.5/swamp.png');
          case 'traveling.png': 
            return require('./img/conx/scale-2.5/traveling.png');
          case 'ugh-no.png': 
            return require('./img/conx/scale-2.5/ugh-no.png');
          case 'underground.png': 
            return require('./img/conx/scale-2.5/underground.png');
          default:
            console.log('Image without title called for:', title);
        }
    } else if (scale == 3.5){
      switch(title) {
          case 'air.png': 
            return require('./img/conx/scale-3.5/air.png');
          case 'average.png': 
            return require('./img/conx/scale-3.5/average.png');
          case 'brrr.png': 
            return require('./img/conx/scale-3.5/brrr.png');
          case 'clear.png': 
            return require('./img/conx/scale-3.5/clear.png');
          case 'clouds.png': 
            return require('./img/conx/scale-3.5/clouds.png');
          case 'day.png': 
            return require('./img/conx/scale-3.5/day.png');
          case 'desert.png': 
            return require('./img/conx/scale-3.5/desert.png');
          case 'early.png': 
            return require('./img/conx/scale-3.5/early.png');
          case 'evening.png': 
            return require('./img/conx/scale-3.5/evening.png');
          case 'hill.png': 
            return require('./img/conx/scale-3.5/hill.png');
          case 'home.png': 
            return require('./img/conx/scale-3.5/home.png');
          case 'kinda-far.png': 
            return require('./img/conx/scale-3.5/kinda-far.png');
          case 'local.png': 
            return require('./img/conx/scale-3.5/local.png');
          case 'meh.png': 
            return require('./img/conx/scale-3.5/meh.png');
          case 'morning.png': 
            return require('./img/conx/scale-3.5/morning.png');
          case 'mountain.png': 
            return require('./img/conx/scale-3.5/mountain.png');
          case 'neighborhood.png': 
            return require('./img/conx/scale-3.5/neighborhood.png');
          case 'night.png': 
            return require('./img/conx/scale-3.5/night.png');
          case 'ooooh.png': 
            return require('./img/conx/scale-3.5/ooooh.png');
          case 'overnight.png': 
            return require('./img/conx/scale-3.5/overnight.png');
          case 'rain.png': 
            return require('./img/conx/scale-3.5/rain.png');
          case 'sea-level.png': 
            return require('./img/conx/scale-3.5/sea-level.png');
          case 'so-cal.png': 
            return require('./img/conx/scale-3.5/so-cal.png');
          case 'swamp.png': 
            return require('./img/conx/scale-3.5/swamp.png');
          case 'traveling.png': 
            return require('./img/conx/scale-3.5/traveling.png');
          case 'ugh-no.png': 
            return require('./img/conx/scale-3.5/ugh-no.png');
          case 'underground.png': 
            return require('./img/conx/scale-3.5/underground.png');
          default:
            console.log('Image without title called for:', title);
      }
    } else if (scale == 5) {
      switch(title) {
        case 'air.png': 
          return require('./img/conx/scale-5/air.png');
        case 'average.png': 
          return require('./img/conx/scale-5/average.png');
        case 'brrr.png': 
          return require('./img/conx/scale-5/brrr.png');
        case 'clear.png': 
          return require('./img/conx/scale-5/clear.png');
        case 'clouds.png': 
          return require('./img/conx/scale-5/clouds.png');
        case 'day.png': 
          return require('./img/conx/scale-5/day.png');
        case 'desert.png': 
          return require('./img/conx/scale-5/desert.png');
        case 'early.png': 
          return require('./img/conx/scale-5/early.png');
        case 'evening.png': 
          return require('./img/conx/scale-5/evening.png');
        case 'hill.png': 
          return require('./img/conx/scale-5/hill.png');
        case 'home.png': 
          return require('./img/conx/scale-5/home.png');
        case 'kinda-far.png': 
          return require('./img/conx/scale-5/kinda-far.png');
        case 'local.png': 
          return require('./img/conx/scale-5/local.png');
        case 'meh.png': 
          return require('./img/conx/scale-5/meh.png');
        case 'morning.png': 
          return require('./img/conx/scale-5/morning.png');
        case 'mountain.png': 
          return require('./img/conx/scale-5/mountain.png');
        case 'neighborhood.png': 
          return require('./img/conx/scale-5/neighborhood.png');
        case 'night.png': 
          return require('./img/conx/scale-5/night.png');
        case 'ooooh.png': 
          return require('./img/conx/scale-5/ooooh.png');
        case 'overnight.png': 
          return require('./img/conx/scale-5/overnight.png');
        case 'rain.png': 
          return require('./img/conx/scale-5/rain.png');
        case 'sea-level.png': 
          return require('./img/conx/scale-5/sea-level.png');
        case 'so-cal.png': 
          return require('./img/conx/scale-5/so-cal.png');
        case 'swamp.png': 
          return require('./img/conx/scale-5/swamp.png');
        case 'traveling.png': 
          return require('./img/conx/scale-5/traveling.png');
        case 'ugh-no.png': 
          return require('./img/conx/scale-5/ugh-no.png');
        case 'underground.png': 
          return require('./img/conx/scale-5/underground.png');
        default:
          console.log('Image without title called for:', title);
      }
    } else {
      console.log('Image called with unknown scale.')
    }
  }

  getListScale(memberLength){
    if (memberLength > 5){
      return 5;
    } else if (memberLength > 3) {
      return 3.5;
    } else {
      return 2.5;
    }
  }

  render() {

    let rotations    = ['10deg', '14deg', '-14deg'],
        translations = [110, 48, -10],
        listScale = this.getListScale(this.props.memberLength);

    let images = _.map(this.props.images, (image, idx) => {
      let name = this.imageSwitch(listScale, image);
      return (
        <Image source={name} key={idx}
          style={[styles.image, 
                  {
                    transform: [{rotate: rotations[idx]}, {translateX: translations[idx]}, {translateY: ++idx * -2} ]
                  } ]} />
      )
    });
    return (
      <TouchableOpacity onPress={this._toList.bind(this)}>
        <View style={styles.imageWrapper}>
          {images}
        </View>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  imageWrapper: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    height: 700
  }, 
  image: { position: 'absolute', height: 700, transform: [{scale: 1}] }
}));
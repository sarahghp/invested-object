import React, { Component } from 'react';

import { 
  Image,
  ListView, 
  StyleSheet,
  TouchableHighlight,
  Text, 
  View
} from 'react-native';

import shorthand        from 'react-native-styles-shorthand';
import { base, groups } from './helpers/base_styles';

// Components
export default class Card extends Component {

  constructor(props){
    super(props);
  }

  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  // React Native neither supports svg nor lets us dynamically generate image paths
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
    }
  }


  render(){

    let images = _.map(this.props.card.images, (image) => {
      let name = this.imageSwitch(2.5, image);
      return (
        <Image style={[styles.image, { position: 'absolute', width: 300, height: 100, left: Math.random() * 200 }]} source={name} />
      )
    });

    return (
      <View style={styles.container} ref={component => this._root = component}>
        <View style={[styles.imageWrapper, {width: 300, height: 100}]}>
          {/*<Image style={[styles.image, {height: 100}]} source={require('./img/fake-graph.png')} />*/}
          {images}
        </View>
        <View style={styles.textContainer}>
          {/* Or is it too much mystification? */}
          {/* <Text style={styles.text}>{this.props.card.modifier}</Text>*/}
          <Text style={[styles.text, styles.small]}>{this.props.card.members.length} entries</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create(shorthand({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    margin: `${base.padding(0.5)}`,
    shadowColor: base.primaryShadow,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  textContainer: {
    backgroundColor: base.lightestSeafoam,
    padding: `${base.padding(1)}`,
  },
  text: groups.bodyFontGroupUnpadded,
  small: {
    fontSize: 12,
    fontStyle: 'italic',
    color: base.darkGray,
  },
  imageWrapper: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: base.primarySeafoam,
    borderBottomWidth: 1,
  },  
}));
import React, { Component } from 'react';

import { 
  Image,
  ScrollView,
  StyleSheet,
  Text, 
  View
} from 'react-native';

import shorthand        from 'react-native-styles-shorthand';
import { base, groups } from './helpers/base_styles';
import SimpleStore      from 'react-native-simple-store';
import events           from './Events';
import _                from 'lodash';


// Components
import BaseMoment   from './helpers/base_moment';
import PlainText    from './Moment_Text_Plain';
import EditText     from './Moment_Text_Edit';

export default class MomentText extends Component {

  constructor(props) {
    super(props);

    this.state = {
      details: new BaseMoment(),
      editable: false,
      titleHeight: 0,
      paraHeight: 0,
    }
  }

  componentWillMount() {
    this._getAndSetData.call(this);

    this._makeEditable  = this._makeEditable.bind(this);
    this._makePlain     = this._makePlain.bind(this);
    this._getAndSetData = this._getAndSetData.bind(this);

    events.addListener('makeDetailTextEditable', this._makeEditable);
    events.addListener('makeDetailTextEditableSaved', this._makePlain);
    events.addListener('refreshData', this._getAndSetData);
  }

  componentWillUnmount() {
   events.removeListener('makeDetailTextEditable', this._makeEditable);
   events.removeListener('makeDetailTextEditableSaved', this._makePlain);
   events.removeListener('refreshData', this._getAndSetData); 
  }

  _getAndSetData(){
    SimpleStore.get('all_moments')
    .then((data) => {
      let newDetails = _.find(data, { id: this.props.id });
      this.setState({ details: newDetails});
    })
    .catch(error => {
      console.error(error.message);
    });
  }

  _makeEditable(){
    this.setState({editable: true});
  }

  _makePlain(){
    this.setState({editable: false});
  }

  imageSwitch(title){
    switch(title) {
        case 'air.png': 
          return require('./img/moments/air.png');
        case 'average.png': 
          return require('./img/moments/average.png');
        case 'brrr.png': 
          return require('./img/moments/brrr.png');
        case 'clear.png': 
          return require('./img/moments/clear.png');
        case 'clouds.png': 
          return require('./img/moments/clouds.png');
        case 'day.png': 
          return require('./img/moments/day.png');
        case 'desert.png': 
          return require('./img/moments/desert.png');
        case 'early.png': 
          return require('./img/moments/early.png');
        case 'evening.png': 
          return require('./img/moments/evening.png');
        case 'hill.png': 
          return require('./img/moments/hill.png');
        case 'home.png': 
          return require('./img/moments/home.png');
        case 'kinda-far.png': 
          return require('./img/moments/kinda-far.png');
        case 'local.png': 
          return require('./img/moments/local.png');
        case 'meh.png': 
          return require('./img/moments/meh.png');
        case 'morning.png': 
          return require('./img/moments/morning.png');
        case 'mountain.png': 
          return require('./img/moments/mountain.png');
        case 'neighborhood.png': 
          return require('./img/moments/neighborhood.png');
        case 'night.png': 
          return require('./img/moments/night.png');
        case 'ooooh.png': 
          return require('./img/moments/ooooh.png');
        case 'overnight.png': 
          return require('./img/moments/overnight.png');
        case 'rain.png': 
          return require('./img/moments/rain.png');
        case 'sea-level.png': 
          return require('./img/moments/sea-level.png');
        case 'so-cal.png': 
          return require('./img/moments/so-cal.png');
        case 'swamp.png': 
          return require('./img/moments/swamp.png');
        case 'traveling.png': 
          return require('./img/moments/traveling.png');
        case 'ugh-no.png': 
          return require('./img/moments/ugh-no.png');
        case 'underground.png': 
          return require('./img/moments/underground.png');
        default:
          console.log('Image without title called for:', title);
    }
  }


  render() {
    
    let date      = new Date(this.state.details.posted)
        editOn    = this.state.editable,
        plain     = <PlainText details={this.state.details} date={date.toString()} />,
        edit      = <EditText details={this.state.details} date={date.toString()} />;

    let images = _.map(this.state.details.conx, (elem, idx) => {
      let name = this.imageSwitch(elem.imageTitle);

      return (
        <Image source={name} key={idx}
          style={[styles.image, 
                  {
                    transform: [{translateX: 80 + (idx + 1)}, {translateY: (idx + 1) * -140}, {rotate: '-14deg'} ]
                  } ]} />
      )
    });

    return (
      <ScrollView style={styles.scrollContainer}>
        { !editOn &&
          <View style={[styles.imageWrapper, {width: 320, height: 187}]}>
            {images}
          </View>
        }
        <View style={styles.textWrapper}>
          {editOn ? edit : plain}
        </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create(shorthand({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: { 
    position: 'absolute', 
    width: 1000, 
    height: 1000,
  },
  textWrapper: {

  }  
}));
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
import PlainText    from './Moment_Text_Plain';
import EditText     from './Moment_Text_Edit';

export default class MomentText extends Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {
        title: '',
        description: '',
        elevation: 0,
        distance_from_home: 0,
        temp: 75,
        humidity: 22.5,
        posted: 0,
        id: 0, 
      },
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
          

  render() {
    
    let date = new Date(this.state.details.posted)
        editOn = this.state.editable,
        plain = <PlainText details={this.state.details} date={date.toString()} />,
        edit = <EditText details={this.state.details} date={date.toString()} />;

    return (
      <ScrollView style={styles.scrollContainer}>

        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require('./img/icon-buddies.png')} />
        </View>
        <View>
          {editOn ? edit : plain}
        </View>
        {/*<MomentText title={this.props.title} id={this.props.id}/>*/}

      </ScrollView>



    )
  }
}

const styles = StyleSheet.create(shorthand({
  scrollContainer: {
    paddingTop: base.rowSpacing(2),
    flex: 4,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#fff',
  },
}));
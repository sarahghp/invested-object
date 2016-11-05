import React, { Component } from 'react';

import {  
  StyleSheet, 
  View
} from 'react-native';

import shorthand  from 'react-native-styles-shorthand';
import { base }   from './helpers/base_styles';

// Components
import TopNav     from './TopNav';
import Button     from './Record_Now_Button';
import TextDetail from './Text_Detail';
import ListDetail from './Conx_Filtered_List';
import ConxImage  from './Conx_Full_Image';

export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  _back() {
    this.props.navigator.pop();
  }

  render() {

    let lower, section, edit;

    if (this.props.detailKind === 'text') {
      console.log('text props:', this.props);
      lower = <TextDetail title={this.props.title} id={this.props.id} />;
      section = 'Moment';
      edit = { eventName: 'makeDetailTextEditable' };
    } else if (this.props.detailKind === 'list') {
      lower = <ConxImage navigator={this.props.navigator } {...this.props}/>
      section = this.props.title;
    }

    return (
      <View style={styles.container}>
        <TopNav navigator={this.props.navigator} sectionTitle={section} edit={edit} />

        {lower}

        <Button navigator={this.props.navigator} />
      </View>

    )
  }

}

const styles = StyleSheet.create(shorthand({
  container: {
    paddingTop: base.rowSpacing(1),
    flex: 1,
    backgroundColor: base.lightSeafoam,
  }, 
}));
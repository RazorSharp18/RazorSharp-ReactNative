import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Location from './Location';
import Contacts from './Contacts';
import styles from './styles';
import globals from '../../globals';

export default class PersonalDetails extends React.Component {
  render(){
    return(
      <View style={styles.resturantProfilesContainerStyles} key="Details">
        <Location Details={this.props.Details} />
        <Contacts Contact={this.props.Details.contact} />
      </View>
    );
  }
}
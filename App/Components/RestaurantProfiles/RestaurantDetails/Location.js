import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import globals from '../../globals';
import styles from './styles';

export default class Location extends React.Component {
  render() {
    return(
      <View style={styles.resturantProfilesContainerStyles} key="Details">
        <Image style={globals.genericIconStyles} source={require('../../../Assets/pin.png')} />
        <Text style={globals.genericTextStyles}> {this.props.Details.address} </Text>
        <Text style={globals.genericTextStyles}> {this.props.Details.zipcode} </Text>
      </View>
    );
  }
}

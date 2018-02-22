import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import globals from '../../globals';
import styles from './styles';
export default class Contacts extends React.Component {
  render() {
    return(
      <View style={styles.resturantProfilesContainerStyles} key="Details">
        <Image style={globals.genericIconStyles} source={require('../../../Assets/call.png')} />
        <Text style={globals.genericTextStyles}> {this.props.Contact} </Text>
      </View>
    );
  }
}

import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import styles from '../../Styles';

export default class Location extends React.Component {
  render() {
    return(
      <View style={styles.genericContainer} key="Details">
        <Image style={styles.genericIconStyles} source={require('../../../Assets/pin.png')} />
        <Text style={styles.genericContainerTextStyles}> {this.props.Details.address} </Text>
        <Text style={styles.genericContainerTextStyles}> {this.props.Details.zipcode} </Text>
      </View>
    );
  }
}

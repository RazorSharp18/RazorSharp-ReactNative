import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import styles from '../../Styles';
export default class Contacts extends React.Component {
  render() {
    return(
      <View style={styles.genericContainer} key="Details">
        <Image style={styles.genericIconStyles} source={require('../../../Assets/call.png')} />
        <Text style={styles.genericContainerTextStyles}> {this.props.Contact} </Text>
      </View>
    );
  }
}

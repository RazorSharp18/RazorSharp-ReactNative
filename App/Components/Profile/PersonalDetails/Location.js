import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';

export default class Location extends React.Component {
  render() {
    return(
      <View style={styles.locationsContainer} key="Details">
        <Image style={styles.locationIcon} source={require('./pin.png')} />
        <Text style={styles.location}> {this.props.Details.address} </Text>
        <Text style={styles.location}> {this.props.Details.zipcode} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  location: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'auto',
  },
  locationsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'auto',
    margin: 30,
    backgroundColor: '#d2d4d8',
  },
  locationIcon: {
    width: 20,
    height: 25,
    resizeMode: Image.resizeMode.contain,
  }
})

import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Location from './Location';
import Contacts from './Contacts';

export default class PersonalDetails extends React.Component {
  render(){
    return(
      <View style={styles.detailsContainer} key="Details">
        <Location Details={this.props.Details} />
        <Contacts Contact={this.props.Details.contact} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'auto',
    margin: 20
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'auto',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'auto',
    margin: 30,
    backgroundColor: '#d2d4d8',
  },
})

import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';

export default class Contacts extends React.Component {
  render() {
    return(
      <View style={styles.contactsContainer} key="Details">
        <Image style={styles.contactsIcon} source={require('./call.png')} />
        <Text style={styles.contact}> {this.props.Contact} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'auto',
  },
  contactsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'auto',
    margin: 30,
    backgroundColor: '#d2d4d8',
  },
  contactsIcon: {
    width: 20,
    height: 25,
    resizeMode: Image.resizeMode.contain,
  }
})

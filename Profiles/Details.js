import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Comments from './Comments';
import PersonalDetails from './PersonalDetails';

class Details extends React.Component {
  render() {
    return(
      <ScrollView>
         
        <Text style={styles.header}> RazorSharp </Text>
        <Text style={styles.text}> {this.props.restaurantName} </Text>
        <Text style={styles.text}> Ratings: {this.props.Ratings} </Text>
        <Comments Comments={this.props.Comments} />
        <PersonalDetails Details={this.props.Details} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'center',
    marginTop:10,
    marginBottom:10
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20
  }
})
export default Details;

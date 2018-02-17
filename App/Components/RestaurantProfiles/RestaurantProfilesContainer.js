import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Comments from './Comments/CommentsContainer';
import RestaurantDetails from './RestaurantDetails/RestaurantDetailsContainer';
import styles from '../Styles';

class Details extends React.Component {
  render() {
    const restaurantDetails = this.props.restaurantDetails;
    return(
      <ScrollView>
        <Text style={styles.header}> RazorSharp </Text>
        <Text style={styles.genericContainerTextStyles}> {restaurantDetails.name} </Text>
        <Text style={styles.genericContainerTextStyles}> Ratings: {restaurantDetails.Last_Rated} </Text>
        {/* <Comments Comments={this.props.Comments} /> */}
        {/* <RestaurantDetails Details={this.props.Details} /> */}
      </ScrollView>
    )
  }
}

export default Details;

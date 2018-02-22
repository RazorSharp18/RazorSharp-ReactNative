import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Comments from './Comments/CommentsContainer';
import RestaurantDetails from './RestaurantDetails/RestaurantDetailsContainer';
import globals from '../globals';

class Details extends React.Component {
  render() {
    const restaurantDetails = this.props.restaurantDetails;
    // TODO: Remove these when comments and Details are ready.
    const comments = ["McChicken is the best", "Big Mac is not good"];
    return(
      <ScrollView>
        <Text style={globals.genericHeader}> RazorSharp </Text>
        <Text style={globals.genericTextStyles}> {restaurantDetails.name} </Text>
        <Text style={globals.genericTextStyles}> Ratings: {restaurantDetails.Last_Rated} </Text>
        <Comments Comments={comments} />
        {/* <RestaurantDetails Details={this.props.Details} /> */}
      </ScrollView>
    )
  }
}

export default Details;

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RestaurantProfilesContainer from './RestaurantProfileContainer';

export default class RestaurantProfile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          restaurantId : "",
        };
    }

  render() {
    const restaurantId = this.props.navigation.state.params.restaurantId;
    return (
      <View >
         <RestaurantProfilesContainer restaurantId={restaurantId} />
      </View>
    );
  }
}
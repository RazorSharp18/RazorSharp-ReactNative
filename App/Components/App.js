import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RestaurantProfilesContainer from '../Components/RestaurantProfiles/RestaurantProfilesContainer';
import globals from './globals';

export default class App extends Component {
  constructor(props){
    super(props);
    this.name = props.name;
    this.state = { restaurantData: [] };
}

  render() {
    const restaurantDetails = this.props.navigation.state.params.restaurantData;
    return (
      <View style={globals.appContainer}>
        <RestaurantProfilesContainer restaurantDetails={restaurantDetails} />
      </View>
    );
  }
}
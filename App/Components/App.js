import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RestaurantProfilesContainer from './RestaurantProfile/RestaurantProfileContainer';
import globals from './globals';

export default class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        restaurantId : "",
      };
  }

  render() {
    const restaurantId = this.props.navigation.state.params.restaurantId;
    return (
      <View>
         <RestaurantProfilesContainer restaurantId={restaurantId} />
      </View>
    );
  }
}

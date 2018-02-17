import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Details from './Profiles/Details';
import MockData from '../../__tests__/MockData/MockData';

export default class App extends Component {
  constructor(props){
    super(props);
    this.name = props.name;
    this.state = { restaurantData: [] };
}

  render() {
    const restaurantDetails = this.props.navigation.state.params.restaurantData;
    return (
      <View style={styles.container}>
        <Details restaurantDetails={restaurantDetails} />
      </View>
    );
  }
}
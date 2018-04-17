import React, { Component } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import SearchBar from './Search/SearchBar';
import RestaurantProfile from './RestaurantProfile/RestaurantProfile';


export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                <Scene key="searchbar" component={SearchBar} title="SearchBar"/>
                <Scene key="restaurantprofile" component={RestaurantProfile} title="RestaurantProfile"/>
                </Stack>
            </Router>
        )
    }
}
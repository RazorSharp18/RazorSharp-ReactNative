import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import globals from '../globals';
import RestaurantsList from '../SuggestedRestaurantsList/RestaurantsList';
import SearchList from './SearchList';

export default class SearchBar extends React.Component {
  
  // Try putting this in Constructor.
  constructor(props){
    super(props);
    this.state = {
      data: [],
      searchData: [],
      autocompleteData: [],
      onLoadData: [],
      text: '',
      requestHeader: {  
        method: 'GET',
        headers: {
          'Authorization': 'Bearer 0DBI9WJvAoIoX0VgLQqvkfm_k1AWXBh9xB2BbpWs_N2dNhocRn12OPiaz5PrpC7t4N1MhgbbixFZX2YZQmZagtXgcKZs1TN5lvGMNFuW3oYmuC-kpyGOn-Wo5xyKWnYx'
        }
      }
    }; 
  }
  
  componentWillMount(){
    fetch('https://api.yelp.com/v3/businesses/search?location=Overland+Park', this.state.requestHeader)
    .then((onLoadSearchList) => onLoadSearchList.json())
    .then(function(onLoadSearchList) {
      this.setState({onLoadData: onLoadSearchList['businesses']});
      // this.props.navigation.navigate('Profile', {onLoadSearchList: onLoadSearchList});
    }.bind(this));
    
    navigator.geolocation.getCurrentPosition((position)=>{
      let latitude = parseFloat(position.coords.latitude);
      let longitude = parseFloat(position.coords.longitude);
      console.log("Latitude is "+ latitude);
      console.log("Longitude is "+ longitude);

      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBUHSjJGapw---3GdW-LyjhTk-gjt1W_m8`)
          .then((response)=> response.json())
          .then((cityName) => {
            this.setState({city: cityName.results[0].address_components[1].long_name});
            console.log(this.state.city);
          })
  })
  }
  
//   fetchData = async () => {
//     if(this.state.text == ''){
//     const response = await fetch('http://localhost:3001/restaurants/names')
//     .then((resp) => resp.json())
//     .then(function(resp) {
//       this.setState({data: resp});
//       this.setState({searchData: [].concat(this.state.data)})
//     }.bind(this));
//   }
// }

  TextChange = (textEntered) => {
    this.state.searchData = [];
    this.state.text = textEntered;
    if(textEntered != ""){
      /**
       * Gets the autocomplete suggestions from YELP as the user types in the search bar
       */
      fetch('https://api.yelp.com/v3/businesses/search?term='+textEntered+'&latitude=38.925755&longitude=-94.687183', this.state.requestHeader)
      .then((autoCompleteSuggestions) => autoCompleteSuggestions.json())
      .then(function(autoCompleteSuggestions) {
        console.log("before search"+this.state.searchData)
        this.setState({searchData: this.state.searchData.concat(autoCompleteSuggestions.businesses)});
        console.log("after search"+this.state.searchData)
      }.bind(this));

      /**
       * Searches for the keyword being typed in the search box. This is more accurate than autocomplete options.
       * If a restaurant is already in the autocomplete search data, this function checks and removes the duplicate
       * restaurant names
       */
      fetch('https://api.yelp.com/v3/autocomplete?text='+textEntered+'&latitude=38.925755&longitude=-94.687183', this.state.requestHeader)
      .then((searchSuggestions) => searchSuggestions.json())
      .then(function(searchSuggestions) {
        console.log("before autocomplete"+this.state.searchData)
        // searchSuggestions = Array.from(new Set(searchSuggestions))
        this.setState({searchData: Array.from(new Set(this.state.searchData.concat((searchSuggestions.businesses))))});
        console.log("before autocomplete"+this.state.searchData)
      }.bind(this));
    }
  }

  navigateToProfile = (name) => {
    fetch('http://localhost:3001/restaurant/'+name)
    .then((restaurantData) => restaurantData.json())
    .then(function(restaurantData) {
      this.props.navigation.navigate('Profile', {restaurantData: restaurantData});
    }.bind(this));
  }

  // _onPressItem = (index, title) => {
  //   this.navigateToProfile(title);
  // };

  render() { 
    return (
      <View style={styles.combine}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBarTextStyles}
            placeholder="Search"
            onFocus={this.fetchData}
            onChangeText={(enteredText) => {
              this.TextChange(enteredText);
            }}
          />
          <SearchList navigate={this.navigateToProfile} searchData={this.state.searchData} />
        </View>
        <View style={styles.suggestionsContainer}>
          <RestaurantsList data={this.state.onLoadData} onPressItem={this._onPressItem} />
        </View>
      </View>
    );
  }
}

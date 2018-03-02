import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import globals from '../globals';
import RestaurantsList from '../SuggestedRestaurantsList/RestaurantsList';
import SearchList from './SearchList';
import FixingIt from '../CustomErrors/DefaultError';

export default class SearchBar extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [],
      searchData: [],
      text: '',
      city: '',
      location: [],
      autocompleteData: [],
      onLoadData: [],
      text: '',
      encounteredError: false,
      requestHeader: {  
        method: 'GET',
        headers: {
          'Authorization': 'Bearer 0DBI9WJvAoIoX0VgLQqvkfm_k1AWXBh9xB2BbpWs_N2dNhocRn12OPiaz5PrpC7t4N1MhgbbixFZX2YZQmZagtXgcKZs1TN5lvGMNFuW3oYmuC-kpyGOn-Wo5xyKWnYx'
        }
      }
    }; 
  }
  
  //Wil be called before loading SearchBar component
  componentWillMount(){

    // A call to google maps api to get the city name.
    // Use the variable "city" to get the name of the city. (this.state.city)
    navigator.geolocation.getCurrentPosition((position)=>{
      let latitude = parseFloat(position.coords.latitude);
      let longitude = parseFloat(position.coords.longitude);
      this.setState({location: position});
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBUHSjJGapw---3GdW-LyjhTk-gjt1W_m8`)
          .then((response)=> response.json())
          .then((cityName) => {
            this.setState({city: cityName.results[0].address_components[1].long_name});
      }).catch(function(error) {
          console.log(error);
          this.setState({encounteredError: true});
      });
      

      //Gets the suggestions to the restaurants based on the users location on loading the searchBar Component
      fetch('https://api.yelp.com/v3/businesses/search?term=&latitude='+latitude+'&longitude='+longitude, this.state.requestHeader)
        .then((onLoadSearchList)=> onLoadSearchList.json())
        .then((onLoadSearchList) => {
          this.setState({onLoadData: onLoadSearchList['businesses']});
      }).catch(function(error) {
        console.log(error);
        this.setState({encounteredError: true});
    }); 
    }); 
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
    this.setState({searchData: []});
    this.setState({text: textEntered});
    if(textEntered != ""){
      //  Gets the autocomplete suggestions from YELP as the user types in the search bar
      fetch('https://api.yelp.com/v3/businesses/search?term='+textEntered+'&location='+this.state.city, this.state.requestHeader)
      .then((autoCompleteSuggestions) => autoCompleteSuggestions.json())
      .then((autoCompleteSuggestions)=> {
        this.setState({searchData: this.state.searchData.concat(autoCompleteSuggestions.businesses)});
      }).catch(function(error) {
        console.log(error);
        this.setState({encounteredError: true});
    });

      /**
       * Searches for the keyword being typed in the search box. This is more accurate than autocomplete options.
       * If a restaurant is already in the autocomplete search data, this function checks and removes the duplicate
       * restaurant names
       */
      fetch('https://api.yelp.com/v3/autocomplete?text='+textEntered+'&latitude='+this.state.location.coords.latitude+'&longitude='+this.state.location.coords.longitude, this.state.requestHeader)
      .then((searchSuggestions) => searchSuggestions.json())
      .then((searchSuggestions)=> {
        this.setState({searchData: Array.from(new Set(this.state.searchData.concat((searchSuggestions.businesses))))});
      }).catch(function(error) {
        console.log(error);
        this.setState({encounteredError: true});
    });
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

  searchContent = () => {
    if(this.state.text && this.state.text.length > 0) {
      // Some valid text in search box - Load Search List
      return (
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
      );
    } else {
      // No text in search box.
      return (
        <View style={styles.searchContainer}>
          <TextInput
              style={styles.searchBarTextStyles}
              placeholder="Search"
              onFocus={this.fetchData}
              onChangeText={(enteredText) => {
                this.TextChange(enteredText);
              }}
          />
        </View>
      );
    }
  }

  loadSuggestions = () => {
    if(this.state.text && this.state.text.length > 0 ){
      // if user is typing in search box, remove the default suggestions
      return null;
    } else {
      // if user is not typing in search box, display default suggestions list below.
      return (
        <View style={styles.suggestionsContainer}>
          <RestaurantsList data={this.state.onLoadData} onPressItem={this._onPressItem} />
        </View>
      );
    }
  }

  render() { 
    let content = null;
    if(this.state.encounteredError) {
      content = (<FixingIt />);
    } else {
      content = (
        <View style={styles.combine}>
          {this.searchContent()}
          {this.loadSuggestions()}
        </View>
      );
    }
    return (
      content
    );
  }
}

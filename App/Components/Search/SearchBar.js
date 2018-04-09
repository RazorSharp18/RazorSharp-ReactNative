import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity, AppState } from 'react-native';
import styles from './styles';
import globals from '../globals';
import RestaurantsList from '../SuggestedRestaurantsList/RestaurantsList';
import SearchList from './SearchList';
import FixingIt from '../CustomErrors/DefaultError';
import PushController from '../PushNotifications/PushController';
import PushNotification from 'react-native-push-notification';
import BgGeoLocationService from '../BackgroundServices/BgGeoLocationService';
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
          console.log("Error in getting geo-location",error);
          this.setState({encounteredError: true});
      });


      //Gets the suggestions to the restaurants based on the users location on loading the searchBar Component
      fetch('https://api.yelp.com/v3/businesses/search?term=&latitude='+latitude+'&longitude='+longitude+"&categories=restaurants", this.state.requestHeader)
        .then((onLoadSearchList)=> onLoadSearchList.json())
        .then((onLoadSearchList) => {
          this.setState({onLoadData: onLoadSearchList['businesses']});
      }).catch(function(error) {
        console.log("Error suggesting default restaurants",error);
        this.setState({encounteredError: true});
      });
    });
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
      if (appState === 'background') {
        console.log('App in background');
        PushNotification.localNotificationSchedule({
          message: "My notification message",
          date: new Date(Date.now() + (60 * 1000)) // in 60 sec, send a notification
        });
      }
  }

  TextChange = (textEntered) => {
    this.setState({searchData: []});
    this.setState({text: textEntered});
    if(textEntered != ""){
      //  Searched for restaurants from YELP API as the user types in the search bar
      fetch('https://api.yelp.com/v3/businesses/search?term='+textEntered+'&location='+this.state.city+"&categories=restaurants", this.state.requestHeader)
      .then((autoCompleteSuggestions) => autoCompleteSuggestions.json())
      .then((autoCompleteSuggestions)=> {
        this.setState({searchData: this.state.searchData.concat(autoCompleteSuggestions.businesses)});
      }).catch(function(error) {
        console.log("Error getting autocomplete suggestions",error);
        this.setState({encounteredError: true});
    });

      /**
       * Autocompletes or Searches for the keyword being typed in the search box.
       * If a restaurant is already in the autocomplete search data, this function checks and removes the duplicate
       * restaurant names
       */
      fetch('https://api.yelp.com/v3/autocomplete?text='+textEntered+'&latitude='+this.state.location.coords.latitude+'&longitude='+this.state.location.coords.longitude, this.state.requestHeader)
      .then((searchSuggestions) => searchSuggestions.json())
      .then((searchSuggestions)=> {
        this.setState({searchData: (this.state.searchData.concat(Array.from(new Set(searchSuggestions.businesses))))});
      }).catch(function(error) {
        console.log("Error searching based on words typed ",error);
        this.setState({encounteredError: true});
      });
    }
  }

  navigateToProfile = (restaurantId) => {
    this.props.navigation.navigate('Profile', {restaurantId: restaurantId});
  }

  _onPressItem = (index, restaurant) => {
    this.navigateToProfile(restaurant.id);
  };

  searchContent = () => {
    if(this.state.text && this.state.text.length > 0) {
      // Some valid text in search box - Load Search List
      //TODO-This returns similar views in if and else. See if we can break into a a component and reuse it.
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
          <SearchList navigate={this.navigateToProfile} searchData={this.state.searchData} location={this.state.location} onPressItem={this._onPressItem} />
        </View>
      );
    } else {
      // No text in search box. Displays only empty searchbox
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

  //Loads default list of restaurants on the home page based on user's location.
  loadSuggestions = () => {
    if(this.state.text && this.state.text.length > 0 ){
      // if user is typing in search box, remove the defaultly loaded suggestions
      return null;
    } else {
      // if user is not typing in search box, display load the default suggestions on home page.
      return (
        <View style={styles.suggestionsContainer}>
          <RestaurantsList data={this.state.onLoadData} location={this.state.location} onPressItem={this._onPressItem} />
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
          <PushController />
          <BgGeoLocationService />
        </View>
      );
    }
    return (
      content
    );
  }
}

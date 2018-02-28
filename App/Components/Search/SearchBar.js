import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import styles from '../Styles';
export default class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        searchData: [],
        text: '',
        city: ''
    }
  }

  fetchData = async () => {
    if(this.state.text === ''){
    await fetch('http://localhost:3001/restaurants/names')
        .then((resp) => resp.json())
    .then(function(resp) {
      this.setState({data: resp});
      this.setState({searchData: [].concat(this.state.data)})
    }.bind(this));
  }
}

  TextChange = (textEntered) => {
    this.state.searchData = [];
    this.state.text = textEntered;
    this.setState({searchData: this.state.data.filter(function(each){
      return ((each.name).toLowerCase()).includes(textEntered.toLowerCase());
    })
  })
}

navigateToProfile = (name) => {
  fetch('http://localhost:3001/restaurant/'+name)
  .then((restaurantData) => restaurantData.json())
  .then(function(restaurantData) {
    this.props.navigation.navigate('Profile', {restaurantData: restaurantData});
  }.bind(this));
}

//Before loading searchBar component, we are making a call to google maps api to get the city name.
// Use the variable "city" to get the name of the city. (this.state.city);
componentWillMount() {
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

  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.title}>Razor Sharp</Text>
      <TextInput
        style={styles.textStyles}
        placeholder="Search"
        onFocus={this.fetchData}
        onChangeText={(enteredText) => {
          this.TextChange(enteredText);
        }}

      />
      <FlatList  style={styles.FlatListStyles}
        data = {this.state.searchData}
        keyExtractor={(x,i) => i}
        renderItem= {
          ({item}) => <TouchableOpacity onPress={()=>this.navigateToProfile(`${item.name}`)}><Text style={styles.FlatListTextStyles}>{`${item.name}`}</Text></TouchableOpacity>
          }
        />
      </View>
    );
  }
}

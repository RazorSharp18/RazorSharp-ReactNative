import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import styles from '../Styles';
export default class SearchBar extends React.Component {
  
  // Try putting this in Constructor.
  state = {
    data: [],
    searchData: [],
    text: ''
  }; 

  fetchData = async () => {
    if(this.state.text == ''){
    const response = await fetch('http://localhost:3001/restaurants/names')
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

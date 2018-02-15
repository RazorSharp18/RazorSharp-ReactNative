import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    paddingTop: 50,
    paddingBottom: 15,
    fontSize: 25,
    alignSelf: 'stretch',
    textAlign: 'center',

  },
  textStyles: {
    height: 30,
    width: 300,
    backgroundColor: '#eef2f3',
    borderWidth: 2,
    borderColor: '#8e9eab',
    textDecorationColor: 'black',
    paddingLeft: 10,
    borderRadius: 4
  },
  FlatListStyles: {
    width: 290
  },
  FlatListTextStyles: {
      padding: 5,
      borderWidth: 1,
      borderColor: '#8e9eab'
  },
});

export default class SearchBar extends React.Component {
  state = {
    data: [],
    searchData: [],
    text: ''
  }

  fetchData = async () => {
    if(this.state.text == ''){
    const response = await fetch('http://localhost:3001/restaurants/names');
    const json = await response.json();
    this.setState({data: json});
    this.setState({searchData: [].concat(this.state.data)})
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

navigateToProfile = () => {
  this.props.navigation.navigate('Profile');
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
        renderItem= {({item}) => <TouchableOpacity onPress={this.navigateToProfile}><Text style={styles.FlatListTextStyles}>
                                    {`${item.name}`}
                                  </Text></TouchableOpacity>}
        />
      </View>
    );
  }
}

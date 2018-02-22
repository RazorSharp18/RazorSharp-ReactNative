import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  // Container for Search Bar.
  searchContainer: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch'
  },
  // Flat List border style for Search Bar.
  flatListStyles: {
    width: 290
  },
  // FlatList inside Text Styles for Search Bar.
  flatListTextStyles: {
      padding: 5,
      borderWidth: 1,
      borderColor: '#8e9eab'
  },
  // Search bar inner text styles.
  searchBarTextStyles: {
    backgroundColor: '#eef2f3',
    borderWidth: 1,
    borderColor: '#8e9eab',
    textDecorationColor: 'black',
    padding: 10,
  },
  suggestionsContainer: {
    flex: 4,
  },
  combine: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  detailsContainer: {
    flex: 1
  },
  ratings: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 14,
    color: '#656565'
  },
  distance: {
    fontSize: 14,
    color: '#656565'
  },
  suggestionsTitle: {
    fontSize: 16,
    color: '#656565'
  },
  restaurantImage: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});

export default styles;

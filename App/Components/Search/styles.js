import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  // Container for Search Bar.
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
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
    height: 30,
    width: 300,
    backgroundColor: '#eef2f3',
    borderWidth: 2,
    borderColor: '#8e9eab',
    textDecorationColor: 'black',
    paddingLeft: 10,
    borderRadius: 4
  },
});

export default styles;

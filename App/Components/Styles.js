import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container for Search Bar.
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  // Title for Search Bar.
  title: {
    paddingTop: 50,
    paddingBottom: 15,
    fontSize: 25,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  // Text inside Search Bar.
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
  // Flat List border style for Search Bar.
  FlatListStyles: {
    width: 290
  },
  // FlatList inside Text Styles for Search Bar.
  FlatListTextStyles: {
      padding: 5,
      borderWidth: 1,
      borderColor: '#8e9eab'
  },
  // Restaurant Details Container Styles.
  RestaurantDetailsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'auto',
    margin: 30,
    backgroundColor: '#eaf4f2',
  },
  // Locations Container.
  genericContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'auto',
    margin: 30,
    backgroundColor: '#eaf4f2',
  },
  // Generic Container Text Styles.
  genericContainerTextStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'auto',
  },
  // Generic Icons size.
  genericIconStyles: {
    locationIcon: {
      width: 20,
      height: 25,
      resizeMode: Image.resizeMode.contain,
    }
  },
  // Comments Container.
  commentsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'auto',
    marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
    marginBottom: 10,
    backgroundColor: '#d2d4d8',
    height: 120,
  },
  // Individual Comment Container.
  commentContainer: {
    flex:2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'auto',
  },
  // Header (Razor Sharp Header)
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20
  }
});

export default styles;

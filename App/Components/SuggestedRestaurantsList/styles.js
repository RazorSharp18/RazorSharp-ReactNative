import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  restaurantImage: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  detailsContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  Ratings: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 13,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 5
  },
  subDetails: {
    fontSize: 14,
    color: '#656565'
  },
  additionalDetails: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  additionalDetails2: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
});

export default styles;
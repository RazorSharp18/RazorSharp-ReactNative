import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Comments Container. Collection of Comments
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
  },
});

export default styles;

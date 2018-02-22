import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  // Generic Text Styles.
  genericTextStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 10
  },
  // Generic Icons size.
  genericIconStyles: {
      width: 20,
      height: 25,
      resizeMode: Image.resizeMode.contain,
  },
  // Header (Razor Sharp Header)
  genericHeader: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 10
  },
  // App Container for the entire app.
  appContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#eaf4f2',
  },
});

export default styles;

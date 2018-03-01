import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class DefaultError extends React.Component {
  render() {
    return(
      <View style={styles.ErrorContainer}>
        <Text style={styles.text}>We are fixing it. Please come back in short time.</Text>
      </View>
    )
  }
}
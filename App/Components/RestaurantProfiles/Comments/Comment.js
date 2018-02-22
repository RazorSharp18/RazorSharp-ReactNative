import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import globals from '../../globals';

export default class Comment extends React.Component {
  render() {
    return(
      <View style={styles.commentContainer}>
        <Image style={globals.genericIconStyles} source={require('../../../Assets/UserIcon.png')} />
        <Text style={globals.genericTextStyles}> {this.props.comment} </Text>
      </View>
    );
  }
}

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from '../../Styles';

export default class Comment extends React.Component {
  render() {
    return(
      <View style={styles.commentContainer}>
        <Image style={styles.genericIconStyles} source={require('../../../Assets/UserIcon.png')} />
        <Text style={styles.genericContainerTextStyles}> {this.props.comment} </Text>
      </View>
    );
  }
}

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Comment extends React.Component {
  render() {
    return(
      <View style={styles.commentContainer}>
        <Image style={styles.userIcon} source={require('./UserIcon.png')} />
        <Text style={styles.comment}> {this.props.comment} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 20,
    alignSelf: 'auto',
  },
  comment: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  commentContainer: {
    flex:2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'auto',
  },
  userIcon: {
    width: 20,
    height: 25,
    resizeMode: Image.resizeMode.contain,
  }
})

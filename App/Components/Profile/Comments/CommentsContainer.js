import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Comment from './Comment';

export default class Comments extends React.Component {
  render() {
    return(
      <View style={styles.commentsContainer} key="Comments-ScrollView">
        <ScrollView alwaysBounceVertical>
          {
            this.props.Comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'auto',
    margin: 20
  },
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
})

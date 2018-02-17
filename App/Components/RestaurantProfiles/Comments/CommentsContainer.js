import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Comment from './Comment';
import Styles from '../../Styles';

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

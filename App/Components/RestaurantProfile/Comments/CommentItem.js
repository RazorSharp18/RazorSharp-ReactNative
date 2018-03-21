import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import Styles from "./CommentsStyles";

export default class CommentItem extends React.Component {
    render() {
        return(
            <View style={Styles.CommentItemContainer}>
                <Text style={Styles.CommentItem}>{this.props.CommentText}</Text>
            </View>
        );
    }
}
import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import Styles from "./CommentsStyles";
import CommentItem from "./CommentItem";

export default class CommentsList extends React.Component {

    render() {

        let commentsList = [];
        let totalComments = this.props.restaurantReviews.length;

        for (let i=0; i < totalComments; i++){
            commentsList.push(
                <CommentItem key={i} CommentText={this.props.restaurantReviews[i].text}/>
            );
        }

        return(
            <View style={Styles.CommentsContainer}>
                {commentsList}
            </View>
        );
    }
}
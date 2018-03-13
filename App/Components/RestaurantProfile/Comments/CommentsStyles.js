import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    CommentsContainer: {
        flex: 0.8,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    CommentItem: {
        fontSize: 17,
        margin: 10
    },
    CommentsTitle: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10
    },
    CommentItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#A9A9A9'
    }
});

export default Styles;
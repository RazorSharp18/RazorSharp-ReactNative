import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    ContainerStyle: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    HeaderImage: {
        flex: 0.2,
        resizeMode: 'contain'
    },
    SecondaryContainer: {
        flex: 0.8
    },
    RestaurantName: {
        fontSize: 25
    }
});

export default Styles;
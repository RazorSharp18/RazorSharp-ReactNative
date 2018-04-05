import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    ContainerStyle: {
        backgroundColor: '#3063A5',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    HeaderImage: {
        height: 100,
        width: 150,
        resizeMode: 'cover',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 5
    },
    SecondaryContainer: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 5
    },
    RestaurantName: {
        fontSize: 28,
        color: 'white',
        fontWeight: '900',
        flex: 1,
        alignItems: 'center'
    },
    SecondaryTextStyles: {
        fontSize: 21,
        color: 'white',
        marginVertical: 2
    }
});

export default Styles;
import React from 'react';
import { Text, View, Image } from 'react-native';
import Styles from "./HeaderStyles";

export default class Header extends React.Component {
    render() {
        return(
            <View style={Styles.ContainerStyle}>
                {this.props.restaurantImage ? <Image style={Styles.HeaderImage} source={{uri: this.props.restaurantImage}} /> : null}
                <View style={Styles.SecondaryContainer}>
                <Text style={Styles.RestaurantName} numberOfLines={2}>{this.props.restaurantName}</Text>
                <Text numberOfLines={2}>{this.props.restaurantAddress}</Text>
                <Text>Phone: {this.props.restaurantPhone}</Text>
                <Text>Rating: {this.props.restaurantRating}</Text>
                </View>
            </View>
        );
    }
}
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
                    <Text style={Styles.SecondaryTextStyles}>Rating: {this.props.restaurantRating}</Text>
                    <Text numberOfLines={2} style={Styles.SecondaryTextStyles}>{this.props.restaurantAddress}</Text>
                    <Text style={Styles.SecondaryTextStyles}>{this.props.restaurantPhone}</Text>
                </View>
            </View>
        );
    }
}
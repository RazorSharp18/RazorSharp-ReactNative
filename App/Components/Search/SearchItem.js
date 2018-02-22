import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

class SearchItem extends React.Component {
  render() {
    // TODO: Create navigate(name) prop inside SearchBar
    let item;
    distance = '5m';
    ratings = '5';
    const image = require('../../Assets/mcDonalds.png');

    if( this.props.item != undefined){
      if (this.props.item.hasOwnProperty('image_url')) {
        item = (
          <View style={styles.rowContainer}>        
            <Image style={styles.restaurantImage} source={{uri: this.props.item.image_url}} />
            <View  style={styles.detailsContainer}>
              <Text style={styles.title} numberOfLines={1}>{`${this.props.item.name}`}</Text>
              <Text style={styles.ratings} numberOfLines={1}>{`${this.props.item.rating}`}</Text>
              <Text style={styles.distance} numberOfLines={1}>{`${this.props.item.price}`}</Text>
            </View>
          </View>
        );
      } else {
          item = (
            <View style={styles.rowContainer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.suggestionsTitle} numberOfLines={1}>{`${this.props.item.name}`}</Text>
              </View>
            </View>
          );
      }
  }
    return (
      <TouchableOpacity 
        onPress={()=>this.props.navigate(`${this.props.item.name}`)}>
        <View>
          {item}
        </View>
      </TouchableOpacity>
    );
  }
}

export default SearchItem;
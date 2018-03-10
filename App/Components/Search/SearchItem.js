import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import geolib from 'geolib';
import styles from './styles';

const noImage = require('../../Assets/notFound.jpg');
class SearchItem extends React.Component {

  _onPress = () => {
    this.props.onPressItem(this.props.index, this.props.item);
  }

  render() {
    // TODO: Create navigate(name) prop inside SearchBar
    let item;
    ratings = '5';
    distance = null;
    if( this.props.item != undefined){
      if (this.props.item.hasOwnProperty('image_url')) {
        console.log(this.props.item);
        console.log(this.props.location);
        if(this.props.item.coordinates.latitude && this.props.item.coordinates.longitude) {
          distance = geolib.getDistance({latitude: this.props.location.coords.latitude, longitude: this.props.location.coords.longitude}, {latitude: this.props.item.coordinates.latitude, longitude: this.props.item.coordinates.longitude });
          console.log(geolib.convertUnit('mi', distance, 2));
        }
        const flexSubDetailsStyle = this.props.item.price ? styles.additionalDetails : styles.additionalDetails2
        item = (
          <View style={styles.rowContainer}>        
            {this.props.item.image_url ? <Image style={styles.restaurantImage} source={{uri: this.props.item.image_url}} /> : <Image style={styles.restaurantImage} source={noImage} />}
            <View  style={styles.detailsContainer}>
              <Text style={styles.title} numberOfLines={1}>{`${this.props.item.name}`}</Text>
              <Text style={styles.ratings} numberOfLines={1}>{`${this.props.item.rating}`}</Text>
              <View style={flexSubDetailsStyle}>
                {this.props.item.price ? <Text style={styles.subDetails} numberOfLines={1}>{`${this.props.item.price}`} </Text> : null}
                {distance ? <Text style={styles.subDetails} numberOfLines={1}>{`${geolib.convertUnit('mi', distance, 2)} Miles`}</Text> : null}
              </View>
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
        onPress={this._onPress}>
        <View>
          {item}
        </View>
      </TouchableOpacity>
    );
  }
}

export default SearchItem;
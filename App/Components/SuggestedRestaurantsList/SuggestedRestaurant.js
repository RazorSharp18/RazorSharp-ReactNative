import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import styles from './styles';

export default class SuggestedRestaurant extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index, this.props.item);
  }

  render() {
    const item = this.props.item;
    if(this.props.item.coordinates.latitude && this.props.item.coordinates.longitude) {
      distance = geolib.getDistance({latitude: this.props.location.coords.latitude, longitude: this.props.location.coords.longitude}, {latitude: this.props.item.coordinates.latitude, longitude: this.props.item.coordinates.longitude });
    }

    const flexSubDetailsStyle = this.props.item.price ? styles.additionalDetails : styles.additionalDetails2
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.restaurantImage} source={{uri: item.image_url}} />
            <View style={styles.detailsContainer}>
              <Text style={styles.Ratings}>{item.rating}</Text>
              <Text style={styles.title}
                numberOfLines={1}>{item.name}</Text>
              <View style={flexSubDetailsStyle}>
                {this.props.item.price ? <Text style={styles.subDetails} numberOfLines={1}>{`${this.props.item.price}`} </Text> : null}
                {distance ? <Text style={styles.subDetails} numberOfLines={1}>{`${geolib.convertUnit('mi', distance, 2)} Miles`}</Text> : null}
              </View>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
  );
}
}
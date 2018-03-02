import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import styles from './styles';

export default class SuggestedRestaurant extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index, this.props.item);
  }

  render() {
    const item = this.props.item;
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
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
  );
}
}
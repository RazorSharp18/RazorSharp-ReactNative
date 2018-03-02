import React from 'react';
import { FlatList, ListItem } from 'react-native';
import SuggestedRestaurant from './SuggestedRestaurant';
class RestaurantsList extends React.PureComponent {
  render() {
    const data = this.props.data;
    return (
      <FlatList
        data={data}
        renderItem={
          ({item, index}) => <SuggestedRestaurant
          item={item}
          key={index}
          index={index}
          onPressItem={this.props.onPressItem}
        />
        }
      />
    );
  }
}

export default RestaurantsList;

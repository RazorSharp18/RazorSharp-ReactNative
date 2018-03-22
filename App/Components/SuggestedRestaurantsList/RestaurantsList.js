import React from 'react';
import { FlatList, ListItem } from 'react-native';
import SuggestedRestaurant from './SuggestedRestaurant';

/**
 * When the user types in the search box, this component is loaded as flat list.
 */
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
          location={this.props.location} 
          onPressItem={this.props.onPressItem}
        />
        }
      />
    );
  }
}

export default RestaurantsList;

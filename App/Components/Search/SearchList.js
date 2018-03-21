import React from 'react';
import { FlatList } from 'react-native';
import SearchItem from './SearchItem';

class SearchList extends React.Component {
  render() {
    return (
      <FlatList 
        data={this.props.searchData}
        keyExtractor={(x,i) => i}
        renderItem={
          ({item, index}) => <SearchItem item={item} 
          key={index}
          index={index} 
          searched={true} 
          onPressItem={this.props.onPressItem} />
        }
      />
    );
  }
}

export default SearchList;
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
          ({item, index}) => <SearchItem item={item} searched={true} navigate={this.props.navigate} />
        }
      />
    );
  }
}

export default SearchList;
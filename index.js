import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './App/Components/App';
import SearchBar from './App/Components/Search/SearchBar';

const Navigation = StackNavigator({
  Home: {
    screen: App
  },
  Profile: {
    screen: App
  }
})

AppRegistry.registerComponent('RazorSharp', () => Navigation);

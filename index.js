import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './App';
import SearchBar from './homePage/SearchBar';

const Navigation = StackNavigator({
  Home: {
    screen: SearchBar
  },
  Profile: {
    screen: App
  }
})

AppRegistry.registerComponent('RazorSharp', () => Navigation);

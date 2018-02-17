import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './Components/App';
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

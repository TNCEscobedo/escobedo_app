import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from "./src/Dashboard";
import Markets from './src/Markets';
const AppNavigator = createStackNavigator({
  Markets: {
    screen: Markets
  },
  Dashboard: {
    screen: Dashboard,
  },
});

export default createAppContainer(AppNavigator);
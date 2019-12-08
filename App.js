import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from "./src/Dashboard";
import Markets from './src/Markets';
import Debts from "./src/Debts";
import Pay from "./src/Pay";

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Login: {
    screen: Pay
  },
  Pay: {
    screen: Pay
  },
  Debts: {
    screen: Debts
  },
  Markets: {
    screen: Markets
  }
});

export default createAppContainer(AppNavigator);
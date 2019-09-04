import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ActiveScreen from '../screens/ActiveScreen';
import CompleteScreen from '../screens/CompleteScreen';
import ToDoFormScreen from '../screens/ToDoFormScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'All',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-menu'
          : 'md-menu'
      }
    />
  ),
};

HomeStack.path = '';

const ActiveStack = createStackNavigator(
  {
    Active: ActiveScreen,
  },
  config
);

ActiveStack.navigationOptions = {
  tabBarLabel: 'Acitve',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-code-working' : 'md-code-working'} />
  ),
};

ActiveStack.path = '';

const CompleteStack = createStackNavigator(
  {
    Settings: CompleteScreen,
  },
  config
);

CompleteStack.navigationOptions = {
  tabBarLabel: 'Completed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} />
  ),
};

CompleteStack.path = '';

const FormStack = createStackNavigator(
  {
    Form: ToDoFormScreen,
  },
  config
);

FormStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};

FormStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ActiveStack,
  CompleteStack,
  FormStack
});

tabNavigator.path = '';


export default tabNavigator;

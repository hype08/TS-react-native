import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Center} from './Center';
import {Text} from 'react-native';
import {HomeStack} from './HomeStack';
import {AppParamList} from './AppParamList';

interface appTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function Search() {
  return (
    <Center>
      <Text>search</Text>
    </Center>
  );
}

export const AppTabs: React.FC<appTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

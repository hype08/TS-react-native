import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppParamList} from './AppParamList';
import {Center} from './Center';
import {Text} from 'react-native';

interface appTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function Home() {
  return (
    <Center>
      <Text>home</Text>
    </Center>
  );
}

function Search() {
  return (
    <Center>
      <Text>search</Text>
    </Center>
  );
}

export const AppTabs: React.FC<appTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

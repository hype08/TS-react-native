import React, {useContext} from 'react';
import Icon from 'react-native-ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppParamList} from './AppTabs/AppParamList';
import {Center} from '../shared/Center';
import {Text, Button} from 'react-native';
import {AuthContext} from '../../shared/AuthProvider';

interface appTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function Home() {
  const {logout} = useContext(AuthContext);
  return (
    <Center>
      <Text>home</Text>
      <Button title="logout" onPress={() => logout()} />
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
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

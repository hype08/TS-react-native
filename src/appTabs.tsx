import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

interface appTabsProps {}

const Tabs = createBottomTabNavigator();

export const appTabs: React.FC<appTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen />
    </Tabs.Navigator>
  );
};

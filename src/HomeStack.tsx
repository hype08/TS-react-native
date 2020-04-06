import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Center} from './Center';
import {Text, TouchableOpacity} from 'react-native';
import {AuthContext} from './AuthProvider';
interface HomeStackProps {}

const Stack = createStackNavigator();

function Feed() {
  return (
    <Center>
      <Text>Feed</Text>
    </Center>
  );
}
export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const {logout} = React.useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

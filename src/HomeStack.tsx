import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Center} from './Center';
import {Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {AuthContext} from './AuthProvider';
import faker from 'faker';

interface HomeStackProps {}

const Stack = createStackNavigator();

function Feed() {
  return (
    <Center>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flex: 1}}
        renderItem={({item}) => {
          return <Button title={item} onPress={() => {}} />;
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
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

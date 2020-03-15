import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {Center} from './Center';
interface RoutesProps {}

const Stack = createStackNavigator();

function Login() {
  return (
    <Center>
      <Text>Login Screen</Text>
    </Center>
  );
}

function Register() {
  return (
    <Center>
      <Text>Register Screen</Text>
    </Center>
  );
}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

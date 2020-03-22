import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text, Button} from 'react-native';
import {Center} from './Center';
import {AuthParamList, AuthNavProps} from './AuthParamList';
interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({navigation, route}: AuthNavProps<'Login'>) {
  return (
    <Center>
      <Text>{route.name}</Text>
      <Text>Login Screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
}

function Register({navigation, route}: AuthNavProps<'Register'>) {
  return (
    <Center>
      <Text>{route.name}</Text>
      <Text>Register Screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerTitle: 'Sign in'}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerTitle: 'Sign up'}}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AuthParamList>();
import {AuthParamList, AuthNavProps} from './AuthStack/AuthParamList';
import {AuthContext} from '../../shared/AuthProvider';
import {Center} from '../shared/Center';
import {Button, Text} from 'react-native';
interface AuthStackProps {}

function Login({navigation, route}: AuthNavProps<'Login'>) {
  const {login} = React.useContext(AuthContext);
  return (
    <Center>
      <Button
        title="log me in"
        onPress={() => {
          login();
        }}
      />
      <Text>{route.name}</Text>
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

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
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
  );
};

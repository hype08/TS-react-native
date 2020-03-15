import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text, Button} from 'react-native';
import {Center} from './Center';
import {AuthParamList} from './AuthParamList';
interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, 'Login'>;
}) {
  return (
    <Center>
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

function Register({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, 'Register'>;
}) {
  return (
    <Center>
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
          options={{headerTitle: 'Register'}}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

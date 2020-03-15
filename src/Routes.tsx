import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text, Button} from 'react-native';
import {Center} from './Center';
interface RoutesProps {}

const Stack = createStackNavigator();

function Login({navigation}) {
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

function Register({navigation}) {
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
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Register"
          options={{header: () => null}}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

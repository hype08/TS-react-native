import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AsyncStorage, Text, Button, ActivityIndicator} from 'react-native';
import {Center} from './Center';
import {AuthParamList, AuthNavProps} from './AuthParamList';
import {useEffect, useState, useContext} from 'react';
import {AuthContext} from './AuthProvider';
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
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  // check if user is logged in
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
        } else {
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <Center>
          <Text>User exists</Text>
        </Center>
      ) : (
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
      )}
    </NavigationContainer>
  );
};

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text, Button, ActivityIndicator, AsyncStorage} from 'react-native';
import {Center} from './Center';
import {AuthParamList, AuthNavProps} from './AuthParamList';
import {useEffect, useState, useContext} from 'react';
import {AuthContext} from './AuthProvider';
import {AppTabs} from './appTabs';
interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({navigation, route}: AuthNavProps<'Login'>) {
  const {login} = useContext(AuthContext);
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

export const Routes: React.FC<RoutesProps> = ({}) => {
  const {user, login} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  // check if user is logged in
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          // login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [login]);

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
        <AppTabs />
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

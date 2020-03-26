import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, AsyncStorage} from 'react-native';
import {Center} from './Center';
import {useEffect, useState, useContext} from 'react';
import {AuthContext} from './AuthProvider';
import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';
interface RoutesProps {}

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
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

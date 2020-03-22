import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';

export const AuthContext = React.createContext({});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<{username: string} | null>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = {username: 'Bob'};
          setUser(fakeUser);
          AsyncStorage.setItem('user', JSON.stringify(fakeUser));
        },
        logout: () => {
          AsyncStorage.removeItem('user');
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

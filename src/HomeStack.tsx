/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useState, useRef, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Center} from './Center';
import {Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {AuthContext} from './AuthProvider';
import faker from 'faker';
import {HomeParamList, HomeStackNavProps} from './HomeParamList';

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Feed({navigation}: HomeStackNavProps<'Feed'>) {
  return (
    <Center>
      <FlatList
        style={{width: '100%'}}
        contentContainerStyle={{flex: 1}}
        renderItem={({item}) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate('Product', {
                  name: item,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}

function Product({route, navigation}: HomeStackNavProps<'Product'>) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit this product"
        onPress={() =>
          navigation.navigate('EditProduct', {
            name: route.params.name,
          })
        }
      />
    </Center>
  );
}

function apiCall(x: any) {
  return x;
}

function EditProduct({route, navigation}: HomeStackNavProps<'EditProduct'>) {
  const [formState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({submit});
  }, [navigation]);

  return (
    <Center>
      <Text>Editing {route.params.name}..</Text>
    </Center>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const {logout} = React.useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        options={({route}) => ({
          headerTitle: `${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // submit form
              }}
              style={{paddingRight: 8}}>
              <Text style={{color: 'red'}}>Done</Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: `${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />
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

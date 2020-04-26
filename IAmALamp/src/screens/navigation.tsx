import React from 'react';
import { RootState } from '../reducers';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Navbar from '../components/Navbar';

export default () => {
  const Stack = createStackNavigator();

  const loggedUser = useSelector<RootState>(({ user }) => user.loggedUser);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            return (
              options.headerShown && <Navbar onBackPress={navigation.goBack} />
            );
          },
        }}>
        {loggedUser ? (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: true }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
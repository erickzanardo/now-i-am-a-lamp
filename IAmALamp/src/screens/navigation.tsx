import React from 'react';
import { RootState } from '../reducers';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Selection from './Selection';
import Navbar from '../components/Navbar';
import ForgotPassword from './ForgotPassword';

interface Props {
  loggedUser?: string;
  thing?: string;
}

export default () => {
  const Stack = createStackNavigator();

  const { loggedUser, thing } = useSelector<RootState, Props>(
    ({ user }) => user,
  );
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
            {thing ? (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Selection" component={Selection} />
              </>
            ) : (
              <>
                <Stack.Screen name="Selection" component={Selection} />
                <Stack.Screen name="Home" component={Home} />
              </>
            )}
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: true }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

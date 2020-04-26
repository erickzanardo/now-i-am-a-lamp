/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Navbar from './src/components/Navbar';
declare const global: { HermesInternal: null | {} };

const App = () => {
  const Stack = createStackNavigator();

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: ({ scene, previous, navigation }) => {
                const { options } = scene.descriptor;
                return (
                  options.headerShown && (
                    <Navbar onBackPress={navigation.goBack} />
                  )
                );
              },
            }}>
            {isLoggedIn ? (
              <>
                <Stack.Screen name="Home" component={Home} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login">
                  {(props) => (
                    <Login {...props} onLogin={() => setLoggedIn(true)} />
                  )}
                </Stack.Screen>
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{ headerShown: true }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

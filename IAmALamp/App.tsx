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
declare const global: { HermesInternal: null | {} };

const App = () => {
  const Stack = createStackNavigator();

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {isLoggedIn ? (
              <>
                <Stack.Screen name="Home" component={Home} />
              </>
            ) : (
              <Stack.Screen name="Login">
                {(props) => (
                  <Login {...props} onLogin={() => setLoggedIn(true)} />
                )}
              </Stack.Screen>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

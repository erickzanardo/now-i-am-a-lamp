/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import 'react-native-gesture-handler';

import Navigator from './src/screens/navigation';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  );
};

export default App;

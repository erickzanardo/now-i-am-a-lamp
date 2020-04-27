/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import 'react-native-gesture-handler';

import Navigator from './src/screens/navigation';
import { db } from './firebase';

declare const global: { HermesInternal: null | {} };

const App = () => {
  useEffect(() => {
    // test firebase - delete after completion
    console.log("firebase config test")
    db.collection("user").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
  })

  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  );
};

export default App;

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
import {SafeAreaView, Text, View, Image} from 'react-native';

import lamp from './lamp.png';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaView>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>Agora eu sou um abajur, Yayyyyyyyyy!!!</Text>
        <Image source={lamp} />
      </View>
    </SafeAreaView>
  );
};

export default App;

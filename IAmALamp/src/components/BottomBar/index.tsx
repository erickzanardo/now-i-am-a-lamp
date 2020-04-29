import React from 'react';
import { View } from 'react-native';

import { NavigationProp, DrawerActions } from '@react-navigation/native';

import styles from './styles';
import Button from './Button';

interface Props {
  navigation: NavigationProp<any>;
}

const Navigator = ({ navigation }: Props) => {
  return (
    <View style={[styles.container]}>
      <Button title="Home" iconName="home" isFocused onPress={() => {}} />
      <Button title="Tags" iconName="tags" onPress={() => {}} />
      <Button
        title="Options"
        iconName="options"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};

export default Navigator;

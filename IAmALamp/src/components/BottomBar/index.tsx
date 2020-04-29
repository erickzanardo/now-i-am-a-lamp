import React from 'react';
import { View } from 'react-native';

import { NavigationProp, DrawerActions } from '@react-navigation/native';

import styles from './styles';
import Button from './Button';

interface Props {
  navigation: NavigationProp<any>;
}

const BottomBar = ({ navigation }: Props) => {
  return (
    <View style={[styles.container]}>
      <Button
        title="Feed"
        iconName="feed"
        isFocused
        onPress={() => navigation.navigate('Feed')}
      />
      <Button
        title="Tags"
        iconName="tags"
        onPress={() => navigation.navigate('Tag')}
      />
      <Button
        title="Options"
        iconName="options"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};

export default BottomBar;

import React from 'react';
import { Text, View } from 'react-native';

import Avatar from '../Avatar';
import styles from './styles';

interface Props {
  label: string;
  avatarUrl: string;
}

export default ({ label, avatarUrl }: Props) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Avatar image={avatarUrl} size={120} />
      <Text style={styles.label}>{label}</Text>
    </View>
  </View>
);

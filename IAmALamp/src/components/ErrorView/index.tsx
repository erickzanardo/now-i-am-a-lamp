import React from 'react';

import { Image, Text, View } from 'react-native';

import styles from './styles';

import spookyGhost from '../../../assets/images/spooky-ghost.png';

interface Props {
  label: string;
}

export default ({ label }: Props) => (
  <View style={styles.wrapper}>
    <View style={[styles.container, styles.view]}>
      <View style={[styles.view, styles.circle]}>
        <Image source={spookyGhost} />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>BUUH - {label}</Text>
      </View>
    </View>
  </View>
);

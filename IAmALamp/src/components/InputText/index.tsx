import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './style';
import theme from '../theme';

interface Props {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label?: string;
  icon?: Component;
}

export default ({ value, onChangeText, placeholder, label, icon }: Props) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <View style={styles.wrapper}>
      {icon && (
        <View style={styles.iconWrapper}>
          {icon}
        </View>
      )}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray}
      />
    </View>
  </View>
);

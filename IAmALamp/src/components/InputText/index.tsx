import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './style';
import theme from '../theme';

interface Props {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label?: string;
  icon?: Element;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  maxLength?: number;
  secureTextEntry?: boolean;
  onSubmitEditing?: () => void;
}

export default ({ 
  value,
  onChangeText,
  placeholder,
  label,
  icon,
  autoCapitalize,
  maxLength,
  secureTextEntry,
  onSubmitEditing,
}: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.wrapper}>
      {icon}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  </View>
);

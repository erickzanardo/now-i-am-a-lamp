import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  label: string;
}

export default ({ onPress, label }: Props) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  </View>
);

import React from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Oi</Text>
    </View>
  );
};

export default Home;

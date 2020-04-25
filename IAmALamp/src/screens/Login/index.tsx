import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";

interface Props {
  onLogin: () => void;
}
const Login = ({ onLogin }: Props) => {
  return (
    <View>
      <Button onPress={onLogin} label="Vai" />
    </View>
  );
};

export default Login;

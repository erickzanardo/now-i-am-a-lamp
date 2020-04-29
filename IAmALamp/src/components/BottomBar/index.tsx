import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native";
import Home from "../../screens/Home";
import Login from "../../screens/Login";

import Icons from "./icons";
import styles from "./styles";
import theme from "../theme";

enum Name {
  Home = "home",
  Tags = "tag",
  Options = "options"
}

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Login"
      tabBarOptions={{
        activeTintColor: theme.colors.black,
        inactiveTintColor: theme.colors.white,
        style: styles.container
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Image
              source={Icons["home"]}
              style={{
                tintColor: color
              }}
            />
          )
        })}
      />
      <Tab.Screen
        name="Tags"
        component={Login}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Image
              source={Icons["tag"]}
              style={{
                tintColor: color
              }}
            />
          )
        })}
      />
      <Tab.Screen
        name="Options"
        component={Login}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Image
              source={Icons["options"]}
              style={{
                tintColor: color
              }}
            />
          )
        })}
      />
    </Tab.Navigator>
  );
};

export default Navigator;

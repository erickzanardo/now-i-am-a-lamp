import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions
} from "@react-navigation/drawer";
import { NavigationProp } from "@react-navigation/native";

import Home from "../../screens/Home";

import Icons from "./icons";
import Content from "./content";
import logo from "../../../assets/images/lamp-logo.png";

import Bottom from "../BottomBar";

import styles from "./styles";

const CustomDrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image source={logo} />
      </View>
      <View style={styles.drawerItemWrapper}>
        <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
          <Image source={Icons["about"]} />
          <Text style={styles.drawerItemText}>{Content["about"]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
          <Image source={Icons["logout"]} />
          <Text style={styles.drawerItemText}>{Content["logout"]}</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
interface Props {
  navigation: NavigationProp<any>;
}

const DrawerNavigation = ({ navigation }: Props) => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        drawerPosition="right"
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
      <Bottom navigation={navigation} />
    </>
  );
};

export default DrawerNavigation;

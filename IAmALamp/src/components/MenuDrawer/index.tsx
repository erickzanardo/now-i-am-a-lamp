import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../../screens/Home";
import Login from "../../screens/Login";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

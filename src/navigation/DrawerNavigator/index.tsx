import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import { TabNavigator } from "../TabNavigator";

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={"Home"} component={TabNavigator} />
    </Drawer.Navigator>
  );
}

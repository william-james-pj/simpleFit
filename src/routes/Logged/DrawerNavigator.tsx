import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";

import * as Stack from "./StackNavigator";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Stack.HomeStack} />
    </Drawer.Navigator>
  );
}

function Feed() {
  return <View></View>;
}

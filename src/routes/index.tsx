import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./Logged/DrawerNavigator";

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  );
}

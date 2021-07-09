import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Logged } from "./Logged";

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Logged />
      </NavigationContainer>
    </View>
  );
}

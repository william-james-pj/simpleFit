import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "../../navigation/TabNavigator";

import * as S from "./styles";

export function InApp() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

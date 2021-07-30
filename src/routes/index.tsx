import React, { useRef } from "react";
import { View } from "react-native";

import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { DrawerNavigator } from "./Logged/DrawerNavigator";

import { useCurrentScreen } from "../hooks/useScreen";

export function Routes() {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const { toggleScreen } = useCurrentScreen();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={() => {
          const screen = navigationRef.current?.getCurrentRoute()?.name;
          toggleScreen(screen || "Clock");
        }}
      >
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  );
}

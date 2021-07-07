import React from "react";

import { View } from "react-native";

import { InApp } from "./InApp";

export function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <InApp />
    </View>
  );
}

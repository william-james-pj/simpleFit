import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { Home } from "../../screens/Home";
import { Clock } from "../../screens/Clock";
import { Calendar } from "../../screens/Calendar";
import { User } from "../../screens/User";

const screenOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function HomeStack() {
  return (
    <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function ClockStack() {
  return (
    <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
      <Stack.Screen name="Clock" component={Clock} />
    </Stack.Navigator>
  );
}

export function CalendarStack() {
  return (
    <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
}

export function UserStack() {
  return (
    <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

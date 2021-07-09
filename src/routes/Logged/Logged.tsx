import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Home } from "../../screens/Home";
import { SpecificGoal } from "../../screens/SpecificGoal";

import { Clock } from "../../screens/Clock";
import { Calendar } from "../../screens/Calendar";
import { User } from "../../screens/User";
import * as Interfaces from "../../utils/Interfaces";

const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

const Stack = createStackNavigator<Interfaces.RootStackParamList>();

export function HomeStack() {
  return (
    <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SpecificGoal" component={SpecificGoal} />
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

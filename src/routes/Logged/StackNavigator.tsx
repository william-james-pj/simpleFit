import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { TabNavigation } from "./TabNavigator";
import { SpecificGoal } from "../../screens/SpecificGoal";
import { ExerciseGoal } from "../../screens/ExerciseGoal";

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
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="SpecificGoal" component={SpecificGoal} />
      <Stack.Screen name="ExerciseGoal" component={ExerciseGoal} />
    </Stack.Navigator>
  );
}

import React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Goals } from "../../screens/Goals";
import { GoalsSpecific } from "../../screens/GoalsSpecific";
import { GoalsExercise } from "../../screens/GoalsExercise";

import { RootStackParamList } from "../../@types/types";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
      <Stack.Screen name="Goals" component={Goals} />
      <Stack.Screen name="GoalsSpecific" component={GoalsSpecific} />
      <Stack.Screen name="GoalsExercise" component={GoalsExercise} />
    </Stack.Navigator>
  );
}

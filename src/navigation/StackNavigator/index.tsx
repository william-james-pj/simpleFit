import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { Home } from "../../screens/Home";
import { Clock } from "../../screens/Clock";
import { Calendar } from "../../screens/Calendar";
import { User } from "../../screens/User";

import * as S from "./styles";

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#FFF",
  },
  headerTintColor: "#000",
  headerTitle: "Simple Fit",
  headerRight: () => (
    <S.ModeButtonView>
      <S.ModeIcon name="moon" size={25} color={"red"} />
    </S.ModeButtonView>
  ),
  headerLeft: () => (
    <S.MenuButtonView>
      <S.ModeIcon name="menu" size={30} color={"red"} />
    </S.MenuButtonView>
  ),
};

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}

export function ClockNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={"Clock"}
        component={Clock}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}

export function CalendarNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={"Calendar"}
        component={Calendar}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}

export function UserNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={"User"}
        component={User}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}

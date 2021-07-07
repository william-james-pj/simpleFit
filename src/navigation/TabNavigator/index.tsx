import React from "react";
import { StyleSheet } from "react-native";

import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { FontAwesome5 } from "@expo/vector-icons";
import { IconTabBar } from "../../components/IconTabBar";

import * as Stack from "../StackNavigator";

import * as S from "./styles";

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.barBottom,
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Stack.HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="home" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={"Clock"}
        component={Stack.ClockNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="clock" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={"ActionButton"}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <S.TouchableOpacity>
              <S.ActionButtonView>
                <FontAwesome5 name="plus" size={25} color={"white"} />
              </S.ActionButtonView>
            </S.TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name={"Calendar"}
        component={Stack.CalendarNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="calendar-alt" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={"User"}
        component={Stack.UserNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="user-alt" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function EmptyScreen() {
  return <S.ActionView></S.ActionView>;
}

const styles = StyleSheet.create({
  barBottom: {
    position: "absolute",
    bottom: 0,
    marginHorizontal: 0,
    height: 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
});

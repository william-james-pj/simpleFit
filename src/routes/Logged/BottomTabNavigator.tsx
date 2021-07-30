import React from "react";

import { StyleSheet, View } from "react-native";
import { useTheme } from "styled-components";

import { IconTabBar } from "./IconTabBar";

import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { StackNavigator } from "./StackNavigator";
import { Clock } from "../../screens/Clock";
import { Calendar } from "../../screens/Calendar";
import { User } from "../../screens/User";
import { FloatingButton } from "./FloatingButton";

export function BottomTabNavigator() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    navigatorContainer: {
      backgroundColor: `transparent`,
      height: 150,

      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    navigator: {
      position: "absolute",
      borderTopWidth: 0,
      backgroundColor: "transparent",
      elevation: 30,
      height: 60,
    },
  });

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      tabBarOptions={{
        showLabel: false,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: `${theme.colors.header}`,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Clock"
        component={Clock}
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
          tabBarButton: (props) => (
            <FloatingButton bgColor={theme.colors.header} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="calendar-alt" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
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
  return <View></View>;
}

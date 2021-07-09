import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { FontAwesome5 } from "@expo/vector-icons";
import { IconTabBar } from "../../components/IconTabBar";

import * as Stack from "./Logged";

import * as S from "./styles";

export function Logged() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    barBottom: {
      position: "absolute",
      bottom: 0,
      marginHorizontal: 0,
      height: 60,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingHorizontal: 20,
      backgroundColor: `${theme.colors.header}`,

      shadowColor: `${theme.colors.shadow}`,
      shadowOpacity: 0.06,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
  });

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.barBottom,
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Stack.HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="home" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={"Clock"}
        component={Stack.ClockStack}
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
        component={Stack.CalendarStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTabBar icon="calendar-alt" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={"User"}
        component={Stack.UserStack}
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

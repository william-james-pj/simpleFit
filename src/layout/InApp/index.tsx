import React from "react";
import { StyleSheet } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { FontAwesome5 } from "@expo/vector-icons";

import { IconTabBar } from "../../components/IconTabBar";

import { Home } from "../../screens/Home";
import { Clock } from "../../screens/Clock";
import { Calendar } from "../../screens/Calendar";
import { User } from "../../screens/User";

import * as S from "./styles";

export function InApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: styles.barBottom,
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconTabBar icon="home" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name={"Clock"}
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
          component={Calendar}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconTabBar icon="calendar-alt" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name={"User"}
          component={User}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconTabBar icon="user-alt" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function EmptyScreen() {
  return <S.ActionView></S.ActionView>;
}

const styles = StyleSheet.create({
  barBottom: {
    position: "absolute",
    bottom: 20,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 20,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
});

import React from "react";

import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import themes from "./src/styles/themes";

import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";

import { Layout } from "./src/layout";

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme === "light" ? themes.light : themes.dark;

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

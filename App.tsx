import React from "react";
import { Provider } from "react-redux";

import { ColorModeContext } from "./src/contexts/ColorModeContext";

import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";
import store from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ColorModeContext>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ColorModeContext>
  );
}

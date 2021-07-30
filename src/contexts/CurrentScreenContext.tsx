import React, { createContext, ReactNode, useState } from "react";

type CurrentScreenType = {
  screen: string;
  toggleScreen: (newScreen: string) => void;
};

type CurrentScreenProviderProps = {
  children: ReactNode;
};

export const ScreenContext = createContext({} as CurrentScreenType);

export function ScreenProvider(props: CurrentScreenProviderProps) {
  const [screen, setScreen] = useState("Goals");

  const toggleScreen = (newScreen: string) => {
    setScreen(newScreen);
  };

  return (
    <ScreenContext.Provider value={{ screen, toggleScreen }}>
      {props.children}
    </ScreenContext.Provider>
  );
}

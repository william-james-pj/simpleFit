import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";

import * as Interfaces from "../../utils/Interfaces";
import { Title, Wrapper } from "./styles";

type ClockProps = DrawerScreenProps<Interfaces.RootStackParamList, "Clock">;

export function Clock({ navigation }: ClockProps) {
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <Wrapper>
        <Title>Clock</Title>
      </Wrapper>
    </>
  );
}

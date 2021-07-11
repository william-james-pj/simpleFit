import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";

import * as Interfaces from "../../utils/Interfaces";
import { Title, Wrapper } from "./styles";

type CalendarProps = DrawerScreenProps<
  Interfaces.RootStackParamList,
  "Calendar"
>;

export function Calendar({ navigation }: CalendarProps) {
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <Wrapper>
        <Title>Calendar</Title>
      </Wrapper>
    </>
  );
}

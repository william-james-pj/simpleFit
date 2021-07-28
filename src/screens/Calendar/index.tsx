import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";

import { RootStackParamList } from "../../@types/types";
import * as S from "./styles";

type CalendarProps = DrawerScreenProps<RootStackParamList, "Calendar">;

export function Calendar({ navigation }: CalendarProps) {
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.Title>Calendar</S.Title>
      </S.Wrapper>
    </>
  );
}

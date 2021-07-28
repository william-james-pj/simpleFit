import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";

import { RootStackParamList } from "../../@types/types";
import * as S from "./styles";

type ClockProps = DrawerScreenProps<RootStackParamList, "Clock">;

export function Clock({ navigation }: ClockProps) {
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.Title>Clock</S.Title>
      </S.Wrapper>
    </>
  );
}

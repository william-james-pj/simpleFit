import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";

import { RootStackParamList } from "../../@types/types";
import * as S from "./styles";

type UserProps = DrawerScreenProps<RootStackParamList, "User">;

export function User({ navigation }: UserProps) {
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.Title>User</S.Title>
      </S.Wrapper>
    </>
  );
}

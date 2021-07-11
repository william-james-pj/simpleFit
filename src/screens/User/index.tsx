import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";

import * as Interfaces from "../../utils/Interfaces";
import { Title, Wrapper } from "./styles";

type UserProps = DrawerScreenProps<Interfaces.RootStackParamList, "User">;

export function User({ navigation }: UserProps) {
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <Wrapper>
        <Title>User</Title>
      </Wrapper>
    </>
  );
}

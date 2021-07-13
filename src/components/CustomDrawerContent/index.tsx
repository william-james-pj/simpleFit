import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

export function CustomDrawerContent({}: DrawerContentComponentProps) {
  return (
    <S.ViewContainer style={{ flex: 1 }}>
      <S.ViewHeader>
        <S.ViewAvatar>
          <S.FontAwesome name={"user-alt"} size={60} />
        </S.ViewAvatar>
        <S.TextName>User</S.TextName>
        <S.ViewButtonProfile>
          <RectButton
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <S.TextButton>{`Configurações de perfil`}</S.TextButton>
          </RectButton>
        </S.ViewButtonProfile>
      </S.ViewHeader>
      <S.ViewContent></S.ViewContent>
      <S.ViewFooter>
        <S.ViewButtonFooter>
          <RectButton
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <S.TextButton>{`Sair`}</S.TextButton>
          </RectButton>
        </S.ViewButtonFooter>
      </S.ViewFooter>
    </S.ViewContainer>
  );
}

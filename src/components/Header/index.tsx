import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { IconColorMode } from "../IconColorMode";

import * as S from "./styles";

interface HeaderProps {
  back?: boolean;
}

export function Header({ back = false }: HeaderProps) {
  const navigation = useNavigation();

  function clickGoBack() {
    navigation.goBack();
  }

  function openMenu() {}

  return (
    <S.ViewContainer>
      <RectButton onPress={back ? clickGoBack : openMenu}>
        {back ? (
          <S.FontAwesome name={"arrow-left"} size={24} />
        ) : (
          <S.Icon name={"menu"} size={30} />
        )}
      </RectButton>
      <S.Title>Simple Fit</S.Title>
      <IconColorMode />
    </S.ViewContainer>
  );
}

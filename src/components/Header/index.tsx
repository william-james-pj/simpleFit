import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { IconColorMode } from "../IconColorMode";

import * as S from "./styles";

interface HeaderProps {
  back?: boolean;
  openDrawer?: () => void;
}

export function Header({ openDrawer = () => {}, back = false }: HeaderProps) {
  const usenavigation = useNavigation();

  function clickGoBack() {
    usenavigation.goBack();
  }

  function openMenu() {
    openDrawer();
  }

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

import React from "react";

import { IconColorMode } from "../IconColorMode";

import * as S from "./styles";

export function Header() {
  return (
    <S.ViewContainer>
      <S.TouchableOpacity>
        <S.Icon name={"menu"} size={30} />
      </S.TouchableOpacity>
      <S.Title>Simple Fit</S.Title>
      <IconColorMode />
    </S.ViewContainer>
  );
}

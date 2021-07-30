import React from "react";

import * as S from "./styles";

interface IMessageProps {
  title: string;
  text: string;
  active: boolean;
}

export function Message({ title, text, active }: IMessageProps) {
  return (
    <S.ViewContainer active={active} style={!active ? ShadowStyled : {}}>
      <S.ViewText>
        <S.Text active={active}>{text}</S.Text>
        <S.Title>{title}</S.Title>
      </S.ViewText>
      <S.ViewIcon>
        <S.Icon active={active} name="bell-alt" size={25} color="black" />
      </S.ViewIcon>
    </S.ViewContainer>
  );
}

const ShadowStyled = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

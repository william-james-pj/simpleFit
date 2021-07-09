import React from "react";

import * as S from "./styles";

interface IMessageProps {
  title: string;
}

export function Message({ title }: IMessageProps) {
  return (
    <S.ViewContainer style={ShadowStyled}>
      <S.ViewText>
        <S.Text>Let's go, User!</S.Text>
        <S.Title>{title}</S.Title>
      </S.ViewText>
      <S.ViewIcon>
        <S.Icon name="bell-alt" size={25} color="black" />
      </S.ViewIcon>
    </S.ViewContainer>
  );
}

const ShadowStyled = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 7,
};

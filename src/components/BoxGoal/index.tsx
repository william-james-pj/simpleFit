import React from "react";

import * as S from "./styles";

import { IIntem } from "../../screens/Home";

interface BoxGoalProps {
  item: IIntem;
}

export function BoxGoal(item: BoxGoalProps) {
  return (
    <S.ViewContainer>
      <S.ViewHeader>
        <S.Title>{item.item.title}</S.Title>
      </S.ViewHeader>
      <S.ViewContent>
        <S.Text>{item.item.text}</S.Text>
      </S.ViewContent>
      <S.ViewFooter>
        <S.Number>{`${item.item.currentGoal}/${item.item.goal}`}</S.Number>
      </S.ViewFooter>
    </S.ViewContainer>
  );
}

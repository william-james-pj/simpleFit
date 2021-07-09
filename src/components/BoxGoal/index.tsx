import React from "react";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

import { IIntem } from "../../screens/Home";

interface BoxGoalProps {
  item: IIntem;
  click: () => void;
}

export function BoxGoal({ item, click }: BoxGoalProps) {
  return (
    <S.ViewContainer>
      <RectButton onPress={click}>
        <S.ViewHeader>
          <S.Title>{item.title}</S.Title>
        </S.ViewHeader>
        <S.ViewContent>
          <S.Text>{item.text}</S.Text>
        </S.ViewContent>
        <S.ViewFooter>
          <S.Number>{`${item.currentGoal}/${item.goal}`}</S.Number>
        </S.ViewFooter>
      </RectButton>
    </S.ViewContainer>
  );
}

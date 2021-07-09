import React from "react";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

import * as Interfaces from "../../utils/Interfaces";

interface BoxGoalProps {
  item?: Interfaces.IItem;
  goals?: Interfaces.IItemGoals;
  click: () => void;
}

export function BoxGoal({ item, goals, click }: BoxGoalProps) {
  return (
    <S.ViewContainer>
      <RectButton onPress={click}>
        <S.ViewHeader>
          <S.Title>{item?.title || goals?.title}</S.Title>
        </S.ViewHeader>
        <S.ViewContent>
          <S.Text>{item?.text || goals?.text}</S.Text>
        </S.ViewContent>
        <S.ViewFooter>
          <S.Number>{`${item?.currentGoal || goals?.currentGoal}/${
            item?.totalGoal || goals?.totalGoal
          }`}</S.Number>
        </S.ViewFooter>
      </RectButton>
    </S.ViewContainer>
  );
}

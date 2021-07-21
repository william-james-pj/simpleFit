import React from "react";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

import * as Interfaces from "../../utils/Interfaces";

interface BoxExerciseGoalProps {
  exercise: Interfaces.IItemExerciseGoals;
  click: () => void;
}

export function BoxExerciseGoal({ exercise, click }: BoxExerciseGoalProps) {
  return (
    <S.ViewContainer>
      <RectButton onPress={click}>
        <S.ViewHeader>
          <S.Title>{exercise.title}</S.Title>
        </S.ViewHeader>
        <S.ViewContent>
          <S.Text>{exercise.text}</S.Text>
        </S.ViewContent>
      </RectButton>
    </S.ViewContainer>
  );
}

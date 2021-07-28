import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { IItemExerciseGoals } from "../../../@types/types";

import * as S from "./styles";

interface BoxExerciseGoalProps {
  exercise: IItemExerciseGoals;
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

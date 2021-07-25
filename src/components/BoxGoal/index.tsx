import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";

import { useGoalsDispatch } from "../../hooks/useGoals";
import { updateGoals } from "../../store/goals";

import * as I from "../../utils/Interfaces";

import * as S from "./styles";

interface BoxGoalProps {
  goals: I.IItemGoals;
  click: () => void;
}

export function BoxGoal({ goals, click }: BoxGoalProps) {
  const dispatch = useGoalsDispatch();

  const [titleInput, setTitleInput] = useState(goals.title);
  const [textInput, setTextInput] = useState(goals.text);

  const handleTitleUpdate = () => {
    goals.title = titleInput;
    dispatch(updateGoals(goals));
  };

  const handleTextUpdate = () => {
    goals.text = textInput;
    dispatch(updateGoals(goals));
  };

  function countFinishingGoals(item?: I.IItemGoals) {
    return item?.elements?.reduce(
      (accumulator, currentValue) =>
        Object.values(currentValue).some((element) => element === true)
          ? ++accumulator
          : accumulator,
      0
    );
  }

  return (
    <S.ViewContainer>
      <RectButton onPress={click}>
        <S.ViewHeader>
          <S.InputTitle
            underlineColorAndroid="transparent"
            value={titleInput}
            onChangeText={(text) => setTitleInput(text)}
            onEndEditing={handleTitleUpdate}
          />
        </S.ViewHeader>
        <S.ViewContent>
          <S.InputText
            underlineColorAndroid="transparent"
            multiline
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
            onEndEditing={handleTextUpdate}
          />
        </S.ViewContent>
        <S.ViewFooter>
          <S.Number>{`${countFinishingGoals(goals)}/${
            goals.elements?.length
          }`}</S.Number>
        </S.ViewFooter>
      </RectButton>
    </S.ViewContainer>
  );
}

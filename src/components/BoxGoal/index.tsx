import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";

import * as I from "../../utils/Interfaces";

import * as S from "./styles";

interface BoxGoalProps {
  specificGoals?: I.IItemSpecificGoals;
  goals?: I.IItemGoals;
  click: () => void;
}

export function BoxGoal({ specificGoals, goals, click }: BoxGoalProps) {
  const [titleInput, setTitleInput] = useState(
    specificGoals?.title || goals?.title
  );
  const [textInput, setTextInput] = useState(
    specificGoals?.text || goals?.text
  );

  function countFinishingSpecific(item?: I.IItemSpecificGoals) {
    return item?.elements?.reduce(
      (accumulator, currentValue) =>
        Object.values(currentValue).some((element) => element === true)
          ? ++accumulator
          : accumulator,
      0
    );
  }

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
          />
        </S.ViewHeader>
        <S.ViewContent>
          <S.InputText
            underlineColorAndroid="transparent"
            multiline
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
          />
        </S.ViewContent>
        <S.ViewFooter>
          <S.Number>{`${
            specificGoals
              ? countFinishingSpecific(specificGoals)
              : countFinishingGoals(goals)
          }/${
            specificGoals?.elements?.length || goals?.elements?.length
          }`}</S.Number>
        </S.ViewFooter>
      </RectButton>
    </S.ViewContainer>
  );
}

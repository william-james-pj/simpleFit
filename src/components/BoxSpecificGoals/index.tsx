import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";

// import { useGoalsDispatch } from "../../hooks/useGoals";
// import {} from "../../store/goals";

import * as I from "../../utils/Interfaces";

import * as S from "../BoxGoal/styles";

interface BoxGoalProps {
  specificGoals: I.IItemSpecificGoals;
  click: () => void;
}

export function BoxSpecificGoal({ specificGoals, click }: BoxGoalProps) {
  // const dispatch = useGoalsDispatch();

  const [titleInput, setTitleInput] = useState(specificGoals?.title);
  const [textInput, setTextInput] = useState(specificGoals?.text);

  function countFinishingSpecific(item: I.IItemSpecificGoals) {
    return item.elements?.reduce(
      (accumulator, currentValue) =>
        Object.values(currentValue).some((element) => element === true)
          ? ++accumulator
          : accumulator,
      0
    );
  }

  const handleTitleUpdate = () => {
    specificGoals.title = titleInput;
  };

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
          />
        </S.ViewContent>
        <S.ViewFooter>
          <S.Number>{`${countFinishingSpecific(specificGoals)}/${
            specificGoals.elements?.length
          }`}</S.Number>
        </S.ViewFooter>
      </RectButton>
    </S.ViewContainer>
  );
}

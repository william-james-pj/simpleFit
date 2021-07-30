import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";

// import { useGoalsDispatch } from "../../hooks/useGoals";
// import {} from "../../store/goals";

import { IItemSpecificGoals } from "../../../@types/types";

import * as S from "../../Goals/BoxGoal/styles";

interface BoxGoalProps {
  specificGoals: IItemSpecificGoals;
  click: () => void;
}

export function BoxSpecificGoal({ specificGoals, click }: BoxGoalProps) {
  // const dispatch = useGoalsDispatch();

  const [titleInput, setTitleInput] = useState(specificGoals?.title);
  const [textInput, setTextInput] = useState(specificGoals?.text);

  function countFinishingSpecific(item: IItemSpecificGoals) {
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
          <S.Number>{`${countFinishingSpecific(specificGoals) || 0}/${
            specificGoals.elements?.length || 0
          }`}</S.Number>
        </S.ViewFooter>
      </RectButton>
    </S.ViewContainer>
  );
}

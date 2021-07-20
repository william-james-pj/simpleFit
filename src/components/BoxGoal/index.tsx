import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

import * as Interfaces from "../../utils/Interfaces";

interface BoxGoalProps {
  item?: Interfaces.IItem;
  goals?: Interfaces.IItemGoals;
  click: () => void;
}

export function BoxGoal({ item, goals, click }: BoxGoalProps) {
  const [titleInput, setTitleInput] = useState(item?.title || goals?.title);
  const [textInput, setTextInput] = useState(item?.text || goals?.text);

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
          <S.Number>{`${item?.currentGoal || goals?.currentGoal}/${
            item?.goals?.length || goals?.exercises?.length
          }`}</S.Number>
        </S.ViewFooter>
      </RectButton>
    </S.ViewContainer>
  );
}

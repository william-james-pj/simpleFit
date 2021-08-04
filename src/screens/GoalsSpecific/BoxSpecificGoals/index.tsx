import React, { useState } from "react";
import {
  RectButton,
  LongPressGestureHandler,
  State,
} from "react-native-gesture-handler";

import { Modal } from "react-native";
import { ModalDelete } from "../../../components/ModalDelete";

import { useGoalsDispatch } from "../../../hooks/useGoals";
import { removeSpecificGoals } from "../../../store/goals";

import { IItemSpecificGoals } from "../../../@types/types";

import * as S from "../../Goals/BoxGoal/styles";

interface BoxGoalProps {
  specificGoals: IItemSpecificGoals;
  click: () => void;
}

export function BoxSpecificGoal({ specificGoals, click }: BoxGoalProps) {
  const dispatch = useGoalsDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [titleInput, setTitleInput] = useState(specificGoals?.title);
  const [textInput, setTextInput] = useState(specificGoals?.text);

  const handleTitleUpdate = () => {
    specificGoals.title = titleInput;
  };

  const handleModalVisible = () => {
    setModalVisible(false);
  };

  const handleDelete = () => {
    dispatch(removeSpecificGoals(specificGoals.id));
  };

  function countFinishingSpecific(item: IItemSpecificGoals) {
    return item.elements?.reduce(
      (accumulator, currentValue) =>
        Object.values(currentValue).some((element) => element === true)
          ? ++accumulator
          : accumulator,
      0
    );
  }

  return (
    <S.ViewContainer>
      <LongPressGestureHandler
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            setModalVisible(!modalVisible);
          }
        }}
        minDurationMs={800}
      >
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
      </LongPressGestureHandler>
      <Modal visible={modalVisible} transparent={true}>
        <ModalDelete cancel={handleModalVisible} handleDelete={handleDelete} />
      </Modal>
    </S.ViewContainer>
  );
}

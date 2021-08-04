import React, { useState } from "react";
import {
  RectButton,
  LongPressGestureHandler,
  State,
} from "react-native-gesture-handler";

import { Modal } from "react-native";
import { ModalDelete } from "../../../components/ModalDelete";

import { useGoalsDispatch } from "../../../hooks/useGoals";
import { updateGoals, removeGoals } from "../../../store/goals";

import { IItemGoals } from "../../../@types/types";

import * as S from "./styles";

interface BoxGoalProps {
  goals: IItemGoals;
  click: () => void;
}

export function BoxGoal({ goals, click }: BoxGoalProps) {
  const dispatch = useGoalsDispatch();

  const [modalVisible, setModalVisible] = useState(false);
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

  const handleModalVisible = () => {
    setModalVisible(false);
  };

  const handleDelete = () => {
    dispatch(removeGoals(goals.id));
  };

  function countFinishingGoals(item?: IItemGoals) {
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
              onEndEditing={handleTextUpdate}
            />
          </S.ViewContent>
          <S.ViewFooter>
            <S.Number>{`${countFinishingGoals(goals) || 0}/${
              goals.elements?.length || 0
            }`}</S.Number>
          </S.ViewFooter>
        </RectButton>
      </LongPressGestureHandler>
      <Modal visible={modalVisible} transparent={true} animationType={"slide"}>
        <ModalDelete cancel={handleModalVisible} handleDelete={handleDelete} />
      </Modal>
    </S.ViewContainer>
  );
}

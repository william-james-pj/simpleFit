import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { BoxSpecificGoal } from "./BoxSpecificGoals";
import { Message } from "../../components/Message";

import {
  GoalsSpecificRouteProp,
  IItemExerciseGoals,
  IItemSpecificGoals,
} from "../../@types/types";

import * as S from "./styles";
import { useGoalsSelector } from "../../hooks/useGoals";

export function GoalsSpecific() {
  const flatList = useRef<FlatList<IItemSpecificGoals>>(null);
  const goalsState = useGoalsSelector((state) => state.goals);

  const navigation = useNavigation<GoalsSpecificRouteProp>();

  function handleGo(exercises: IItemExerciseGoals[], title: string) {
    navigation.navigate("GoalsExercise", { exercises, title });
  }

  const renderRows = ({ item }: { item: IItemSpecificGoals }) => {
    return (
      <BoxSpecificGoal
        click={() => handleGo(item.elements || [], item.title)}
        specificGoals={item}
      />
    );
  };

  return (
    <>
      <Header back />
      <S.Wrapper>
        <Message
          title={goalsState.dataSelected.title}
          text={`Let's go, User!`}
          active={true}
        />
        <S.FlatListS
          ref={flatList}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={goalsState.dataSelected.elements}
          renderItem={renderRows}
          keyExtractor={(item) => `${item.id}`}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
          onContentSizeChange={() => {
            if (goalsState.newGoal) {
              flatList.current?.scrollToEnd({ animated: true });
            }
          }}
        />
      </S.Wrapper>
    </>
  );
}

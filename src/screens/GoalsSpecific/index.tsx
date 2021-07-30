import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import { useScrollPosition } from "../../hooks/useScrollPosition";

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
  const goalsState = useGoalsSelector((state) => state.goals.dataSelected);

  const [activeHeader, getScrollPosition] = useScrollPosition();
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
          title={goalsState.title}
          text={`Let's go, User!`}
          active={activeHeader}
        />
        <S.FlatListS
          ref={flatList}
          onScroll={(event) => {
            getScrollPosition(event);
          }}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={goalsState.elements}
          renderItem={renderRows}
          keyExtractor={(item) => `${item.id}`}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
          onContentSizeChange={() =>
            flatList.current?.scrollToEnd({ animated: true })
          }
        />
      </S.Wrapper>
    </>
  );
}

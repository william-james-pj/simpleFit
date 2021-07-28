import React from "react";
import { RouteProp } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Message } from "../../components/Message";
import { BoxExerciseGoal } from "./BoxExerciseGoal";
import { useScrollPosition } from "../../hooks/useScrollPosition";

import { IItemExerciseGoals, RootStackParamList } from "../../@types/types";

import * as S from "./styles";

type GoalsExerciseProps = {
  route: RouteProp<RootStackParamList, "GoalsExercise">;
};

type RenderRowsObject = {
  item: IItemExerciseGoals;
};

export function GoalsExercise({ route }: GoalsExerciseProps) {
  const [activeHeader, getScrollPosition] = useScrollPosition();
  const { exercises, title } = route.params;

  const renderRows = ({ item }: RenderRowsObject) => {
    return <BoxExerciseGoal click={() => {}} exercise={item} />;
  };

  return (
    <>
      <Header back />
      <S.Wrapper>
        <Message title={title} text={`Let's go, User!`} active={activeHeader} />
        <S.FlatListS
          onScroll={(event) => {
            getScrollPosition(event);
          }}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={exercises}
          renderItem={renderRows}
          keyExtractor={(item, index) => `${item.title}+${index}`}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
        />
      </S.Wrapper>
    </>
  );
}

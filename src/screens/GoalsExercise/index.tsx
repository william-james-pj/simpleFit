import React from "react";
import { RouteProp } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Message } from "../../components/Message";
import { BoxExerciseGoal } from "./BoxExerciseGoal";

import { IItemExerciseGoals, RootStackParamList } from "../../@types/types";

import * as S from "./styles";

type GoalsExerciseProps = {
  route: RouteProp<RootStackParamList, "GoalsExercise">;
};

type RenderRowsObject = {
  item: IItemExerciseGoals;
};

export function GoalsExercise({ route }: GoalsExerciseProps) {
  const { exercises, title } = route.params;

  const renderRows = ({ item }: RenderRowsObject) => {
    return <BoxExerciseGoal click={() => {}} exercise={item} />;
  };

  return (
    <>
      <Header back />
      <S.Wrapper>
        <Message title={title} text={`Let's go, User!`} active={true} />
        <S.FlatListS
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

import React from "react";
import { RouteProp } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Message } from "../../components/Message";
import { BoxExerciseGoal } from "../../components/BoxExerciseGoal";
import * as Interfaces from "../../utils/Interfaces";

import * as S from "./styles";

type Props = {
  route: RouteProp<Interfaces.RootStackParamList, "ExerciseGoal">;
};

export function ExerciseGoal({ route }: Props) {
  const { exercises, title } = route.params;

  const renderRows = (item: Interfaces.IObjetoItemItemExercise) => {
    return <BoxExerciseGoal click={() => {}} exercise={item.item} />;
  };

  return (
    <>
      <Header back />
      <S.Wrapper>
        <S.FlatListS
          ListHeaderComponent={<Message title={title} />}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={exercises}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          renderItem={renderRows}
          keyExtractor={(item, index) => `${item.title}+${index}`}
        />
      </S.Wrapper>
    </>
  );
}

import React from "react";
import { RouteProp } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { BoxGoal } from "../../components/BoxGoal";
import { Message } from "../../components/Message";
import * as Interfaces from "../../utils/Interfaces";

import * as S from "./styles";

type Props = {
  route: RouteProp<Interfaces.RootStackParamList, "SpecificGoal">;
};

export function SpecificGoal({ route }: Props) {
  const { goals, title } = route.params;

  const renderRows = (item: Interfaces.IObjetoItemGoals) => {
    return <BoxGoal click={() => {}} goals={item.item} />;
  };

  return (
    <>
      <Header back />
      <S.Wrapper>
        <S.FlatListS
          ListHeaderComponent={<Message title={title} />}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={goals}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          renderItem={renderRows}
          keyExtractor={(item, index) => `${item.title}+${index}`}
        />
      </S.Wrapper>
    </>
  );
}

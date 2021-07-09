import React, { ReactElement } from "react";
import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { Message } from "../../components/Message";
import { BoxGoal } from "../../components/BoxGoal";

import * as S from "./styles";

export interface IIntem {
  id: string;
  title: string;
  text: string;
  currentGoal: number;
  goal: number;
}

interface IObjetoIntem {
  item: IIntem;
}

export function Home() {
  const renderRestaurantRows = (item: IObjetoIntem) => {
    return <BoxGoal item={item.item} />;
  };
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.FlatListS
          ListHeaderComponent={<Message />}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={DATA}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          renderItem={renderRestaurantRows}
          keyExtractor={(item, index) => item.id}
        />
      </S.Wrapper>
    </>
  );
}

const DATA: IIntem[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Treino",
    text: "Testando contador de caracterespara ter noção em quanto limitar no card do meu mais novo aplicativo.",
    currentGoal: 2,
    goal: 4,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Leitura",
    text: "Testando contador de caracterespara ter noção em quanto limitar no card do meu mais novo aplicativo.",
    currentGoal: 5,
    goal: 10,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
    title: "Ingles",
    text: "Testando contador de caracterespara ter noção em quanto limitar no card do meu mais novo aplicativo.",
    currentGoal: 2,
    goal: 6,
  },
];
